import type { Messages } from './types';

/**
 * Deutsche Texte (Standardsprache). Zusagen zu Ablauf und Leistungsumfang bitte vor dem Livegang
 * prüfen: Stehen lassen sollten Sie nur, was Sie tatsächlich so handhaben.
 */
export const de: Messages = {
  locale: 'de',
  a11yTitle: 'Barrierefreiheit',
  ui: {
    skip: 'Zum Inhalt springen',
    menu: 'Menü',
    closeMenu: 'Schließen',
    mainNav: 'Hauptnavigation',
    brandHome: 'aetheron – zur Startseite',
    breadcrumbs: 'Brotkrumen',
    home: 'Startseite',
    langNav: 'Sprache wählen',
    langCurrent: 'aktuelle Sprache',
    cta: {
      discuss: 'Projekt besprechen',
      learnMore: 'Mehr erfahren',
      allFaq: 'Alle Fragen ansehen',
      emailInstead: 'Oder direkt per E-Mail:',
    },
    suggest: {
      text: 'Diese Seite gibt es auch auf Deutsch.',
      action: 'Zur deutschen Version',
      dismiss: 'Hinweis schließen',
    },
    footer: {
      tagline: 'Websites, Online-Shops und Datenlösungen für kleine Unternehmen',
      services: 'Leistungen',
      company: 'aetheron',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      rights: '©',
      language: 'Sprache',
    },
    placeholderPrefix: 'Platzhalter',
    service: {
      situationsEyebrow: 'Kennen Sie das?',
      situationsTitle: 'Typische Ausgangslagen',
      scenarioEyebrow: 'So kann es aussehen',
      scenarioNote:
        'Ein erfundenes, typisches Beispiel zur Veranschaulichung – kein Kundenprojekt.',
      before: 'Ausgangslage',
      goal: 'Ziel',
      approach: 'Möglicher Ansatz',
      deliverablesEyebrow: 'Ergebnis',
      deliverablesTitle: 'Was Sie am Ende in der Hand haben',
      deliverablesIntro: 'Typischer Umfang – den genauen Rahmen halten wir vorab schriftlich fest.',
      faqEyebrow: 'Fragen',
      faqTitle: 'Häufige Fragen',
      moreFaq: 'Weitere Antworten finden Sie in den allgemeinen Fragen.',
      relatedTitle: 'Ebenfalls interessant',
    },
  },
  nav: {
    webdev: 'Webentwicklung',
    shops: 'Online-Shops',
    pos: 'Kassensystem-Anbindung',
    data: 'Daten & Digitalisierung',
    process: 'Arbeitsweise',
    about: 'Über aetheron',
    faq: 'Häufige Fragen',
    contact: 'Kontakt',
    legal: 'Impressum',
    privacy: 'Datenschutz',
  },
  home: {
    seo: {
      title: 'aetheron – Websites, Online-Shops und Datenlösungen für kleine Unternehmen',
      description:
        'aetheron entwickelt Websites, individuelle Online-Shops und datengetriebene Lösungen für kleine Unternehmen in Deutschland – inklusive ehrlicher Prüfung, ob sich Ihr Kassensystem anbinden lässt.',
    },
    hero: {
      eyebrow: 'Webentwicklung, Online-Shops & Digitalisierung',
      h1: 'Eine klare Website oder ein eigener Online-Shop.',
      h1Accent: 'Und Daten, die im Alltag helfen.',
      lead: 'aetheron entwickelt Websites, individuelle Online-Shops und praktische Datenlösungen für kleine Unternehmen in Deutschland. Auf Wunsch prüfen wir, ob sich Ihr bestehendes Kassensystem sinnvoll anbinden lässt – und sagen ehrlich, wenn nicht.',
      secondary: 'Leistungen ansehen',
    },
    audience: {
      eyebrow: 'Für wen',
      title: 'Für kleine Unternehmen, die digital einfach besser funktionieren wollen.',
      intro:
        'Sie führen ein Geschäft, einen Betrieb, eine Praxis oder eine Beratung und möchten sich nicht selbst in Technik einarbeiten. Kommt Ihnen eine dieser Situationen bekannt vor?',
      items: [
        {
          title: 'Sie verkaufen bisher nur vor Ort',
          text: 'Kundinnen und Kunden fragen nach Online-Bestellung, Abholung oder Lieferung – aber Sie wissen nicht, wie das zu Kasse und Alltag passt.',
        },
        {
          title: 'Die Website passt nicht mehr',
          text: 'Sie ist veraltet, auf dem Smartphone mühsam oder erklärt nicht klar, was Sie anbieten.',
        },
        {
          title: 'Zu viel Handarbeit',
          text: 'Dieselben Angaben werden mehrfach abgetippt, Listen von Hand gepflegt, und die Zahlen sind schwer auszuwerten.',
        },
      ],
    },
    services: {
      eyebrow: 'Leistungen',
      title: 'Vier Leistungen, ein Ziel: weniger Reibung im Alltag.',
      intro:
        'Jede Leistung lässt sich einzeln beauftragen. Sie bauen aufeinander auf, wenn Sie es möchten.',
    },
    honesty: {
      eyebrow: 'Kassensysteme',
      title: 'Kassensystem und Online-Shop zusammenbringen – aber nur, wenn es trägt.',
      text: 'Ob Bestand, Preise oder Bestellungen zwischen Kasse und Shop abgeglichen werden können, hängt vom Hersteller, vom Produkt und von der Version ab. Deshalb prüfen wir die Machbarkeit für jeden Anbieter einzeln, bevor wir etwas zusagen.',
      items: [
        {
          title: 'Erst prüfen, dann zusagen',
          text: 'Wir klären Schnittstellen, Erlaubnisse und Kosten, bevor Sie in eine Anbindung investieren.',
        },
        {
          title: 'Erst testen, dann live',
          text: 'Abgleiche laufen zuerst in einer Testumgebung. Erst nach Abnahme wird live synchronisiert.',
        },
        {
          title: 'Alternativen statt Zwang',
          text: 'Wenn es keine direkte Anbindung gibt, besprechen wir einfachere Wege – ohne Erfolg zu versprechen.',
        },
      ],
    },
    principles: {
      eyebrow: 'Worauf Sie sich verlassen können',
      title: 'Keine großen Versprechen. Eine klare Arbeitsweise.',
      text: 'Statt Superlativen setzen wir auf eine Arbeitsweise, die Sie von Anfang an nachvollziehen können – vom ersten Gespräch bis zur Übergabe.',
      link: 'Mehr über unsere Arbeitsweise',
      items: [
        {
          title: 'Verständlich statt kompliziert',
          text: 'Wir erklären Technik in Worten, die im Arbeitsalltag Sinn ergeben – und fragen nach, wenn etwas unklar ist.',
        },
        {
          title: 'Transparenter Umfang',
          text: 'Vor der Beauftragung wissen Sie, was enthalten ist, was nicht und womit Sie rechnen können.',
        },
        {
          title: 'Klein anfangen',
          text: 'Lieber ein erster Schritt, der zuverlässig funktioniert, als ein großes Vorhaben, das nie fertig wird.',
        },
        {
          title: 'Datensparsam von Anfang an',
          text: 'Keine Tracker ohne Einwilligung, Schriften lokal eingebunden, nur die Daten erheben, die wirklich gebraucht werden.',
        },
      ],
    },
    process: {
      eyebrow: 'Ablauf',
      title: 'So läuft ein Projekt ab.',
      text: 'Überschaubare Schritte – und Sie wissen jederzeit, woran wir gerade arbeiten.',
    },
    languages: {
      eyebrow: 'Sprachen',
      title: 'Auf Deutsch, Türkisch oder Englisch.',
      text: 'Sie können uns in der Sprache schreiben, in der Sie sich am wohlsten fühlen. Diese Website gibt es vollständig auf Deutsch, Türkisch und Englisch.',
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      title: 'Was kleine Unternehmen uns oft fragen.',
      items: [
        {
          question: 'Für wen ist aetheron das Richtige?',
          answer:
            'Für Inhaberinnen, Inhaber und Verantwortliche kleiner Unternehmen – zum Beispiel Einzelhandel, Handwerk, Gastronomie, Praxen, Beratungen oder Dienstleister –, die eine verlässliche Website, einen eigenen Online-Shop oder weniger Handarbeit im Alltag möchten.',
        },
        {
          question: 'Müssen wir schon genau wissen, was wir brauchen?',
          answer:
            'Nein. Eine grobe Beschreibung reicht. Im Anfrageformular können Sie „Noch unsicher“ wählen. Oft entsteht erst im Gespräch ein klares Bild davon, was sinnvoll ist – und was nicht.',
        },
        {
          question: 'Was kostet ein Projekt?',
          answer:
            'Das hängt vom Umfang ab. Pauschalpreise ohne Kenntnis Ihrer Situation wären nicht seriös. Nach dem Erstgespräch erhalten Sie eine schriftliche Einschätzung mit Kostenrahmen, bevor Sie sich entscheiden.',
        },
        {
          question: 'Lässt sich mein Kassensystem mit einem Online-Shop verbinden?',
          answer:
            'Manchmal ja, manchmal nur eingeschränkt, manchmal nicht. Das hängt vom Hersteller, vom Produkt, von der Version und von den freigegebenen Schnittstellen ab. Wir prüfen das für Ihren Anbieter einzeln und sagen Ihnen vorab, was realistisch ist.',
        },
        {
          question: 'Ist meine Website oder mein Shop dann DSGVO-konform?',
          answer:
            'Wir setzen datensparsame Technik ein und benennen, welche Dienste verwendet werden. Ob Ihr Angebot insgesamt rechtskonform ist, hängt aber auch von Ihren Rechtstexten und Abläufen ab. Diese Prüfung sollte eine fachkundige Stelle übernehmen – Rechtsberatung können und dürfen wir nicht leisten.',
        },
      ],
    },
    cta: {
      headline: 'Erzählen Sie uns, was besser laufen soll.',
      text: 'Eine kurze Beschreibung reicht. Wir melden uns per E-Mail und schlagen einen Termin für ein erstes Gespräch vor.',
    },
  },
  services: {
    webdev: {
      seo: {
        title: 'Website erstellen lassen für kleine Unternehmen',
        description:
          'Websites für kleine Unternehmen: klare Struktur, schnelle Ladezeiten, gut bedienbar auf dem Smartphone, mehrsprachig möglich und mit einfachem Weg zur Anfrage.',
      },
      name: 'Webentwicklung',
      eyebrow: 'Leistung · Webentwicklung',
      h1: 'Eine Website, die klar sagt, was Sie anbieten.',
      lead: 'Wir planen, gestalten und entwickeln Websites, auf denen Interessenten schnell verstehen, was Sie tun – und leicht mit Ihnen in Kontakt kommen. Ohne überflüssige Effekte, dafür schnell, gut lesbar und auf dem Smartphone genauso bedienbar wie am Rechner.',
      summary:
        'Neue Website oder Relaunch: klar strukturiert, schnell, mobil gut bedienbar und mit einem einfachen Weg zur Anfrage.',
      highlights: [
        'Neue Website oder Überarbeitung',
        'Struktur und Texte, die Kundinnen und Kunden verstehen',
        'Technische Grundlagen für Suchmaschinen',
        'Auf Wunsch mehrsprachig, z. B. Deutsch, Türkisch, Englisch',
      ],
      topic: 'website',
      secondaryCta: 'Was dazugehört',
      situations: [
        'Ihre Website ist in die Jahre gekommen und auf dem Smartphone mühsam zu bedienen.',
        'Interessenten rufen an, um Dinge zu fragen, die eigentlich auf der Website stehen sollten.',
        'Kleine Änderungen dauern lange, weil niemand mehr weiß, wie die Seite funktioniert.',
        'Ihre Kundschaft spricht verschiedene Sprachen, Ihre Website aber nur eine.',
        'Sie haben noch keine Website und möchten mit einer soliden, überschaubaren Lösung starten.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'bausteine',
          eyebrow: 'Bausteine',
          title: 'Was dazugehören kann',
          intro:
            'Nicht jedes Projekt braucht alle Bausteine. Welche sinnvoll sind, klären wir gemeinsam im Erstgespräch.',
          items: [
            {
              title: 'Struktur und Inhalte',
              text: 'Wir klären, wer Ihre Website besucht und was diese Menschen wissen wollen. Daraus entsteht ein Seitenaufbau, der Fragen in der richtigen Reihenfolge beantwortet. Sie bringen das Fachwissen mit, wir helfen bei Struktur und Formulierung.',
            },
            {
              title: 'Gestaltung und Umsetzung',
              text: 'Ein ruhiges, eigenständiges Erscheinungsbild, das zu Ihrem Unternehmen passt. Umgesetzt mit schlanker Technik: schnelle Ladezeiten, gut lesbare Schrift, bedienbar mit Tastatur und Screenreader – orientiert an den Anforderungen der WCAG.',
            },
            {
              title: 'Auffindbarkeit',
              text: 'Saubere technische Grundlagen, damit Suchmaschinen Ihre Seiten verstehen: aussagekräftige Titel, sinnvolle Überschriften, Sitemap und Einrichtung der Google Search Console. Platzierungen kann niemand seriös versprechen – gute Grundlagen und nützliche Inhalte helfen aber.',
            },
            {
              title: 'Mehrere Sprachen',
              text: 'Eigene, saubere Adressen je Sprache, ein Sprachwechsel, der auf die passende Seite führt, und korrekte Sprachauszeichnung. Wichtige Texte sollten von Muttersprachlern gelesen werden; wir helfen, den Ablauf dafür zu organisieren.',
            },
            {
              title: 'Kontaktwege',
              text: 'Ein Formular, das nur fragt, was wirklich nötig ist, klare Handlungsaufforderungen und auf Wunsch die Anbindung einer Terminbuchung. Datensparsam eingerichtet, mit verständlichen Hinweisen zum Datenschutz.',
            },
            {
              title: 'Übergabe und Pflege',
              text: 'Zum Abschluss zeigen wir Ihnen, wie Sie Inhalte selbst anpassen können – soweit das für Ihre Lösung vorgesehen ist – und dokumentieren Zugänge und Einstellungen. Weitere Betreuung ist möglich, aber keine Pflicht.',
            },
          ],
        },
      ],
      scenario: {
        title: 'Beispielszenario: Ein Handwerksbetrieb mit vielen Telefonanfragen',
        before:
          'Anfragen kommen per Telefon, E-Mail und über ein altes Formular. Oft fehlen wichtige Angaben, und es wird mehrfach nachgefragt.',
        goal: 'Interessenten sollen auf der Website schnell sehen, welche Leistungen es gibt, und ihre Anfrage mit den nötigen Angaben direkt stellen können.',
        approach:
          'Leistungsseiten mit den häufigsten Fragen, ein kurzes Anfrageformular mit wenigen, gezielten Feldern und eine klare Kontaktseite.',
      },
      deliverables: [
        'Eine veröffentlichte Website auf Ihrer Domain',
        'Seitenstruktur und abgestimmte Texte',
        'Grundeinrichtung für Suchmaschinen (z. B. Sitemap, Search Console)',
        'Kurze Anleitung zur Pflege und eine Übersicht der Zugänge',
      ],
      faq: [
        {
          question: 'Was kostet eine Website?',
          answer:
            'Das hängt vom Umfang ab – etwa von der Anzahl der Seiten, von Funktionen wie Terminbuchung oder mehreren Sprachen und davon, wie viel Text bereits vorhanden ist. Nach einem ersten Gespräch erhalten Sie eine schriftliche Einschätzung mit Umfang und Kostenrahmen, bevor Sie etwas beauftragen.',
        },
        {
          question: 'Können wir die Website später selbst ändern?',
          answer:
            'Das klären wir am Anfang. Manche Unternehmen möchten Texte und Bilder selbst pflegen, andere lieber gelegentlich Änderungen beauftragen. Die Technik wählen wir passend dazu aus.',
        },
        {
          question: 'Kümmern Sie sich auch um Impressum und Datenschutzerklärung?',
          answer:
            'Wir richten die Seiten technisch ein und benennen, welche Angaben und eingesetzten Dienste darin vorkommen müssen. Die rechtliche Formulierung und Prüfung ersetzt das nicht – dafür empfehlen wir eine fachkundige Stelle.',
        },
        {
          question: 'Wer übersetzt die Texte für mehrere Sprachen?',
          answer:
            'Das kann Ihr Team, ein Übersetzungsbüro oder wir gemeinsam mit Ihnen erarbeiten. Bei Geschäfts- und Rechtstexten empfehlen wir eine Prüfung durch fachkundige Muttersprachler.',
        },
      ],
      related: ['shops', 'data'],
      ctaHeadline: 'Sie möchten eine neue Website oder Ihre bestehende überarbeiten?',
    },
    shops: {
      seo: {
        title: 'Online-Shop erstellen lassen: individuelle Shops für kleine Unternehmen',
        description:
          'Individueller Online-Shop für kleine Unternehmen in Deutschland: Katalog, Warenkorb, Gastbestellung, Zahlung und Versand – als klar abgegrenzter Projektumfang, auf Wunsch mit Kassensystem-Prüfung.',
      },
      name: 'Online-Shops',
      eyebrow: 'Leistung · Online-Shops',
      h1: 'Ein Online-Shop, der zu Ihrem Geschäft passt.',
      lead: 'Wir konzipieren und entwickeln Online-Shops für kleine Unternehmen: vom übersichtlichen Sortiment bis zur Bestellung – so umfangreich wie nötig und so schlank wie möglich. Was Ihr Shop braucht, legen wir gemeinsam anhand Ihres Sortiments und Ihrer Abläufe fest.',
      summary:
        'Individuell geplante Shops mit Katalog, Warenkorb, Gastbestellung, Zahlung und Versand – nach Ihrem Bedarf und ohne Funktionsballast.',
      highlights: [
        'Katalog mit Varianten, Suche und Filtern',
        'Bestellung ohne Kundenkonto möglich',
        'Zahlung über geprüfte Zahlungsdienstleister',
        'Auf Wunsch mit Prüfung Ihres Kassensystems',
      ],
      topic: 'shop',
      secondaryCta: 'Möglicher Umfang',
      notice: {
        title: 'Zu dieser Seite',
        text: 'Hier beschreiben wir, was wir für Kunden-Shops entwickeln können. Nicht jeder Shop braucht jede Funktion, und jede Funktion ist Teil eines abgestimmten Projektumfangs – nicht automatisch enthalten. Aetherons eigene Website ist kein Online-Shop.',
      },
      situations: [
        'Sie verkaufen im Laden oder auf Märkten und wollen zusätzlich online bestellbar sein.',
        'Ihr Sortiment hat Varianten wie Größe, Farbe oder Gewicht, die sich schlecht per E-Mail abwickeln lassen.',
        'Sie nutzen ein Marktplatzprofil oder Social Media und möchten einen eigenen Verkaufsweg aufbauen.',
        'Sie möchten Abholung oder Lieferung anbieten, ohne dass die Bestellungen im Alltag untergehen.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'umfang',
          eyebrow: 'Möglicher Umfang',
          title: 'Was ein Shop-Projekt umfassen kann',
          intro:
            'Eine Auswahl dessen, was wir planen und umsetzen können. Was davon zu Ihnen passt, entscheiden Sie im Einzelnen.',
          items: [
            {
              title: 'Shopfront für Smartphone und Rechner',
              text: 'Ein schnelles, gut lesbares Layout, das auf kleinen Bildschirmen genauso funktioniert wie am Desktop, mit sauberen Seitentiteln und Adressen für Suchmaschinen.',
            },
            {
              title: 'Katalog und Varianten',
              text: 'Kategorien, Produktseiten, Varianten wie Größe oder Sorte, Bilder, Verfügbarkeitsanzeige – gepflegt über eine Verwaltung, die Ihr Team bedienen kann.',
            },
            {
              title: 'Suche, Filter und Sortierung',
              text: 'Damit Kundinnen und Kunden schnell finden, was sie suchen. Der Umfang richtet sich nach der Größe Ihres Sortiments.',
            },
            {
              title: 'Warenkorb',
              text: 'Mengen ändern, Positionen entfernen, klare Summen. Preise und Bestand werden beim Bestellen serverseitig erneut geprüft.',
            },
            {
              title: 'Kasse mit Gastbestellung',
              text: 'Bestellen ohne Kundenkonto ist der Standard. Adressprüfung, Versand- und Zahlungsart, aufgeschlüsselte Summen inklusive Steuern und Versand und eine eindeutig beschriftete Schaltfläche zum verbindlichen Bestellen.',
            },
            {
              title: 'Freiwillige Kundenkonten',
              text: 'Nur, wenn es Ihnen und Ihrer Kundschaft nützt: Bestellhistorie, gespeicherte Adressen, Datenschutzfunktionen. Kein Zwang zur Registrierung für einmalige Bestellungen.',
            },
            {
              title: 'Zahlung und Versand',
              text: 'Anbindung an einen Zahlungsdienstleister Ihrer Wahl, der die Zahlungsdaten selbst verarbeitet. Wir speichern keine Kartendaten. Versandarten und -kosten nach Ihren Regeln.',
            },
            {
              title: 'Benachrichtigungen',
              text: 'Bestellbestätigung und Statusmeldungen in der Sprache Ihrer Kundschaft. Der Wortlaut ist mit Ihren rechtlich geprüften Bedingungen abzustimmen.',
            },
            {
              title: 'Verwaltung und Rückgaben',
              text: 'Bestellübersicht, Stornierungen, Rückgaben, Erstattungen im Rahmen Ihres Zahlungsdienstleisters, Rechnungsunterlagen und Änderungsprotokoll.',
            },
            {
              title: 'Individualisierung (optional)',
              text: 'Wo Produkte angepasst werden können, z. B. mit Beschriftung: Wir legen vorab fest, welche Eingaben zulässig sind und wie sich der Preis berechnet.',
            },
            {
              title: 'Barrierefreiheit, Datenschutz, Wartbarkeit',
              text: 'Bedienbar mit Tastatur, gut lesbar, datensparsam. Der Aufbau wird so dokumentiert, dass er sich später pflegen und erweitern lässt.',
            },
          ],
        },
        {
          kind: 'steps',
          id: 'vorgehen',
          eyebrow: 'Vorgehen',
          title: 'Vom Sortiment zur ersten Bestellung',
          intro: 'Ein Shop geht erst live, wenn alle Beteiligten das freigegeben haben.',
          items: [
            {
              title: 'Klären',
              text: 'Sortiment, Preise und Steuersätze, Versand, Abholung, Rückgaben, vorhandene Systeme wie Kasse oder Warenwirtschaft.',
            },
            {
              title: 'Umfang festlegen',
              text: 'Sie erhalten eine schriftliche Einschätzung: Was ist enthalten, was später, was hängt von Dritten ab.',
            },
            {
              title: 'Umsetzen im Testmodus',
              text: 'Wir bauen und testen mit Testdaten und Test-Zugängen Ihrer Dienstleister. Es fließt kein echtes Geld.',
            },
            {
              title: 'Abnahme und Livegang',
              text: 'Ende-zu-Ende-Test von Bestellung bis Zahlungsbestätigung, Freigabe Ihrer Rechtstexte, dann erst die Live-Schaltung.',
            },
          ],
        },
        {
          kind: 'split',
          id: 'zusammenarbeit',
          eyebrow: 'Zusammenarbeit',
          title: 'Wer bringt was mit?',
          left: {
            title: 'Von aetheron',
            items: [
              'Konzept, Gestaltung und technische Umsetzung',
              'Einrichtung und Test der Anbindungen (Zahlung, Versand, E-Mail)',
              'Tests, Dokumentation und Einweisung',
              'Ehrliche Hinweise, wenn eine Funktion nicht sinnvoll ist',
            ],
          },
          right: {
            title: 'Von Ihnen und Dritten',
            items: [
              'Produktdaten, Preise, Steuersätze, Bilder',
              'Versand-, Liefer- und Rückgabebedingungen',
              'Rechtlich geprüfte AGB, Widerrufs- und Datenschutztexte',
              'Vertrag und Zugänge beim Zahlungsdienstleister',
            ],
          },
        },
        {
          kind: 'callout',
          id: 'freigabe',
          eyebrow: 'Grundsatz',
          title: 'Kein Livebetrieb ohne Freigabe',
          text: 'Zahlungen und Bestellungen gehen erst live, wenn ein Ende-zu-Ende-Test bestanden ist und Sie freigegeben haben. Zahlungsdaten werden ausschließlich vom Zahlungsdienstleister verarbeitet. Die rechtlichen Texte Ihres Shops (AGB, Widerruf, Datenschutz, Preis- und Versandangaben) sollten Sie von einer fachkundigen Stelle prüfen lassen – das können wir nicht ersetzen.',
        },
        {
          kind: 'list',
          id: 'klein-starten',
          eyebrow: 'Lieber klein anfangen?',
          title: 'Schlankere Einstiege',
          intro: 'Nicht jedes Geschäft braucht sofort einen vollen Shop. Mögliche erste Schritte:',
          items: [
            'Ein Online-Katalog mit Anfrage- oder Reservierungsformular',
            'Bestellung mit Abholung im Laden und Zahlung vor Ort',
            'Ein kleines Sortiment als Start, das später erweitert wird',
            'Erst die Kassensystem-Prüfung, dann die Entscheidung über den Umfang',
          ],
        },
      ],
      deliverables: [
        'Ein getesteter Shop, der auf Ihrer Domain betrieben werden kann',
        'Dokumentierte Einstellungen und Zugänge',
        'Testprotokoll der wichtigsten Abläufe (Bestellung, Zahlung, Rückgabe)',
        'Einweisung für die Personen, die Produkte und Bestellungen pflegen',
      ],
      faq: [
        {
          question: 'Was kostet ein Online-Shop?',
          answer:
            'Das hängt vor allem von Sortiment, Varianten, Zahlungs- und Versandarten sowie Anbindungen ab. Nach dem Erstgespräch erhalten Sie eine schriftliche Einschätzung mit Umfang und Kostenrahmen. Laufende Kosten, etwa für Hosting oder Zahlungsdienstleister, nennen wir dabei getrennt.',
        },
        {
          question: 'Müssen Kundinnen und Kunden ein Konto anlegen?',
          answer:
            'Nein, das ist nicht der Standard. Bestellen als Gast ist möglich. Ein Konto ist eine freiwillige Option, wenn es Ihrer Kundschaft etwas bringt.',
        },
        {
          question: 'Speichern Sie Kreditkartendaten?',
          answer:
            'Nein. Zahlungen laufen über einen Zahlungsdienstleister, der die Daten selbst verarbeitet. Welcher für Sie passt, besprechen wir – die Vertragsbeziehung besteht zwischen Ihnen und dem Anbieter.',
        },
        {
          question: 'Welche rechtlichen Texte brauche ich für den Shop?',
          answer:
            'Das hängt von Ihrem Geschäftsmodell ab, etwa AGB, Widerrufsbelehrung, Angaben zu Preisen, Steuern und Versand sowie Datenschutzerklärung. Wir bauen Seiten und Hinweise so ein, dass sie sich einfügen lassen. Die Inhalte sollten von einer fachkundigen Stelle geprüft werden.',
        },
        {
          question: 'Kann der Shop mit meiner Kasse verbunden werden?',
          answer:
            'Das prüfen wir für Ihren Anbieter gesondert – siehe Kassensystem-Anbindung. Ein Shop funktioniert aber auch ohne diese Verbindung.',
        },
      ],
      related: ['pos', 'webdev'],
      ctaHeadline: 'Sie überlegen, online zu verkaufen?',
    },
    pos: {
      seo: {
        title: 'Kassensystem-Anbindung für Online-Shops: Machbarkeit prüfen',
        description:
          'Kassensystem und Online-Shop verbinden? aetheron prüft für jeden Hersteller einzeln, ob und wie sich Bestand, Preise und Bestellungen sinnvoll abgleichen lassen – mit Testphase und ehrlichen Alternativen.',
      },
      name: 'Kassensystem-Anbindung',
      eyebrow: 'Leistung · Kassensystem-Anbindung',
      h1: 'Kasse und Online-Shop: erst prüfen, dann verbinden.',
      lead: 'Wenn Sie im Laden mit einem Kassensystem (POS) arbeiten, stellt sich die Frage, wie Bestand, Preise und Bestellungen zum Online-Shop kommen. Wir bewerten, koordinieren und – wo es tragfähig ist – setzen eine Anbindung um. Für jeden Anbieter einzeln.',
      summary:
        'Machbarkeit, Abstimmung mit Ihrem Kassenanbieter und – wo möglich – die technische Anbindung. Ohne pauschale Zusagen.',
      highlights: [
        'Prüfung von Anbieter, Version und Schnittstellen',
        'Abstimmung mit Ihrem Kassenanbieter',
        'Test in einer Testumgebung vor dem Livebetrieb',
        'Ehrliche Alternativen, wenn keine direkte Anbindung möglich ist',
      ],
      topic: 'pos',
      secondaryCta: 'Was wir klären',
      notice: {
        title: 'Wichtig vorab',
        text: 'Es gibt keine Anbindung, die für jedes Kassensystem „einfach funktioniert“. Ob und wie sich Ihr System anbinden lässt, prüfen wir für jeden Hersteller, jedes Produkt und jede Version einzeln. Vorher sagen wir nichts zu.',
      },
      situations: [
        'Sie haben ein Kassensystem im Laden und wollen online verkaufen, ohne Bestände doppelt zu pflegen.',
        'Ihr Bestand stimmt online und im Laden nicht überein.',
        'Preise oder Aktionen sollen an einer Stelle gepflegt werden.',
        'Ihr Kassenanbieter bietet eine Schnittstelle an, aber niemand weiß, was damit möglich ist.',
      ],
      blocks: [
        {
          kind: 'list',
          id: 'fragen',
          eyebrow: 'Was wir klären',
          title: 'Fragen zu Ihrem Kassensystem',
          intro: 'Diese Punkte klären wir in der Machbarkeitsprüfung, bevor wir etwas zusagen:',
          items: [
            'Welcher Anbieter, welches Produkt, welche Version und welche Lizenzstufe?',
            'Wie viele Standorte oder Kassen sind betroffen?',
            'Gibt es eine dokumentierte Schnittstelle (API) oder Exportfunktion? Was kostet sie?',
            'Braucht es die Freigabe oder Mitwirkung des Herstellers?',
            'Gibt es eine Testumgebung (Sandbox) und Testzugänge?',
            'Wer besitzt die Zugänge, und wer haftet für Änderungen am Kassensystem?',
            'Welche Systeme sind außerdem beteiligt, etwa Warenwirtschaft oder Buchhaltung?',
          ],
        },
        {
          kind: 'cards',
          id: 'datenfluesse',
          eyebrow: 'Datenflüsse',
          title: 'Was zwischen Kasse und Shop fließen könnte',
          intro:
            'Für jede Datenart klären wir, wo sie „führend“ gepflegt wird, in welche Richtung sie fließt und wie oft.',
          items: [
            {
              title: 'Produkte und Varianten',
              text: 'Artikelnummern, Bezeichnungen, Varianten, Steuersätze. Wo werden Stammdaten gepflegt, und wie werden Änderungen übernommen?',
            },
            {
              title: 'Preise und Aktionen',
              text: 'Regelpreise, Rabatte und Aktionen. Lassen sie sich über die Schnittstelle abbilden oder nur teilweise?',
            },
            {
              title: 'Bestand je Standort',
              text: 'Wie aktuell muss der Bestand sein, und was passiert, wenn im Laden und online gleichzeitig verkauft wird?',
            },
            {
              title: 'Kundendaten',
              text: 'Nur, wenn nötig und datenschutzrechtlich abgestimmt. Oft ist es sinnvoll, Kundendaten getrennt zu halten.',
            },
            {
              title: 'Bestellungen',
              text: 'Sollen Online-Bestellungen im Kassensystem erscheinen, und wenn ja, in welcher Form und mit welchem Zahlungsstatus?',
            },
            {
              title: 'Rückgaben und Gutscheine',
              text: 'Wie werden Retouren, Erstattungen und Gutscheine über beide Wege konsistent behandelt?',
            },
          ],
        },
        {
          kind: 'steps',
          id: 'phasen',
          eyebrow: 'Phasen',
          title: 'Schrittweise, mit Entscheidungspunkt',
          intro: 'Nach jeder Phase entscheiden Sie, ob es weitergeht.',
          items: [
            {
              title: 'Machbarkeit',
              text: 'Dokumentation, Schnittstellen, Erlaubnisse und Kosten prüfen. Ergebnis: eine schriftliche Einschätzung, ob und in welcher Form eine Anbindung sinnvoll ist.',
            },
            {
              title: 'Prototyp im Testsystem',
              text: 'Mit Testzugängen den wichtigsten Datenfluss ausprobieren. Ergebnis: belegte Erkenntnisse statt Annahmen.',
            },
            {
              title: 'Pilot und Abgleich',
              text: 'Begrenzter Livebetrieb mit Kontrolle: Stimmen die Daten? Was passiert bei Fehlern?',
            },
            {
              title: 'Betrieb und Überwachung',
              text: 'Fehlgeschlagene Abgleiche werden sichtbar, und es gibt eine Übersicht zum Nachprüfen der Datenstände.',
            },
          ],
        },
        {
          kind: 'cards',
          id: 'sorgfalt',
          eyebrow: 'Sorgfalt',
          title: 'Worauf wir bei der Technik achten',
          items: [
            {
              title: 'Fehlerbehandlung und Wiederholung',
              text: 'Schnittstellen sind manchmal nicht erreichbar. Abgleiche werden wiederholt, ohne Bestände doppelt zu buchen.',
            },
            {
              title: 'Abgleich und Konfliktregeln',
              text: 'Vorab festgelegt, was gilt, wenn Kasse und Shop unterschiedliche Stände haben, und eine Übersicht zur Kontrolle.',
            },
            {
              title: 'Sicherheit',
              text: 'Zugangsdaten liegen nur serverseitig und nicht im Quelltext. Zugriffsrechte werden auf das Nötige begrenzt.',
            },
            {
              title: 'Protokolle ohne Personendaten',
              text: 'Wir protokollieren so, dass sich Fehler finden lassen, ohne unnötig personenbezogene Daten zu speichern.',
            },
          ],
        },
        {
          kind: 'split',
          id: 'alternativen',
          eyebrow: 'Wenn es nicht direkt geht',
          title: 'Ehrliche Alternativen',
          intro:
            'Manchmal fehlt eine nutzbare Schnittstelle. Dann sprechen wir über einfachere Wege.',
          left: {
            title: 'Mögliche Wege (Machbarkeit offen)',
            items: [
              'Vom Hersteller freigegebene Middleware oder ein Konnektor eines Drittanbieters',
              'Kontrollierter Import und Export (z. B. CSV), zeitgesteuert oder manuell',
              'Nur einseitiger oder verzögerter Abgleich, z. B. nur Bestand',
              'Getrenntes Online-Sortiment mit eigener Bestandspflege',
            ],
          },
          right: {
            title: 'Was wir dann sagen',
            items: [
              'Ob der Aufwand den Nutzen rechtfertigt',
              'Wo Risiken für Datenqualität und Bestand liegen',
              'Dass ein Wechsel des Kassenanbieters manchmal die bessere Lösung ist – aber nicht immer',
              'Keine Zusage, dass eine Alternative funktioniert, bevor sie getestet wurde',
            ],
          },
        },
        {
          kind: 'callout',
          id: 'steuern',
          eyebrow: 'Kassen- und Steuerrecht',
          title: 'Eine Shop-Anbindung zertifiziert keine Kasse',
          text: 'Pflichten rund um Kasse, Belege, Aufzeichnungen und Steuer (z. B. Manipulationsschutz und Datenexporte) betreffen Ihr Kassensystem und Ihre Abläufe. Eine Online-Shop-Anbindung erfüllt sie nicht und bescheinigt sie nicht. Klären Sie Fragen dazu mit Ihrem Kassenanbieter und Ihrer Steuerberatung.',
        },
      ],
      deliverables: [
        'Eine schriftliche Machbarkeitseinschätzung zu Ihrem Anbieter',
        'Falls sinnvoll: ein getesteter Prototyp im Testsystem',
        'Beschreibung der Datenflüsse, Zuständigkeiten und Konfliktregeln',
        'Bei Umsetzung: dokumentierte Anbindung mit Überwachung und Abgleichsübersicht',
      ],
      faq: [
        {
          question: 'Welche Kassensysteme unterstützen Sie?',
          answer:
            'Wir nennen keine Liste, weil eine Zusage ohne Prüfung nicht seriös wäre. Sagen Sie uns Anbieter, Produkt und Version, sofern bekannt. Wenn Sie es nicht wissen, helfen wir beim Herausfinden.',
        },
        {
          question: 'Was kostet die Machbarkeitsprüfung?',
          answer:
            'Der Umfang hängt davon ab, wie gut dokumentiert das System ist und ob es Testzugänge gibt. Wir stimmen den Umfang mit Ihnen ab, bevor Kosten entstehen. Schnittstellen- oder Lizenzgebühren Ihres Kassenanbieters kommen ggf. hinzu.',
        },
        {
          question: 'Brauche ich die Zustimmung meines Kassenanbieters?',
          answer:
            'Häufig ja, etwa für API-Zugang oder Änderungen an Ihrer Lizenz. Das klären wir in der ersten Phase gemeinsam mit Ihnen.',
        },
        {
          question: 'Was, wenn mein Anbieter keine Schnittstelle hat?',
          answer:
            'Dann besprechen wir Alternativen wie kontrollierten Import und Export. Ob sie im Alltag tragen, muss sich im Test zeigen.',
        },
      ],
      related: ['shops', 'data'],
      ctaHeadline: 'Sie möchten wissen, ob Ihre Kasse zu einem Shop passt?',
    },
    data: {
      seo: {
        title: 'Daten & Digitalisierung: Auswertungen und Automatisierung',
        description:
          'Weniger Handarbeit und bessere Übersicht: Auswertungen, Dashboards und automatisierte Abläufe für kleine Unternehmen – auf Basis der Daten, die Sie schon haben.',
      },
      name: 'Daten & Digitalisierung',
      eyebrow: 'Leistung · Daten & Digitalisierung',
      h1: 'Weniger Handarbeit. Zahlen, die Sie verstehen.',
      lead: 'Viele kleine Unternehmen haben mehr Daten, als sie denken – verteilt auf Tabellen, E-Mails und einzelne Programme. Wir helfen, daraus verständliche Auswertungen zu machen und wiederkehrende Handgriffe zu automatisieren. Dabei beginnen wir mit dem, was bereits da ist.',
      summary:
        'Auswertungen und Dashboards aus vorhandenen Daten, weniger doppelte Eingaben und automatisierte Abläufe zwischen Ihren Programmen.',
      highlights: [
        'Übersichtliche Auswertungen und Dashboards',
        'Automatisierte Abläufe zwischen Programmen',
        'Kleine Web-Werkzeuge für interne Aufgaben',
        'Nüchterne Prüfung, wo KI tatsächlich hilft',
      ],
      topic: 'data',
      secondaryCta: 'Was dazugehört',
      situations: [
        'Kennzahlen werden jeden Monat von Hand aus mehreren Tabellen zusammengetragen.',
        'Dieselben Angaben werden in zwei oder drei Programme übertragen.',
        'Anfragen, Aufträge oder Termine sind über E-Mail, Telefon und Zettel verteilt.',
        'Sie würden gern auf Basis von Zahlen entscheiden, aber die Auswertung ist zu aufwendig.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'bausteine',
          eyebrow: 'Bausteine',
          title: 'Was dazugehören kann',
          intro:
            'Nicht jedes Projekt braucht alle Bausteine. Welche sinnvoll sind, klären wir gemeinsam im Erstgespräch.',
          items: [
            {
              title: 'Bestandsaufnahme',
              text: 'Gemeinsam schauen wir, welche Daten wo liegen, wer sie nutzt und an welcher Stelle Zeit verloren geht. Ergebnis ist eine kurze, verständliche Übersicht mit sinnvollen ersten Schritten – kein umfangreiches Konzept.',
            },
            {
              title: 'Auswertungen und Dashboards',
              text: 'Wir bereiten Ihre Daten so auf, dass die Zahlen, die Sie tatsächlich brauchen, auf einen Blick sichtbar sind – etwa Anfragen pro Monat, offene Aufträge oder Umsätze nach Leistung. Lieber wenige aussagekräftige Kennzahlen als ein überladenes Dashboard.',
            },
            {
              title: 'Automatisierte Abläufe',
              text: 'Wiederkehrende Handgriffe lassen sich oft automatisieren: Anfragen landen direkt in einer Liste, Daten werden zwischen Programmen übertragen, Benachrichtigungen gehen an die richtige Person – mit nachvollziehbaren Regeln und klarer Zuständigkeit.',
            },
            {
              title: 'Kleine Web-Werkzeuge',
              text: 'Wo Standardsoftware nicht passt, entwickeln wir schlanke interne Anwendungen, etwa ein einfaches Erfassungsformular oder eine Übersicht für Ihr Team. So klein wie möglich, so umfangreich wie nötig.',
            },
            {
              title: 'Daten aus Shop und Kasse',
              text: 'Wenn Sie online und im Laden verkaufen, können Auswertungen beide Seiten zusammenführen – sofern die Daten zugänglich sind. Was möglich ist, zeigt die Prüfung Ihres Kassensystems.',
            },
            {
              title: 'KI – dort, wo sie wirklich hilft',
              text: 'Künstliche Intelligenz kann bei manchen Aufgaben unterstützen, etwa beim Sortieren von Anfragen oder beim Zusammenfassen von Dokumenten. Wir prüfen nüchtern, ob Nutzen, Aufwand und Risiken zusammenpassen, und planen menschliche Kontrolle von Anfang an ein.',
            },
          ],
        },
      ],
      scenario: {
        title: 'Beispielszenario: Ein Dienstleister mit monatlicher Tabellenarbeit',
        before:
          'Zum Monatsende werden Zahlen aus Buchhaltungsexport, Terminkalender und einer Auftragsliste per Hand in eine Tabelle kopiert. Das dauert und ist fehleranfällig.',
        goal: 'Die wichtigsten Kennzahlen sollen ohne Kopierarbeit aktuell und nachvollziehbar vorliegen.',
        approach:
          'Die vorhandenen Exporte werden automatisch eingelesen, bereinigt und in einer schlichten Übersicht dargestellt, auf die das Team Zugriff hat.',
      },
      deliverables: [
        'Eine kurze Übersicht Ihrer Daten und Abläufe mit Empfehlungen',
        'Eine laufende Lösung – zum Beispiel ein Dashboard oder ein automatisierter Ablauf',
        'Verständliche Dokumentation: was passiert wann und warum',
        'Einweisung für die Personen, die damit arbeiten',
      ],
      faq: [
        {
          question: 'Müssen wir dafür neue Software kaufen?',
          answer:
            'Nicht unbedingt. Oft lässt sich viel mit den Programmen erreichen, die Sie bereits nutzen. Wenn ein zusätzliches Werkzeug sinnvoll ist, erklären wir Kosten und Alternativen, bevor Sie entscheiden.',
        },
        {
          question: 'Unsere Daten sind ziemlich unordentlich. Ist das ein Problem?',
          answer:
            'Das ist der Normalfall. Ein Teil der Arbeit besteht darin, Daten zu bereinigen und Regeln festzulegen, damit sie künftig sauber erfasst werden.',
        },
        {
          question: 'Was passiert mit sensiblen Daten?',
          answer:
            'Wir arbeiten nur mit den Daten, die für die Aufgabe nötig sind, und besprechen vorab, wo sie gespeichert und verarbeitet werden. Wenn personenbezogene Daten betroffen sind, gehört eine Vereinbarung zur Auftragsverarbeitung dazu.',
        },
      ],
      related: ['shops', 'webdev'],
      ctaHeadline: 'Welcher Ablauf kostet Sie jede Woche unnötig Zeit?',
    },
  },
  process: {
    seo: {
      title: 'Arbeitsweise: So arbeiten wir mit Ihnen',
      description:
        'Wie aetheron mit kleinen Unternehmen zusammenarbeitet: Erstgespräch, schriftliche Einschätzung, Umsetzung in Etappen, Testphase und eine saubere Übergabe.',
    },
    eyebrow: 'Arbeitsweise',
    h1: 'Verständlich, nachvollziehbar, in überschaubaren Schritten.',
    lead: 'Gute digitale Lösungen entstehen, wenn klar ist, wofür sie gebraucht werden. Deshalb beginnen wir mit Ihrem Arbeitsalltag – nicht mit der Technik.',
    stepsEyebrow: 'Ablauf',
    stepsTitle: 'Vom ersten Gespräch bis zur Übergabe',
    steps: [
      {
        title: 'Erstgespräch',
        text: 'Sie schildern, was besser laufen soll. Wir stellen Fragen, hören zu und sagen ehrlich, ob und wie wir helfen können.',
      },
      {
        title: 'Schriftliche Einschätzung',
        text: 'Sie erhalten einen Vorschlag mit Umfang, Vorgehen, Zeitrahmen und Kosten – verständlich formuliert und bevor Sie etwas beauftragen.',
      },
      {
        title: 'Umsetzung in Etappen',
        text: 'Wir arbeiten in überschaubaren Schritten. Sie sehen Zwischenstände früh, können sie ausprobieren und Rückmeldung geben.',
      },
      {
        title: 'Test und Freigabe',
        text: 'Wir testen mit Ihnen, bevor etwas live geht – bei Shops und Anbindungen zunächst in einer Testumgebung.',
      },
      {
        title: 'Übergabe und Begleitung',
        text: 'Zum Abschluss erklären wir, wie alles funktioniert, und dokumentieren das Wichtigste. Weitere Betreuung ist möglich, aber keine Pflicht.',
      },
    ],
    principlesEyebrow: 'Grundsätze',
    principlesTitle: 'Was uns bei der Arbeit wichtig ist',
    needsTitle: 'Was wir von Ihnen brauchen',
    needs: [
      'Eine kurze Beschreibung, was besser werden soll – in Ihren eigenen Worten.',
      'Eine Ansprechperson, die Fragen beantworten und Entscheidungen treffen kann.',
      'Zugänge zu bestehenden Systemen, sofern sie betroffen sind (z. B. Domain, Hosting, Kassensystem).',
      'Etwas Zeit für Rückmeldungen zu den Zwischenständen.',
    ],
    notDoingTitle: 'Was wir bewusst nicht tun',
    notDoing: [
      'Wir versprechen keine Platzierungen bei Google und keine bestimmten Umsatzsteigerungen.',
      'Wir erzeugen keinen künstlichen Zeitdruck und keine Rabatte „nur heute“.',
      'Wir empfehlen keine Werkzeuge, die Sie nicht brauchen – und sagen, wenn eine einfache Lösung reicht.',
      'Wir binden keine Tracking-Dienste ohne Ihre Entscheidung und die Einwilligung Ihrer Besucher ein.',
      'Wir versprechen keine Anbindung an ein Kassensystem, bevor wir sie geprüft haben.',
    ],
    gatesTitle: 'Bei Shops und Anbindungen: Freigabe vor Livebetrieb',
    gatesText:
      'Zahlungen, Bestellungen und Datenabgleiche mit einem Kassensystem gehen erst live, wenn sie in einer Testumgebung geprüft wurden und Sie zugestimmt haben.',
  },
  about: {
    seo: {
      title: 'Über aetheron: Für wen und wie wir arbeiten',
      description:
        'aetheron unterstützt kleine Unternehmen in Deutschland bei Websites, Online-Shops und Digitalisierung – auf Deutsch, Türkisch oder Englisch. Hier steht, wofür wir stehen und was wir nicht anbieten.',
    },
    eyebrow: 'Über aetheron',
    h1: 'Ein kleiner Partner für kleine Unternehmen.',
    lead: 'aetheron richtet sich an Betriebe, die eine verlässliche digitale Lösung wollen, ohne sich in Technik zu verlieren. Auf dieser Seite steht, für wen das passt, für wen eher nicht, und in welchen Sprachen wir arbeiten.',
    forTitle: 'Das passt zu uns',
    forItems: [
      'Kleine Unternehmen, Selbstständige und Betriebe in Deutschland',
      'Wer Wert auf verständliche Erklärungen und einen klaren Umfang legt',
      'Projekte, die klein anfangen und bei Bedarf wachsen',
      'Wer Deutsch, Türkisch oder Englisch bevorzugt',
    ],
    notForTitle: 'Das passt eher nicht',
    notForItems: [
      'Große Konzerne mit festen Beschaffungsprozessen und Rahmenverträgen',
      'Wer Ranking-, Umsatz- oder Rechtssicherheits-Garantien erwartet',
      'Sofortige Anbindung eines beliebigen Kassensystems ohne Vorprüfung',
    ],
    langTitle: 'Sprachen',
    langText:
      'Wir beraten und schreiben auf Deutsch, Türkisch und Englisch. Diese Website ist in allen drei Sprachen vollständig verfügbar. Rechtlich verbindliche Texte werden davon getrennt behandelt (siehe Impressum und Datenschutz).',
    teamTitle: 'Wer hinter aetheron steht',
    factsTitle: 'Ehrlich angegeben',
    factsText:
      'Wir zeigen hier keine Kundenlogos, Bewertungen, Auszeichnungen oder Kennzahlen, solange wir sie nicht belegen und veröffentlichen dürfen.',
  },
  faq: {
    seo: {
      title: 'Häufige Fragen zu Website, Online-Shop und Kassensystem-Anbindung',
      description:
        'Antworten auf häufige Fragen zu Kosten, Ablauf, Online-Shops, Kassensystem-Anbindung, Datenschutz und Sprachen bei aetheron.',
    },
    eyebrow: 'Häufige Fragen',
    h1: 'Antworten auf die wichtigsten Fragen.',
    lead: 'Fehlt Ihre Frage? Schreiben Sie uns – wir antworten gern.',
    groups: [
      {
        id: 'allgemein',
        title: 'Allgemein',
        items: [
          {
            question: 'Für wen ist aetheron das Richtige?',
            answer:
              'Für Inhaberinnen, Inhaber und Verantwortliche kleiner Unternehmen, die eine verlässliche Website, einen eigenen Online-Shop oder weniger Handarbeit im Alltag möchten, ohne sich selbst in Technik einarbeiten zu müssen.',
          },
          {
            question: 'Müssen wir schon genau wissen, was wir brauchen?',
            answer:
              'Nein. Eine grobe Beschreibung reicht. Im Formular gibt es die Auswahl „Noch unsicher“.',
          },
          {
            question: 'Was kostet ein Projekt, und wie lange dauert es?',
            answer:
              'Beides hängt vom Umfang ab. Nach dem Erstgespräch erhalten Sie eine schriftliche Einschätzung mit Kostenrahmen und Zeitplan, bevor Sie etwas beauftragen.',
          },
          {
            question: 'In welchen Sprachen arbeiten Sie?',
            answer:
              'Auf Deutsch, Türkisch und Englisch. Diese Website gibt es in allen drei Sprachen.',
          },
        ],
      },
      {
        id: 'shops',
        title: 'Online-Shops',
        items: [
          {
            question: 'Braucht jeder Shop Kundenkonten?',
            answer:
              'Nein. Bestellen als Gast ist der Standard. Konten sind eine freiwillige Option.',
          },
          {
            question: 'Wer verarbeitet die Zahlungen?',
            answer:
              'Ein Zahlungsdienstleister, mit dem Sie einen Vertrag schließen. Wir speichern keine Kartendaten.',
          },
          {
            question: 'Wann geht ein Shop live?',
            answer:
              'Erst nach einem Ende-zu-Ende-Test in einer Testumgebung, nach Freigabe Ihrer Rechtstexte und nach Ihrer ausdrücklichen Zustimmung.',
          },
        ],
      },
      {
        id: 'kasse',
        title: 'Kassensystem-Anbindung',
        items: [
          {
            question: 'Lässt sich mein Kassensystem anbinden?',
            answer:
              'Das hängt vom Hersteller, Produkt, Version und den Schnittstellen ab. Wir prüfen es einzeln und sagen vorher, was realistisch ist.',
          },
          {
            question: 'Zertifiziert eine Anbindung meine Kasse?',
            answer:
              'Nein. Pflichten rund um Kasse, Belege und Steuer betreffen Ihr Kassensystem und Ihre Abläufe. Klären Sie diese mit Ihrem Kassenanbieter und Ihrer Steuerberatung.',
          },
          {
            question: 'Was, wenn es keine Schnittstelle gibt?',
            answer:
              'Dann besprechen wir Alternativen wie kontrollierten Import und Export. Ob sie tragen, zeigt sich erst im Test.',
          },
        ],
      },
      {
        id: 'recht',
        title: 'Datenschutz und Recht',
        items: [
          {
            question: 'Ist meine Website oder mein Shop dann DSGVO-konform?',
            answer:
              'Wir setzen datensparsame Technik ein und benennen verwendete Dienste. Ob Ihr Angebot insgesamt rechtskonform ist, hängt auch von Ihren Rechtstexten und Abläufen ab und sollte von einer fachkundigen Stelle geprüft werden.',
          },
          {
            question: 'Setzen Sie künstliche Intelligenz ein?',
            answer:
              'Nur dort, wo sie nachweislich hilft und die Ergebnisse überprüft werden können. Oft ist eine einfache Automatisierung die bessere Lösung.',
          },
          {
            question: 'Verwendet diese Website Tracking?',
            answer:
              'Nein. Diese Website setzt derzeit keine Tracking- oder Analyse-Dienste ein und lädt keine Inhalte von Drittanbietern nach.',
          },
        ],
      },
    ],
  },
  contact: {
    seo: {
      title: 'Kontakt: Projekt besprechen',
      description:
        'Schreiben Sie aetheron, was in Ihrem Unternehmen digital besser laufen soll: Website, Online-Shop, Kassensystem-Anbindung oder Daten. Eine kurze Beschreibung reicht.',
    },
    eyebrow: 'Kontakt',
    h1: 'Projekt besprechen',
    lead: 'Beschreiben Sie kurz, worum es geht. Eine grobe Idee ist ein guter Anfang – den Rest klären wir gemeinsam.',
    asideHelpTitle: 'Was bei einer Anfrage hilft',
    asideHelp: [
      'Was soll besser werden – und warum gerade jetzt?',
      'Was gibt es schon (Website, Kasse, Programme, Tabellen)?',
      'Gibt es einen gewünschten Zeitraum oder feste Termine?',
      'Optional: ein grober Budgetrahmen, falls Sie schon einen haben.',
    ],
    asideHelpNote: 'Nichts davon ist Pflicht. Unklare Punkte klären wir im Gespräch.',
    nextTitle: 'So geht es weiter',
    next: [
      'Wir lesen Ihre Nachricht und antworten per E-Mail.',
      'Bei Bedarf vereinbaren wir ein kurzes Gespräch per Telefon oder Video.',
      'Danach erhalten Sie eine schriftliche Einschätzung – unverbindlich.',
    ],
    directTitle: 'Direkter Kontakt',
    email: 'E-Mail',
    phone: 'Telefon',
    booking: 'Gesprächstermin online buchen',
    bookingSr: 'öffnet {provider} in einem neuen Tab',
    bookingNote: 'Externer Dienst ({provider}). Beim Öffnen gelten dessen Datenschutzbestimmungen.',
    bookingDisclosure:
      'Vor dem Klick: Die Terminbuchung läuft über {provider} (Anbieter mit Sitz in den USA). Erst wenn Sie den Link öffnen, wird eine Verbindung zu den Servern von {provider} hergestellt; dabei erhält der Anbieter technische Daten wie Ihre IP-Adresse. Bei der Buchung geben Sie Name, E-Mail-Adresse und ggf. weitere Angaben direkt bei {provider} ein; wir erhalten sie zur Terminorganisation. Die Nutzung ist freiwillig – Sie können uns auch das Formular oder eine E-Mail schicken.',
    bookingPolicy: 'Datenschutzhinweise von {provider}',
    mailOnlyTitle: 'Schreiben Sie uns eine E-Mail',
    mailOnlyText:
      'Am schnellsten erreichen Sie uns per E-Mail. Die Hinweise rechts helfen bei einer ersten Einschätzung.',
    mailButton: 'E-Mail an {email}',
  },
  form: {
    heading: 'Anfrage schreiben',
    requiredNote: 'Pflichtfelder sind mit {star} gekennzeichnet.',
    requiredSr: 'Sternchen',
    optional: '(optional)',
    topicLegend: 'Worum geht es?',
    topicHint: 'Wählen Sie, was am besten passt – oder „Noch unsicher“.',
    topics: {
      website: { label: 'Website', hint: 'Neu oder Überarbeitung' },
      shop: { label: 'Online-Shop', hint: 'Online verkaufen' },
      pos: { label: 'Kassensystem-Anbindung', hint: 'Kasse und Shop verbinden' },
      data: { label: 'Daten & Digitalisierung', hint: 'Auswertung, Automatisierung' },
      unsure: { label: 'Noch unsicher', hint: 'Wir klären es gemeinsam' },
    },
    name: 'Name',
    email: 'E-Mail-Adresse',
    emailHint: 'Wir antworten an diese Adresse.',
    company: 'Unternehmen',
    message: 'Ihr Anliegen',
    messageHint: {
      website: 'Zum Beispiel: Gibt es schon eine Website? Was soll besser werden? Welche Sprachen?',
      shop: 'Zum Beispiel: Was möchten Sie verkaufen, und wie verkaufen Sie bisher?',
      pos: 'Zum Beispiel: Was soll zwischen Kasse und Shop abgeglichen werden – Bestand, Preise, Bestellungen?',
      data: 'Zum Beispiel: Welche Abläufe kosten Zeit, und welche Programme oder Tabellen sind beteiligt?',
      unsure:
        'Zum Beispiel: Was soll besser werden? Gibt es schon eine Website oder bestimmte Programme? Gibt es einen Zeitrahmen?',
    },
    details: {
      website: { url: 'Bestehende Website', urlHint: 'Falls vorhanden, z. B. www.beispiel.de' },
      shop: {
        context: 'Bisherige Verkaufswege',
        contextHint: 'Zum Beispiel Laden, Markt, Marktplatz oder Social Media.',
      },
      pos: {
        legend: 'Angaben zu Ihrem Kassensystem',
        hint: 'Alles freiwillig. Wenn Sie es nicht wissen, lassen Sie es leer – wir helfen beim Herausfinden.',
        provider: 'Anbieter',
        model: 'Produkt oder Modell',
        version: 'Version',
      },
      data: {
        tools: 'Genutzte Programme',
        toolsHint: 'Zum Beispiel Excel, Buchhaltung, Terminkalender.',
      },
    },
    honeypot: 'Bitte dieses Feld leer lassen',
    submit: 'Anfrage senden',
    submitting: 'Wird gesendet …',
    privacyNote:
      'Wir verwenden Ihre Angaben ausschließlich, um Ihre Anfrage zu beantworten. Details finden Sie in der',
    privacyLink: 'Datenschutzerklärung',
    errorSummaryTitle: 'Bitte prüfen Sie Ihre Angaben',
    errors: {
      nameRequired: 'Bitte geben Sie Ihren Namen an.',
      nameTooLong: 'Bitte kürzen Sie den Namen auf höchstens {max} Zeichen.',
      emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse an, damit wir antworten können.',
      emailInvalid: 'Bitte prüfen Sie die E-Mail-Adresse, z. B. name@firma.de.',
      companyTooLong: 'Bitte kürzen Sie den Unternehmensnamen auf höchstens {max} Zeichen.',
      messageRequired: 'Bitte beschreiben Sie kurz Ihr Anliegen.',
      messageTooShort: 'Bitte beschreiben Sie Ihr Anliegen in ein paar Worten mehr.',
      messageTooLong: 'Bitte kürzen Sie die Nachricht auf höchstens {max} Zeichen.',
      detailTooLong: 'Bitte kürzen Sie diese Angabe auf höchstens {max} Zeichen.',
      urlInvalid: 'Bitte prüfen Sie die Adresse, z. B. www.beispiel.de.',
    },
    statusSending: 'Ihre Anfrage wird gesendet …',
    statusBlocked: 'Die Anfrage konnte nicht gesendet werden.',
    successTitle: 'Vielen Dank – Ihre Nachricht ist angekommen.',
    successText:
      'Wir lesen Ihre Anfrage und antworten per E-Mail. Falls Sie in der Zwischenzeit etwas ergänzen möchten, schreiben Sie gern an',
    failureTitle: 'Die Nachricht konnte nicht gesendet werden.',
    failureText:
      'Ihre Eingaben sind noch da. Bitte versuchen Sie es in einem Moment erneut – oder senden Sie Ihre Anfrage direkt per E-Mail.',
    notConfiguredTitle: 'Das Formular ist noch nicht eingerichtet.',
    notConfiguredText: 'Bitte senden Sie Ihre Anfrage direkt per E-Mail.',
    mailButton: 'E-Mail-Programm öffnen',
    mailSubject: 'Anfrage über die Website',
    mailLabels: {
      topic: 'Thema',
      name: 'Name',
      company: 'Unternehmen',
      url: 'Website',
      context: 'Bisherige Verkaufswege',
      provider: 'Kassenanbieter',
      model: 'Kassenprodukt',
      version: 'Kassenversion',
      tools: 'Genutzte Programme',
    },
    server: {
      successTitle: 'Vielen Dank – Ihre Nachricht ist angekommen.',
      successText: 'Wir lesen Ihre Anfrage und antworten per E-Mail.',
      invalidTitle: 'Bitte prüfen Sie Ihre Angaben',
      invalidText:
        'Einige Angaben fehlen oder sind ungültig. Bitte gehen Sie zurück und korrigieren Sie sie.',
      failureTitle: 'Die Nachricht konnte nicht gesendet werden.',
      failureText: 'Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt per E-Mail.',
      rateLimitedText: 'Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es später erneut.',
      back: 'Zurück zum Formular',
      home: 'Zur Startseite',
    },
  },
  legal: {
    draftTitle: 'Entwurf – vor Veröffentlichung prüfen lassen.',
    draftText:
      'Diese Seite ist eine Vorlage mit markierten Platzhaltern. Sie stellt keine Rechtsberatung dar und ist nicht rechtlich geprüft. Bitte vervollständigen Sie die Angaben und lassen Sie den Text von einer fachkundigen Stelle prüfen.',
    translationNote: '',
    authoritative:
      'Verbindliche Fassung: Deutsch (vorbehaltlich der Festlegung durch Ihre Rechtsberatung).',
    reviewStatus: 'Prüfstatus',
    notReviewed: 'noch nicht rechtlich geprüft',
    imprint: {
      seo: { title: 'Impressum', description: 'Anbieterkennzeichnung von aetheron.' },
      eyebrow: 'Rechtliches',
      h1: 'Impressum',
      intro: 'Angaben gemäß § 5 DDG',
      labels: {
        owner: 'Anbieter',
        representative: 'Vertretungsberechtigt',
        address: 'Anschrift',
        contact: 'Kontakt',
        email: 'E-Mail',
        phone: 'Telefon',
        vatId: 'Umsatzsteuer-Identifikationsnummer',
        register: 'Registereintrag',
        content: 'Verantwortlich für Inhalte',
        dispute: 'Verbraucherstreitbeilegung',
      },
      dispute:
        'Hinweis zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle: Bitte mit der fachkundigen Stelle abstimmen, ob und welche Angabe erforderlich ist.',
    },
    privacy: {
      seo: {
        title: 'Datenschutzerklärung',
        description:
          'Informationen zur Verarbeitung personenbezogener Daten auf der Website von aetheron.',
      },
      eyebrow: 'Rechtliches',
      h1: 'Datenschutzerklärung',
      updated: 'Stand',
      sections: [
        {
          id: 'verantwortlicher',
          title: 'Verantwortlicher',
          paragraphs: [
            'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
            '{{controller}}',
          ],
        },
        {
          id: 'hosting',
          title: 'Hosting und Server-Logfiles',
          paragraphs: [
            'Diese Website wird bei {{hostingProvider}} gehostet (Serverstandort: {{hostingLocation}}). Beim Aufruf verarbeitet der Server technisch notwendige Daten, z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browserangaben, um die Seite auszuliefern und den Betrieb sicherzustellen.',
            'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren, stabilen Betrieb). Die Speicherdauer richtet sich nach den Einstellungen des Hosters.',
          ],
        },
        {
          id: 'kontaktformular',
          title: 'Kontaktaufnahme und Anfrageformular',
          paragraphs: [
            'Wenn Sie uns per Formular oder E-Mail kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, Nachricht und die von Ihnen freiwillig gemachten Angaben, z. B. zu Unternehmen oder Kassensystem), um Ihre Anfrage zu beantworten.',
            'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertrag zielt, sonst Art. 6 Abs. 1 lit. f DSGVO. Wir löschen die Angaben, wenn die Anfrage abschließend beantwortet ist und keine Aufbewahrungspflichten entgegenstehen.',
            'Zustellung des Formulars: {{formProcessor}}',
          ],
        },
        {
          id: 'tracking',
          title: 'Cookies, Tracking und Drittinhalte',
          paragraphs: [
            'Diese Website setzt derzeit keine Cookies und keine Tracking- oder Analyse-Dienste ein. Schriften werden lokal ausgeliefert. Es werden keine Inhalte von Drittanbietern nachgeladen. Der Link zur Terminbuchung öffnet einen externen Dienst erst, wenn Sie ihn anklicken; dann gelten dessen Datenschutzbestimmungen.',
            'Die Sprachwahl wird nicht gespeichert.',
          ],
        },
        {
          id: 'rechte',
          title: 'Ihre Rechte',
          paragraphs: [
            'Sie haben nach den gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren.',
          ],
        },
      ],
      booking: {
        id: 'terminbuchung',
        title: 'Terminbuchung über Calendly',
        paragraphs: [
          'Auf der Kontaktseite verlinken wir eine Online-Terminbuchung des Dienstes Calendly (Anbieter mit Sitz in den USA). Beim bloßen Besuch unserer Website werden keine Daten an Calendly übertragen. Erst wenn Sie den Link anklicken, öffnet sich die Buchungsseite bei Calendly; dabei verarbeitet Calendly technische Daten (z. B. IP-Adresse, Browserangaben) und – wenn Sie buchen – die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Terminwunsch, Freitext).',
          'Wir erhalten die Buchungsdaten, um den Termin durchzuführen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage), im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Nutzung ist freiwillig; Alternativen sind das Anfrageformular und die E-Mail.',
          'Drittlandübermittlung (USA): {{bookingTransfer}}',
          'Für die Verarbeitung durch Calendly gelten die Datenschutzhinweise des Anbieters (https://calendly.com/privacy). Dort können auch Cookies oder ähnliche Technologien eingesetzt werden; dafür ist Calendly auf seiner Seite verantwortlich.',
        ],
      },
    },
  },
  notFound: {
    title: 'Diese Seite gibt es nicht.',
    text: 'Die Adresse ist vielleicht veraltet oder falsch geschrieben.',
    home: 'Zur Startseite',
  },
  placeholders: {
    bookingTransfer:
      'Rechtsgrundlage der Übermittlung an Calendly in die USA (z. B. Angemessenheitsbeschluss/Zertifizierung oder Standardvertragsklauseln) – vom Betreiber zu prüfen und einzutragen',
    owner: 'Vor- und Nachname bzw. Firmenname mit Rechtsform',
    representative: 'Vertretungsberechtigte Person (falls Gesellschaft)',
    street: 'Straße und Hausnummer (ladungsfähige Anschrift)',
    city: 'PLZ und Ort',
    vatId: 'USt-IdNr. nach § 27a UStG – oder Zeile entfernen',
    register: 'Registergericht und -nummer – oder Zeile entfernen',
    contentResponsible: 'Name und Anschrift, falls § 18 Abs. 2 MStV zutrifft',
    hostingProvider: 'Name und Anschrift des Hosting-Anbieters',
    hostingLocation: 'Serverstandort (z. B. EU)',
    formProcessor:
      'Zustellweg des Formulars, Anbieter, Sitz, Rechtsgrundlage einer Drittlandübermittlung',
    privacyUpdated: 'Stand der Datenschutzerklärung (Monat/Jahr)',
    aboutText: 'Zwei bis drei Sätze über die Person(en) hinter aetheron – nur belegbare Angaben',
  },
};
