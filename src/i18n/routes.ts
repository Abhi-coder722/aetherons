import { defaultLocale, locales, type Locale } from './locales';

/**
 * Routenregister: Jede Seite hat einen stabilen Schlüssel und je Sprache einen eigenen Pfad
 * (ohne führenden/abschließenden Slash). Die Startseite hat den leeren Pfad.
 * Sitemap, hreflang, Sprachwechsel und Navigation lesen alle aus diesem Register.
 */
export const routeKeys = [
  'home',
  'webdev',
  'shops',
  'pos',
  'data',
  'process',
  'about',
  'faq',
  'contact',
  'legal',
  'privacy',
] as const;
export type RouteKey = (typeof routeKeys)[number];

export const slugs: Record<RouteKey, Record<Locale, string>> = {
  home: { de: '', tr: '', en: '' },
  webdev: { de: 'webentwicklung', tr: 'web-gelistirme', en: 'web-development' },
  shops: { de: 'online-shops', tr: 'e-ticaret-sitesi', en: 'online-shops' },
  pos: { de: 'kassensystem-anbindung', tr: 'kasa-sistemi-entegrasyonu', en: 'pos-integration' },
  data: { de: 'daten-digitalisierung', tr: 'veri-ve-dijitallesme', en: 'data-digitalisation' },
  process: { de: 'arbeitsweise', tr: 'calisma-seklimiz', en: 'how-we-work' },
  about: { de: 'ueber-aetheron', tr: 'hakkimizda', en: 'about' },
  faq: { de: 'faq', tr: 'sss', en: 'faq' },
  contact: { de: 'kontakt', tr: 'iletisim', en: 'contact' },
  legal: { de: 'impressum', tr: 'impressum', en: 'legal-notice' },
  privacy: { de: 'datenschutz', tr: 'veri-koruma', en: 'privacy' },
};

/** Seiten, die nicht in Suchmaschinen erscheinen sollen (Rechtsseiten sind Entwürfe bis zur Prüfung). */
export const noindexRoutes: ReadonlySet<RouteKey> = new Set(['legal', 'privacy']);

/** Reihenfolge der Leistungsseiten (Navigation, Startseite, Fußzeile). */
export const serviceKeys = ['webdev', 'shops', 'pos', 'data'] as const;
export type ServiceKey = (typeof serviceKeys)[number];

/** Pfad einer Seite in einer Sprache, immer mit führendem und abschließendem Slash. */
export function routePath(key: RouteKey, locale: Locale): string {
  const slug = slugs[key][locale];
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

/** Alle Kombinationen aus Sprache und Seite. */
export function allRoutes(): Array<{ key: RouteKey; locale: Locale; path: string }> {
  return locales.flatMap((locale) =>
    routeKeys.map((key) => ({ key, locale, path: routePath(key, locale) })),
  );
}

/** Findet Schlüssel und Sprache zu einem Pfad (für Tests und Weiterleitungen). */
export function resolvePath(pathname: string): { key: RouteKey; locale: Locale } | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return allRoutes().find((route) => route.path === normalized);
}

/** Pfad der gleichwertigen Seite in einer anderen Sprache (Query/Hash bleiben erhalten). */
export function alternatePath(key: RouteKey, locale: Locale): string {
  return routePath(key, locale);
}
