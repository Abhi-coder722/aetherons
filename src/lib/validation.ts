/**
 * Validierung der Projektanfrage. Dieselbe Datei läuft im Browser (Nutzerhilfe) und im
 * eigenen Server unter server/ (maßgebliche Prüfung). Sie hat bewusst keine Importe,
 * damit Node sie direkt laden kann.
 */

export const TOPICS = ['website', 'shop', 'pos', 'data', 'unsure'] as const;
export type Topic = (typeof TOPICS)[number];

export const LOCALES = ['de', 'tr', 'en'] as const;
export type InquiryLocale = (typeof LOCALES)[number];

export const LIMITS = {
  name: 120,
  email: 180,
  company: 150,
  message: 3000,
  messageMin: 10,
  detail: 200,
  url: 300,
} as const;

export interface InquiryInput {
  topic: Topic;
  locale: InquiryLocale;
  name: string;
  email: string;
  company: string;
  message: string;
  /** Themenabhängige, freiwillige Angaben. */
  url: string;
  shopContext: string;
  posProvider: string;
  posModel: string;
  posVersion: string;
  dataTools: string;
}

export type InquiryField = keyof InquiryInput;

/** Fehlercodes; sie entsprechen den Schlüsseln in form.errors der Übersetzungen. */
export type ErrorCode =
  | 'nameRequired'
  | 'nameTooLong'
  | 'emailRequired'
  | 'emailInvalid'
  | 'companyTooLong'
  | 'messageRequired'
  | 'messageTooShort'
  | 'messageTooLong'
  | 'detailTooLong'
  | 'urlInvalid';

export type InquiryErrors = Partial<Record<InquiryField, ErrorCode>>;

/** Für jeden Fehlercode: welcher {max}-Wert gehört in die Meldung. */
export const errorMax: Partial<Record<ErrorCode, number>> = {
  nameTooLong: LIMITS.name,
  companyTooLong: LIMITS.company,
  messageTooLong: LIMITS.message,
  detailTooLong: LIMITS.detail,
};

// Pragmatische Prüfung: ein @, kein Leerzeichen, Domain mit Punkt.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_PATTERN = /^(https?:\/\/)?[^\s/$.?#][^\s]*\.[^\s]{2,}$/i;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidUrl(value: string): boolean {
  const v = value.trim();
  if (/^[a-z][a-z0-9+.-]*:/i.test(v) && !/^https?:\/\//i.test(v)) return false;
  return URL_PATTERN.test(v);
}

const str = (value: unknown, hardMax: number): string =>
  (typeof value === 'string' ? value : '').replace(/\r\n?/g, '\n').trim().slice(0, hardMax);

/** Wandelt beliebige Eingaben (JSON, Formular) in eine geprüfte Struktur; ohne Längenfehler zu verstecken. */
export function normalizeInquiry(raw: unknown): InquiryInput {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const topic = TOPICS.includes(r.topic as Topic) ? (r.topic as Topic) : 'unsure';
  const locale = LOCALES.includes(r.locale as InquiryLocale) ? (r.locale as InquiryLocale) : 'de';
  // Doppelt so hoch wie das Limit: Zu lange Eingaben sollen als Fehler auffallen, nicht still gekürzt werden.
  return {
    topic,
    locale,
    name: str(r.name, LIMITS.name * 2),
    email: str(r.email, LIMITS.email * 2),
    company: str(r.company, LIMITS.company * 2),
    message: str(r.message, LIMITS.message * 2),
    url: str(r.url, LIMITS.url * 2),
    shopContext: str(r.shopContext, LIMITS.detail * 2),
    posProvider: str(r.posProvider, LIMITS.detail * 2),
    posModel: str(r.posModel, LIMITS.detail * 2),
    posVersion: str(r.posVersion, LIMITS.detail * 2),
    dataTools: str(r.dataTools, LIMITS.detail * 2),
  };
}

export function validateInquiry(input: InquiryInput): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!input.name) errors.name = 'nameRequired';
  else if (input.name.length > LIMITS.name) errors.name = 'nameTooLong';

  if (!input.email) errors.email = 'emailRequired';
  else if (input.email.length > LIMITS.email || !isValidEmail(input.email))
    errors.email = 'emailInvalid';

  if (input.company.length > LIMITS.company) errors.company = 'companyTooLong';

  if (!input.message) errors.message = 'messageRequired';
  else if (input.message.length < LIMITS.messageMin) errors.message = 'messageTooShort';
  else if (input.message.length > LIMITS.message) errors.message = 'messageTooLong';

  if (input.url) {
    if (input.url.length > LIMITS.url || !isValidUrl(input.url)) errors.url = 'urlInvalid';
  }
  for (const field of [
    'shopContext',
    'posProvider',
    'posModel',
    'posVersion',
    'dataTools',
  ] as const) {
    if (input[field].length > LIMITS.detail) errors[field] = 'detailTooLong';
  }
  return errors;
}

/**
 * Wertet die Antwort eines externen Formular-Dienstes aus. Erfolg nur bei HTTP 2xx und –
 * falls JSON geliefert wird – ohne ausdrückliches Fehlersignal.
 */
export function isSuccessfulSubmission(status: number, body: unknown): boolean {
  if (status < 200 || status >= 300) return false;
  if (body && typeof body === 'object') {
    const record = body as Record<string, unknown>;
    if (record.success === false || record.success === 'false') return false;
    if (record.ok === false) return false;
    if ('error' in record && record.error) return false;
    if ('errors' in record && Array.isArray(record.errors) && record.errors.length > 0)
      return false;
  }
  return true;
}
