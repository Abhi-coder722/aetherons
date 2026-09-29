/** Sprachen der Website. Deutsch ist Standard und liegt ohne Präfix im Wurzelverzeichnis. */
export const locales = ['de', 'tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

export const localeMeta: Record<
  Locale,
  {
    /** Sprachcode für <html lang> und hreflang. */
    htmlLang: string;
    /** Open-Graph-Locale. */
    og: string;
    /** Eigenbezeichnung der Sprache (für den Sprachwechsel). */
    label: string;
    /** Kurzform für enge Stellen. */
    short: string;
  }
> = {
  de: { htmlLang: 'de-DE', og: 'de_DE', label: 'Deutsch', short: 'DE' },
  tr: { htmlLang: 'tr-TR', og: 'tr_TR', label: 'Türkçe', short: 'TR' },
  en: { htmlLang: 'en', og: 'en_US', label: 'English', short: 'EN' },
};

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (locales as readonly string[]).includes(value);
