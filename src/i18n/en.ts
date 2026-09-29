import type { Messages } from './types';

/**
 * English copy. Legal pages are treated separately from marketing copy; have important
 * purchase and legal wording reviewed by a fluent human reviewer before production.
 */
export const en: Messages = {
  locale: 'en',
  a11yTitle: 'Accessibility',
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    closeMenu: 'Close',
    mainNav: 'Main navigation',
    brandHome: 'aetheron – go to home page',
    breadcrumbs: 'Breadcrumb',
    home: 'Home',
    langNav: 'Choose language',
    langCurrent: 'current language',
    cta: {
      discuss: 'Discuss your project',
      learnMore: 'Learn more',
      allFaq: 'See all questions',
      emailInstead: 'Or write directly by email:',
    },
    suggest: {
      text: 'This page is also available in English.',
      action: 'Go to the English version',
      dismiss: 'Dismiss notice',
    },
    footer: {
      tagline: 'Websites, online shops and data solutions for small businesses',
      services: 'Services',
      company: 'aetheron',
      contact: 'Contact',
      legal: 'Legal',
      rights: '©',
      language: 'Language',
    },
    placeholderPrefix: 'Placeholder',
    service: {
      situationsEyebrow: 'Sound familiar?',
      situationsTitle: 'Typical starting points',
      scenarioEyebrow: 'What it can look like',
      scenarioNote: 'A made-up, typical example for illustration – not a client project.',
      before: 'Starting point',
      goal: 'Goal',
      approach: 'Possible approach',
      deliverablesEyebrow: 'Outcome',
      deliverablesTitle: 'What you have in hand at the end',
      deliverablesIntro: 'Typical scope – we agree the exact scope in writing beforehand.',
      faqEyebrow: 'Questions',
      faqTitle: 'Frequently asked questions',
      moreFaq: 'You will find more answers in the general questions.',
      relatedTitle: 'You may also be interested in',
    },
  },
  nav: {
    webdev: 'Web development',
    shops: 'Online shops',
    pos: 'POS integration',
    data: 'Data & digitalisation',
    process: 'How we work',
    about: 'About aetheron',
    faq: 'FAQ',
    contact: 'Contact',
    legal: 'Legal notice (Impressum)',
    privacy: 'Privacy policy',
  },
  home: {
    seo: {
      title: 'aetheron – websites, online shops and data solutions for small businesses',
      description:
        'aetheron builds websites, custom online shops and data-driven solutions for small businesses in Germany – and honestly assesses whether your existing point-of-sale system can be connected.',
    },
    hero: {
      eyebrow: 'Web development, online shops & digitalisation',
      h1: 'A clear website or your own online shop.',
      h1Accent: 'And data that helps in daily work.',
      lead: 'aetheron builds websites, custom online shops and practical data solutions for small businesses in Germany. On request we assess whether your existing point-of-sale (POS) system can sensibly be connected – and tell you plainly if it cannot.',
      secondary: 'See our services',
    },
    audience: {
      eyebrow: 'Who it is for',
      title: 'For small businesses that simply want digital things to work better.',
      intro:
        'You run a shop, a workshop, a practice or a consultancy and would rather not dive into technology yourself. Do any of these situations sound familiar?',
      items: [
        {
          title: 'So far you only sell in person',
          text: 'Customers ask about online orders, pickup or delivery – but you are unsure how that fits your till and your day-to-day.',
        },
        {
          title: 'Your website no longer fits',
          text: 'It is outdated, awkward on a phone or does not clearly say what you offer.',
        },
        {
          title: 'Too much manual work',
          text: 'The same details are typed in several times, lists are kept by hand, and the numbers are hard to analyse.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Four services, one goal: less friction in everyday work.',
      intro: 'You can book each service on its own. They build on each other if you want them to.',
    },
    honesty: {
      eyebrow: 'POS systems',
      title: 'Bringing your till and your online shop together – but only if it holds up.',
      text: 'Whether stock, prices or orders can be synchronised between your POS and an online shop depends on the vendor, the product and the version. That is why we assess feasibility for each provider individually before we promise anything.',
      items: [
        {
          title: 'Assess first, promise later',
          text: 'We clarify interfaces, permissions and costs before you invest in an integration.',
        },
        {
          title: 'Test first, go live later',
          text: 'Synchronisation runs in a test environment first. Live sync starts only after your sign-off.',
        },
        {
          title: 'Alternatives instead of force',
          text: 'If there is no direct connection, we discuss simpler routes – without promising they will work.',
        },
      ],
    },
    principles: {
      eyebrow: 'What you can rely on',
      title: 'No big promises. A clear way of working.',
      text: 'Instead of superlatives, we rely on a way of working you can follow from the first conversation to handover.',
      link: 'More about how we work',
      items: [
        {
          title: 'Understandable, not complicated',
          text: 'We explain technology in words that make sense in your daily work – and ask when something is unclear.',
        },
        {
          title: 'Transparent scope',
          text: 'Before you commission anything you know what is included, what is not, and what to expect.',
        },
        {
          title: 'Start small',
          text: 'A first step that works reliably beats a big project that is never finished.',
        },
        {
          title: 'Privacy-minded from the start',
          text: 'No trackers without consent, fonts hosted locally, and only the data that is really needed.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'How a project works.',
      text: 'Manageable steps – so you always know what we are working on.',
    },
    languages: {
      eyebrow: 'Languages',
      title: 'In German, Turkish or English.',
      text: 'Write to us in the language you feel most comfortable in. This website is available in full in German, Turkish and English.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'What small businesses often ask us.',
      items: [
        {
          question: 'Who is aetheron right for?',
          answer:
            'Owners and managers of small businesses – for example retail, trades, food service, practices, consultancies or service providers – who want a reliable website, their own online shop or less manual work in everyday operations.',
        },
        {
          question: 'Do we need to know exactly what we need?',
          answer:
            'No. A rough description is enough. In the enquiry form you can choose “Not sure yet”. A clear picture of what makes sense – and what does not – often only emerges in conversation.',
        },
        {
          question: 'What does a project cost?',
          answer:
            'That depends on the scope. Fixed prices without knowing your situation would not be credible. After the first conversation you receive a written assessment with a cost range before you decide.',
        },
        {
          question: 'Can my POS system be connected to an online shop?',
          answer:
            'Sometimes yes, sometimes only partly, sometimes no. It depends on the vendor, product, version and the interfaces that are released. We assess your provider individually and tell you upfront what is realistic.',
        },
        {
          question: 'Will my website or shop then be GDPR-compliant?',
          answer:
            'We use privacy-minded technology and name the services in use. Whether your offering as a whole is compliant also depends on your legal texts and processes. A qualified professional should review that – we cannot and may not provide legal advice.',
        },
      ],
    },
    cta: {
      headline: 'Tell us what should work better.',
      text: 'A short description is enough. We reply by email and suggest a time for a first conversation.',
    },
  },
  services: {
    webdev: {
      seo: {
        title: 'Website development for small businesses',
        description:
          'Websites for small businesses: clear structure, fast loading, easy to use on a phone, multilingual if needed, and a simple way to get in touch.',
      },
      name: 'Web development',
      eyebrow: 'Service · Web development',
      h1: 'A website that clearly says what you offer.',
      lead: 'We plan, design and build websites where visitors quickly understand what you do – and can easily get in touch. No needless effects, but fast, readable and as easy to use on a phone as on a computer.',
      summary:
        'A new website or a relaunch: clearly structured, fast, easy to use on mobile and with a simple way to make an enquiry.',
      highlights: [
        'New website or overhaul',
        'Structure and copy your customers understand',
        'Technical foundations for search engines',
        'Multilingual on request, e.g. German, Turkish, English',
      ],
      topic: 'website',
      secondaryCta: 'What is included',
      situations: [
        'Your website has aged and is awkward to use on a phone.',
        'People phone to ask things that should really be on the website.',
        'Small changes take a long time because nobody remembers how the site works.',
        'Your customers speak different languages, but your website only speaks one.',
        'You do not have a website yet and want to start with a solid, manageable solution.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'bausteine',
          eyebrow: 'Building blocks',
          title: 'What can be part of it',
          intro:
            'Not every project needs every building block. We decide together in the first conversation which ones make sense.',
          items: [
            {
              title: 'Structure and content',
              text: 'We clarify who visits your website and what those people want to know. That leads to a page structure that answers questions in the right order. You bring the expertise; we help with structure and wording.',
            },
            {
              title: 'Design and build',
              text: 'A calm, distinctive look that fits your business. Built with lean technology: fast loading, readable type, usable with keyboard and screen reader – guided by the WCAG requirements.',
            },
            {
              title: 'Findability',
              text: 'Clean technical foundations so search engines can understand your pages: meaningful titles, sensible headings, a sitemap and Google Search Console setup. Nobody can credibly promise rankings – but good foundations and useful content help.',
            },
            {
              title: 'Multiple languages',
              text: 'Separate, clean addresses per language, a language switcher that leads to the matching page, and correct language markup. Important texts should be read by native speakers; we help organise that process.',
            },
            {
              title: 'Ways to get in touch',
              text: 'A form that asks only what is really needed, clear calls to action and, if you like, a link to book appointments. Set up with minimal data and clear privacy information.',
            },
            {
              title: 'Handover and upkeep',
              text: 'At the end we show you how to update content yourself – as far as your solution allows – and document access and settings. Further support is possible but not mandatory.',
            },
          ],
        },
      ],
      scenario: {
        title: 'Example scenario: A trades business with many phone enquiries',
        before:
          'Enquiries arrive by phone, email and an old form. Important details are often missing and people have to be asked again.',
        goal: 'Visitors should quickly see which services are offered and be able to send their enquiry with the necessary details straight away.',
        approach:
          'Service pages that answer the most common questions, a short enquiry form with a few targeted fields, and a clear contact page.',
      },
      deliverables: [
        'A published website on your domain',
        'Page structure and agreed copy',
        'Basic search-engine setup (e.g. sitemap, Search Console)',
        'A short guide to upkeep and an overview of access details',
      ],
      faq: [
        {
          question: 'What does a website cost?',
          answer:
            'It depends on the scope – for example the number of pages, features such as booking or several languages, and how much copy already exists. After a first conversation you receive a written assessment with scope and cost range before you commission anything.',
        },
        {
          question: 'Can we change the website ourselves later?',
          answer:
            'We settle that at the start. Some businesses want to maintain text and images themselves, others prefer to commission changes now and then. We choose the technology to match.',
        },
        {
          question: 'Do you also take care of the legal notice and privacy policy?',
          answer:
            'We set the pages up technically and name what information and services need to appear in them. That does not replace legal drafting and review – for that we recommend a qualified professional.',
        },
        {
          question: 'Who translates the copy for several languages?',
          answer:
            'Your team, a translation agency, or we develop it together with you. For business and legal texts we recommend review by qualified native speakers.',
        },
      ],
      related: ['shops', 'data'],
      ctaHeadline: 'Want a new website, or to overhaul your existing one?',
    },
    shops: {
      seo: {
        title: 'Custom online shop development for small businesses',
        description:
          'A custom online shop for small businesses in Germany: catalogue, basket, guest checkout, payment and shipping – as a clearly defined project scope, with optional POS assessment.',
      },
      name: 'Online shops',
      eyebrow: 'Service · Online shops',
      h1: 'An online shop that fits your business.',
      lead: 'We design and build online shops for small businesses: from a clear product range to the order – as comprehensive as necessary and as lean as possible. What your shop needs, we define together based on your range and your processes.',
      summary:
        'Individually planned shops with catalogue, basket, guest checkout, payment and shipping – to your needs and without feature bloat.',
      highlights: [
        'Catalogue with variants, search and filters',
        'Ordering without a customer account',
        'Payment through vetted payment providers',
        'Optional assessment of your POS system',
      ],
      topic: 'shop',
      secondaryCta: 'Possible scope',
      notice: {
        title: 'About this page',
        text: 'Here we describe what we can build for client shops. Not every shop needs every feature, and every feature is part of an agreed project scope – not automatically included. aetheron’s own website is not an online shop.',
      },
      situations: [
        'You sell in a shop or at markets and want to be orderable online as well.',
        'Your range has variants such as size, colour or weight that are hard to handle by email.',
        'You use a marketplace profile or social media and want to build your own sales channel.',
        'You want to offer pickup or delivery without orders getting lost in daily work.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'umfang',
          eyebrow: 'Possible scope',
          title: 'What a shop project can include',
          intro:
            'A selection of what we can plan and build. You decide item by item which of it fits you.',
          items: [
            {
              title: 'Storefront for phone and desktop',
              text: 'A fast, readable layout that works on small screens as well as on the desktop, with clean page titles and addresses for search engines.',
            },
            {
              title: 'Catalogue and variants',
              text: 'Categories, product pages, variants such as size or type, images, availability display – maintained through an admin area your team can use.',
            },
            {
              title: 'Search, filters and sorting',
              text: 'So customers quickly find what they are looking for. The extent depends on the size of your range.',
            },
            {
              title: 'Basket',
              text: 'Change quantities, remove items, clear totals. Prices and stock are checked again on the server when ordering.',
            },
            {
              title: 'Checkout with guest ordering',
              text: 'Ordering without an account is the default. Address validation, shipping and payment method, itemised totals including tax and shipping, and a clearly labelled button for the binding order.',
            },
            {
              title: 'Optional customer accounts',
              text: 'Only if it helps you and your customers: order history, saved addresses, privacy functions. No forced registration for one-off orders.',
            },
            {
              title: 'Payment and shipping',
              text: 'Connection to a payment provider of your choice, which processes payment data itself. We do not store card data. Shipping methods and costs follow your rules.',
            },
            {
              title: 'Notifications',
              text: 'Order confirmation and status messages in your customers’ language. The wording must be aligned with your legally reviewed terms.',
            },
            {
              title: 'Administration and returns',
              text: 'Order overview, cancellations, returns, refunds within the limits of your payment provider, invoice records and a change log.',
            },
            {
              title: 'Personalisation (optional)',
              text: 'Where products can be customised, e.g. with lettering: we define in advance which inputs are allowed and how the price is calculated.',
            },
            {
              title: 'Accessibility, privacy, maintainability',
              text: 'Usable by keyboard, readable, minimal on data. The build is documented so it can be maintained and extended later.',
            },
          ],
        },
        {
          kind: 'steps',
          id: 'vorgehen',
          eyebrow: 'Approach',
          title: 'From range to first order',
          intro: 'A shop only goes live once everyone involved has signed it off.',
          items: [
            {
              title: 'Clarify',
              text: 'Range, prices and tax rates, shipping, pickup, returns, existing systems such as POS or inventory management.',
            },
            {
              title: 'Define scope',
              text: 'You receive a written assessment: what is included, what comes later, what depends on third parties.',
            },
            {
              title: 'Build in test mode',
              text: 'We build and test with test data and test access from your providers. No real money moves.',
            },
            {
              title: 'Acceptance and go-live',
              text: 'End-to-end test from order to payment confirmation, sign-off of your legal texts, and only then going live.',
            },
          ],
        },
        {
          kind: 'split',
          id: 'zusammenarbeit',
          eyebrow: 'Collaboration',
          title: 'Who brings what?',
          left: {
            title: 'From aetheron',
            items: [
              'Concept, design and technical implementation',
              'Setup and testing of connections (payment, shipping, email)',
              'Tests, documentation and training',
              'Honest advice when a feature does not make sense',
            ],
          },
          right: {
            title: 'From you and third parties',
            items: [
              'Product data, prices, tax rates, images',
              'Shipping, delivery and returns terms',
              'Legally reviewed terms and conditions, withdrawal and privacy texts',
              'Contract and access with the payment provider',
            ],
          },
        },
        {
          kind: 'callout',
          id: 'freigabe',
          eyebrow: 'Principle',
          title: 'No live operation without sign-off',
          text: 'Payments and orders go live only after an end-to-end test has passed and you have signed off. Payment data is processed solely by the payment provider. You should have your shop’s legal texts (terms, withdrawal, privacy, price and shipping information) reviewed by a qualified professional – we cannot replace that.',
        },
        {
          kind: 'list',
          id: 'klein-starten',
          eyebrow: 'Prefer to start small?',
          title: 'Leaner ways in',
          intro: 'Not every business needs a full shop right away. Possible first steps:',
          items: [
            'An online catalogue with an enquiry or reservation form',
            'Ordering with in-store pickup and payment on site',
            'A small range to start with, expanded later',
            'POS assessment first, then the decision on scope',
          ],
        },
      ],
      deliverables: [
        'A tested shop that can be operated on your domain',
        'Documented settings and access details',
        'Test record of the key flows (order, payment, return)',
        'Training for the people who maintain products and orders',
      ],
      faq: [
        {
          question: 'What does an online shop cost?',
          answer:
            'It depends mainly on the range, variants, payment and shipping methods and integrations. After the first conversation you receive a written assessment with scope and cost range. We list ongoing costs, such as hosting or payment providers, separately.',
        },
        {
          question: 'Do customers have to create an account?',
          answer:
            'No, that is not the default. Ordering as a guest is possible. An account is an optional feature when it benefits your customers.',
        },
        {
          question: 'Do you store credit card data?',
          answer:
            'No. Payments run through a payment provider that processes the data itself. We discuss which one suits you – the contractual relationship is between you and the provider.',
        },
        {
          question: 'Which legal texts do I need for the shop?',
          answer:
            'That depends on your business model, for example terms and conditions, withdrawal information, details on prices, taxes and shipping, and a privacy policy. We build pages and notices so these fit in. The content should be reviewed by a qualified professional.',
        },
        {
          question: 'Can the shop be connected to my POS system?',
          answer:
            'We assess that separately for your provider – see POS integration. A shop also works without that connection.',
        },
      ],
      related: ['pos', 'webdev'],
      ctaHeadline: 'Thinking about selling online?',
    },
    pos: {
      seo: {
        title: 'POS integration for online shops: feasibility assessment',
        description:
          'Connect your point-of-sale system and online shop? aetheron assesses per vendor whether and how stock, prices and orders can sensibly be synchronised – with a test phase and honest alternatives.',
      },
      name: 'POS integration',
      eyebrow: 'Service · POS integration',
      h1: 'Till and online shop: assess first, then connect.',
      lead: 'If you work with a point-of-sale system (POS) in your shop, the question is how stock, prices and orders reach the online shop. We assess, coordinate and – where it holds up – build an integration. Provider by provider.',
      summary:
        'Feasibility, coordination with your POS vendor and – where possible – the technical integration. No blanket promises.',
      highlights: [
        'Assessment of vendor, version and interfaces',
        'Coordination with your POS vendor',
        'Tested in a sandbox before live operation',
        'Honest alternatives if a direct connection is not possible',
      ],
      topic: 'pos',
      secondaryCta: 'What we clarify',
      notice: {
        title: 'Important upfront',
        text: 'There is no integration that “just works” with every POS system. Whether and how your system can be connected, we assess for each vendor, product and version individually. Until then we promise nothing.',
      },
      situations: [
        'You have a POS system in the shop and want to sell online without maintaining stock twice.',
        'Your stock does not match between online and in store.',
        'You want prices or promotions maintained in one place.',
        'Your POS vendor offers an interface, but nobody knows what is possible with it.',
      ],
      blocks: [
        {
          kind: 'list',
          id: 'fragen',
          eyebrow: 'What we clarify',
          title: 'Questions about your POS system',
          intro: 'We clarify these points in the feasibility assessment before promising anything:',
          items: [
            'Which vendor, product, version and licence tier?',
            'How many locations or tills are affected?',
            'Is there a documented interface (API) or export function? What does it cost?',
            'Is vendor approval or involvement required?',
            'Is there a sandbox and are there test credentials?',
            'Who owns the access credentials, and who is responsible for changes to the POS?',
            'Which other systems are involved, such as inventory management or accounting?',
          ],
        },
        {
          kind: 'cards',
          id: 'datenfluesse',
          eyebrow: 'Data flows',
          title: 'What could flow between till and shop',
          intro:
            'For each kind of data we clarify where it is maintained as the “source of truth”, which way it flows and how often.',
          items: [
            {
              title: 'Products and variants',
              text: 'Item numbers, names, variants, tax rates. Where is master data maintained, and how are changes carried over?',
            },
            {
              title: 'Prices and promotions',
              text: 'Regular prices, discounts and promotions. Can they be mapped through the interface, or only partly?',
            },
            {
              title: 'Stock per location',
              text: 'How current does stock need to be, and what happens when items are sold in store and online at the same time?',
            },
            {
              title: 'Customer data',
              text: 'Only if necessary and agreed from a privacy perspective. It is often sensible to keep customer data separate.',
            },
            {
              title: 'Orders',
              text: 'Should online orders appear in the POS system, and if so in what form and with what payment status?',
            },
            {
              title: 'Returns and gift cards',
              text: 'How are returns, refunds and gift cards handled consistently across both channels?',
            },
          ],
        },
        {
          kind: 'steps',
          id: 'phasen',
          eyebrow: 'Phases',
          title: 'Step by step, with decision points',
          intro: 'After each phase you decide whether to continue.',
          items: [
            {
              title: 'Feasibility',
              text: 'Review documentation, interfaces, permissions and costs. Result: a written assessment of whether and in what form an integration makes sense.',
            },
            {
              title: 'Prototype in the test system',
              text: 'Try the most important data flow with test credentials. Result: evidence instead of assumptions.',
            },
            {
              title: 'Pilot and reconciliation',
              text: 'Limited, controlled live operation: does the data match? What happens on errors?',
            },
            {
              title: 'Operation and monitoring',
              text: 'Failed syncs become visible, and there is an overview for checking data states.',
            },
          ],
        },
        {
          kind: 'cards',
          id: 'sorgfalt',
          eyebrow: 'Diligence',
          title: 'What we watch on the technical side',
          items: [
            {
              title: 'Error handling and retries',
              text: 'Interfaces are sometimes unreachable. Syncs are retried without booking stock twice.',
            },
            {
              title: 'Reconciliation and conflict rules',
              text: 'It is defined in advance what applies when till and shop show different states, and an overview is provided for checking.',
            },
            {
              title: 'Security',
              text: 'Credentials are kept server-side only and never in source code. Permissions are limited to what is needed.',
            },
            {
              title: 'Logs without personal data',
              text: 'We log so that errors can be found without storing unnecessary personal data.',
            },
          ],
        },
        {
          kind: 'split',
          id: 'alternativen',
          eyebrow: 'When it does not work directly',
          title: 'Honest alternatives',
          intro: 'Sometimes there is no usable interface. Then we talk about simpler routes.',
          left: {
            title: 'Possible routes (feasibility open)',
            items: [
              'Middleware approved by the vendor, or a third-party connector',
              'Controlled import and export (e.g. CSV), scheduled or manual',
              'One-way or delayed sync only, e.g. stock only',
              'A separate online range with its own stock maintenance',
            ],
          },
          right: {
            title: 'What we will tell you then',
            items: [
              'Whether the effort justifies the benefit',
              'Where the risks to data quality and stock lie',
              'That switching POS vendor is sometimes the better solution – but not always',
              'No promise that an alternative works before it has been tested',
            ],
          },
        },
        {
          kind: 'callout',
          id: 'steuern',
          eyebrow: 'Till and tax law',
          title: 'A shop connection does not certify a till',
          text: 'Obligations around tills, receipts, records and tax (e.g. tamper protection and data exports) concern your POS system and your processes. An online shop integration neither fulfils nor certifies them. Clarify questions on this with your POS vendor and your tax adviser.',
        },
      ],
      deliverables: [
        'A written feasibility assessment for your vendor',
        'If sensible: a tested prototype in the test system',
        'Description of data flows, responsibilities and conflict rules',
        'If implemented: a documented integration with monitoring and a reconciliation overview',
      ],
      faq: [
        {
          question: 'Which POS systems do you support?',
          answer:
            'We do not publish a list, because a promise without assessment would not be credible. Tell us vendor, product and, if known, version. If you do not know, we help find out.',
        },
        {
          question: 'What does the feasibility assessment cost?',
          answer:
            'The scope depends on how well the system is documented and whether test access exists. We agree the scope with you before any costs arise. Interface or licence fees from your POS vendor may come on top.',
        },
        {
          question: 'Do I need my POS vendor’s approval?',
          answer:
            'Often yes, for example for API access or changes to your licence. We clarify that in the first phase together with you.',
        },
        {
          question: 'What if my vendor has no interface?',
          answer:
            'Then we discuss alternatives such as controlled import and export. Whether they hold up in daily use only shows in testing.',
        },
      ],
      related: ['shops', 'data'],
      ctaHeadline: 'Want to know whether your till fits an online shop?',
    },
    data: {
      seo: {
        title: 'Data & digitalisation: analysis and automation',
        description:
          'Less manual work and a better overview: analyses, dashboards and automated workflows for small businesses – based on the data you already have.',
      },
      name: 'Data & digitalisation',
      eyebrow: 'Service · Data & digitalisation',
      h1: 'Less manual work. Numbers you understand.',
      lead: 'Many small businesses have more data than they think – spread across spreadsheets, emails and individual programs. We help turn it into understandable analyses and automate recurring tasks. We start with what is already there.',
      summary:
        'Analyses and dashboards from existing data, fewer duplicate entries and automated workflows between your programs.',
      highlights: [
        'Clear analyses and dashboards',
        'Automated workflows between programs',
        'Small web tools for internal tasks',
        'A sober check of where AI actually helps',
      ],
      topic: 'data',
      secondaryCta: 'What is included',
      situations: [
        'Key figures are pulled together by hand from several spreadsheets every month.',
        'The same details are transferred into two or three programs.',
        'Enquiries, orders or appointments are spread across email, phone and slips of paper.',
        'You would like to decide based on numbers, but the analysis is too laborious.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'bausteine',
          eyebrow: 'Building blocks',
          title: 'What can be part of it',
          intro:
            'Not every project needs every building block. We decide together in the first conversation which ones make sense.',
          items: [
            {
              title: 'Stocktake',
              text: 'Together we look at which data lives where, who uses it and where time is lost. The result is a short, understandable overview with sensible first steps – not an extensive concept.',
            },
            {
              title: 'Analyses and dashboards',
              text: 'We prepare your data so that the figures you actually need are visible at a glance – for example enquiries per month, open orders or revenue by service. A few meaningful key figures rather than an overloaded dashboard.',
            },
            {
              title: 'Automated workflows',
              text: 'Recurring tasks can often be automated: enquiries land directly in a list, data is transferred between programs, notifications reach the right person – with traceable rules and clear responsibility.',
            },
            {
              title: 'Small web tools',
              text: 'Where standard software does not fit, we build lean internal applications, such as a simple entry form or an overview for your team. As small as possible, as comprehensive as necessary.',
            },
            {
              title: 'Data from shop and till',
              text: 'If you sell online and in store, analyses can bring both sides together – provided the data is accessible. What is possible shows in the assessment of your POS system.',
            },
            {
              title: 'AI – where it really helps',
              text: 'Artificial intelligence can support some tasks, such as sorting enquiries or summarising documents. We soberly check whether benefit, effort and risks add up, and plan human oversight from the start.',
            },
          ],
        },
      ],
      scenario: {
        title: 'Example scenario: A service provider with monthly spreadsheet work',
        before:
          'At month end, figures from an accounting export, a calendar and a job list are copied into a spreadsheet by hand. It takes time and is error-prone.',
        goal: 'The key figures should be available up to date and traceable without copying.',
        approach:
          'The existing exports are read in automatically, cleaned and shown in a simple overview the team can access.',
      },
      deliverables: [
        'A short overview of your data and workflows with recommendations',
        'A running solution – for example a dashboard or an automated workflow',
        'Understandable documentation: what happens when and why',
        'Training for the people who will work with it',
      ],
      faq: [
        {
          question: 'Do we need to buy new software for this?',
          answer:
            'Not necessarily. Often a lot can be achieved with the programs you already use. If an additional tool makes sense, we explain costs and alternatives before you decide.',
        },
        {
          question: 'Our data is quite messy. Is that a problem?',
          answer:
            'That is the normal case. Part of the work is cleaning data and setting rules so it is captured properly in future.',
        },
        {
          question: 'What happens to sensitive data?',
          answer:
            'We work only with the data needed for the task and discuss beforehand where it is stored and processed. If personal data is involved, a data processing agreement is part of the deal.',
        },
      ],
      related: ['shops', 'webdev'],
      ctaHeadline: 'Which workflow needlessly costs you time every week?',
    },
  },
  process: {
    seo: {
      title: 'How we work: working with you',
      description:
        'How aetheron works with small businesses: first conversation, written assessment, phased delivery, a test phase and a clean handover.',
    },
    eyebrow: 'How we work',
    h1: 'Understandable, traceable, in manageable steps.',
    lead: 'Good digital solutions emerge when it is clear what they are needed for. That is why we start with your day-to-day work – not with the technology.',
    stepsEyebrow: 'Process',
    stepsTitle: 'From the first conversation to handover',
    steps: [
      {
        title: 'First conversation',
        text: 'You tell us what should work better. We ask questions, listen and say honestly whether and how we can help.',
      },
      {
        title: 'Written assessment',
        text: 'You receive a proposal with scope, approach, timeframe and costs – clearly worded and before you commission anything.',
      },
      {
        title: 'Delivery in stages',
        text: 'We work in manageable steps. You see interim results early, can try them out and give feedback.',
      },
      {
        title: 'Testing and sign-off',
        text: 'We test with you before anything goes live – for shops and integrations first in a test environment.',
      },
      {
        title: 'Handover and support',
        text: 'At the end we explain how everything works and document the essentials. Further support is possible but not mandatory.',
      },
    ],
    principlesEyebrow: 'Principles',
    principlesTitle: 'What matters to us in our work',
    needsTitle: 'What we need from you',
    needs: [
      'A short description of what should improve – in your own words.',
      'A contact person who can answer questions and make decisions.',
      'Access to existing systems, where they are affected (e.g. domain, hosting, POS system).',
      'Some time for feedback on interim results.',
    ],
    notDoingTitle: 'What we deliberately do not do',
    notDoing: [
      'We do not promise Google rankings or specific revenue increases.',
      'We do not create artificial time pressure or “today only” discounts.',
      'We do not recommend tools you do not need – and we say when a simple solution is enough.',
      'We do not add tracking services without your decision and your visitors’ consent.',
      'We do not promise a POS integration before we have assessed it.',
    ],
    gatesTitle: 'For shops and integrations: sign-off before going live',
    gatesText:
      'Payments, orders and data synchronisation with a POS system go live only after they have been checked in a test environment and you have agreed.',
  },
  about: {
    seo: {
      title: 'About aetheron: who we work for and how',
      description:
        'aetheron supports small businesses in Germany with websites, online shops and digitalisation – in German, Turkish or English. Here is what we stand for and what we do not offer.',
    },
    eyebrow: 'About aetheron',
    h1: 'A small partner for small businesses.',
    lead: 'aetheron is for businesses that want a reliable digital solution without getting lost in technology. This page says who it suits, who it suits less, and which languages we work in.',
    forTitle: 'A good fit',
    forItems: [
      'Small businesses, freelancers and tradespeople in Germany',
      'Those who value understandable explanations and a clear scope',
      'Projects that start small and grow when needed',
      'Those who prefer German, Turkish or English',
    ],
    notForTitle: 'Less of a fit',
    notForItems: [
      'Large corporations with fixed procurement processes and framework contracts',
      'Anyone expecting guarantees on rankings, revenue or legal certainty',
      'Instant connection of any POS system without prior assessment',
    ],
    langTitle: 'Languages',
    langText:
      'We advise and write in German, Turkish and English. This website is available in full in all three languages. Legally binding texts are handled separately (see legal notice and privacy policy).',
    teamTitle: 'Who is behind aetheron',
    factsTitle: 'Stated honestly',
    factsText:
      'We show no client logos, reviews, awards or metrics here unless we can substantiate them and are allowed to publish them.',
  },
  faq: {
    seo: {
      title: 'FAQ: website, online shop and POS integration',
      description:
        'Answers to common questions about costs, process, online shops, POS integration, privacy and languages at aetheron.',
    },
    eyebrow: 'FAQ',
    h1: 'Answers to the most important questions.',
    lead: 'Your question is missing? Write to us – we are happy to answer.',
    groups: [
      {
        id: 'allgemein',
        title: 'General',
        items: [
          {
            question: 'Who is aetheron right for?',
            answer:
              'Owners and managers of small businesses who want a reliable website, their own online shop or less manual work in daily operations without having to learn the technology themselves.',
          },
          {
            question: 'Do we need to know exactly what we need?',
            answer: 'No. A rough description is enough. The form has a “Not sure yet” option.',
          },
          {
            question: 'What does a project cost, and how long does it take?',
            answer:
              'Both depend on the scope. After the first conversation you receive a written assessment with a cost range and schedule before you commission anything.',
          },
          {
            question: 'Which languages do you work in?',
            answer: 'German, Turkish and English. This website is available in all three.',
          },
        ],
      },
      {
        id: 'shops',
        title: 'Online shops',
        items: [
          {
            question: 'Does every shop need customer accounts?',
            answer: 'No. Guest ordering is the default. Accounts are an optional feature.',
          },
          {
            question: 'Who processes the payments?',
            answer: 'A payment provider you sign a contract with. We do not store card data.',
          },
          {
            question: 'When does a shop go live?',
            answer:
              'Only after an end-to-end test in a test environment, after your legal texts have been approved and after your explicit go-ahead.',
          },
        ],
      },
      {
        id: 'kasse',
        title: 'POS integration',
        items: [
          {
            question: 'Can my POS system be connected?',
            answer:
              'It depends on the vendor, product, version and interfaces. We assess it individually and tell you beforehand what is realistic.',
          },
          {
            question: 'Does an integration certify my till?',
            answer:
              'No. Obligations around tills, receipts and tax concern your POS system and your processes. Clarify these with your POS vendor and your tax adviser.',
          },
          {
            question: 'What if there is no interface?',
            answer:
              'Then we discuss alternatives such as controlled import and export. Whether they hold up only shows in testing.',
          },
        ],
      },
      {
        id: 'recht',
        title: 'Privacy and legal',
        items: [
          {
            question: 'Will my website or shop then be GDPR-compliant?',
            answer:
              'We use privacy-minded technology and name the services in use. Whether your offering as a whole is compliant also depends on your legal texts and processes and should be reviewed by a qualified professional.',
          },
          {
            question: 'Do you use artificial intelligence?',
            answer:
              'Only where it demonstrably helps and the results can be checked. Often a simple automation is the better solution.',
          },
          {
            question: 'Does this website use tracking?',
            answer:
              'No. This website currently uses no tracking or analytics services and loads no content from third parties.',
          },
        ],
      },
    ],
  },
  contact: {
    seo: {
      title: 'Contact: discuss your project',
      description:
        'Tell aetheron what should work better digitally in your business: website, online shop, POS integration or data. A short description is enough.',
    },
    eyebrow: 'Contact',
    h1: 'Discuss your project',
    lead: 'Briefly describe what it is about. A rough idea is a good start – we clarify the rest together.',
    asideHelpTitle: 'What helps in an enquiry',
    asideHelp: [
      'What should improve – and why now?',
      'What already exists (website, POS, programs, spreadsheets)?',
      'Is there a desired timeframe or fixed dates?',
      'Optional: a rough budget range, if you already have one.',
    ],
    asideHelpNote: 'None of this is mandatory. We clarify open points in conversation.',
    nextTitle: 'What happens next',
    next: [
      'We read your message and reply by email.',
      'If needed we arrange a short call by phone or video.',
      'Afterwards you receive a written, non-binding assessment.',
    ],
    directTitle: 'Direct contact',
    email: 'Email',
    phone: 'Phone',
    booking: 'Book a call online',
    bookingSr: 'opens {provider} in a new tab',
    bookingNote: 'External service ({provider}). Its privacy terms apply once you open it.',
    bookingDisclosure:
      'Before you click: appointment booking runs through {provider} (a provider based in the USA). Only when you open the link is a connection made to {provider}’s servers, and the provider then receives technical data such as your IP address. When booking, you enter your name, email address and possibly other details directly with {provider}; we receive them to organise the appointment. Use is voluntary – you can also send us the form or an email.',
    bookingPolicy: '{provider} privacy information',
    mailOnlyTitle: 'Send us an email',
    mailOnlyText:
      'The quickest way to reach us is by email. The notes alongside help with a first assessment.',
    mailButton: 'Email {email}',
  },
  form: {
    heading: 'Write an enquiry',
    requiredNote: 'Required fields are marked with {star}.',
    requiredSr: 'asterisk',
    optional: '(optional)',
    topicLegend: 'What is it about?',
    topicHint: 'Choose what fits best – or “Not sure yet”.',
    topics: {
      website: { label: 'Website', hint: 'New or overhaul' },
      shop: { label: 'Online shop', hint: 'Selling online' },
      pos: { label: 'POS integration', hint: 'Connect till and shop' },
      data: { label: 'Data & digitalisation', hint: 'Analysis, automation' },
      unsure: { label: 'Not sure yet', hint: 'We work it out together' },
    },
    name: 'Name',
    email: 'Email address',
    emailHint: 'We reply to this address.',
    company: 'Company',
    message: 'Your enquiry',
    messageHint: {
      website: 'For example: Is there a website already? What should improve? Which languages?',
      shop: 'For example: What do you want to sell, and how have you been selling so far?',
      pos: 'For example: What should be synchronised between till and shop – stock, prices, orders?',
      data: 'For example: Which workflows take time, and which programs or spreadsheets are involved?',
      unsure:
        'For example: What should improve? Is there already a website or particular programs? Is there a timeframe?',
    },
    details: {
      website: { url: 'Existing website', urlHint: 'If you have one, e.g. www.example.com' },
      shop: {
        context: 'Current sales channels',
        contextHint: 'For example shop, market, marketplace or social media.',
      },
      pos: {
        legend: 'Details about your POS system',
        hint: 'All optional. If you do not know, leave it blank – we help find out.',
        provider: 'Vendor',
        model: 'Product or model',
        version: 'Version',
      },
      data: {
        tools: 'Programs in use',
        toolsHint: 'For example Excel, accounting, calendar.',
      },
    },
    honeypot: 'Please leave this field empty',
    submit: 'Send enquiry',
    submitting: 'Sending …',
    privacyNote: 'We use your details only to answer your enquiry. You can find details in the',
    privacyLink: 'privacy policy',
    errorSummaryTitle: 'Please check your details',
    errors: {
      nameRequired: 'Please enter your name.',
      nameTooLong: 'Please shorten the name to at most {max} characters.',
      emailRequired: 'Please enter your email address so we can reply.',
      emailInvalid: 'Please check the email address, e.g. name@company.com.',
      companyTooLong: 'Please shorten the company name to at most {max} characters.',
      messageRequired: 'Please briefly describe your enquiry.',
      messageTooShort: 'Please describe your enquiry in a few more words.',
      messageTooLong: 'Please shorten the message to at most {max} characters.',
      detailTooLong: 'Please shorten this entry to at most {max} characters.',
      urlInvalid: 'Please check the address, e.g. www.example.com.',
    },
    statusSending: 'Your enquiry is being sent …',
    statusBlocked: 'The enquiry could not be sent.',
    successTitle: 'Thank you – your message has arrived.',
    successText:
      'We will read your enquiry and reply by email. If you would like to add something in the meantime, feel free to write to',
    failureTitle: 'The message could not be sent.',
    failureText:
      'Your entries are still there. Please try again in a moment – or send your enquiry directly by email.',
    notConfiguredTitle: 'The form has not been set up yet.',
    notConfiguredText: 'Please send your enquiry directly by email.',
    mailButton: 'Open email program',
    mailSubject: 'Enquiry via the website',
    mailLabels: {
      topic: 'Topic',
      name: 'Name',
      company: 'Company',
      url: 'Website',
      context: 'Current sales channels',
      provider: 'POS vendor',
      model: 'POS product',
      version: 'POS version',
      tools: 'Programs in use',
    },
    server: {
      successTitle: 'Thank you – your message has arrived.',
      successText: 'We will read your enquiry and reply by email.',
      invalidTitle: 'Please check your details',
      invalidText: 'Some details are missing or invalid. Please go back and correct them.',
      failureTitle: 'The message could not be sent.',
      failureText: 'Please try again later or write to us directly by email.',
      rateLimitedText: 'Too many requests in a short time. Please try again later.',
      back: 'Back to the form',
      home: 'Go to the home page',
    },
  },
  legal: {
    draftTitle: 'Draft – have this reviewed before publishing.',
    draftText:
      'This page is a template with marked placeholders. It is not legal advice and has not been legally reviewed. Please complete the details and have the text reviewed by a qualified professional.',
    translationNote:
      'This English text is an informational translation of the German draft. The German version is the binding text (subject to determination by your legal counsel).',
    authoritative: 'Binding version: German (subject to determination by your legal counsel).',
    reviewStatus: 'Review status',
    notReviewed: 'not yet legally reviewed',
    imprint: {
      seo: {
        title: 'Legal notice (Impressum)',
        description: 'Provider identification of aetheron (Impressum).',
      },
      eyebrow: 'Legal',
      h1: 'Legal notice (Impressum)',
      intro: 'Information pursuant to § 5 DDG (German Digital Services Act)',
      labels: {
        owner: 'Provider',
        representative: 'Authorised representative',
        address: 'Address',
        contact: 'Contact',
        email: 'Email',
        phone: 'Phone',
        vatId: 'VAT identification number',
        register: 'Commercial register entry',
        content: 'Responsible for content',
        dispute: 'Consumer dispute resolution',
      },
      dispute:
        'Note on participation in dispute resolution proceedings before a consumer arbitration board: please clarify with a qualified professional whether and which statement is required.',
    },
    privacy: {
      seo: {
        title: 'Privacy policy',
        description: 'Information on the processing of personal data on the aetheron website.',
      },
      eyebrow: 'Legal',
      h1: 'Privacy policy',
      updated: 'Last updated',
      sections: [
        {
          id: 'verantwortlicher',
          title: 'Controller',
          paragraphs: [
            'The controller responsible for data processing on this website is:',
            '{{controller}}',
          ],
        },
        {
          id: 'hosting',
          title: 'Hosting and server log files',
          paragraphs: [
            'This website is hosted by {{hostingProvider}} (server location: {{hostingLocation}}). When you visit, the server processes technically necessary data, for example IP address, date and time, the page requested and browser details, in order to deliver the page and ensure operation.',
            'The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and stable operation). Retention depends on the hosting provider’s settings.',
          ],
        },
        {
          id: 'kontaktformular',
          title: 'Contact and enquiry form',
          paragraphs: [
            'If you contact us via the form or by email, we process your details (name, email address, message and any details you provide voluntarily, e.g. about your business or POS system) in order to answer your enquiry.',
            'The legal basis is Art. 6(1)(b) GDPR where the enquiry aims at a contract, otherwise Art. 6(1)(f) GDPR. We delete the details once the enquiry has been fully answered and no retention obligations apply.',
            'Delivery of the form: {{formProcessor}}',
          ],
        },
        {
          id: 'tracking',
          title: 'Cookies, tracking and third-party content',
          paragraphs: [
            'This website currently uses no cookies and no tracking or analytics services. Fonts are served locally. No content is loaded from third parties. The link for booking appointments opens an external service only once you click it; its privacy terms then apply.',
            'Your language choice is not stored.',
          ],
        },
        {
          id: 'rechte',
          title: 'Your rights',
          paragraphs: [
            'Under the applicable legal provisions you have the right of access, rectification, erasure, restriction of processing, data portability and objection. You may also lodge a complaint with a data protection supervisory authority.',
          ],
        },
      ],
      booking: {
        id: 'terminbuchung',
        title: 'Appointment booking via Calendly',
        paragraphs: [
          'On the contact page we link to an online appointment booking by the service Calendly (a provider based in the USA). Merely visiting our website does not transfer any data to Calendly. Only when you click the link does the booking page at Calendly open; Calendly then processes technical data (e.g. IP address, browser details) and – if you book – the data you enter (e.g. name, email address, requested time, free text).',
          'We receive the booking data in order to carry out the appointment. The legal basis is Art. 6(1)(b) GDPR (pre-contractual measures at your request), otherwise Art. 6(1)(f) GDPR. Use is voluntary; alternatives are the enquiry form and email.',
          'Third-country transfer (USA): {{bookingTransfer}}',
          'Processing by Calendly is governed by the provider’s privacy information (https://calendly.com/privacy). Cookies or similar technologies may also be used there; Calendly is responsible for that on its own site.',
        ],
      },
    },
  },
  notFound: {
    title: 'This page does not exist.',
    text: 'The address may be outdated or mistyped.',
    home: 'Go to the home page',
  },
  placeholders: {
    bookingTransfer:
      'Legal basis for the transfer to Calendly in the USA (e.g. adequacy decision/certification or standard contractual clauses) – to be reviewed and entered by the operator',
    owner: 'First and last name or company name with legal form',
    representative: 'Authorised representative (if a company)',
    street: 'Street and number (address for service)',
    city: 'Postal code and city',
    vatId: 'VAT ID under § 27a UStG – or remove the line',
    register: 'Register court and number – or remove the line',
    contentResponsible: 'Name and address, if § 18(2) MStV applies',
    hostingProvider: 'Name and address of the hosting provider',
    hostingLocation: 'Server location (e.g. EU)',
    formProcessor:
      'How the form is delivered, provider, seat, legal basis for any third-country transfer',
    privacyUpdated: 'Date of the privacy policy (month/year)',
    aboutText:
      'Two to three sentences about the person(s) behind aetheron – substantiated facts only',
  },
};
