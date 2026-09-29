import nodemailer from 'nodemailer';
import type { InquiryInput } from '../src/lib/validation.ts';

export interface MailMessage {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}

export interface MailTransport {
  sendMail(message: MailMessage): Promise<unknown>;
}

/** Entfernt Zeilenumbrüche und Steuerzeichen (Schutz vor Header-Injection). */
export const oneLine = (value: string): string =>
  value
    // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x1f\x7f-\x9f]+/g, ' ')
    .replace(/[\p{Zl}\p{Zp}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const topicLabel: Record<string, string> = {
  website: 'Website',
  shop: 'Online-Shop',
  pos: 'Kassensystem-Anbindung',
  data: 'Daten & Digitalisierung',
  unsure: 'Noch unsicher',
};

/** Betreff und Text der internen Benachrichtigung (bewusst deutsch – Empfänger ist das aetheron-Postfach). */
export function buildInquiryMail(
  input: InquiryInput,
  cfg: { from: string; to: string },
): MailMessage {
  const lines = [
    `Thema: ${topicLabel[input.topic] ?? input.topic}`,
    `Sprache der Seite: ${input.locale}`,
    `Name: ${oneLine(input.name)}`,
    `E-Mail: ${oneLine(input.email)}`,
  ];
  if (input.company) lines.push(`Unternehmen: ${oneLine(input.company)}`);
  if (input.topic === 'website' && input.url)
    lines.push(`Bestehende Website: ${oneLine(input.url)}`);
  if (input.topic === 'shop' && input.shopContext)
    lines.push(`Bisherige Verkaufswege: ${oneLine(input.shopContext)}`);
  if (input.topic === 'pos') {
    if (input.posProvider) lines.push(`Kassenanbieter: ${oneLine(input.posProvider)}`);
    if (input.posModel) lines.push(`Kassenprodukt: ${oneLine(input.posModel)}`);
    if (input.posVersion) lines.push(`Kassenversion: ${oneLine(input.posVersion)}`);
  }
  if (input.topic === 'data' && input.dataTools)
    lines.push(`Genutzte Programme: ${oneLine(input.dataTools)}`);
  lines.push('', 'Nachricht:', input.message);
  return {
    from: cfg.from,
    to: cfg.to,
    replyTo: oneLine(input.email),
    subject: oneLine(`Anfrage (${topicLabel[input.topic] ?? input.topic}) von ${input.name}`).slice(
      0,
      200,
    ),
    text: lines.join('\n'),
  };
}

export function createSmtpTransport(smtpUrl: string): MailTransport {
  // Nur für lokale Entwicklung und Tests: SMTP_URL=console schreibt die Mail in die Konsole.
  if (smtpUrl === 'console') {
    return {
      async sendMail(m) {
        console.log(`[mail:console] an ${m.to}, Betreff: ${m.subject}\n${m.text}`);
      },
    };
  }
  const transporter = nodemailer.createTransport(smtpUrl);
  return { sendMail: (m) => transporter.sendMail(m) };
}
