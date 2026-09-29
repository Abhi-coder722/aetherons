import type { Locale } from './locales';
import type { RouteKey, ServiceKey } from './routes';

export type TopicKey = 'website' | 'shop' | 'pos' | 'data' | 'unsure';

export interface Card {
  title: string;
  text: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}

/** Inhaltsblöcke, aus denen die Leistungsseiten aufgebaut sind. */
export type Block =
  | { kind: 'cards'; id: string; eyebrow: string; title: string; intro?: string; items: Card[] }
  | { kind: 'list'; id: string; eyebrow: string; title: string; intro?: string; items: string[] }
  | { kind: 'steps'; id: string; eyebrow: string; title: string; intro?: string; items: Card[] }
  | {
      kind: 'split';
      id: string;
      eyebrow: string;
      title: string;
      intro?: string;
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
    }
  | { kind: 'callout'; id: string; eyebrow: string; title: string; text: string };

export interface ServicePage {
  seo: { title: string; description: string };
  /** Kurzname für Navigation, Karten und Brotkrumen. */
  name: string;
  eyebrow: string;
  h1: string;
  lead: string;
  /** Ein Satz für Übersichtskarten. */
  summary: string;
  highlights: string[];
  topic: TopicKey;
  /** Beschriftung des zweiten Buttons im Seitenkopf (springt zum ersten Block). */
  secondaryCta: string;
  /** Hinweis direkt unter dem Seitenkopf, z. B. zum Umfang. */
  notice?: { title: string; text: string };
  situations: string[];
  blocks: Block[];
  scenario?: { title: string; before: string; goal: string; approach: string };
  deliverables: string[];
  faq: FaqItem[];
  related: RouteKey[];
  ctaHeadline: string;
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface FormMessages {
  heading: string;
  requiredNote: string;
  requiredSr: string;
  optional: string;
  topicLegend: string;
  topicHint: string;
  topics: Record<TopicKey, { label: string; hint: string }>;
  name: string;
  email: string;
  emailHint: string;
  company: string;
  message: string;
  messageHint: Record<TopicKey, string>;
  details: {
    website: { url: string; urlHint: string };
    shop: { context: string; contextHint: string };
    pos: { legend: string; hint: string; provider: string; model: string; version: string };
    data: { tools: string; toolsHint: string };
  };
  honeypot: string;
  submit: string;
  submitting: string;
  privacyNote: string;
  privacyLink: string;
  errorSummaryTitle: string;
  errors: {
    nameRequired: string;
    nameTooLong: string;
    emailRequired: string;
    emailInvalid: string;
    companyTooLong: string;
    messageRequired: string;
    messageTooShort: string;
    messageTooLong: string;
    detailTooLong: string;
    urlInvalid: string;
  };
  statusSending: string;
  statusBlocked: string;
  successTitle: string;
  successText: string;
  failureTitle: string;
  failureText: string;
  notConfiguredTitle: string;
  notConfiguredText: string;
  mailButton: string;
  mailSubject: string;
  mailLabels: {
    topic: string;
    name: string;
    company: string;
    url: string;
    context: string;
    provider: string;
    model: string;
    version: string;
    tools: string;
  };
  /** Kurze Texte für die serverseitig erzeugte Ergebnisseite (Formular ohne JavaScript). */
  server: {
    successTitle: string;
    successText: string;
    invalidTitle: string;
    invalidText: string;
    failureTitle: string;
    failureText: string;
    rateLimitedText: string;
    back: string;
    home: string;
  };
}

export interface Messages {
  locale: Locale;
  ui: {
    skip: string;
    menu: string;
    closeMenu: string;
    mainNav: string;
    brandHome: string;
    breadcrumbs: string;
    home: string;
    langNav: string;
    langCurrent: string;
    cta: { discuss: string; learnMore: string; allFaq: string; emailInstead: string };
    suggest: { text: string; action: string; dismiss: string };
    footer: {
      tagline: string;
      services: string;
      company: string;
      contact: string;
      legal: string;
      rights: string;
      language: string;
    };
    placeholderPrefix: string;
    service: {
      situationsEyebrow: string;
      situationsTitle: string;
      scenarioEyebrow: string;
      scenarioNote: string;
      before: string;
      goal: string;
      approach: string;
      deliverablesEyebrow: string;
      deliverablesTitle: string;
      deliverablesIntro: string;
      faqEyebrow: string;
      faqTitle: string;
      moreFaq: string;
      relatedTitle: string;
    };
  };
  nav: Record<Exclude<RouteKey, 'home' | 'legal' | 'privacy'>, string> & {
    legal: string;
    privacy: string;
  };
  home: {
    seo: { title: string; description: string };
    hero: { eyebrow: string; h1: string; h1Accent: string; lead: string; secondary: string };
    audience: { eyebrow: string; title: string; intro: string; items: Card[] };
    services: { eyebrow: string; title: string; intro: string };
    honesty: { eyebrow: string; title: string; text: string; items: Card[] };
    principles: { eyebrow: string; title: string; text: string; link: string; items: Card[] };
    process: { eyebrow: string; title: string; text: string };
    languages: { eyebrow: string; title: string; text: string };
    faq: { eyebrow: string; title: string; items: FaqItem[] };
    cta: { headline: string; text: string };
  };
  services: Record<ServiceKey, ServicePage>;
  process: {
    seo: { title: string; description: string };
    eyebrow: string;
    h1: string;
    lead: string;
    stepsEyebrow: string;
    stepsTitle: string;
    steps: Card[];
    principlesEyebrow: string;
    principlesTitle: string;
    needsTitle: string;
    needs: string[];
    notDoingTitle: string;
    notDoing: string[];
    gatesTitle: string;
    gatesText: string;
  };
  about: {
    seo: { title: string; description: string };
    eyebrow: string;
    h1: string;
    lead: string;
    forTitle: string;
    forItems: string[];
    notForTitle: string;
    notForItems: string[];
    langTitle: string;
    langText: string;
    teamTitle: string;
    factsTitle: string;
    factsText: string;
  };
  faq: {
    seo: { title: string; description: string };
    eyebrow: string;
    h1: string;
    lead: string;
    groups: Array<{ id: string; title: string; items: FaqItem[] }>;
  };
  contact: {
    seo: { title: string; description: string };
    eyebrow: string;
    h1: string;
    lead: string;
    asideHelpTitle: string;
    asideHelp: string[];
    asideHelpNote: string;
    nextTitle: string;
    next: string[];
    directTitle: string;
    email: string;
    phone: string;
    booking: string;
    bookingSr: string;
    bookingNote: string;
    bookingDisclosure: string;
    bookingPolicy: string;
    mailOnlyTitle: string;
    mailOnlyText: string;
    mailButton: string;
  };
  form: FormMessages;
  legal: {
    draftTitle: string;
    draftText: string;
    translationNote: string;
    authoritative: string;
    reviewStatus: string;
    notReviewed: string;
    imprint: {
      seo: { title: string; description: string };
      eyebrow: string;
      h1: string;
      intro: string;
      labels: {
        owner: string;
        representative: string;
        address: string;
        contact: string;
        email: string;
        phone: string;
        vatId: string;
        register: string;
        content: string;
        dispute: string;
      };
      dispute: string;
    };
    privacy: {
      seo: { title: string; description: string };
      eyebrow: string;
      h1: string;
      updated: string;
      sections: LegalSection[];
      /** Wird nur ausgegeben, wenn eine Terminbuchung (Calendly) konfiguriert ist. */
      booking: LegalSection;
    };
  };
  notFound: { title: string; text: string; home: string };
  placeholders: Record<string, string>;
  a11yTitle: string;
}
