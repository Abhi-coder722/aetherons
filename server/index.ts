import { createServer } from 'node:http';
import { createHandler } from './app.ts';
import { configProblems, loadConfig } from './config.ts';
import { createSmtpTransport } from './mail.ts';

const config = loadConfig();
const problems = configProblems(config);
if (problems.length) {
  console.warn(
    `[aetheron-server] Zustellung nicht vollständig konfiguriert: ${problems.join(', ')}. ` +
      'Das Anfrageformular antwortet dann mit 503 (kein Scheinerfolg).',
  );
}
const ready = problems.length === 0;
const handler = await createHandler({
  config,
  transport: ready ? createSmtpTransport(config.smtpUrl) : null,
});

createServer(handler).listen(config.port, config.host, () => {
  console.log(
    `[aetheron-server] läuft auf http://${config.host}:${config.port} (dist: ${config.distDir})`,
  );
});
