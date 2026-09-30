import { describe, expect, it } from 'vitest';
import { parseBookingUrl, parseBookingUrls } from '../../src/lib/env';
import {
  breadcrumbSchema,
  buildTitle,
  faqSchema,
  graph,
  organizationSchema,
  serviceSchema,
} from '../../src/lib/seo';
import { isPlaceholder, ph, placeholderKey } from '../../src/content/site';

describe('parseBookingUrl (Calendly)', () => {
  it('akzeptiert nur https auf calendly.com', () => {
    expect(parseBookingUrl('https://calendly.com/aetheron/30min')).toBe(
      'https://calendly.com/aetheron/30min',
    );
    expect(parseBookingUrl('https://team.calendly.com/x/event')).toContain('team.calendly.com');
  });
  it('lehnt andere Hosts, http, Lookalikes und Leerwerte ab', () => {
    for (const bad of [
      '',
      '  ',
      'http://calendly.com/x',
      'https://cal.com/x',
      'https://calendly.com.evil.test/x',
      'https://evilcalendly.com/x',
      'https://calendly.com/aetheron',
      'javascript:alert(1)',
      'calendly.com/x',
    ])
      expect(parseBookingUrl(bad), bad).toBe('');
  });
});

describe('parseBookingUrls (Calendly je Sprache)', () => {
  it('nutzt sprachspezifische Links und lässt Türkisch zuerst auf Englisch zurückfallen', () => {
    expect(
      parseBookingUrls({
        PUBLIC_CALENDLY_URL: 'https://calendly.com/aetheron/default',
        PUBLIC_CALENDLY_URL_DE: 'https://calendly.com/aetheron/de',
        PUBLIC_CALENDLY_URL_EN: 'https://calendly.com/aetheron/en',
      }),
    ).toEqual({
      de: 'https://calendly.com/aetheron/de',
      tr: 'https://calendly.com/aetheron/en',
      en: 'https://calendly.com/aetheron/en',
    });
  });
});

describe('SEO-Helfer', () => {
  it('baut Titel mit und ohne Markenzusatz', () => {
    expect(buildTitle('Kontakt')).toBe('Kontakt | aetheron');
    expect(buildTitle('Ganzer Titel', { standalone: true })).toBe('Ganzer Titel');
  });

  it('erzeugt Organization ohne erfundene Adress-, Bewertungs- oder Öffnungszeitenfelder', () => {
    const org = organizationSchema('https://www.example.de/', 'Beschreibung');
    for (const forbidden of [
      'address',
      'aggregateRating',
      'review',
      'openingHours',
      'areaServed',
      'vatID',
    ])
      expect(org).not.toHaveProperty(forbidden);
    expect(org.name).toBe('aetheron');
  });

  it('erzeugt Service mit Sprache und Provider-Verweis', () => {
    const s = serviceSchema('https://x.de/', {
      name: 'N',
      description: 'D',
      url: 'https://x.de/n/',
      locale: 'tr',
    });
    expect(s.inLanguage).toBe('tr-TR');
    expect(s.provider).toEqual({ '@id': 'https://x.de/#organization' });
    expect(s).not.toHaveProperty('areaServed');
  });

  it('erzeugt Brotkrumen und FAQ mit korrekter Struktur', () => {
    const b = breadcrumbSchema([
      { name: 'A', url: 'u1' },
      { name: 'B', url: 'u2' },
    ]) as { itemListElement: Array<{ position: number }> };
    expect(b.itemListElement.map((i) => i.position)).toEqual([1, 2]);
    const f = faqSchema([{ question: 'Q', answer: 'A' }]) as {
      mainEntity: Array<Record<string, unknown>>;
    };
    expect(f.mainEntity[0]!['@type']).toBe('Question');
  });

  it('maskiert "<" in JSON-LD', () => {
    expect(graph([{ name: '</script><script>alert(1)</script>' }])).not.toContain('</script>');
  });
});

describe('Platzhalter', () => {
  it('erkennen und benennen fehlende Angaben', () => {
    expect(isPlaceholder(ph('street'))).toBe(true);
    expect(placeholderKey(ph('street'))).toBe('street');
    expect(isPlaceholder('Musterstraße 1')).toBe(false);
    expect(isPlaceholder('')).toBe(true);
  });
});
