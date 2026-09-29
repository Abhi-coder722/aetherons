/**
 * Prüft den Build (dist/) auf Dinge, die vor dem Livegang erledigt sein müssen:
 * übrig gebliebene Platzhalter (in allen drei Sprachen), Entwurfshinweise in Rechtstexten,
 * fehlende Site-URL, Formular- und Terminbuchungs-Konfiguration.
 * Nutzung: npm run build && npm run check:launch
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve(process.env.DIST_DIR || 'dist');
const problems = [];
const warnings = [];

const PLACEHOLDER = /\[(?:Platzhalter|Placeholder|Yer tutucu): [^\]]*\]/g;
const DRAFT =
  /Entwurf – vor Veröffentlichung prüfen lassen|Draft – have this reviewed|Taslak – yayımlamadan önce/;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(full, 'utf8');
      const rel = path.relative(dist, full);
      for (const p of new Set(html.match(PLACEHOLDER) ?? [])) problems.push(`${rel}: ${p}`);
      if (DRAFT.test(html))
        problems.push(`${rel}: Entwurfshinweis (LegalDraftNotice) noch vorhanden`);
      if (
        /hreflang/.test(html) === false &&
        !/noindex/.test(html) &&
        !/404\.html$/.test(rel) &&
        !/^leistungen/.test(rel)
      )
        warnings.push(`${rel}: keine hreflang-Verweise gefunden`);
    }
  }
}

try {
  await walk(dist);
} catch {
  console.error('dist/ nicht gefunden. Bitte zuerst "npm run build" ausführen.');
  process.exit(1);
}

if (!process.env.PUBLIC_SITE_URL)
  problems.push('PUBLIC_SITE_URL ist nicht gesetzt (Canonicals/Sitemap nutzen den Platzhalter).');
if (!process.env.PUBLIC_FORM_ENDPOINT)
  warnings.push('PUBLIC_FORM_ENDPOINT ist leer: Die Kontaktseite zeigt nur einen E-Mail-Button.');
if (
  !process.env.PUBLIC_CALENDLY_URL &&
  !process.env.PUBLIC_CALENDLY_URL_DE &&
  !process.env.PUBLIC_CALENDLY_URL_TR &&
  !process.env.PUBLIC_CALENDLY_URL_EN
)
  warnings.push(
    'PUBLIC_CALENDLY_URL(_DE/_TR/_EN) ist leer: Kein Terminbuchungs-Link, kein Calendly-Abschnitt in der Datenschutzerklärung.',
  );

if (warnings.length) {
  console.warn(`\nHinweise (${warnings.length}):`);
  for (const w of warnings) console.warn(`  • ${w}`);
}
if (problems.length) {
  console.error(`\n${problems.length} offene Punkte vor dem Livegang:\n`);
  for (const p of problems) console.error(`  • ${p}`);
  console.error('');
  process.exit(1);
}
console.log('\nKeine Platzhalter gefunden. Bereit für die finale Prüfung.');
