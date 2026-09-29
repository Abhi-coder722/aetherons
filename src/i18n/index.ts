import { defaultLocale, isLocale, locales, type Locale } from './locales';
import { routePath, type RouteKey } from './routes';
import type { Messages } from './types';
import { de } from './de';
import { tr } from './tr';
import { en } from './en';

export * from './locales';
export * from './routes';
export type * from './types';

const catalogues: Record<Locale, Messages> = { de, tr, en };

export const getMessages = (locale: Locale): Messages => catalogues[locale];

/** Ersetzt {name}-Platzhalter in Texten. Unbekannte Platzhalter bleiben stehen. */
export function fmt(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

/** Sprache aus dem Pfad ableiten (/tr/…, /en/… oder Standardsprache). */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return isLocale(first) && first !== defaultLocale ? first : defaultLocale;
}

/** Interner Link zur Seite `key` in der Sprache `locale`. */
export const href = (key: RouteKey, locale: Locale): string => routePath(key, locale);

export { defaultLocale, locales };
