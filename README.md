# aetheron – Website (de / tr / en)

Marketing-Website für **aetheron**: Webentwicklung, individuelle Online-Shops, Kassensystem-/POS-Anbindung
(Machbarkeit je Hersteller geprüft, keine pauschalen Versprechen) und datenbasierte Digitalisierung für kleine
Unternehmen in Deutschland. Sprachen: Deutsch (Standard), Türkisch, Englisch – alle vollständig.

> Stand der Rechtstexte: **Entwürfe mit Platzhaltern**, keine Rechtsberatung. Siehe `LAUNCH-CHECKLIST.md`
> und `docs/LEGAL-READINESS.md`. `npm run check:launch` blockiert den Livegang, solange Platzhalter im Build stehen.

## Stack

Astro 7 (statisch, TypeScript strict) · Vitest · Playwright + axe · ESLint/Prettier · optionaler Node-Server (`server/`)
für Formular-Zustellung und Auslieferung mit Sicherheits-Headern. Node ≥ 22.18 (`.nvmrc` = 22).

## Schnellstart

```bash
npm ci
cp .env.example .env      # Werte anpassen (siehe unten)
npm run dev               # http://localhost:4321
npm run verify            # lint + check + Unit-Tests + Build + E2E
npm run build && npm run serve   # Produktions-Build über den mitgelieferten Server
```

## Struktur

| Pfad                        | Inhalt                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `src/i18n/`                 | Typisierte Kataloge (`de.ts` ist Referenz, `tr.ts`/`en.ts` müssen dieselbe Form haben), Routen, lokalisierte Slugs |
| `src/pages/[...slug].astro` | Eine dynamische Route erzeugt alle Sprache × Seite-Kombinationen aus der Routen-Registry                           |
| `src/views/`                | Seitenansichten (Home, Leistungen, Ablauf, Über uns, FAQ, Kontakt, Impressum, Datenschutz)                         |
| `src/components/`           | Header/Footer, Sprachumschalter, Sprachhinweis, Kontaktformular, Platzhalter-Darstellung                           |
| `src/content/site.ts`       | Kontakt- und Rechtsangaben; `ph('key')` markiert Platzhalter                                                       |
| `src/lib/`                  | `validation.ts` (client + server geteilt), `env.ts`, `seo.ts`                                                      |
| `server/`                   | Optionaler Server: `/api/inquiry`, `/healthz`, statische Auslieferung mit `dist/_headers`                          |
| `tests/unit`, `tests/e2e`   | Vitest (54) und Playwright (Desktop + Mobil, statisch + Server)                                                    |
| `scripts/check-launch.mjs`  | Launch-Gate (Platzhalter, Entwurfshinweise, fehlende Konfiguration)                                                |

## Mehrsprachigkeit

- URLs: `/` (de), `/tr/…`, `/en/…` mit lokalisierten Slugs (z. B. `/kassensystem-anbindung/`, `/tr/kasa-sistemi-entegrasyonu/`, `/en/pos-integration/`).
- `lang`, `hreflang` (inkl. `x-default` = Deutsch), Canonicals, `og:locale`, sprachspezifische OG-Bilder, `sitemap.xml` mit Alternativen.
- Der Sprachumschalter führt auf die **gleichwertige Seite**. Keine IP-Weiterleitung, kein Cloaking. Der Sprachhinweis (Banner) erscheint nur beim Einstieg von außen bei abweichender Browsersprache, leitet nie automatisch um, ist schließbar und speichert nichts.
- Rechtsseiten sind `noindex` und nicht in der Sitemap. Übersetzungen der Rechtstexte sind Arbeitsfassungen; maßgeblich ist die deutsche Fassung, bis Rechtsberatung etwas anderes festlegt.
- Neue Sprache/Seite: Katalog ergänzen (TypeScript meldet fehlende Schlüssel), Slug in `routes.ts` eintragen, `npm test`.

## Anfrageformular („Projekt besprechen“)

Ort: `/kontakt/` (tr `/tr/iletisim/`, en `/en/contact/`), jede CTA verlinkt dorthin (mit `?topic=…`).
Themen: Website, Online-Shop, POS-Anbindung, Daten/Digitalisierung, Unsicher. Optionale themenabhängige Felder
(u. a. POS-Anbieter/Modell/Version). Pflicht: Name, E-Mail, Nachricht – keine Telefonnummer, kein Konto.
Validierung clientseitig (Fehlerübersicht, Fokus) **und serverseitig**; Erfolg wird nur bei bestätigter Zustellung gezeigt.

`PUBLIC_FORM_ENDPOINT` (Build-Zeit):

| Wert           | Verhalten                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `/api/inquiry` | Eigener Server (`npm run serve`): Origin-Prüfung, Honeypot, Rate-Limit, SMTP-Zustellung, 503 `not_configured` ohne SMTP |
| `https://…`    | Externer Formular-Dienst (multipart POST); `form-action` in `public/_headers` anpassen                                  |
| leer           | Kein Formular; stattdessen E-Mail-Kontakt (mailto)                                                                      |

Die aktuelle Konfiguration verwendet `/api/inquiry` und Zoho Mail EU. `npm run dev` stellt den Endpunkt lokal bereit;
für den Produktivbetrieb zuerst `npm run build` und danach `npm run serve` starten. Benötigt werden `SMTP_HOST`,
`SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER` und `SMTP_PASS` (oder alternativ `SMTP_URL`). Geheimnisse gehören nur in `.env`
bzw. die Secret-Verwaltung des Hosters. Rein statisches Hosting kann `/api/inquiry` nicht ausführen.

## Terminbuchung (Calendly)

`PUBLIC_CALENDLY_URL_DE`, `PUBLIC_CALENDLY_URL_TR`, `PUBLIC_CALENDLY_URL_EN` steuern die direkten Event-Links
(`https://calendly.com/<konto>/<event-slug>`). Keine Profil-URL ohne Event-Slug verwenden, da sie alle öffentlichen
Termine des Kontos zeigt. Es werden nur `https://calendly.com/…`-Links akzeptiert. `PUBLIC_CALENDLY_URL` ist ein
optionaler Fallback; Türkisch nutzt den englischen
Link, falls `PUBLIC_CALENDLY_URL_TR` leer ist. Es wird **nichts von Calendly geladen**, bevor jemand klickt (nur ein Link,
`rel="noopener noreferrer"`, neuer Tab). Vor dem Klick steht der Hinweis, welche Daten Calendly verarbeitet. Ist
mindestens eine URL gesetzt, erscheint der Datenschutz-Abschnitt „Terminbuchung“ (`#terminbuchung`) automatisch;
Rechtsgrundlage der Drittlandübermittlung ist ein **Platzhalter** (`bookingTransfer`). Leer = kein Buchungsblock.
Cal.com wird nicht mehr verwendet.

## Datenschutz & Sicherheit

Keine Cookies, kein Tracking, keine externen Fonts/Skripte (Schriften self-hosted). CSP, HSTS, `nosniff`,
`frame-ancestors 'none'` etc. in `public/_headers` (Netlify/Cloudflare), `public/.htaccess` (Apache) und über den
mitgelieferten Server. Logs enthalten keine personenbezogenen Daten. Es gibt keine Geheimnisse im Repository.

## Tests

`npm test` – 54 Unit-/Serverhandler-Tests (Katalog-Parität, Platzhalter, Validierung, SEO, Server).
`npm run test:e2e` – baut zwei Varianten und prüft alle 33 Seiten × 3 Sprachen auf Desktop und Mobil (Pixel 7):
Metadaten/hreflang/JSON-LD, axe (WCAG 2.2 AA), Überlauf, Links/Anker, Sitemap/robots, Sprachumschalter, Menü, Sprachhinweis,
Formular (Fehler, Erfolg, Fehlschlag, Netzwerkfehler, POS, Honeypot, ohne JS), Calendly-Hinweis, Server-Roundtrip.
Lokal mit vorinstalliertem Chromium: `PLAYWRIGHT_CHROMIUM_PATH=/pfad/zu/chrome npm run test:e2e`.

## Deployment

Siehe `LAUNCH-CHECKLIST.md`. Kurz: (1) `.env` bzw. Hosting-Variablen setzen, (2) `npm run build`,
(3) `npm run check:launch` muss grün sein, (4) `dist/` statisch hosten **oder** `npm run serve` hinter TLS-Proxy betreiben,
(5) manuelle Abnahme (Checkliste), (6) Search Console: `sitemap.xml` einreichen.
# aetherons
# aetherons
