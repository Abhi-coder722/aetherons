# Changelog

## 3.0.0

- Mehrsprachig: Deutsch (Standard), Türkisch, Englisch mit lokalisierten URLs, hreflang/x-default, lokalisierter Sitemap, OG-Bildern.
- Sprachumschalter (gleichwertige Seite) und optionaler, überschreibbarer Sprachhinweis ohne Weiterleitung.
- Neue Leistungsseiten: Webentwicklung, Online-Shops, Kassensystem-Anbindung (Machbarkeit je Hersteller), Daten & Digitalisierung; alte `/leistungen/*`-URLs leiten weiter.
- Kontaktformular mit Themenwahl, POS-Feldern, Fehlerübersicht, serverseitiger Validierung und ohne Fake-Erfolg; optionaler Server (`server/`).
- Cal.com ersetzt durch Calendly (Link-only) mit Datenhinweis vor dem Klick und bedingtem Datenschutz-Abschnitt.
- Rechtstexte als Entwürfe mit dreisprachigen Platzhaltern; `check:launch` blockiert den Livegang.
- Tests: 54 Unit-, 253 E2E-Tests (Desktop + Mobil, axe). Keine erfundenen Referenzen oder Kundenangaben.
- Entfernt: `@astrojs/sitemap` (Slug-Lokalisierung), alte deutschsprachige-only Seiten.

## 2.x

Siehe Git-Historie der Vorgängerversion (rein deutschsprachige Website).
