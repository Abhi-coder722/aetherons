import { test, expect } from '@playwright/test';
import { getMessages, routePath, type Locale } from '../../src/i18n';

// Diese Tests laufen gegen den mitgelieferten Server (server/) mit dem Build für /api/inquiry.
// Die Zustellung geht an SMTP_URL=console (keine echte E-Mail).

for (const locale of ['de', 'tr', 'en'] as Locale[]) {
  const f = getMessages(locale).form;
  test(`echter Ablauf über den Server: Anfrage wird angenommen (${locale})`, async ({ page }) => {
    await page.goto(`${routePath('contact', locale)}?topic=shop`);
    await expect(page.locator('form[data-contact-form]')).toHaveAttribute('action', '/api/inquiry');
    await page.locator('#name').fill('Erika Mustermann');
    await page.locator('#email').fill('erika@example.de');
    await page.locator('#shopContext').fill('Laden und Markt');
    await page.locator('#message').fill('Wir möchten zusätzlich online verkaufen.');
    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().endsWith('/api/inquiry')),
      page.getByRole('button', { name: f.submit }).click(),
    ]);
    expect(response.status()).toBe(200);
    await expect(page.locator('[data-success]')).toBeVisible();
  });

  test(`serverseitige Validierung greift auch ohne Browserprüfung (${locale})`, async ({
    request,
    baseURL,
  }) => {
    const res = await request.post('/api/inquiry', {
      data: { name: '', email: 'x', message: '', locale },
      headers: { Origin: baseURL!, Accept: 'application/json' },
    });
    expect(res.status()).toBe(422);
    expect((await res.json()).errors.name).toBe('nameRequired');
  });
}

test('fremde Herkunft wird abgelehnt', async ({ request }) => {
  const res = await request.post('/api/inquiry', {
    data: { name: 'A', email: 'a@b.de', message: 'Nachricht lang genug' },
    headers: { Origin: 'https://evil.example', Accept: 'application/json' },
  });
  expect(res.status()).toBe(403);
});

test('Formular ohne JavaScript: Server liefert lokalisierte Ergebnisseite', async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  await page.goto('/tr/iletisim/');
  await page.locator('#name').fill('Erika Mustermann');
  await page.locator('#email').fill('erika@example.de');
  await page.locator('#message').fill('Web sitemizi yenilemek istiyoruz, lütfen bilgi verin.');
  await page.locator('[data-submit]').focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/api\/inquiry$/);
  await expect(page.locator('h1')).toContainText('Teşekkürler');
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
  await context.close();
});

test('Server liefert Sicherheits-Header und Healthcheck', async ({ request }) => {
  const res = await request.get('/');
  expect(res.headers()['content-security-policy']).toContain("default-src 'self'");
  expect(res.headers()['x-content-type-options']).toBe('nosniff');
  expect((await request.get('/healthz')).status()).toBe(200);
  expect((await request.get('/nicht-da/')).status()).toBe(404);
});
