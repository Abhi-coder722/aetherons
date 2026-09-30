import { describe, expect, it } from 'vitest';
import {
  LIMITS,
  isValidEmail,
  isValidUrl,
  normalizeInquiry,
  validateInquiry,
} from '../../src/lib/validation';

const valid = () =>
  normalizeInquiry({
    name: 'Erika Mustermann',
    email: 'erika@example.de',
    message: 'Wir möchten unsere Website überarbeiten.',
  });

describe('normalizeInquiry', () => {
  it('setzt sichere Standardwerte und ignoriert unbekannte Themen und Sprachen', () => {
    const n = normalizeInquiry({ topic: 'hack', locale: 'xx' });
    expect(n.topic).toBe('unsure');
    expect(n.locale).toBe('de');
  });

  it('akzeptiert Nicht-Objekte, Zahlen und Arrays ohne Absturz', () => {
    for (const bad of [null, undefined, 5, 'x', [], { name: 12, email: {}, message: ['a'] }]) {
      expect(() => normalizeInquiry(bad)).not.toThrow();
    }
    expect(normalizeInquiry({ name: 12 }).name).toBe('');
  });

  it('trimmt und vereinheitlicht Zeilenumbrüche', () => {
    expect(normalizeInquiry({ message: '  a\r\nb  ' }).message).toBe('a\nb');
  });

  it('kürzt extrem lange Eingaben hart, ohne sie still im gültigen Bereich zu verstecken', () => {
    const n = normalizeInquiry({ name: 'a'.repeat(5000) });
    expect(n.name.length).toBe(LIMITS.name * 2);
    expect(validateInquiry({ ...valid(), name: n.name }).name).toBe('nameTooLong');
  });
});

describe('validateInquiry', () => {
  it('akzeptiert eine vollständige Anfrage', () => {
    expect(validateInquiry(valid())).toEqual({});
  });

  it('verlangt Name, E-Mail und Nachricht', () => {
    const e = validateInquiry(normalizeInquiry({}));
    expect(e).toEqual({
      name: 'nameRequired',
      email: 'emailRequired',
      message: 'messageRequired',
    });
  });

  it('prüft E-Mail-Adressen pragmatisch', () => {
    expect(isValidEmail('name@firma.de')).toBe(true);
    expect(isValidEmail(' name@firma.de ')).toBe(true);
    for (const bad of ['name', 'name@', 'name@firma', 'na me@firma.de', '@firma.de', 'a@b.c'])
      expect(isValidEmail(bad), bad).toBe(false);
  });

  it('meldet zu kurze und zu lange Nachrichten', () => {
    expect(validateInquiry({ ...valid(), message: 'zu kurz' }).message).toBe('messageTooShort');
    expect(validateInquiry({ ...valid(), message: 'x'.repeat(LIMITS.message + 1) }).message).toBe(
      'messageTooLong',
    );
    expect(
      validateInquiry({ ...valid(), message: 'x'.repeat(LIMITS.message) }).message,
    ).toBeUndefined();
  });

  it('prüft optionale Felder nur, wenn sie gefüllt sind', () => {
    expect(validateInquiry({ ...valid(), url: '' }).url).toBeUndefined();
    expect(validateInquiry({ ...valid(), url: 'www.beispiel.de' }).url).toBeUndefined();
    expect(validateInquiry({ ...valid(), url: 'https://beispiel.de/seite' }).url).toBeUndefined();
    expect(validateInquiry({ ...valid(), url: 'javascript:alert(1)' }).url).toBe('urlInvalid');
    expect(validateInquiry({ ...valid(), url: 'kein url' }).url).toBe('urlInvalid');
    expect(
      validateInquiry({ ...valid(), posProvider: 'x'.repeat(LIMITS.detail + 1) }).posProvider,
    ).toBe('detailTooLong');
  });

  it('erkennt zu lange Unternehmensnamen', () => {
    expect(validateInquiry({ ...valid(), company: 'x'.repeat(LIMITS.company + 1) }).company).toBe(
      'companyTooLong',
    );
  });

  it('isValidUrl lehnt fremde Schemata ab', () => {
    expect(isValidUrl('ftp://x.de/a')).toBe(false);
    expect(isValidUrl('data:text/html,x')).toBe(false);
  });
});
