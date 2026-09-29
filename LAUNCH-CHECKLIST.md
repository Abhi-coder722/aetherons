# Launch-Checkliste aetheron

`npm run check:launch` (nach `npm run build`) muss ohne Fehler enden. Es findet Platzhalter in allen drei Sprachen
und die Entwurfshinweise der Rechtsseiten.

## 1. Blockierende Platzhalter

| Schlüssel / Variable                     | Verwendet in                              | Erforderlicher Wert                                                                         | Verantwortlich / Quelle                          | Blockiert Livegang?             | Prüfung                                  |
| ---------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------- | ---------------------------------------- |
| `owner`                                  | Impressum, Datenschutz                    | Vor- und Nachname bzw. Firma mit Rechtsform                                                 | Inhaber/in, Handelsregister/Gewerbeanmeldung     | **Ja**                          | `check:launch`, Impressum ansehen        |
| `representative`                         | Impressum                                 | Vertretungsberechtigte Person (nur bei Gesellschaft)                                        | Handelsregister                                  | Ja (bei Gesellschaft)           | dito                                     |
| `street`, `city`                         | Impressum, Datenschutz                    | Ladungsfähige Anschrift (kein Postfach)                                                     | Inhaber/in                                       | **Ja**                          | dito                                     |
| `vatId`                                  | Impressum                                 | USt-IdNr. nach § 27a UStG **oder** Zeile entfernen                                          | Finanzamt-Bescheid                               | Ja                              | dito                                     |
| `hostingProvider`, `hostingLocation`     | Datenschutz                               | Anbieter, Adresse, Serverstandort                                                           | Hosting-Vertrag / AV-Vertrag                     | **Ja**                          | dito                                     |
| `formProcessor`                          | Datenschutz                               | Übermittlungsweg des Formulars, Anbieter, Sitz, ggf. Drittlandgrundlage                     | Gewählter Dienst / eigener SMTP-Anbieter         | **Ja** (wenn Formular aktiv)    | dito                                     |
| `bookingTransfer`                        | Datenschutz (nur wenn Calendly aktiv)     | Grundlage der Drittlandübermittlung (z. B. Angemessenheitsbeschluss/SCC), Stand der Prüfung | Calendly-Vertragsunterlagen, Datenschutzberatung | **Ja** (wenn Calendly aktiv)    | dito                                     |
| `privacyUpdated`                         | Datenschutz                               | Datum der Fassung (Monat/Jahr)                                                              | Nach rechtlicher Prüfung                         | **Ja**                          | dito                                     |
| `about` (Über uns)                       | Über aetheron                             | 2–3 belegbare Sätze zu den Personen hinter aetheron                                         | Inhaber/in                                       | Ja                              | `check:launch`                           |
| `PUBLIC_SITE_URL`                        | Canonicals, hreflang, Sitemap, robots, OG | Echte https-Domain ohne Slash                                                               | Domain-Inhaber                                   | **Ja**                          | `curl /sitemap.xml` enthält echte Domain |
| `PUBLIC_FORM_ENDPOINT`                   | Kontaktformular                           | `/api/inquiry` oder https-URL; leer = nur E-Mail                                            | Betrieb                                          | Nein (Fallback mailto), Warnung | Formular testen (Abschnitt 3)            |
| `PUBLIC_CALENDLY_URL_DE/TR/EN`           | Termin-Block, Datenschutz                 | `https://calendly.com/<konto>/<termin>`                                                     | Calendly-Konto                                   | Nein (Block entfällt)           | Links je Sprache öffnen                  |
| `SMTP_*`, `INQUIRY_TO`, `INQUIRY_FROM`   | Server                                    | SMTP-Zugang, Empfänger, Absender (SPF/DKIM eingerichtet)                                    | Betrieb / Mail-Anbieter                          | Ja (bei `/api/inquiry`)         | Testanfrage kommt an                     |
| `contact.email` in `src/content/site.ts` | Footer, Kontakt, Impressum                | Bestätigte Kontakt-Adresse (übernommen: `kontakt@aetherons.de`)                             | Inhaber/in                                       | Ja – bestätigen                 | Testmail                                 |
| Telefonnummer                            | –                                         | Optional; nicht erforderlich                                                                | –                                                | Nein                            | –                                        |

Die Legal-Texte tragen den Entwurfshinweis; er wird erst nach **anwaltlicher Prüfung** entfernt (Komponente `LegalDraftNotice`).
Referenzen, Kundenlogos, Bewertungen und Fallstudien sind bewusst **nicht** vorhanden (`references: []`) und werden nur
mit belegbarer Freigabe ergänzt.

## 2. Nächste Schritte (Reihenfolge)

1. Domain, Hosting und Auslieferungsart wählen (statisch oder `npm run serve`); AV-Vertrag abschließen.
2. Platzhalter aus Abschnitt 1 ersetzen (`src/content/site.ts`, `.env`).
3. Rechtstexte durch eine Rechtsberatung prüfen lassen (Impressum, Datenschutz inkl. Formular/Calendly/Hosting); Entwurfshinweise entfernen; tr/en-Fassungen freigeben.
4. Mail-Zustellung einrichten (SMTP, SPF/DKIM/DMARC), Testanfrage in allen drei Sprachen.
5. Calendly: Konto, Termin-Typen je Sprache, Datenfelder minimieren, EU-Datenverarbeitung/Grundlage klären, URLs setzen.
6. `npm run verify` und `npm run check:launch` grün.
7. Manuelle Abnahme (Abschnitt 3), Domain umschalten, Header prüfen (securityheaders.com o. Ä.), HTTPS erzwingen.
8. Search Console/Bing: Sitemap einreichen; hreflang-Bericht prüfen.
9. Muttersprachliche Korrektur der türkischen und englischen Texte.

## 3. Manuelle Abnahme (je Sprache de / tr / en, Desktop und Handy)

- [ ] Startseite, 4 Leistungsseiten, Arbeitsweise, Über uns, FAQ, Kontakt, Impressum, Datenschutz laden ohne Fehler.
- [ ] Sprachumschalter bleibt auf der gleichwertigen Seite; Tastaturbedienung; Menü auf dem Handy.
- [ ] Sprachhinweis: erscheint nur bei abweichender Browsersprache, leitet nicht um, lässt sich schließen.
- [ ] „Projekt besprechen“ führt zum Formular; Thema vorausgewählt; POS-Felder erscheinen bei POS.
- [ ] Leeres Formular: verständliche Fehler, Fokus auf Fehlerübersicht; gültige Anfrage kommt **wirklich** im Postfach an; Fehler zeigen keinen Erfolg.
- [ ] Terminlink: Hinweis vor dem Klick, öffnet Calendly in neuem Tab, Datenschutz-Abschnitt vorhanden.
- [ ] Kein Cookie-Banner nötig: Dev-Tools → keine Cookies/Storage/externen Anfragen (außer nach Klick auf Calendly).
- [ ] Keine Platzhalter sichtbar, keine „garantiert“-Aussagen, keine erfundenen Referenzen.
- [ ] Zoom 200 % und Text-Abstände ohne Überlappung; Screenreader-Stichprobe (Formular, Menü).
