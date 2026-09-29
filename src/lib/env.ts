/** Öffentliche Konfiguration aus Umgebungsvariablen (siehe .env.example). */

const trim = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

/**
 * Ziel des Anfrageformulars:
 *  - relativer Pfad (z. B. /api/inquiry): eigener Server aus server/ (Validierung + Zustellung)
 *  - https-URL: externer Formular-Dienst (multipart POST)
 *  - leer: kein Formular, stattdessen E-Mail-Kontakt
 */
export function parseFormEndpoint(value: unknown): string {
  const v = trim(value);
  if (!v) return '';
  if (v.startsWith('/') && !v.startsWith('//')) return v;
  try {
    const url = new URL(v);
    return url.protocol === 'https:' ? url.toString() : '';
  } catch {
    return '';
  }
}

function parseDevFormEndpoint(value: unknown): string {
  const v = trim(value);
  try {
    const url = new URL(v);
    const loopback = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
    return url.protocol === 'http:' && loopback && url.pathname === '/api/inquiry'
      ? url.toString()
      : '';
  } catch {
    return '';
  }
}

/** Nur direkte https-Event-Links auf calendly.com werden akzeptiert. */
export function parseBookingUrl(value: unknown): string {
  const v = trim(value);
  if (!v) return '';
  try {
    const url = new URL(v);
    const host = url.hostname.toLowerCase();
    const ok = host === 'calendly.com' || host.endsWith('.calendly.com');
    const pathParts = url.pathname.split('/').filter(Boolean);
    // Profilseiten (/konto) listen alle öffentlichen Events; benötigt wird /konto/event.
    return url.protocol === 'https:' && ok && pathParts.length >= 2 ? url.toString() : '';
  } catch {
    return '';
  }
}

export function parseBookingUrls(env: Record<string, unknown>): Record<'de' | 'tr' | 'en', string> {
  const fallback = parseBookingUrl(env.PUBLIC_CALENDLY_URL);
  const english = parseBookingUrl(env.PUBLIC_CALENDLY_URL_EN) || fallback;
  return {
    de: parseBookingUrl(env.PUBLIC_CALENDLY_URL_DE) || fallback,
    tr: parseBookingUrl(env.PUBLIC_CALENDLY_URL_TR) || english,
    en: english,
  };
}

const configuredFormEndpoint = parseFormEndpoint(import.meta.env.PUBLIC_FORM_ENDPOINT);
export const formEndpoint: string =
  (import.meta.env.DEV && parseDevFormEndpoint(import.meta.env.PUBLIC_DEV_API_URL)) ||
  configuredFormEndpoint;
export const bookingUrls = parseBookingUrls(import.meta.env);
export const hasBookingUrl = Object.values(bookingUrls).some(Boolean);
