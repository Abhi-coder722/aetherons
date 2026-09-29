/**
 * Zentrale Geschäftsdaten für aetheron.
 *
 * Angaben, die mit ph('…') markiert sind, müssen vor dem Livegang durch echte Daten ersetzt werden.
 * `npm run check:launch` findet übrig gebliebene Platzhalter im gebauten HTML und bricht dann ab.
 * Die sichtbare Beschriftung der Platzhalter steht je Sprache in src/i18n/*.ts (Abschnitt placeholders).
 *
 * Hier bitte keine Geheimnisse (Passwörter, API-Schlüssel) eintragen – dafür sind
 * Umgebungsvariablen vorgesehen (siehe .env.example).
 */
import type { Locale } from '../i18n/locales';

const MARKER = '[[ph:';

/** Kennzeichnet eine fehlende Angabe. Der Schlüssel verweist auf die Beschriftung in den Übersetzungen. */
export const ph = (key: string) => `${MARKER}${key}]]` as const;

export const isPlaceholder = (value: string | null | undefined): boolean =>
  !value || value.startsWith(MARKER);

export const placeholderKey = (value: string): string =>
  value.startsWith(MARKER) ? value.slice(MARKER.length, -2) : value;

export const site = {
  /** Markenname – bewusst kleingeschrieben. */
  name: 'aetheron',

  contact: {
    /**
     * Aus der bisherigen Website übernommen (Kontaktformular + mailto).
     * Bitte bestätigen, dass dieses Postfach aktiv ist und zur Domain passt.
     */
    email: 'kontakt@aetherons.de',
    /** Optional. Leer lassen, wenn keine Telefonnummer veröffentlicht werden soll. */
    phone: '' as string,
    /**
     * Terminbuchung: Die Links kommen aus PUBLIC_CALENDLY_URL_* (siehe src/lib/env.ts).
     * Es werden keine Inhalte von Calendly geladen, bevor jemand den Link anklickt.
     */
    bookingProvider: 'Calendly',
    /** Optional: realistische Angabe, wann Anfragen beantwortet werden. Leer = keine Zusage. */
    responseTimeNote: {} as Partial<Record<Locale, string>>,
  },

  /** Angaben für das Impressum (§ 5 DDG). Vor Veröffentlichung vollständig ausfüllen. */
  legal: {
    ownerOrCompany: ph('owner'),
    representative: ph('representative'),
    street: ph('street'),
    postalCodeCity: ph('city'),
    country: { de: 'Deutschland', tr: 'Almanya', en: 'Germany' } as Record<Locale, string>,
    /** Leer lassen ('') oder Platzhalter entfernen, wenn nicht vorhanden. */
    vatId: ph('vatId') as string,
    register: '' as string,
    /** Nur, wenn § 18 Abs. 2 MStV zutrifft; sonst auf '' setzen. */
    contentResponsible: '' as string,
  },

  /** Angaben für die Datenschutzerklärung. */
  privacy: {
    hostingProvider: ph('hostingProvider'),
    hostingLocation: ph('hostingLocation'),
    /** Wie das Anfrageformular zugestellt wird (eigener Server, externer Dienst …). */
    formProcessor: ph('formProcessor'),
    /** Rechtsgrundlage der Übermittlung an Calendly in die USA. */
    bookingTransfer: ph('bookingTransfer'),
    lastUpdated: ph('privacyUpdated'),
  },

  /**
   * Kurzvorstellung für „Über aetheron“, je Sprache. Bitte nur echte Angaben (keine erfundenen
   * Qualifikationen). Fehlt eine Sprache, erscheint dort der Platzhalter.
   */
  about: {
    text: {} as Partial<Record<Locale, string>>,
  },

  /**
   * Referenzen / Projektbeispiele. Nur echte, freigegebene Projekte eintragen.
   * Solange die Liste leer ist, wird kein Referenzbereich angezeigt.
   */
  references: [] as Array<{
    title: string;
    client: string;
    summary: Partial<Record<Locale, string>>;
    url?: string;
  }>,
};

export type Site = typeof site;
