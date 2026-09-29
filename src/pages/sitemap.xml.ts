import type { APIRoute } from 'astro';
import { alternates, isIndexable } from '../lib/seo';
import { allRoutes } from '../i18n';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/**
 * Eigene Sitemap: je Sprache ein Eintrag mit hreflang-Alternativen (inklusive x-default).
 * Nicht indexierbare Seiten (Rechtsseiten-Entwürfe) und 404 fehlen bewusst. Kein lastmod,
 * solange es keine belegbare Änderungshistorie gibt.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site!;
  const entries = allRoutes()
    .filter((r) => isIndexable(r.key))
    .map((r) => {
      const links = alternates(r.key, base)
        .map(
          (a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}"/>`,
        )
        .join('\n');
      return `  <url>\n    <loc>${esc(new URL(r.path, base).toString())}</loc>\n${links}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
