import { defineConfig, devices } from '@playwright/test';

const STATIC_PORT = 4321;
const SERVER_PORT = 4322;
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
    // Statischer Build mit externem Beispiel-Endpunkt und Calendly-Testlink: Anfragen werden abgefangen.
    {
      name: 'desktop',
      testIgnore: /server\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: `http://localhost:${STATIC_PORT}`,
        launchOptions,
      },
    },
    {
      name: 'mobile',
      testIgnore: /server\.spec\.ts/,
      use: { ...devices['Pixel 7'], baseURL: `http://localhost:${STATIC_PORT}`, launchOptions },
    },
    // Build mit /api/inquiry, ausgeliefert vom mitgelieferten Server (Zustellung über SMTP_URL=console).
    {
      name: 'server-desktop',
      testMatch: /server\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: `http://localhost:${SERVER_PORT}`,
        launchOptions,
      },
    },
    {
      name: 'server-mobile',
      testMatch: /server\.spec\.ts/,
      use: { ...devices['Pixel 7'], baseURL: `http://localhost:${SERVER_PORT}`, launchOptions },
    },
  ],
  webServer: [
    {
      command: `npm run build && npx astro preview --port ${STATIC_PORT} --ignore-lock`,
      env: {
        ASTRO_OUT_DIR: './dist-e2e',
        PUBLIC_SITE_URL: 'https://www.example.de',
        PUBLIC_FORM_ENDPOINT: 'https://forms.example.test/submit',
        PUBLIC_CALENDLY_URL_DE: 'https://calendly.com/example-test/de-30min',
        PUBLIC_CALENDLY_URL_EN: 'https://calendly.com/example-test/en-30min',
      },
      url: `http://localhost:${STATIC_PORT}`,
      reuseExistingServer: !process.env.CI,
      timeout: 180_000,
    },
    {
      command: `npm run build && node server/index.ts`,
      env: {
        ASTRO_OUT_DIR: './dist-e2e-server',
        DIST_DIR: './dist-e2e-server',
        PUBLIC_SITE_URL: `http://localhost:${SERVER_PORT}`,
        PUBLIC_FORM_ENDPOINT: '/api/inquiry',
        PORT: String(SERVER_PORT),
        HOST: '127.0.0.1',
        INQUIRY_TO: 'kontakt@example.test',
        INQUIRY_FROM: 'website@example.test',
        SMTP_URL: 'console',
        RATE_LIMIT_MAX: '1000',
      },
      url: `http://localhost:${SERVER_PORT}/healthz`,
      reuseExistingServer: !process.env.CI,
      timeout: 180_000,
    },
  ],
});
