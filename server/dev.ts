import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import path from 'node:path';
import { createHandler } from './app.ts';
import { configProblems, loadConfig } from './config.ts';
import { createSmtpTransport } from './mail.ts';

const args = process.argv.slice(2);
const valueAfter = (flag: string, fallback: string) => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1]! : fallback;
};

const sitePort = valueAfter('--port', '4321');
const apiPort = Number(process.env.DEV_API_PORT) || 4319;
const devOrigins = [
  `http://localhost:${sitePort}`,
  `http://127.0.0.1:${sitePort}`,
  `http://[::1]:${sitePort}`,
];
const config = loadConfig({
  ...process.env,
  ALLOWED_ORIGINS: [process.env.ALLOWED_ORIGINS, ...devOrigins].filter(Boolean).join(','),
});
const problems = configProblems(config);
const handler = await createHandler({
  config,
  transport: problems.length === 0 ? createSmtpTransport(config.smtpUrl) : null,
});

if (problems.length > 0) {
  console.warn(`[aetheron-dev] Kontaktformular: ${problems.join(', ')}`);
}

const api = createServer(handler);
await new Promise<void>((resolve, reject) => {
  api.once('error', reject);
  api.listen(apiPort, '127.0.0.1', resolve);
});
console.log(`[aetheron-dev] Formular-API auf http://127.0.0.1:${apiPort}`);

const astroBin = path.resolve('node_modules/astro/bin/astro.mjs');
const astro = spawn(process.execPath, [astroBin, 'dev', ...args], {
  stdio: 'inherit',
  env: {
    ...process.env,
    DEV_API_PORT: String(apiPort),
    PUBLIC_DEV_API_URL: `http://127.0.0.1:${apiPort}/api/inquiry`,
  },
});

const shutdown = () => {
  astro.kill('SIGTERM');
  api.close();
};
process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
astro.once('exit', (code) => {
  if (code && code !== 0) {
    api.close();
    process.exitCode = code;
  }
});
