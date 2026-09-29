/**
 * Erzeugt Icons (PNG/ICO) und das Social-Share-Bild (og-image.png) lokal aus SVG/HTML.
 * Nutzung: npm run assets   (benötigt einen installierten Chromium für Playwright)
 * Die Ergebnisse liegen in public/ und werden eingecheckt – der Build braucht dieses Skript nicht.
 */
import { chromium } from '@playwright/test';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pub = (...p) => path.join(root, 'public', ...p);

const b64 = async (rel) =>
  (await readFile(path.join(root, 'node_modules', rel))).toString('base64');
const sora = await b64('@fontsource-variable/sora/files/sora-latin-wght-normal.woff2');
const soraExt = await b64('@fontsource-variable/sora/files/sora-latin-ext-wght-normal.woff2');
const plex = await b64('@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2');
const plexExt = await b64(
  '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-ext-400-normal.woff2',
);
// latin-ext enthält die türkischen Sonderzeichen (ğ, ş, ı, İ); ç, ö, ü liegen in latin.
const EXT_RANGE =
  'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';

const MARK_WIDE = `<svg viewBox="0 0 340 168" xmlns="http://www.w3.org/2000/svg"><path fill="#4D6EFF" d="M0 30Q0 0 30 0H190Q220 0 220 30V102H80V72H168V48H52V120H300V168H30Q0 168 0 138Z"/><rect x="300" y="120" width="40" height="48" fill="#5CF5C0"/></svg>`;
const favicon = await readFile(pub('favicon.svg'), 'utf8');

const fontsCss = `
@font-face{font-family:Sora;src:url(data:font/woff2;base64,${sora}) format('woff2');font-weight:100 800}
@font-face{font-family:Sora;src:url(data:font/woff2;base64,${soraExt}) format('woff2');font-weight:100 800;unicode-range:${EXT_RANGE}}
@font-face{font-family:Plex;src:url(data:font/woff2;base64,${plex}) format('woff2');font-weight:400}
@font-face{font-family:Plex;src:url(data:font/woff2;base64,${plexExt}) format('woff2');font-weight:400;unicode-range:${EXT_RANGE}}
html,body{margin:0;padding:0}`;

const iconHtml = (size, pad) => `<!doctype html><style>${fontsCss}
body{width:${size}px;height:${size}px;background:#0b0720;display:grid;place-items:center}
svg{width:${size - pad * 2}px;height:auto}</style>
${favicon.replace(/<rect width="64" height="64" rx="14" fill="#0B0720"\/>/, '').replace('viewBox="0 0 64 64"', 'viewBox="10 12 44 38"')}`;

const ogCopy = {
  de: {
    h1: 'Websites, Online-Shops und Datenlösungen',
    accent: 'für kleine Unternehmen.',
    sub: 'Verständlich erklärt. Sauber umgesetzt.',
  },
  tr: {
    h1: 'Web siteleri, online mağazalar ve veri çözümleri',
    accent: 'küçük işletmeler için.',
    sub: 'Anlaşılır anlatım. Özenli uygulama.',
  },
  en: {
    h1: 'Websites, online shops and data solutions',
    accent: 'for small businesses.',
    sub: 'Clearly explained. Cleanly built.',
  },
};
const ogHtml = ({ h1, accent, sub }) => `<!doctype html><style>${fontsCss}
body{width:1200px;height:630px;background:#0b0720;color:#f4f3fa;font-family:Plex;box-sizing:border-box;padding:80px 88px;display:flex;flex-direction:column;justify-content:space-between}
.logo{display:flex;align-items:flex-end;gap:28px}.logo svg{width:220px}
.name{font-family:Sora;font-weight:600;font-size:64px;letter-spacing:-1.5px;line-height:1}
h1{font-family:Sora;font-weight:600;font-size:56px;line-height:1.12;letter-spacing:-1.5px;margin:0;max-width:1000px}
h1 span{color:#5cf5c0}
p{font-size:28px;color:#bdb9d2;margin:18px 0 0}</style>
<div class="logo">${MARK_WIDE}<span class="name">aetheron</span></div>
<div><h1>${h1} <span>${accent}</span></h1>
<p>${sub}</p></div>`;

const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_PATH
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
    : {},
);
const shot = async (html, width, height, file) => {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  const buffer = await page.screenshot({ type: 'png' });
  await page.close();
  if (file) await writeFile(file, buffer);
  return buffer;
};

await mkdir(pub('icons'), { recursive: true });
await shot(iconHtml(180, 30), 180, 180, pub('icons', 'apple-touch-icon.png'));
await shot(iconHtml(192, 32), 192, 192, pub('icons', 'icon-192.png'));
await shot(iconHtml(512, 84), 512, 512, pub('icons', 'icon-512.png'));
const png32 = await shot(iconHtml(32, 4), 32, 32);
for (const [locale, copy] of Object.entries(ogCopy)) {
  await shot(ogHtml(copy), 1200, 630, pub(`og-image-${locale}.png`));
}
await browser.close();

// favicon.ico mit eingebettetem PNG (von allen aktuellen Browsern unterstützt).
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);
entry.writeUInt8(32, 1);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(png32.length, 8);
entry.writeUInt32LE(22, 12);
await writeFile(pub('favicon.ico'), Buffer.concat([header, entry, png32]));

console.log('Icons und og-image-{de,tr,en}.png erzeugt.');
