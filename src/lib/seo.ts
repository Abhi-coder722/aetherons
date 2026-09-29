import { site } from '../content/site';
import { localeMeta, type Locale } from '../i18n/locales';
import { alternatePath, defaultLocale, locales, noindexRoutes, type RouteKey } from '../i18n';

export const TITLE_SEPARATOR = ' | ';

/** Erzeugt den <title>. Die Startseite übergibt einen vollständigen Titel. */
export function buildTitle(title: string, { standalone = false } = {}): string {
  return standalone ? title : `${title}${TITLE_SEPARATOR}${site.name}`;
}

/** Absolute URL für einen Pfad auf Basis der konfigurierten Site-URL. */
export function absoluteUrl(path: string, base: URL | string): string {
  return new URL(path, base).toString();
}

export interface Alternate {
  hreflang: string;
  href: string;
}

/** hreflang-Alternativen einer Seite (inklusive x-default = Standardsprache). */
export function alternates(key: RouteKey, base: URL | string): Alternate[] {
  const list: Alternate[] = locales.map((locale) => ({
    hreflang: localeMeta[locale].htmlLang,
    href: absoluteUrl(alternatePath(key, locale), base),
  }));
  list.push({
    hreflang: 'x-default',
    href: absoluteUrl(alternatePath(key, defaultLocale), base),
  });
  return list;
}

export const isIndexable = (key: RouteKey): boolean => !noindexRoutes.has(key);

type JsonLd = Record<string, unknown>;

export function organizationSchema(siteUrl: string, description: string): JsonLd {
  const org: JsonLd = {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: site.name,
    url: siteUrl,
    logo: absoluteUrl('/icons/icon-512.png', siteUrl),
    description,
  };
  if (site.contact.email) org.email = site.contact.email;
  if (site.contact.phone) org.telephone = site.contact.phone;
  return org;
}

export function websiteSchema(siteUrl: string, locale: Locale): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: site.name,
    inLanguage: localeMeta[locale].htmlLang,
    publisher: { '@id': `${siteUrl}#organization` },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(
  siteUrl: string,
  service: { name: string; description: string; url: string; locale: Locale },
): JsonLd {
  return {
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    inLanguage: localeMeta[service.locale].htmlLang,
    provider: { '@id': `${siteUrl}#organization` },
    // Bewusst ohne areaServed/Adresse: nur Angaben, die belegt und sichtbar sind.
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function graph(nodes: JsonLd[]): string {
  // "<" escapen, damit der Inhalt das <script>-Element nicht vorzeitig schließen kann.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(
    /</g,
    '\\u003c',
  );
}
