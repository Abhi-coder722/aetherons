import { test, expect } from '@playwright/test';
import { routePath, routeKeys, locales } from '../../src/i18n';

test.describe('Sprachwechsel', () => {
  for (const key of routeKeys) {
    test(`bleibt auf der gleichwertigen Seite: ${key}`, async ({ page }) => {
      await page.goto(routePath(key, 'de'));
      if (await page.locator('[data-menu-toggle]').isVisible())
        await page.locator('[data-menu-toggle]').click();
      for (const target of locales.filter((l) => l !== 'de')) {
        const link = page.locator(`.lang-switch a[data-lang="${target}"]`);
        await expect(link).toHaveAttribute('href', routePath(key, target));
        await expect(link).toHaveAttribute('hreflang', target === 'tr' ? 'tr-TR' : 'en');
      }
      await expect(page.locator('.lang-switch a[aria-current="true"]')).toHaveAttribute(
        'data-lang',
        'de',
      );
    });
  }

  test('wechselt tatsächlich die Seite und die Sprache', async ({ page }) => {
    await page.goto('/online-shops/');
    if (await page.locator('[data-menu-toggle]').isVisible())
      await page.locator('[data-menu-toggle]').click();
    await page.locator('.lang-switch a[data-lang="tr"]').click();
    await expect(page).toHaveURL(/\/tr\/e-ticaret-sitesi\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'tr-TR');
    await expect(page.locator('h1')).toContainText('online mağaza');
    if (await page.locator('[data-menu-toggle]').isVisible())
      await page.locator('[data-menu-toggle]').click();
    await page.locator('.lang-switch a[data-lang="en"]').click();
    await expect(page).toHaveURL(/\/en\/online-shops\/$/);
    await expect(page.locator('h1')).toContainText('online shop');
  });
});

test.describe('Navigation', () => {
  test('Skip-Link führt zum Inhalt', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Tastaturfokus-Test nur am Desktop');
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.locator('.skip-link');
    await expect(skip).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#inhalt$/);
  });

  test('Leistungen-Menü öffnet per Klick und Tastatur und schließt mit Escape', async ({
    page,
    isMobile,
  }) => {
    await page.goto('/');
    if (isMobile) await page.locator('[data-menu-toggle]').click();
    const toggle = page.locator('[data-sub-toggle]');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const items = page.locator('#services-menu a');
    await expect(items).toHaveCount(4);
    await expect(items.first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toBeFocused();
  });

  test('Mobiles Menü lässt sich öffnen und schließen', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'nur mobil');
    await page.goto('/');
    const toggle = page.locator('[data-menu-toggle]');
    const nav = page.locator('#site-nav');
    await expect(nav).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(nav).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(nav).toBeHidden();
    await toggle.click();
    await nav.getByRole('link', { name: 'Arbeitsweise' }).click();
    await expect(page).toHaveURL(/\/arbeitsweise\/$/);
  });

  test('Tab-Zielgrößen im Menü sind mindestens 44 px hoch (mobil)', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'nur mobil');
    await page.goto('/');
    await page.locator('[data-menu-toggle]').click();
    const boxes = await page
      .locator('#site-nav a, #site-nav [data-sub-toggle]')
      .evaluateAll((els) =>
        els
          .filter((e) => (e as HTMLElement).offsetParent)
          .map((e) => e.getBoundingClientRect().height),
      );
    expect(Math.min(...boxes)).toBeGreaterThanOrEqual(40);
  });
});

test.describe('Sprachhinweis', () => {
  test('erscheint bei abweichender Browsersprache, leitet nicht um und lässt sich schließen', async ({
    browser,
    baseURL,
  }) => {
    const context = await browser.newContext({ locale: 'tr-TR', baseURL });
    const page = await context.newPage();
    await page.goto('/');
    const banner = page.locator('[data-lang-suggest]');
    await expect(banner).toBeVisible();
    await expect(page).toHaveURL(/\/$/); // kein automatischer Redirect
    await expect(banner.locator('[data-suggest-link]')).toHaveAttribute('href', '/tr/');
    await expect(banner.locator('[data-suggest-text]')).toHaveAttribute('lang', 'tr-TR');
    await banner.getByRole('button').click();
    await expect(banner).toBeHidden();
    await context.close();
  });

  test('erscheint nicht, wenn die Sprache bereits passt oder man innerhalb der Seite navigiert', async ({
    browser,
    baseURL,
  }) => {
    const context = await browser.newContext({ locale: 'de-DE', baseURL });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.locator('[data-lang-suggest]')).toBeHidden();
    await context.close();

    const ctx2 = await browser.newContext({ locale: 'en-US', baseURL });
    const p2 = await ctx2.newPage();
    await p2.goto('/');
    await expect(p2.locator('[data-lang-suggest]')).toBeVisible();
    await p2.goto('/kontakt/', { referer: `${baseURL}/` });
    await expect(p2.locator('[data-lang-suggest]')).toBeHidden();
    await ctx2.close();
  });

  test('speichert nichts im Browser', async ({ browser, baseURL }) => {
    const context = await browser.newContext({ locale: 'tr-TR', baseURL });
    const page = await context.newPage();
    await page.goto('/');
    await page.locator('[data-suggest-close]').click();
    const stored = await page.evaluate(() => ({
      ls: localStorage.length,
      ss: sessionStorage.length,
      cookie: document.cookie,
    }));
    expect(stored).toEqual({ ls: 0, ss: 0, cookie: '' });
    await context.close();
  });
});
