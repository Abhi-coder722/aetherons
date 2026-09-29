import { randomUUID } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import { de } from '../src/i18n/de.ts';
import { en } from '../src/i18n/en.ts';
import { tr } from '../src/i18n/tr.ts';
import {
  errorMax,
  normalizeInquiry,
  validateInquiry,
  type InquiryErrors,
  type InquiryLocale,
} from '../src/lib/validation.ts';
import type { ServerConfig } from './config.ts';
import { buildInquiryMail, type MailTransport } from './mail.ts';
import { RateLimiter } from './ratelimit.ts';
import { parseHeadersFile, serveStatic, type HeaderRule } from './static.ts';

const messages = { de, en, tr };
const MAX_BODY = 32 * 1024;
const HONEYPOTS = ['hp', '_honey', '_gotcha'];
const HOME: Record<InquiryLocale, string> = { de: '/', tr: '/tr/', en: '/en/' };
const CONTACT: Record<InquiryLocale, string> = {
  de: '/kontakt/',
  tr: '/tr/iletisim/',
  en: '/en/contact/',
};

export interface AppDeps {
  config: ServerConfig;
  /** null = Zustellung nicht konfiguriert → Formular antwortet ehrlich mit 503. */
  transport: MailTransport | null;
  now?: () => number;
  log?: (entry: Record<string, unknown>) => void;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function readBody(req: IncomingMessage): Promise<string> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    size += (chunk as Buffer).length;
    if (size > MAX_BODY) throw new HttpError(413, 'payload_too_large');
    chunks.push(chunk as Buffer);
  }
  return Buffer.concat(chunks).toString('utf8');
}

function parseBody(contentType: string, raw: string): Record<string, unknown> {
  if (contentType.startsWith('application/json')) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
    } catch {
      /* fällt unten in den Fehler */
    }
    throw new HttpError(400, 'invalid_json');
  }
  if (contentType.startsWith('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(raw));
  }
  throw new HttpError(415, 'unsupported_media_type');
}

function resultPage(locale: InquiryLocale, kind: 'success' | 'invalid' | 'failure' | 'limited') {
  const m = messages[locale];
  const s = m.form.server;
  const title =
    kind === 'success' ? s.successTitle : kind === 'invalid' ? s.invalidTitle : s.failureTitle;
  const text =
    kind === 'success'
      ? s.successText
      : kind === 'invalid'
        ? s.invalidText
        : kind === 'limited'
          ? s.rateLimitedText
          : s.failureText;
  const link = kind === 'success' ? [HOME[locale], s.home] : [CONTACT[locale], s.back];
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)} | aetheron</title>
<style>body{font:18px/1.6 system-ui,sans-serif;max-width:36rem;margin:12vh auto;padding:0 1.25rem;color:#0e0b24}a{color:#2e49d6}h1{font-size:1.6rem}</style></head>
<body><main><h1>${esc(title)}</h1><p>${esc(text)}</p><p><a href="${link[0]}">${esc(link[1]!)}</a></p></main></body></html>`;
}

export async function createHandler(deps: AppDeps) {
  const { config, transport } = deps;
  const now = deps.now ?? Date.now;
  const log = deps.log ?? ((e) => console.log(JSON.stringify(e)));
  const limiter = new RateLimiter(config.rateLimitMax, config.rateLimitWindowMs, now);
  const root = path.resolve(config.distDir);
  let rules: HeaderRule[] = [];
  try {
    rules = parseHeadersFile(await readFile(path.join(root, '_headers'), 'utf8'));
  } catch {
    /* ohne _headers: keine zusätzlichen Header */
  }

  const clientIp = (req: IncomingMessage) => {
    if (config.trustProxy) {
      const xff = req.headers['x-forwarded-for'];
      const first = (Array.isArray(xff) ? xff[0] : xff)?.split(',')[0]?.trim();
      if (first) return first;
    }
    return req.socket.remoteAddress ?? 'unknown';
  };

  const originAllowed = (req: IncomingMessage) => {
    const origin = req.headers.origin;
    const source = origin ?? (req.headers.referer ? new URL(req.headers.referer).origin : '');
    if (!source) return false;
    return config.allowedOrigins.includes(source.replace(/\/+$/, ''));
  };

  const json = (
    res: ServerResponse,
    status: number,
    body: unknown,
    extra: Record<string, string> = {},
  ) => {
    res.writeHead(status, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...extra,
    });
    res.end(JSON.stringify(body));
  };
  const cors = (req: IncomingMessage) => {
    const origin = req.headers.origin;
    return origin && originAllowed(req)
      ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' }
      : {};
  };
  const html = (res: ServerResponse, status: number, body: string) => {
    res.writeHead(status, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      ...(rules.length ? { 'X-Content-Type-Options': 'nosniff' } : {}),
    });
    res.end(body);
  };

  async function handleInquiry(req: IncomingMessage, res: ServerResponse) {
    const id = randomUUID().slice(0, 8);
    const wantsHtml = !(req.headers.accept ?? '').includes('application/json');
    let locale: InquiryLocale = 'de';
    const fail = (
      status: number,
      error: string,
      kind: 'invalid' | 'failure' | 'limited',
      errors?: InquiryErrors,
    ) => {
      log({ event: 'inquiry', id, ok: false, error, status });
      if (wantsHtml) return html(res, status, resultPage(locale, kind));
      return json(res, status, { ok: false, error, ...(errors ? { errors } : {}) });
    };

    try {
      if (!originAllowed(req)) return fail(403, 'forbidden_origin', 'failure');
      if (!limiter.take(clientIp(req))) {
        res.setHeader('Retry-After', String(Math.ceil(config.rateLimitWindowMs / 1000)));
        return fail(429, 'rate_limited', 'limited');
      }
      const raw = await readBody(req);
      const body = parseBody(String(req.headers['content-type'] ?? ''), raw);
      const input = normalizeInquiry(body);
      locale = input.locale;

      if (HONEYPOTS.some((k) => typeof body[k] === 'string' && (body[k] as string).trim() !== '')) {
        // Vermutlich ein Bot: nichts senden. Menschen füllen das unsichtbare Feld nicht aus.
        log({ event: 'inquiry', id, ok: true, honeypot: true });
        return wantsHtml
          ? html(res, 200, resultPage(locale, 'success'))
          : json(res, 200, { ok: true });
      }

      const errors = validateInquiry(input);
      if (Object.keys(errors).length > 0) return fail(422, 'validation', 'invalid', errors);

      if (!transport || !config.inquiryTo || !config.inquiryFrom) {
        return fail(503, 'not_configured', 'failure');
      }
      try {
        await transport.sendMail(
          buildInquiryMail(input, { from: config.inquiryFrom, to: config.inquiryTo }),
        );
      } catch (error) {
        // Keine Nutzerdaten ins Log: nur Fehlerklasse.
        log({
          event: 'inquiry',
          id,
          ok: false,
          error: 'delivery_failed',
          detail: (error as Error).name,
        });
        return wantsHtml
          ? html(res, 502, resultPage(locale, 'failure'))
          : json(res, 502, { ok: false, error: 'delivery_failed' });
      }
      log({ event: 'inquiry', id, ok: true, topic: input.topic, locale: input.locale });
      return wantsHtml
        ? html(res, 200, resultPage(locale, 'success'))
        : json(res, 200, { ok: true });
    } catch (error) {
      if (error instanceof HttpError) return fail(error.status, error.message, 'failure');
      log({ event: 'inquiry', id, ok: false, error: 'unexpected', detail: (error as Error).name });
      return fail(500, 'unexpected', 'failure');
    }
  }

  return async function handler(req: IncomingMessage, res: ServerResponse) {
    try {
      const url = new URL(req.url ?? '/', 'http://localhost');
      if (url.pathname === '/healthz') return json(res, 200, { ok: true });
      if (url.pathname === '/api/inquiry') {
        if (req.method === 'OPTIONS') {
          res.writeHead(204, {
            ...cors(req),
            'Access-Control-Allow-Headers': 'Content-Type, Accept',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Max-Age': '600',
          });
          return res.end();
        }
        const corsHeaders = cors(req);
        for (const [name, value] of Object.entries(corsHeaders)) res.setHeader(name, value);
        if (req.method === 'POST') return await handleInquiry(req, res);
        res.setHeader('Allow', 'POST');
        return json(res, 405, { ok: false, error: 'method_not_allowed' });
      }
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.setHeader('Allow', 'GET, HEAD');
        return json(res, 405, { ok: false, error: 'method_not_allowed' });
      }
      await serveStatic(root, url.pathname, req.method, res, rules);
    } catch {
      if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal error');
    }
  };
}

export { errorMax };
