/** Konfiguration des optionalen Anfrage-Servers (siehe README → Kontaktformular, Variante A). */

export interface ServerConfig {
  port: number;
  host: string;
  distDir: string;
  /** Erlaubte Herkunft (Origin) für Formular-Posts, z. B. https://www.ihre-domain.de */
  allowedOrigins: string[];
  trustProxy: boolean;
  inquiryTo: string;
  inquiryFrom: string;
  smtpUrl: string;
  rateLimitMax: number;
  rateLimitWindowMs: number;
}

const list = (v: string | undefined) =>
  (v ?? '')
    .split(',')
    .map((s) => s.trim().replace(/\/+$/, ''))
    .filter(Boolean);

export function loadConfig(env: Record<string, string | undefined> = process.env): ServerConfig {
  const site = (env.PUBLIC_SITE_URL ?? '').trim().replace(/\/+$/, '');
  const origins = [...list(env.ALLOWED_ORIGINS), ...(site ? [site] : [])];
  const smtpHost = (env.SMTP_HOST ?? '').trim();
  const smtpUser = (env.SMTP_USER ?? '').trim();
  const smtpPass = env.SMTP_PASS ?? '';
  const smtpPort = Number(env.SMTP_PORT) || (env.SMTP_SECURE === 'false' ? 587 : 465);
  const smtpProtocol = env.SMTP_SECURE === 'false' ? 'smtp' : 'smtps';
  const smtpUrl =
    (env.SMTP_URL ?? '').trim() ||
    (smtpHost && smtpUser && smtpPass
      ? `${smtpProtocol}://${encodeURIComponent(smtpUser)}:${encodeURIComponent(smtpPass)}@${smtpHost}:${smtpPort}`
      : '');
  return {
    port: Number(env.PORT) || 8080,
    host: env.HOST || '0.0.0.0',
    distDir: env.DIST_DIR || 'dist',
    allowedOrigins: [...new Set(origins)],
    trustProxy: env.TRUST_PROXY === 'true',
    inquiryTo: (env.INQUIRY_TO ?? '').trim(),
    inquiryFrom: (env.INQUIRY_FROM ?? '').trim(),
    smtpUrl,
    rateLimitMax: Number(env.RATE_LIMIT_MAX) || 5,
    rateLimitWindowMs: (Number(env.RATE_LIMIT_WINDOW_S) || 600) * 1000,
  };
}

/** Liefert eine Liste fehlender Pflichtwerte für den Produktivbetrieb. */
export function configProblems(c: ServerConfig): string[] {
  const p: string[] = [];
  if (c.allowedOrigins.length === 0) p.push('PUBLIC_SITE_URL oder ALLOWED_ORIGINS fehlt');
  if (!c.inquiryTo) p.push('INQUIRY_TO fehlt');
  if (!c.inquiryFrom) p.push('INQUIRY_FROM fehlt');
  if (!c.smtpUrl) p.push('SMTP_URL fehlt');
  return p;
}
