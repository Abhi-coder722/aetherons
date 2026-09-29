import { describe, expect, it } from 'vitest';
import { de } from '../../src/i18n/de';
import { en } from '../../src/i18n/en';
import { tr } from '../../src/i18n/tr';
import {
  allRoutes,
  resolvePath,
  routeKeys,
  routePath,
  slugs,
  noindexRoutes,
} from '../../src/i18n/routes';
import { locales } from '../../src/i18n/locales';
import { alternates } from '../../src/lib/seo';

const catalogues = { de, tr, en } as const;

/** Sammelt alle Textblätter mit ihrem Pfad. */
function leaves(value: unknown, prefix = ''): Array<[string, string]> {
  if (typeof value === 'string') return [[prefix, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => leaves(v, `${prefix}[${i}]`));
  if (value && typeof value === 'object')
    return Object.entries(value).flatMap(([k, v]) => leaves(v, prefix ? `${prefix}.${k}` : k));
  return [];
}

/** Struktur ohne Textinhalt, um Gleichheit der Form zu prüfen (Schlüssel und Listenlängen). */
function shape(value: unknown): unknown {
  if (typeof value === 'string') return 'string';
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object')
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]));
  return typeof value;
}

describe('Übersetzungen', () => {
  it('haben in allen Sprachen dieselbe Struktur (Schlüssel und Listenlängen)', () => {
    const base = JSON.stringify(shape(de));
    expect(JSON.stringify(shape(tr))).toBe(base);
    expect(JSON.stringify(shape(en))).toBe(base);
  });

  it.each(locales)('%s: keine leeren Texte (außer dokumentierter Ausnahme)', (locale) => {
    const empty = leaves(catalogues[locale])
      .filter(([, v]) => v.trim() === '')
      .map(([k]) => k)
      // Für Deutsch gibt es keinen Übersetzungshinweis; für die Standardsprache ist das gewollt.
      .filter((k) => !(locale === 'de' && k === 'legal.translationNote'));
    expect(empty).toEqual([]);
  });

  it('Türkisch und Englisch sind keine unübersetzten Kopien der deutschen Texte', () => {
    const deLeaves = new Map(leaves(de));
    const exempt = /^(locale|ui\.footer\.(rights|company)|ui\.footer\.company)$/;
    for (const loc of ['tr', 'en'] as const) {
      const same = leaves(catalogues[loc])
        .filter(([k, v]) => v.length > 25 && deLeaves.get(k) === v && !exempt.test(k))
        .map(([k]) => k);
      expect(same, `${loc}: identisch mit Deutsch`).toEqual([]);
    }
  });

  it('verwenden in allen Sprachen dieselben {Platzhalter}', () => {
    const tokens = (s: string) => (s.match(/\{\{?\w+\}?\}/g) ?? []).sort().join(',');
    const deMap = new Map(leaves(de));
    for (const loc of ['tr', 'en'] as const) {
      for (const [k, v] of leaves(catalogues[loc])) {
        const d = deMap.get(k);
        if (d === undefined) continue;
        expect(tokens(v), `${loc}:${k}`).toBe(tokens(d));
      }
    }
  });

  it('nennen keine Rechtssicherheits- oder Ranking-Garantien', () => {
    const banned =
      /(garantiert|guarantee[sd]?\b(?! no)|garanti ed|100\s?% (sicher|safe)|Platz 1|#1 |ilk sırada)/i;
    for (const loc of locales) {
      const hits = leaves(catalogues[loc])
        .filter(([k, v]) => banned.test(v) && !k.startsWith('about.notForItems'))
        // „keine Garantie“-Formulierungen sind erlaubt
        .filter(([, v]) => !/(keine|nicht|no |not |without|olmadan|vermeyiz|vaat etmeyiz)/i.test(v))
        .map(([k]) => k);
      expect(hits, loc).toEqual([]);
    }
  });

  it('Platzhalter-Beschriftungen existieren für alle in Texten verwendeten Schlüssel', () => {
    for (const loc of locales) {
      const keys = new Set(Object.keys(catalogues[loc].placeholders));
      for (const [k, v] of leaves(catalogues[loc])) {
        for (const m of v.matchAll(/\{\{(\w+)\}\}/g)) {
          if (m[1] === 'controller') continue;
          expect(keys.has(m[1]!), `${loc}:${k}:${m[1]}`).toBe(true);
        }
      }
    }
  });

  it('nennen Calendly-Datenschutz im Impressum-fernen Abschnitt in allen Sprachen', () => {
    for (const loc of locales) {
      const s = catalogues[loc].legal.privacy.booking;
      expect(s.id).toBe('terminbuchung');
      expect(s.paragraphs.join(' ')).toMatch(/calendly\.com\/privacy/);
      expect(s.paragraphs.join(' ')).toMatch(/\{\{bookingTransfer\}\}/);
      expect(catalogues[loc].contact.bookingDisclosure).toMatch(/\{provider\}/);
    }
  });

  it('formulieren Erfolg und Fehler des Formulars getrennt (kein Scheinerfolg)', () => {
    for (const loc of locales) {
      const f = catalogues[loc].form;
      expect(f.successTitle).not.toBe(f.failureTitle);
      expect(Object.keys(f.errors).length).toBeGreaterThanOrEqual(10);
    }
  });
});

describe('Routen', () => {
  it('haben je Sprache eindeutige Pfade', () => {
    for (const loc of locales) {
      const paths = routeKeys.map((k) => routePath(k, loc));
      expect(new Set(paths).size).toBe(paths.length);
    }
  });

  it('erzeugen Standardsprache ohne Präfix, andere mit Präfix', () => {
    expect(routePath('home', 'de')).toBe('/');
    expect(routePath('home', 'tr')).toBe('/tr/');
    expect(routePath('shops', 'en')).toBe('/en/online-shops/');
    expect(routePath('pos', 'de')).toBe('/kassensystem-anbindung/');
    expect(routePath('contact', 'tr')).toBe('/tr/iletisim/');
  });

  it('nutzen nur kleingeschriebene ASCII-Pfade mit Bindestrich', () => {
    for (const key of routeKeys)
      for (const loc of locales) expect(slugs[key][loc]).toMatch(/^[a-z0-9-]*$/);
  });

  it('lösen Pfade wieder zu Schlüssel und Sprache auf', () => {
    for (const r of allRoutes())
      expect(resolvePath(r.path)).toMatchObject({ key: r.key, locale: r.locale });
    expect(resolvePath('/gibt-es-nicht/')).toBeUndefined();
  });

  it('liefern hreflang inklusive x-default (Deutsch) und selbstreferenzierend für jede Sprache', () => {
    const list = alternates('shops', 'https://www.example.de');
    expect(list.map((a) => a.hreflang).sort()).toEqual(['de-DE', 'en', 'tr-TR', 'x-default']);
    expect(list.find((a) => a.hreflang === 'x-default')!.href).toBe(
      'https://www.example.de/online-shops/',
    );
    expect(list.find((a) => a.hreflang === 'tr-TR')!.href).toBe(
      'https://www.example.de/tr/e-ticaret-sitesi/',
    );
  });

  it('markieren nur die Rechtsseiten als nicht indexierbar', () => {
    expect([...noindexRoutes].sort()).toEqual(['legal', 'privacy']);
  });
});
