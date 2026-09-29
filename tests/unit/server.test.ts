import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createHandler } from '../../server/app';
import { loadConfig, configProblems } from '../../server/config';
import { buildInquiryMail, oneLine, type MailMessage } from '../../server/mail';
import { RateLimiter } from '../../server/ratelimit';
import { parseHeadersFile } from '../../server/static';
import { normalizeInquiry } from '../../src/lib/validation';

const ORIGIN = 'https://www.example.de';
const sent: MailMessage[] = [];
let failNext = false;
let dist: string;

const transport = {
  async sendMail(m: MailMessage) {
    if (failNext) {
      failNext = false;
      throw new Error('smtp down');
    }
    sent.push(m);
  },
};

const config = (over: Record<string, string> = {}) =>
  loadConfig({
    PUBLIC_SITE_URL: ORIGIN,
    INQUIRY_TO: 'kontakt@example.de',
    INQUIRY_FROM: 'website@example.de',
    SMTP_URL: 'smtp://test',
    RATE_LIMIT_MAX: '100',
    DIST_DIR: dist,
    ...over,
  });

async function start(cfg = config(), tp: typeof transport | null = transport) {
  const logs: Array<Record<string, unknown>> = [];
  const handler = await createHandler({ config: cfg, transport: tp, log: (e) => logs.push(e) });
  const server: Server = createServer(handler);
  await new Promise<void>((r) => server.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  return { server, base, logs };
}

const body = (over: Record<string, unknown> = {}) => ({
  topic: 'pos',
  locale: 'de',
  name: 'Erika Mustermann',
  email: 'erika@example.de',
  message: 'Wir möchten unser Kassensystem anbinden.',
  posProvider: 'Beispiel-POS',
  ...over,
});

const post = (base: string, data: unknown, headers: Record<string, string> = {}) =>
  fetch(`${base}/api/inquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: ORIGIN,
      ...headers,
    },
    body: typeof data === 'string' ? data : JSON.stringify(data),
  });

beforeAll(async () => {
  dist = await mkdtemp(path.join(os.tmpdir(), 'aetheron-dist-'));
  await mkdir(path.join(dist, '_astro'));
  await writeFile(path.join(dist, 'index.html'), '<h1>home</h1>');
  await writeFile(path.join(dist, '404.html'), '<h1>nf</h1>');
  await writeFile(path.join(dist, '.secret'), 'geheim');
  await writeFile(path.join(dist, '_astro', 'a.css'), 'a{}');
  await writeFile(
    path.join(dist, '_headers'),
    "/*\n  X-Test: yes\n  Content-Security-Policy: default-src 'self'\n\n/_astro/*\n  Cache-Control: public, max-age=1, immutable\n",
  );
});

describe('POST /api/inquiry', () => {
  it('sendet genau eine E-Mail mit Reply-To und antwortet 200', async () => {
    const { server, base, logs } = await start();
    sent.length = 0;
    const res = await post(base, body());
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(sent).toHaveLength(1);
    expect(sent[0]).toMatchObject({
      to: 'kontakt@example.de',
      from: 'website@example.de',
      replyTo: 'erika@example.de',
    });
    expect(sent[0]!.text).toContain('Kassenanbieter: Beispiel-POS');
    expect(sent[0]!.subject).toContain('Kassensystem-Anbindung');
    // Log enthält weder E-Mail-Adresse noch Nachricht.
    expect(JSON.stringify(logs)).not.toContain('erika@example.de');
    expect(JSON.stringify(logs)).not.toContain('Kassensystem anbinden');
    server.close();
  });

  it('lehnt ungültige Eingaben mit 422 und Fehlercodes ab, ohne zu senden', async () => {
    const { server, base } = await start();
    sent.length = 0;
    const res = await post(base, body({ name: '', email: 'kaputt', message: 'kurz' }));
    expect(res.status).toBe(422);
    const json = await res.json();
    expect(json.errors).toEqual({
      name: 'nameRequired',
      email: 'emailInvalid',
      message: 'messageTooShort',
    });
    expect(sent).toHaveLength(0);
    server.close();
  });

  it('verhindert Header-Injection über Name und E-Mail', async () => {
    const { server, base } = await start();
    sent.length = 0;
    await post(base, body({ name: 'Eve\r\nBcc: spam@evil.test', email: 'eve@example.de' }));
    expect(sent).toHaveLength(1);
    expect(sent[0]!.subject).not.toMatch(/[\r\n]/);
    expect(sent[0]!.replyTo).not.toMatch(/[\r\n]/);
    const m = buildInquiryMail(normalizeInquiry(body({ name: 'A\nB' })), {
      from: 'a@b.de',
      to: 'c@d.de',
    });
    expect(m.subject).not.toContain('\n');
    expect(oneLine('a\r\nb c')).toBe('a b c');
    server.close();
  });

  it('nimmt Honeypot-Anfragen an, sendet aber nichts', async () => {
    const { server, base, logs } = await start();
    sent.length = 0;
    const res = await post(base, body({ hp: 'ich bin ein bot' }));
    expect(res.status).toBe(200);
    expect(sent).toHaveLength(0);
    expect(logs.some((l) => l.honeypot === true)).toBe(true);
    server.close();
  });

  it('blockt fremde Herkunft (CSRF) und fehlende Herkunft', async () => {
    const { server, base } = await start();
    sent.length = 0;
    expect((await post(base, body(), { Origin: 'https://evil.test' })).status).toBe(403);
    const noOrigin = await fetch(`${base}/api/inquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body()),
    });
    expect(noOrigin.status).toBe(403);
    expect(sent).toHaveLength(0);
    server.close();
  });

  it('begrenzt die Rate je IP', async () => {
    const { server, base } = await start(config({ RATE_LIMIT_MAX: '2' }));
    sent.length = 0;
    expect((await post(base, body())).status).toBe(200);
    expect((await post(base, body())).status).toBe(200);
    const limited = await post(base, body());
    expect(limited.status).toBe(429);
    expect(limited.headers.get('retry-after')).toBeTruthy();
    expect(sent).toHaveLength(2);
    server.close();
  });

  it('antwortet ehrlich mit 503, wenn die Zustellung nicht konfiguriert ist (kein Scheinerfolg)', async () => {
    const { server, base } = await start(config(), null);
    const res = await post(base, body());
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe('not_configured');
    server.close();
  });

  it('antwortet mit 502, wenn der Versand scheitert', async () => {
    const { server, base } = await start();
    failNext = true;
    const res = await post(base, body());
    expect(res.status).toBe(502);
    expect((await res.json()).ok).toBe(false);
    server.close();
  });

  it('lehnt zu große Bodies (413), falsche Inhaltstypen (415) und kaputtes JSON (400) ab', async () => {
    const { server, base } = await start();
    expect((await post(base, 'x'.repeat(40_000))).status).toBe(413);
    expect((await post(base, body(), { 'Content-Type': 'text/plain' })).status).toBe(415);
    expect((await post(base, '{kaputt')).status).toBe(400);
    server.close();
  });

  it('liefert für Formulare ohne JavaScript eine lokalisierte Ergebnisseite', async () => {
    const { server, base } = await start();
    sent.length = 0;
    const form = new URLSearchParams({ ...(body({ locale: 'tr' }) as Record<string, string>) });
    const ok = await fetch(`${base}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'text/html',
        Origin: ORIGIN,
      },
      body: form,
    });
    expect(ok.status).toBe(200);
    const html = await ok.text();
    expect(html).toContain('lang="tr"');
    expect(html).toContain('Teşekkürler');
    expect(sent).toHaveLength(1);

    const bad = await fetch(`${base}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'text/html',
        Origin: ORIGIN,
      },
      body: new URLSearchParams({ locale: 'en', name: '' }),
    });
    expect(bad.status).toBe(422);
    expect(await bad.text()).toContain('Please check your details');
    server.close();
  });

  it('erlaubt nur POST', async () => {
    const { server, base } = await start();
    const res = await fetch(`${base}/api/inquiry`);
    expect(res.status).toBe(405);
    server.close();
  });

  it('erlaubt CORS nur für konfigurierte lokale Entwicklungs-Origins', async () => {
    const localOrigin = 'http://127.0.0.1:4321';
    const { server, base } = await start(config({ ALLOWED_ORIGINS: `${ORIGIN},${localOrigin}` }));
    const preflight = await fetch(`${base}/api/inquiry`, {
      method: 'OPTIONS',
      headers: {
        Origin: localOrigin,
        'Access-Control-Request-Method': 'POST',
      },
    });
    expect(preflight.status).toBe(204);
    expect(preflight.headers.get('access-control-allow-origin')).toBe(localOrigin);

    const rejected = await fetch(`${base}/api/inquiry`, {
      method: 'OPTIONS',
      headers: { Origin: 'https://evil.test', 'Access-Control-Request-Method': 'POST' },
    });
    expect(rejected.headers.get('access-control-allow-origin')).toBeNull();
    server.close();
  });
});

describe('statische Auslieferung', () => {
  it('liefert Seiten mit Sicherheits-Headern aus _headers', async () => {
    const { server, base } = await start();
    const res = await fetch(`${base}/`);
    expect(res.status).toBe(200);
    expect(res.headers.get('x-test')).toBe('yes');
    expect(res.headers.get('content-security-policy')).toContain("default-src 'self'");
    expect(await res.text()).toContain('home');
    const asset = await fetch(`${base}/_astro/a.css`);
    expect(asset.headers.get('cache-control')).toContain('immutable');
    server.close();
  });

  it('antwortet mit 404 und eigener Seite, blockt Pfadtricks und versteckte Dateien', async () => {
    const { server, base } = await start();
    const nf = await fetch(`${base}/gibt-es-nicht/`);
    expect(nf.status).toBe(404);
    expect(await nf.text()).toContain('nf');
    expect((await fetch(`${base}/.secret`)).status).toBe(404);
    expect((await fetch(`${base}/%2e%2e/%2e%2e/etc/passwd`)).status).toBe(404);
    expect((await fetch(`${base}/..%2f..%2fetc/passwd`)).status).toBe(404);
    expect((await fetch(`${base}/%00`)).status).toBe(404);
    server.close();
  });

  it('bietet /healthz', async () => {
    const { server, base } = await start();
    expect((await (await fetch(`${base}/healthz`)).json()).ok).toBe(true);
    server.close();
  });
});

describe('Hilfsmodule', () => {
  it('RateLimiter zählt je Schlüssel und gibt nach dem Fenster wieder frei', () => {
    let t = 0;
    const l = new RateLimiter(2, 1000, () => t);
    expect([l.take('a'), l.take('a'), l.take('a'), l.take('b')]).toEqual([true, true, false, true]);
    t = 1500;
    expect(l.take('a')).toBe(true);
  });

  it('parseHeadersFile liest das Netlify-Format', () => {
    const r = parseHeadersFile('# c\n/*\n  A: 1\n  B: x:y\n\n/_astro/*\n  C: 2\n');
    expect(r).toEqual([
      { pattern: '/*', headers: { A: '1', B: 'x:y' } },
      { pattern: '/_astro/*', headers: { C: '2' } },
    ]);
  });

  it('configProblems benennt fehlende Werte', () => {
    expect(configProblems(loadConfig({}))).toEqual(
      expect.arrayContaining(['INQUIRY_TO fehlt', 'INQUIRY_FROM fehlt', 'SMTP_URL fehlt']),
    );
    expect(configProblems(config())).toEqual([]);
  });

  it('baut eine SMTP-URL aus getrennten Zugangsdaten', () => {
    const cfg = loadConfig({
      PUBLIC_SITE_URL: ORIGIN,
      INQUIRY_TO: 'kontakt@example.de',
      INQUIRY_FROM: 'kontakt@example.de',
      SMTP_HOST: 'smtp.zoho.eu',
      SMTP_PORT: '465',
      SMTP_SECURE: 'true',
      SMTP_USER: 'kontakt@example.de',
      SMTP_PASS: 'p@ss:word',
    });
    expect(cfg.smtpUrl).toBe('smtps://kontakt%40example.de:p%40ss%3Aword@smtp.zoho.eu:465');
    expect(configProblems(cfg)).toEqual([]);
  });
});

afterAll(() => undefined);
