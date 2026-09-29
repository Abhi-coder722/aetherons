import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import type { ServerResponse } from 'node:http';
import path from 'node:path';

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

export interface HeaderRule {
  pattern: string;
  headers: Record<string, string>;
}

/** Liest public/_headers (Netlify-Format), damit die Header nur an einer Stelle gepflegt werden. */
export function parseHeadersFile(text: string): HeaderRule[] {
  const rules: HeaderRule[] = [];
  let current: HeaderRule | undefined;
  for (const raw of text.split(/\r?\n/)) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue;
    if (!/^\s/.test(raw)) {
      current = { pattern: raw.trim(), headers: {} };
      rules.push(current);
    } else if (current) {
      const i = raw.indexOf(':');
      if (i > 0) current.headers[raw.slice(0, i).trim()] = raw.slice(i + 1).trim();
    }
  }
  return rules;
}

const matches = (pattern: string, urlPath: string) =>
  pattern === '/*' || (pattern.endsWith('/*') && urlPath.startsWith(pattern.slice(0, -1)));

export function headersFor(rules: HeaderRule[], urlPath: string): Record<string, string> {
  return rules
    .filter((r) => matches(r.pattern, urlPath))
    .reduce((acc, r) => ({ ...acc, ...r.headers }), {} as Record<string, string>);
}

async function resolveFile(root: string, urlPath: string): Promise<string | null> {
  let decoded: string;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  if (decoded.includes('\0')) return null;
  const candidate = path.resolve(root, '.' + decoded);
  if (candidate !== root && !candidate.startsWith(root + path.sep)) return null;
  // Versteckte Dateien (z. B. .htaccess, .env) werden nie ausgeliefert.
  if (candidate.split(path.sep).some((seg) => seg.startsWith('.'))) return null;
  const tries = decoded.endsWith('/')
    ? [path.join(candidate, 'index.html')]
    : [candidate, path.join(candidate, 'index.html')];
  for (const file of tries) {
    try {
      if ((await stat(file)).isFile()) return file;
    } catch {
      /* weiter */
    }
  }
  return null;
}

export async function serveStatic(
  root: string,
  urlPath: string,
  method: string,
  res: ServerResponse,
  rules: HeaderRule[],
): Promise<void> {
  const base = headersFor(rules, urlPath);
  let file = await resolveFile(root, urlPath);
  let status = 200;
  if (!file) {
    status = 404;
    file = path.join(root, '404.html');
    try {
      await stat(file);
    } catch {
      res.writeHead(404, { ...base, 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
  }
  const ext = path.extname(file);
  const immutable = urlPath.startsWith('/_astro/');
  res.writeHead(status, {
    ...base,
    'Content-Type': MIME[ext] ?? 'application/octet-stream',
    'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
  });
  if (method === 'HEAD') return void res.end();
  if (status === 404) return void res.end(await readFile(file));
  createReadStream(file).pipe(res);
}
