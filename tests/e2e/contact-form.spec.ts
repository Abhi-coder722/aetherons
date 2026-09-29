import { test, expect, type Page } from '@playwright/test';
import { getMessages, routePath, type Locale } from '../../src/i18n';

const ENDPOINT = 'https://forms.example.test/submit';
const locales: Locale[] = ['de', 'tr', 'en'];
const bookingHref: Record<Locale, string> = {
  de: 'https://calendly.com/example-test/de-30min',
  tr: 'https://calendly.com/example-test/en-30min',
  en: 'https://calendly.com/example-test/en-30min',
};

async function fillValid(page: Page, locale: Locale) {
  const f = getMessages(locale).form;
  await page.getByLabel(f.name, { exact: false }).first().fill('Erika Mustermann');
  await page.locator('#email').fill('erika@example.de');
  await page.locator('#message').fill('Wir möchten unsere Website überarbeiten lassen.');
  return f;
}

for (const locale of locales) {
  const t = getMessages(locale);
  const f = t.form;
  const path = routePath('contact', locale);

  test.describe(`Kontaktformular (${locale})`, () => {
    test('zeigt lokalisierte Fehler, Fehlerübersicht mit Fokus und sendet nichts', async ({
      page,
    }) => {
      let requests = 0;
      await page.route(ENDPOINT, (route) => {
        requests++;
        return route.fulfill({ status: 200, body: '{}' });
      });
      await page.goto(path);
      await page.getByRole('button', { name: f.submit }).click();

      const summary = page.locator('[data-error-summary]');
      await expect(summary).toBeVisible();
      await expect(summary).toBeFocused();
      await expect(summary.getByRole('heading')).toHaveText(f.errorSummaryTitle);
      await expect(summary.getByRole('listitem')).toHaveCount(3);
      await expect(page.locator('#name-error')).toHaveText(f.errors.nameRequired);
      await expect(page.locator('#email-error')).toHaveText(f.errors.emailRequired);
      await expect(page.locator('#message-error')).toHaveText(f.errors.messageRequired);
      await expect(page.locator('#email')).toHaveAttribute('aria-invalid', 'true');
      expect(requests).toBe(0);

      await summary.getByRole('link', { name: f.errors.emailRequired }).click();
      await expect(page.locator('#email')).toBeFocused();

      await page.locator('#email').fill('kaputt');
      await page.locator('#email').blur();
      await expect(page.locator('#email-error')).toHaveText(f.errors.emailInvalid);
    });

    test('zeigt Erfolg nur nach bestätigter Übermittlung und sendet die Angaben', async ({
      page,
    }) => {
      let body = '';
      await page.route(ENDPOINT, async (route) => {
        body = route.request().postData() ?? '';
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '{"success":"true"}',
        });
      });
      await page.goto(path);
      await fillValid(page, locale);
      await page.getByRole('button', { name: f.submit }).click();

      const success = page.locator('[data-success]');
      await expect(success).toBeVisible();
      await expect(success).toBeFocused();
      await expect(success).toContainText(f.successTitle);
      expect(body).toContain('erika@example.de');
      expect(body).toContain(`name="locale"\r\n\r\n${locale}`);
      await expect(page.locator('[data-contact-form]')).toBeHidden();
    });

    test('zeigt Fehler mit E-Mail-Alternative, wenn der Dienst ablehnt, und behält die Eingaben', async ({
      page,
    }) => {
      await page.route(ENDPOINT, (route) =>
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '{"success":"false"}',
        }),
      );
      await page.goto(path);
      await fillValid(page, locale);
      await page.getByRole('button', { name: f.submit }).click();
      const failure = page.locator('[data-failure]');
      await expect(failure).toBeVisible();
      await expect(failure).toContainText(f.failureTitle);
      await expect(page.locator('[data-success]')).toBeHidden();
      await expect(page.locator('#email')).toHaveValue('erika@example.de');
      const href = await page.locator('[data-mail-fallback]').getAttribute('href');
      expect(href).toMatch(/^mailto:kontakt@aetherons\.de\?subject=/);
      expect(decodeURIComponent(href!)).toContain('Erika Mustermann');
    });

    test('behandelt Netzwerkfehler wie einen Fehler, nicht als Erfolg', async ({ page }) => {
      await page.route(ENDPOINT, (route) => route.abort());
      await page.goto(path);
      await fillValid(page, locale);
      await page.getByRole('button', { name: f.submit }).click();
      await expect(page.locator('[data-failure]')).toBeVisible();
      await expect(page.locator('[data-success]')).toBeHidden();
    });

    test('Thema aus der URL wählt die Radiogruppe und blendet POS-Felder ein', async ({ page }) => {
      await page.goto(`${path}?topic=pos`);
      await expect(page.locator('#topic-pos')).toBeChecked();
      await expect(page.locator('[data-topic-group="pos"]')).toBeVisible();
      await expect(page.locator('[data-topic-group="website"]')).toBeHidden();
      await expect(page.locator('[data-message-hint]')).toHaveText(f.messageHint.pos);

      await page.locator('#topic-shop').check();
      await expect(page.locator('[data-topic-group="shop"]')).toBeVisible();
      await expect(page.locator('[data-topic-group="pos"]')).toBeHidden();
    });

    test('sendet POS-Angaben mit und keine Telefonnummer-Pflicht', async ({ page }) => {
      let body = '';
      await page.route(ENDPOINT, async (route) => {
        body = route.request().postData() ?? '';
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: '{"success":"true"}',
        });
      });
      await page.goto(`${path}?topic=pos`);
      await fillValid(page, locale);
      await page.locator('#posProvider').fill('Beispiel-POS');
      await page.locator('#posVersion').fill('4.2');
      await page.getByRole('button', { name: f.submit }).click();
      await expect(page.locator('[data-success]')).toBeVisible();
      expect(body).toContain('Beispiel-POS');
      expect(body).toContain('4.2');
      expect(body).toContain('name="topic"\r\n\r\npos');
      await expect(page.locator('input[type="tel"]')).toHaveCount(0);
    });

    test('Honeypot verhindert das Senden', async ({ page }) => {
      let requests = 0;
      await page.route(ENDPOINT, (route) => {
        requests++;
        return route.fulfill({ status: 200, body: '{}' });
      });
      await page.goto(path);
      await fillValid(page, locale);
      await page.locator('#hp-field').evaluate((el) => ((el as HTMLInputElement).value = 'bot'));
      await page.getByRole('button', { name: f.submit }).click();
      await expect(page.locator('[data-status]')).toHaveText(f.statusBlocked);
      expect(requests).toBe(0);
    });

    test('Terminbuchung: Hinweis vor dem Klick, Datenschutzverweis, kein Laden von Calendly', async ({
      page,
    }) => {
      await page.goto(path);
      const box = page.locator('[data-booking]');
      await expect(box).toBeVisible();
      await expect(box).toContainText('Calendly');
      await expect(box.locator('.disclosure')).toContainText(
        t.contact.bookingDisclosure.replace('{provider}', 'Calendly').slice(0, 40),
      );
      await expect(box.locator('[data-booking-link]')).toHaveAttribute('href', bookingHref[locale]);
      await expect(box.locator('a[href*="terminbuchung"]')).toHaveAttribute(
        'href',
        new RegExp(`${routePath('privacy', locale)}#terminbuchung`),
      );
      await expect(page.locator('iframe')).toHaveCount(0);
    });

    test('Datenschutz enthält den Calendly-Abschnitt, wenn ein Link konfiguriert ist', async ({
      page,
    }) => {
      await page.goto(routePath('privacy', locale));
      await expect(page.locator('#terminbuchung')).toHaveText(t.legal.privacy.booking.title);
      await expect(page.locator('#terminbuchung ~ p').first()).toContainText('Calendly');
    });
  });
}

test('ohne JavaScript bleiben alle optionalen Felder erreichbar und das Formular sendet per Browser', async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  await page.goto('/kontakt/');
  await expect(page.locator('[data-topic-group="pos"]')).toBeVisible();
  await expect(page.locator('[data-topic-group="website"]')).toBeVisible();
  await expect(page.locator('form[data-contact-form]')).toHaveAttribute('action', ENDPOINT);
  await expect(page.locator('form[data-contact-form]')).toHaveAttribute('method', 'post');
  await context.close();
});
