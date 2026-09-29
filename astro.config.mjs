// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

/**
 * Absolute, öffentliche Basis-URL der Website (ohne abschließenden Slash).
 * Wird für Canonicals, hreflang, Open Graph, sitemap.xml und robots.txt verwendet.
 * Vor dem Livegang setzen: PUBLIC_SITE_URL=https://www.ihre-domain.de
 */
const FALLBACK_SITE_URL = 'https://www.aetherons.de';
const site = (env.PUBLIC_SITE_URL || FALLBACK_SITE_URL).replace(/\/+$/, '');

if (!env.PUBLIC_SITE_URL) {
  console.warn(
    `\n[aetheron] PUBLIC_SITE_URL ist nicht gesetzt – verwende Platzhalter ${FALLBACK_SITE_URL}. ` +
      'Vor dem Livegang die echte Domain setzen.\n',
  );
}

export default defineConfig({
  site,
  // Separates Ausgabeverzeichnis für End-to-End-Tests, damit dist/ unberührt bleibt.
  outDir: env.ASTRO_OUT_DIR || './dist',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: false,
  // Sprachrouting übernimmt src/i18n/routes.ts (lokalisierte Pfade); hier nur die Grunddaten.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  redirects: {
    // Frühere Adressen (v2 ohne Sprachen) auf die neuen Seiten leiten.
    '/leistungen/': '/',
    '/leistungen/websites/': '/webentwicklung/',
    '/leistungen/daten-und-automatisierung/': '/daten-digitalisierung/',
  },
});
