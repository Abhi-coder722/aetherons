import type { Page } from '@playwright/test';
import { allRoutes } from '../../src/i18n/routes';

export const routes = allRoutes();
export const pathsOf = (locale: string) => routes.filter((r) => r.locale === locale);

export const collectConsoleErrors = (page: Page) => {
  const errors: string[] = [];
  page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()));
  page.on('pageerror', (err) => errors.push(err.message));
  return errors;
};
