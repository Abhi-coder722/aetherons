import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { collectConsoleErrors, routes } from './helpers';
import { alternates } from '../../src/lib/seo';
import { localeMeta } from '../../src/i18n/locales';
import { noindexRoutes } from '../../src/i18n/routes';

const BASE = 'https://www.example.de';

for (const route of routes) {
  test.describe(`${route.locale} ${route.path}`, () => {
    test('Metadaten, Sprache, Überschrift, hreflang, keine Konsolenfehler', async ({ page }) => {
      const errors = collectConsoleErrors(page);
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('html')).toHaveAttribute('lang', localeMeta[route.locale].htmlLang);
      await expect(page.locator('h1')).toHaveCount(1);
      expect((await page.title()).length).toBeGreaterThan(8);
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description?.length ?? 0).toBeGreaterThan(30);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `${BASE}${route.path}`,
      );
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
        'content',
        localeMeta[route.locale].og,
      );
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        `${BASE}/og-image-${route.locale}.png`,
      );

      const indexable = !noindexRoutes.has(route.key);
      if (indexable) {
        const links = await page
          .locator('link[rel="alternate"][hreflang]')
          .evaluateAll((els) =>
            els.map((e) => [e.getAttribute('hreflang'), e.getAttribute('href')]),
          );
        expect(links).toEqual(alternates(route.key, BASE).map((a) => [a.hreflang, a.href]));
        await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
      } else {
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
      }

      const jsonLd = JSON.parse(
        (await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}',
      );
      expect(jsonLd['@context']).toBe('https://schema.org');
      expect(
        jsonLd['@graph'].find((n: { '@type': string }) => n['@type'] === 'WebSite').inLanguage,
      ).toBe(localeMeta[route.locale].htmlLang);

      // Keine horizontale Scrollleiste, keine sichtbaren Platzhalter-Reste außer in Rechtsseiten.
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
      if (indexable)
        await expect(page.locator('.placeholder:not(.legal *)')).toHaveCount(
          route.key === 'about' ? 1 : 0,
        );
      expect(errors).toEqual([]);
    });

    test('keine automatisch erkennbaren Barrierefreiheitsfehler (WCAG 2.2 AA)', async ({
      page,
    }) => {
      await page.goto(route.path);
      await page.emulateMedia({ reducedMotion: 'reduce' });
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
        .analyze();
      expect(
        results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`),
      ).toEqual([]);
    });
  });
}

test('404-Seite: Status 404, dreisprachig, noindex nicht nötig aber erreichbar', async ({
  page,
}) => {
  const response = await page.goto('/gibt-es-nicht/');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('404');
  for (const lang of ['de-DE', 'tr-TR', 'en'])
    await expect(page.locator(`.nf[lang="${lang}"]`)).toBeVisible();
});

test('robots.txt und Sitemap: hreflang-Alternativen, keine Rechtsseiten, keine Redirect-Seiten', async ({
  request,
}) => {
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toContain(`Sitemap: ${BASE}/sitemap.xml`);
  const xml = await (await request.get('/sitemap.xml')).text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const indexable = routes.filter((r) => !noindexRoutes.has(r.key));
  expect(locs.sort()).toEqual(indexable.map((r) => `${BASE}${r.path}`).sort());
  expect(xml).toContain('hreflang="x-default"');
  expect(xml).toContain('hreflang="tr-TR"');
  expect(xml).not.toMatch(/impressum|datenschutz|legal-notice|veri-koruma|\/privacy\//);
  expect(xml).not.toContain('/leistungen/');
});

test('alle internen Links führen zu existierenden Seiten', async ({ page, request }) => {
  const seen = new Set<string>();
  for (const route of routes) {
    await page.goto(route.path);
    const hrefs = await page
      .locator('a[href]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
    for (const href of hrefs) {
      if (/^(mailto:|tel:|https?:)/.test(href) || href.startsWith('#')) continue;
      const target = href.split('#')[0]!.split('?')[0]!;
      if (!target || seen.has(target)) continue;
      seen.add(target);
      const res = await request.get(target);
      expect(res.status(), `${route.path} → ${href}`).toBe(200);
    }
  }
  expect(seen.size).toBeGreaterThan(20);
});

test('Anker-Ziele innerhalb einer Seite existieren', async ({ page }) => {
  for (const route of routes) {
    await page.goto(route.path);
    const ids = await page
      .locator('a[href^="#"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href')!.slice(1)).filter(Boolean));
    for (const id of new Set(ids))
      await expect(page.locator(`[id="${id}"]`), `${route.path}#${id}`).toHaveCount(1);
  }
});

test('alte Adressen (v2) leiten weiter', async ({ page }) => {
  await page.goto('/leistungen/websites/');
  await page.waitForURL('**/webentwicklung/');
  await expect(page.locator('h1')).toBeVisible();
});

test('externe Links sind sicher gesetzt und Calendly lädt nichts beim Seitenaufruf', async ({
  page,
}) => {
  const external: string[] = [];
  page.on('request', (req) => {
    const host = new URL(req.url()).hostname;
    if (host !== 'localhost') external.push(host);
  });
  await page.goto('/kontakt/');
  await page.waitForLoadState('networkidle');
  expect(external.filter((h) => !/example\.test/.test(h))).toEqual([]);
  const link = page.locator('[data-booking-link]');
  await expect(link).toHaveAttribute('rel', /noopener/);
  await expect(link).toHaveAttribute('target', '_blank');
});
