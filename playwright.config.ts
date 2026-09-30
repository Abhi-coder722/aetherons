import { defineConfig, devices } from '@playwright/test';

const STATIC_PORT = 4321;
// In Umgebungen mit vorinstalliertem Chromium (z. B. CI-Container) kann der Pfad gesetzt werden.
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;
const launchOptions = executablePath ? { executablePath } : {};

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list']],
  projects: [
    // Statischer Build mit Calendly-Testlinks; externe Formularanfragen werden abgefangen.
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: `http://localhost:${STATIC_PORT}`,
        launchOptions,
      },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'], baseURL: `http://localhost:${STATIC_PORT}`, launchOptions },
    },
  ],
  webServer: [
    {
      command: `npm run build && npx astro preview --port ${STATIC_PORT} --ignore-lock`,
      env: {
        ASTRO_OUT_DIR: './dist-e2e',
        PUBLIC_SITE_URL: 'https://www.example.de',
        PUBLIC_CALENDLY_URL_DE: 'https://calendly.com/example-test/de-30min',
        PUBLIC_CALENDLY_URL_EN: 'https://calendly.com/example-test/en-30min',
      },
      url: `http://localhost:${STATIC_PORT}`,
      reuseExistingServer: !process.env.CI,
      timeout: 180_000,
    },
  ],
});
