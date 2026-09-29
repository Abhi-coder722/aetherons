import type { Messages } from './types';

/**
 * Türkçe metinler. Hukuki metinler (Impressum, gizlilik) pazarlama metinlerinden ayrı ele alınır;
 * canlıya almadan önce ana dili Türkçe olan biri tarafından okunmalıdır.
 */
export const tr: Messages = {
  locale: 'tr',
  a11yTitle: 'Erişilebilirlik',
  ui: {
    skip: 'İçeriğe geç',
    menu: 'Menü',
    closeMenu: 'Kapat',
    mainNav: 'Ana gezinme',
    brandHome: 'aetheron – ana sayfaya git',
    breadcrumbs: 'Sayfa yolu',
    home: 'Ana sayfa',
    langNav: 'Dil seçin',
    langCurrent: 'geçerli dil',
    cta: {
      discuss: 'Projeyi görüşelim',
      learnMore: 'Daha fazla bilgi',
      allFaq: 'Tüm soruları gör',
      emailInstead: 'Ya da doğrudan e-posta ile:',
    },
    suggest: {
      text: 'Bu sayfa Türkçe olarak da mevcut.',
      action: 'Türkçe sürüme git',
      dismiss: 'Bildirimi kapat',
    },
    footer: {
      tagline: 'Küçük işletmeler için web siteleri, online mağazalar ve veri çözümleri',
      services: 'Hizmetler',
      company: 'aetheron',
      contact: 'İletişim',
      legal: 'Yasal bilgiler',
      rights: '©',
      language: 'Dil',
    },
    placeholderPrefix: 'Yer tutucu',
    service: {
      situationsEyebrow: 'Tanıdık geldi mi?',
      situationsTitle: 'Sık karşılaşılan durumlar',
      scenarioEyebrow: 'Nasıl görünebilir?',
      scenarioNote:
        'Örnek amaçlı kurgulanmış tipik bir senaryodur – gerçek bir müşteri projesi değildir.',
      before: 'Başlangıç durumu',
      goal: 'Hedef',
      approach: 'Olası yaklaşım',
      deliverablesEyebrow: 'Sonuç',
      deliverablesTitle: 'Sonunda elinizde ne olur?',
      deliverablesIntro: 'Tipik kapsam – kesin çerçeveyi önceden yazılı olarak belirleriz.',
      faqEyebrow: 'Sorular',
      faqTitle: 'Sık sorulan sorular',
      moreFaq: 'Diğer yanıtları genel sık sorulan sorularda bulabilirsiniz.',
      relatedTitle: 'Bunlar da ilginizi çekebilir',
    },
  },
  nav: {
    webdev: 'Web geliştirme',
    shops: 'Online mağazalar',
    pos: 'Kasa sistemi entegrasyonu',
    data: 'Veri ve dijitalleşme',
    process: 'Çalışma şeklimiz',
    about: 'aetheron hakkında',
    faq: 'Sık sorulan sorular',
    contact: 'İletişim',
    legal: 'Yasal bilgiler (Impressum)',
    privacy: 'Gizlilik ve veri koruma',
  },
  home: {
    seo: {
      title: 'aetheron – küçük işletmeler için web sitesi, online mağaza ve veri çözümleri',
      description:
        'aetheron, Almanya’daki küçük işletmeler için web siteleri, size özel online mağazalar ve veriye dayalı çözümler geliştirir – mevcut kasa sisteminizin bağlanıp bağlanamayacağını da dürüstçe değerlendirir.',
    },
    hero: {
      eyebrow: 'Web geliştirme, online mağaza ve dijitalleşme',
      h1: 'Net bir web sitesi ya da kendi online mağazanız.',
      h1Accent: 'Ve günlük işte işinize yarayan veriler.',
      lead: 'aetheron, Almanya’daki küçük işletmeler için web siteleri, size özel online mağazalar ve pratik veri çözümleri geliştirir. İsterseniz mevcut kasa sisteminizin makul biçimde bağlanıp bağlanamayacağını da inceleriz – bağlanamıyorsa bunu açıkça söyleriz.',
      secondary: 'Hizmetleri incele',
    },
    audience: {
      eyebrow: 'Kimler için',
      title: 'Dijital tarafta işlerin daha iyi yürümesini isteyen küçük işletmeler için.',
      intro:
        'Bir dükkân, atölye, muayenehane ya da danışmanlık işletiyorsunuz ve teknik konulara kendiniz dalmak istemiyorsunuz. Aşağıdaki durumlardan biri size tanıdık geliyor mu?',
      items: [
        {
          title: 'Şimdiye kadar yalnızca yerinde satış yaptınız',
          text: 'Müşteriler online sipariş, gel-al ya da teslimat soruyor – ama bunun kasanıza ve günlük işinize nasıl uyacağını bilmiyorsunuz.',
        },
        {
          title: 'Web siteniz artık yetmiyor',
          text: 'Eskimiş, telefonda kullanımı zor ya da ne sunduğunuzu net anlatmıyor.',
        },
        {
          title: 'Çok fazla elle iş',
          text: 'Aynı bilgiler defalarca giriliyor, listeler elle tutuluyor ve rakamları değerlendirmek zor.',
        },
      ],
    },
    services: {
      eyebrow: 'Hizmetler',
      title: 'Dört hizmet, tek amaç: günlük işte daha az sürtünme.',
      intro:
        'Her hizmeti tek başına isteyebilirsiniz. İsterseniz birbirinin üzerine inşa edilirler.',
    },
    honesty: {
      eyebrow: 'Kasa sistemleri',
      title: 'Kasa sistemi ile online mağazayı birleştirmek – ama yalnızca işe yarıyorsa.',
      text: 'Stok, fiyat ya da siparişlerin kasa ile mağaza arasında eşitlenip eşitlenemeyeceği üreticiye, ürüne ve sürüme bağlıdır. Bu yüzden söz vermeden önce her sağlayıcı için fizibiliteyi ayrı ayrı inceleriz.',
      items: [
        {
          title: 'Önce incele, sonra söz ver',
          text: 'Bir entegrasyona yatırım yapmadan önce arayüzleri, izinleri ve maliyetleri netleştiririz.',
        },
        {
          title: 'Önce test et, sonra canlıya al',
          text: 'Eşitlemeler önce bir test ortamında çalışır. Canlı senkronizasyon ancak onayınızdan sonra başlar.',
        },
        {
          title: 'Zorlama yerine alternatifler',
          text: 'Doğrudan bir bağlantı yoksa, başarı vaat etmeden daha basit yolları konuşuruz.',
        },
      ],
    },
    principles: {
      eyebrow: 'Güvenebileceğiniz noktalar',
      title: 'Büyük vaatler yok. Net bir çalışma biçimi var.',
      text: 'Abartılı ifadeler yerine, ilk görüşmeden teslime kadar baştan sona takip edebileceğiniz bir çalışma biçimine güveniyoruz.',
      link: 'Çalışma şeklimiz hakkında daha fazla bilgi',
      items: [
        {
          title: 'Karmaşık değil, anlaşılır',
          text: 'Tekniği günlük işinizde anlam taşıyan sözcüklerle anlatırız – bir şey belirsizse sorarız.',
        },
        {
          title: 'Şeffaf kapsam',
          text: 'Sipariş vermeden önce neyin dahil olduğunu, neyin olmadığını ve neyle karşılaşabileceğinizi bilirsiniz.',
        },
        {
          title: 'Küçük başlamak',
          text: 'Hiç bitmeyen büyük bir proje yerine, güvenilir çalışan bir ilk adım tercih ederiz.',
        },
        {
          title: 'Baştan itibaren veri tasarrufu',
          text: 'Onay olmadan izleyici yok, yazı tipleri yerel olarak yükleniyor, yalnızca gerçekten gerekli veriler toplanıyor.',
        },
      ],
    },
    process: {
      eyebrow: 'Süreç',
      title: 'Bir proje böyle ilerler.',
      text: 'Kolay izlenebilir adımlar – o an neyin üzerinde çalıştığımızı her zaman bilirsiniz.',
    },
    languages: {
      eyebrow: 'Diller',
      title: 'Almanca, Türkçe ya da İngilizce.',
      text: 'Kendinizi en rahat hissettiğiniz dilde yazabilirsiniz. Bu web sitesi Almanca, Türkçe ve İngilizce olarak eksiksiz mevcuttur.',
    },
    faq: {
      eyebrow: 'Sık sorulan sorular',
      title: 'Küçük işletmelerin bize sık sorduğu sorular.',
      items: [
        {
          question: 'aetheron kimler için uygun?',
          answer:
            'Perakende, zanaat, gastronomi, muayenehane, danışmanlık ya da hizmet gibi alanlarda küçük işletmelerin sahipleri ve sorumluları için – güvenilir bir web sitesi, kendi online mağazası ya da günlük işte daha az elle çalışma isteyenler için.',
        },
        {
          question: 'Ne istediğimizi tam olarak bilmemiz gerekiyor mu?',
          answer:
            'Hayır. Kaba bir açıklama yeterli. Talep formunda “Henüz emin değilim” seçeneğini işaretleyebilirsiniz. Çoğu zaman neyin mantıklı olduğu, neyin olmadığı ancak görüşme sırasında netleşir.',
        },
        {
          question: 'Bir proje ne kadara mal olur?',
          answer:
            'Kapsama bağlıdır. Durumunuzu bilmeden sabit fiyat vermek ciddi olmazdı. İlk görüşmeden sonra, karar vermeden önce maliyet çerçevesini içeren yazılı bir değerlendirme alırsınız.',
        },
        {
          question: 'Kasa sistemim bir online mağazaya bağlanabilir mi?',
          answer:
            'Bazen evet, bazen kısıtlı, bazen hayır. Bu; üreticiye, ürüne, sürüme ve açılmış arayüzlere bağlıdır. Sağlayıcınızı ayrı ayrı inceler ve neyin gerçekçi olduğunu önceden söyleriz.',
        },
        {
          question: 'Web sitem ya da mağazam bu durumda KVKK/GDPR’ye uygun olur mu?',
          answer:
            'Veri tasarruflu teknoloji kullanır ve hangi hizmetlerin kullanıldığını belirtiriz. Teklifinizin bütün olarak hukuka uygun olup olmadığı ise hukuki metinlerinize ve süreçlerinize de bağlıdır. Bu incelemeyi yetkin bir uzman yapmalıdır – hukuki danışmanlık veremeyiz ve vermemize izin yoktur.',
        },
      ],
    },
    cta: {
      headline: 'Neyin daha iyi gitmesini istediğinizi anlatın.',
      text: 'Kısa bir açıklama yeterli. E-posta ile döner, ilk görüşme için bir tarih öneririz.',
    },
  },
  services: {
    webdev: {
      seo: {
        title: 'Küçük işletmeler için web sitesi yaptırma',
        description:
          'Küçük işletmeler için web siteleri: net yapı, hızlı yükleme, telefonda rahat kullanım, isteğe bağlı çok dilli ve kolay bir talep yolu.',
      },
      name: 'Web geliştirme',
      eyebrow: 'Hizmet · Web geliştirme',
      h1: 'Ne sunduğunuzu net anlatan bir web sitesi.',
      lead: 'Ziyaretçilerin ne yaptığınızı hızla anlayıp size kolayca ulaşabileceği web siteleri planlıyor, tasarlıyor ve geliştiriyoruz. Gereksiz efekt yok; buna karşılık hızlı, okunaklı ve telefonda da bilgisayardaki kadar rahat kullanılır.',
      summary:
        'Yeni web sitesi ya da yenileme: net yapılandırılmış, hızlı, mobilde rahat ve kolay bir talep yoluyla.',
      highlights: [
        'Yeni web sitesi ya da yenileme',
        'Müşterilerin anlayacağı yapı ve metinler',
        'Arama motorları için teknik temeller',
        'İsteğe bağlı çok dilli, örn. Almanca, Türkçe, İngilizce',
      ],
      topic: 'website',
      secondaryCta: 'Neler dahil?',
      situations: [
        'Web siteniz eskimiş ve telefonda kullanması zahmetli.',
        'İlgilenenler, aslında web sitesinde yazması gereken şeyleri sormak için arıyor.',
        'Küçük değişiklikler uzun sürüyor, çünkü sitenin nasıl çalıştığını artık kimse bilmiyor.',
        'Müşterileriniz farklı diller konuşuyor, ama siteniz yalnızca bir dilde.',
        'Henüz web siteniz yok ve sağlam, kolay yönetilir bir çözümle başlamak istiyorsunuz.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'bausteine',
          eyebrow: 'Bileşenler',
          title: 'Neler dahil olabilir?',
          intro:
            'Her proje tüm bileşenlere ihtiyaç duymaz. Hangilerinin mantıklı olduğunu ilk görüşmede birlikte belirleriz.',
          items: [
            {
              title: 'Yapı ve içerik',
              text: 'Web sitenizi kimlerin ziyaret ettiğini ve bu kişilerin ne bilmek istediğini netleştiririz. Buradan, soruları doğru sırayla yanıtlayan bir sayfa yapısı çıkar. Alan bilgisi sizden, yapı ve ifade konusunda destek bizden.',
            },
            {
              title: 'Tasarım ve uygulama',
              text: 'İşletmenize uyan sakin ve özgün bir görünüm. Yalın teknolojiyle hayata geçirilir: hızlı yükleme, okunaklı yazı, klavye ve ekran okuyucuyla kullanılabilirlik – WCAG gereklilikleri gözetilerek.',
            },
            {
              title: 'Bulunabilirlik',
              text: 'Arama motorlarının sayfalarınızı anlayabilmesi için temiz teknik temeller: anlamlı başlıklar, mantıklı alt başlıklar, site haritası ve Google Search Console kurulumu. Sıralama sözü vermek ciddi olmaz – ama iyi temeller ve faydalı içerik yardımcı olur.',
            },
            {
              title: 'Birden çok dil',
              text: 'Her dil için ayrı ve düzenli adresler, ilgili sayfaya götüren bir dil değiştirici ve doğru dil işaretlemesi. Önemli metinlerin ana dili konuşan biri tarafından okunmasını öneririz; bunun için süreci organize etmeye yardım ederiz.',
            },
            {
              title: 'İletişim yolları',
              text: 'Yalnızca gerçekten gerekeni soran bir form, net yönlendirmeler ve isteğe bağlı randevu bağlantısı. Veri tasarruflu kurulur, gizlilik konusunda anlaşılır bilgilendirmelerle.',
            },
            {
              title: 'Teslim ve bakım',
              text: 'Sonunda, çözümünüzde öngörülen ölçüde içerikleri kendiniz nasıl güncelleyeceğinizi gösteririz ve erişimleri ile ayarları belgelendiririz. Devam eden destek mümkündür, ancak zorunlu değildir.',
            },
          ],
        },
      ],
      scenario: {
        title: 'Örnek senaryo: Çok sayıda telefon talebi alan bir zanaat işletmesi',
        before:
          'Talepler telefondan, e-postadan ve eski bir formdan geliyor. Önemli bilgiler çoğu zaman eksik ve birkaç kez yeniden soruluyor.',
        goal: 'İlgilenenler web sitesinde hangi hizmetlerin olduğunu hızla görmeli ve talebini gerekli bilgilerle doğrudan iletebilmeli.',
        approach:
          'En sık sorulan soruları içeren hizmet sayfaları, birkaç hedefli alandan oluşan kısa bir talep formu ve net bir iletişim sayfası.',
      },
      deliverables: [
        'Alan adınızda yayında bir web sitesi',
        'Sayfa yapısı ve üzerinde anlaşılmış metinler',
        'Arama motorları için temel kurulum (örn. site haritası, Search Console)',
        'Bakım için kısa bir kılavuz ve erişimlerin özeti',
      ],
      faq: [
        {
          question: 'Bir web sitesi ne kadara mal olur?',
          answer:
            'Kapsama bağlıdır – örneğin sayfa sayısına, randevu ya da çoklu dil gibi işlevlere ve hazır metin miktarına. İlk görüşmeden sonra, sipariş vermeden önce kapsam ve maliyet çerçevesini içeren yazılı bir değerlendirme alırsınız.',
        },
        {
          question: 'Web sitesini sonradan kendimiz değiştirebilir miyiz?',
          answer:
            'Bunu en başta netleştiririz. Bazı işletmeler metin ve görselleri kendileri yönetmek ister, bazıları zaman zaman değişiklik siparişi vermeyi tercih eder. Teknolojiyi buna göre seçeriz.',
        },
        {
          question: 'Impressum ve gizlilik metinleriyle de ilgileniyor musunuz?',
          answer:
            'Sayfaları teknik olarak kurar ve içlerinde hangi bilgilerin ve kullanılan hizmetlerin yer alması gerektiğini belirtiriz. Bu, hukuki ifadenin ve incelemenin yerini tutmaz – bunun için yetkin bir uzmana başvurmanızı öneririz.',
        },
        {
          question: 'Birden çok dil için metinleri kim çevirir?',
          answer:
            'Ekibiniz, bir çeviri bürosu ya da sizinle birlikte biz hazırlayabiliriz. Ticari ve hukuki metinlerde, ana dili konuşan yetkin kişilerce incelenmesini öneririz.',
        },
      ],
      related: ['shops', 'data'],
      ctaHeadline: 'Yeni bir web sitesi mi istiyorsunuz, yoksa mevcut sitenizi mi yenilemek?',
    },
    shops: {
      seo: {
        title: 'Online mağaza yaptırma: küçük işletmelere özel e-ticaret siteleri',
        description:
          'Almanya’daki küçük işletmeler için size özel online mağaza: katalog, sepet, üyeliksiz sipariş, ödeme ve kargo – net sınırlı bir proje kapsamı olarak, isteğe bağlı kasa sistemi incelemesiyle.',
      },
      name: 'Online mağazalar',
      eyebrow: 'Hizmet · Online mağazalar',
      h1: 'İşletmenize uyan bir online mağaza.',
      lead: 'Küçük işletmeler için online mağazalar tasarlıyor ve geliştiriyoruz: derli toplu bir ürün yelpazesinden siparişe kadar – gerektiği kadar kapsamlı, mümkün olduğunca yalın. Mağazanızın neye ihtiyaç duyduğunu ürün yelpazenize ve iş akışlarınıza göre birlikte belirleriz.',
      summary:
        'Katalog, sepet, üyeliksiz sipariş, ödeme ve kargo içeren, ihtiyacınıza göre planlanmış mağazalar – gereksiz işlev yükü olmadan.',
      highlights: [
        'Varyantlı katalog, arama ve filtreler',
        'Müşteri hesabı olmadan sipariş verebilme',
        'Güvenilir ödeme hizmeti sağlayıcıları üzerinden ödeme',
        'İsteğe bağlı kasa sistemi incelemesi',
      ],
      topic: 'shop',
      secondaryCta: 'Olası kapsam',
      notice: {
        title: 'Bu sayfa hakkında',
        text: 'Burada müşteri mağazaları için neler geliştirebileceğimizi anlatıyoruz. Her mağaza her işleve ihtiyaç duymaz ve her işlev, üzerinde anlaşılmış bir proje kapsamının parçasıdır – otomatik olarak dahil değildir. aetheron’un kendi web sitesi bir online mağaza değildir.',
      },
      situations: [
        'Dükkânda ya da pazarlarda satış yapıyorsunuz ve ek olarak online sipariş de almak istiyorsunuz.',
        'Ürünlerinizin beden, renk ya da ağırlık gibi varyantları var ve bunları e-postayla yönetmek zor.',
        'Bir pazaryeri profili ya da sosyal medya kullanıyorsunuz ve kendi satış kanalınızı kurmak istiyorsunuz.',
        'Gel-al ya da teslimat sunmak istiyorsunuz, ama siparişlerin günlük işte kaybolmasını istemiyorsunuz.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'umfang',
          eyebrow: 'Olası kapsam',
          title: 'Bir mağaza projesi neleri kapsayabilir?',
          intro:
            'Planlayıp uygulayabileceklerimizden bir seçki. Hangilerinin size uyduğuna tek tek siz karar verirsiniz.',
          items: [
            {
              title: 'Telefon ve bilgisayar için vitrin',
              text: 'Küçük ekranlarda da masaüstünde olduğu gibi çalışan, hızlı ve okunaklı bir düzen; arama motorları için temiz sayfa başlıkları ve adresler.',
            },
            {
              title: 'Katalog ve varyantlar',
              text: 'Kategoriler, ürün sayfaları, beden ya da çeşit gibi varyantlar, görseller, stok durumu göstergesi – ekibinizin kullanabileceği bir yönetim paneli üzerinden yönetilir.',
            },
            {
              title: 'Arama, filtre ve sıralama',
              text: 'Müşteriler aradıklarını hızla bulsun diye. Kapsam, ürün yelpazenizin büyüklüğüne göre belirlenir.',
            },
            {
              title: 'Sepet',
              text: 'Adet değiştirme, ürün çıkarma, net toplamlar. Fiyatlar ve stok, sipariş sırasında sunucu tarafında yeniden kontrol edilir.',
            },
            {
              title: 'Üyeliksiz sipariş ile ödeme adımı',
              text: 'Hesapsız sipariş varsayılandır. Adres kontrolü, kargo ve ödeme yöntemi, vergi ve kargo dahil ayrıntılı toplamlar ve bağlayıcı sipariş için açıkça adlandırılmış bir düğme.',
            },
            {
              title: 'İsteğe bağlı müşteri hesapları',
              text: 'Yalnızca size ve müşterilerinize fayda sağlıyorsa: sipariş geçmişi, kayıtlı adresler, veri koruma işlevleri. Tek seferlik siparişler için kayıt zorunluluğu yok.',
            },
            {
              title: 'Ödeme ve kargo',
              text: 'Seçeceğiniz bir ödeme hizmeti sağlayıcısına bağlantı; ödeme verilerini sağlayıcı kendisi işler. Kart verilerini biz saklamayız. Kargo yöntemleri ve ücretleri sizin kurallarınıza göre.',
            },
            {
              title: 'Bildirimler',
              text: 'Sipariş onayı ve durum bildirimleri müşterilerinizin dilinde. İfadeler, hukuken incelenmiş koşullarınızla uyumlu hale getirilmelidir.',
            },
            {
              title: 'Yönetim ve iadeler',
              text: 'Sipariş özeti, iptaller, iadeler, ödeme hizmeti sağlayıcınızın izin verdiği ölçüde geri ödemeler, fatura kayıtları ve değişiklik günlüğü.',
            },
            {
              title: 'Kişiselleştirme (isteğe bağlı)',
              text: 'Ürünlerin uyarlanabildiği yerlerde, örneğin yazı eklenmesi: Hangi girdilerin geçerli olduğunu ve fiyatın nasıl hesaplandığını önceden belirleriz.',
            },
            {
              title: 'Erişilebilirlik, veri koruma, sürdürülebilirlik',
              text: 'Klavyeyle kullanılabilir, okunaklı, veri tasarruflu. Yapı, daha sonra bakımı ve genişletilmesi mümkün olacak şekilde belgelendirilir.',
            },
          ],
        },
        {
          kind: 'steps',
          id: 'vorgehen',
          eyebrow: 'Yaklaşım',
          title: 'Ürün yelpazesinden ilk siparişe',
          intro: 'Bir mağaza, tüm taraflar onay vermeden canlıya çıkmaz.',
          items: [
            {
              title: 'Netleştirme',
              text: 'Ürün yelpazesi, fiyatlar ve vergi oranları, kargo, gel-al, iadeler, kasa ya da stok yönetimi gibi mevcut sistemler.',
            },
            {
              title: 'Kapsamı belirleme',
              text: 'Yazılı bir değerlendirme alırsınız: Neler dahil, neler sonraya kalıyor, neler üçüncü taraflara bağlı.',
            },
            {
              title: 'Test modunda uygulama',
              text: 'Test verileri ve hizmet sağlayıcılarınızın test erişimleriyle geliştirip test ederiz. Gerçek para akmaz.',
            },
            {
              title: 'Onay ve canlıya alma',
              text: 'Siparişten ödeme onayına kadar uçtan uca test, hukuki metinlerinizin onayı; canlıya alma en son gelir.',
            },
          ],
        },
        {
          kind: 'split',
          id: 'zusammenarbeit',
          eyebrow: 'İş birliği',
          title: 'Kim ne getirir?',
          left: {
            title: 'aetheron’dan',
            items: [
              'Konsept, tasarım ve teknik uygulama',
              'Bağlantıların (ödeme, kargo, e-posta) kurulumu ve testi',
              'Testler, dokümantasyon ve eğitim',
              'Bir işlev mantıklı değilse dürüst uyarı',
            ],
          },
          right: {
            title: 'Sizden ve üçüncü taraflardan',
            items: [
              'Ürün verileri, fiyatlar, vergi oranları, görseller',
              'Kargo, teslimat ve iade koşulları',
              'Hukuken incelenmiş genel şartlar, cayma ve gizlilik metinleri',
              'Ödeme hizmeti sağlayıcısında sözleşme ve erişimler',
            ],
          },
        },
        {
          kind: 'callout',
          id: 'freigabe',
          eyebrow: 'İlke',
          title: 'Onay olmadan canlı işletme yok',
          text: 'Ödemeler ve siparişler, uçtan uca test başarılı olduktan ve siz onay verdikten sonra canlıya geçer. Ödeme verilerini yalnızca ödeme hizmeti sağlayıcısı işler. Mağazanızın hukuki metinlerini (genel şartlar, cayma, gizlilik, fiyat ve kargo bilgileri) yetkin bir uzmana inceletmelisiniz – bunun yerini tutamayız.',
        },
        {
          kind: 'list',
          id: 'klein-starten',
          eyebrow: 'Küçük başlamak ister misiniz?',
          title: 'Daha yalın başlangıçlar',
          intro: 'Her işletmenin hemen tam bir mağazaya ihtiyacı yoktur. Olası ilk adımlar:',
          items: [
            'Talep ya da rezervasyon formlu online katalog',
            'Dükkândan teslim alma ve yerinde ödemeli sipariş',
            'Küçük bir ürün yelpazesiyle başlayıp sonradan genişletme',
            'Önce kasa sistemi incelemesi, sonra kapsam kararı',
          ],
        },
      ],
      deliverables: [
        'Alan adınızda işletilebilecek, test edilmiş bir mağaza',
        'Belgelenmiş ayarlar ve erişimler',
        'Temel akışların test kaydı (sipariş, ödeme, iade)',
        'Ürün ve siparişleri yönetecek kişiler için eğitim',
      ],
      faq: [
        {
          question: 'Bir online mağaza ne kadara mal olur?',
          answer:
            'Ağırlıklı olarak ürün yelpazesine, varyantlara, ödeme ve kargo yöntemlerine ve bağlantılara bağlıdır. İlk görüşmeden sonra kapsam ve maliyet çerçevesini içeren yazılı bir değerlendirme alırsınız. Barındırma ya da ödeme hizmeti sağlayıcısı gibi süregelen maliyetleri ayrı belirtiriz.',
        },
        {
          question: 'Müşterilerin hesap oluşturması gerekiyor mu?',
          answer:
            'Hayır, varsayılan bu değil. Misafir olarak sipariş mümkündür. Hesap, müşterilerinize bir yararı varsa sunulan isteğe bağlı bir seçenektir.',
        },
        {
          question: 'Kredi kartı verilerini saklıyor musunuz?',
          answer:
            'Hayır. Ödemeler, verileri kendisi işleyen bir ödeme hizmeti sağlayıcısı üzerinden yapılır. Size hangisinin uygun olduğunu birlikte konuşuruz – sözleşme ilişkisi sizinle sağlayıcı arasındadır.',
        },
        {
          question: 'Mağaza için hangi hukuki metinlere ihtiyacım var?',
          answer:
            'İş modelinize bağlıdır; örneğin genel şartlar, cayma bilgilendirmesi, fiyat, vergi ve kargo bilgileri ile gizlilik metni. Sayfaları ve notları bunlara uyacak şekilde kurarız. İçeriklerin yetkin bir uzman tarafından incelenmesi gerekir.',
        },
        {
          question: 'Mağaza kasama bağlanabilir mi?',
          answer:
            'Bunu sağlayıcınız için ayrıca inceleriz – bkz. Kasa sistemi entegrasyonu. Ancak bir mağaza bu bağlantı olmadan da çalışır.',
        },
      ],
      related: ['pos', 'webdev'],
      ctaHeadline: 'Online satış yapmayı mı düşünüyorsunuz?',
    },
    pos: {
      seo: {
        title: 'Online mağaza için kasa sistemi entegrasyonu: fizibilite incelemesi',
        description:
          'Kasa sistemi ile online mağazayı bağlamak mı istiyorsunuz? aetheron, stok, fiyat ve siparişlerin makul biçimde eşitlenip eşitlenemeyeceğini her üretici için ayrı inceler – test aşaması ve dürüst alternatiflerle.',
      },
      name: 'Kasa sistemi entegrasyonu',
      eyebrow: 'Hizmet · Kasa sistemi entegrasyonu',
      h1: 'Kasa ve online mağaza: önce incele, sonra bağla.',
      lead: 'Dükkânda bir kasa sistemiyle (POS) çalışıyorsanız, stok, fiyat ve siparişlerin online mağazaya nasıl ulaşacağı sorusu doğar. Değerlendiriyor, koordine ediyor ve – sağlam olduğu yerde – bir entegrasyon geliştiriyoruz. Her sağlayıcı için ayrı ayrı.',
      summary:
        'Fizibilite, kasa sağlayıcınızla koordinasyon ve – mümkün olduğunda – teknik entegrasyon. Toptan vaatler olmadan.',
      highlights: [
        'Sağlayıcı, sürüm ve arayüzlerin incelenmesi',
        'Kasa sağlayıcınızla koordinasyon',
        'Canlıya geçmeden önce test ortamında deneme',
        'Doğrudan bağlantı mümkün değilse dürüst alternatifler',
      ],
      topic: 'pos',
      secondaryCta: 'Neleri netleştiriyoruz?',
      notice: {
        title: 'Önce şunu bilin',
        text: 'Her kasa sistemiyle “kendiliğinden çalışan” bir entegrasyon yoktur. Sisteminizin bağlanıp bağlanamayacağını ve nasıl bağlanacağını her üretici, ürün ve sürüm için ayrı ayrı inceleriz. Öncesinde hiçbir söz vermeyiz.',
      },
      situations: [
        'Dükkânda bir kasa sisteminiz var ve stokları iki kez tutmadan online satış yapmak istiyorsunuz.',
        'Stoklarınız online ile dükkânda birbirini tutmuyor.',
        'Fiyatların ya da kampanyaların tek yerden yönetilmesini istiyorsunuz.',
        'Kasa sağlayıcınız bir arayüz sunuyor, ama bununla nelerin mümkün olduğunu kimse bilmiyor.',
      ],
      blocks: [
        {
          kind: 'list',
          id: 'fragen',
          eyebrow: 'Neleri netleştiriyoruz?',
          title: 'Kasa sisteminizle ilgili sorular',
          intro: 'Söz vermeden önce fizibilite incelemesinde şu noktaları netleştiririz:',
          items: [
            'Hangi sağlayıcı, hangi ürün, hangi sürüm ve hangi lisans seviyesi?',
            'Kaç şube ya da kasa etkileniyor?',
            'Belgelenmiş bir arayüz (API) ya da dışa aktarma işlevi var mı? Maliyeti nedir?',
            'Üreticinin onayı ya da katkısı gerekiyor mu?',
            'Bir test ortamı (sandbox) ve test erişimleri var mı?',
            'Erişimlerin sahibi kim ve kasa sistemindeki değişikliklerden kim sorumlu?',
            'Başka hangi sistemler işin içinde, örneğin stok yönetimi ya da muhasebe?',
          ],
        },
        {
          kind: 'cards',
          id: 'datenfluesse',
          eyebrow: 'Veri akışları',
          title: 'Kasa ile mağaza arasında neler akabilir?',
          intro:
            'Her veri türü için verinin nerede “asıl” olarak tutulduğunu, hangi yönde ve ne sıklıkla aktığını netleştiririz.',
          items: [
            {
              title: 'Ürünler ve varyantlar',
              text: 'Ürün numaraları, adlar, varyantlar, vergi oranları. Ana veriler nerede yönetiliyor ve değişiklikler nasıl aktarılıyor?',
            },
            {
              title: 'Fiyatlar ve kampanyalar',
              text: 'Normal fiyatlar, indirimler ve kampanyalar. Arayüz üzerinden tam mı, yoksa yalnızca kısmen mi aktarılabiliyor?',
            },
            {
              title: 'Şube bazında stok',
              text: 'Stok ne kadar güncel olmalı ve dükkânda ile online aynı anda satış yapıldığında ne olacak?',
            },
            {
              title: 'Müşteri verileri',
              text: 'Yalnızca gerekliyse ve veri koruma açısından uzlaşılmışsa. Çoğu zaman müşteri verilerini ayrı tutmak mantıklıdır.',
            },
            {
              title: 'Siparişler',
              text: 'Online siparişler kasa sisteminde görünsün mü, görünecekse hangi biçimde ve hangi ödeme durumuyla?',
            },
            {
              title: 'İadeler ve hediye çekleri',
              text: 'İadeler, geri ödemeler ve hediye çekleri her iki kanalda tutarlı biçimde nasıl ele alınacak?',
            },
          ],
        },
        {
          kind: 'steps',
          id: 'phasen',
          eyebrow: 'Aşamalar',
          title: 'Adım adım, karar noktalarıyla',
          intro: 'Her aşamadan sonra devam edip etmeyeceğinize siz karar verirsiniz.',
          items: [
            {
              title: 'Fizibilite',
              text: 'Dokümantasyon, arayüzler, izinler ve maliyetlerin incelenmesi. Sonuç: bir entegrasyonun mantıklı olup olmadığına ve hangi biçimde olacağına dair yazılı değerlendirme.',
            },
            {
              title: 'Test sisteminde prototip',
              text: 'Test erişimleriyle en önemli veri akışını denemek. Sonuç: varsayımlar yerine kanıtlanmış bulgular.',
            },
            {
              title: 'Pilot ve mutabakat',
              text: 'Kontrollü, sınırlı canlı işletme: Veriler tutuyor mu? Hata olursa ne oluyor?',
            },
            {
              title: 'İşletme ve izleme',
              text: 'Başarısız eşitlemeler görünür olur ve veri durumlarını yeniden kontrol edebileceğiniz bir özet bulunur.',
            },
          ],
        },
        {
          kind: 'cards',
          id: 'sorgfalt',
          eyebrow: 'Özen',
          title: 'Teknik tarafta nelere dikkat ediyoruz?',
          items: [
            {
              title: 'Hata yönetimi ve yeniden deneme',
              text: 'Arayüzlere zaman zaman ulaşılamaz. Eşitlemeler, stokları çift kaydetmeden tekrarlanır.',
            },
            {
              title: 'Mutabakat ve çakışma kuralları',
              text: 'Kasa ile mağazanın farklı durumda olması hâlinde neyin geçerli olduğu önceden belirlenir; kontrol için bir özet sunulur.',
            },
            {
              title: 'Güvenlik',
              text: 'Erişim bilgileri yalnızca sunucu tarafında tutulur, kaynak kodunda bulunmaz. Yetkiler gerekli olanla sınırlanır.',
            },
            {
              title: 'Kişisel veri içermeyen kayıtlar',
              text: 'Hataları bulabilecek şekilde kayıt tutarız; gereksiz kişisel veri saklamayız.',
            },
          ],
        },
        {
          kind: 'split',
          id: 'alternativen',
          eyebrow: 'Doğrudan olmuyorsa',
          title: 'Dürüst alternatifler',
          intro: 'Bazen kullanılabilir bir arayüz yoktur. O zaman daha basit yolları konuşuruz.',
          left: {
            title: 'Olası yollar (uygulanabilirlik açık)',
            items: [
              'Üretici tarafından onaylı ara yazılım ya da üçüncü taraf bir bağlayıcı',
              'Kontrollü içe ve dışa aktarma (örn. CSV), zamanlanmış ya da elle',
              'Yalnızca tek yönlü veya gecikmeli eşitleme, örn. sadece stok',
              'Kendi stok takibi olan, ayrı bir online ürün yelpazesi',
            ],
          },
          right: {
            title: 'O zaman ne söyleriz?',
            items: [
              'Emeğin faydayı karşılayıp karşılamadığını',
              'Veri kalitesi ve stok açısından risklerin nerede olduğunu',
              'Kasa sağlayıcısını değiştirmenin bazen daha iyi bir çözüm olduğunu – ama her zaman değil',
              'Test edilmeden bir alternatifin çalışacağına dair söz vermeyiz',
            ],
          },
        },
        {
          kind: 'callout',
          id: 'steuern',
          eyebrow: 'Kasa ve vergi mevzuatı',
          title: 'Bir mağaza entegrasyonu kasayı belgelendirmez',
          text: 'Kasa, fiş, kayıt ve vergiyle ilgili yükümlülükler (örn. müdahale koruması ve veri dışa aktarımları) kasa sisteminizi ve iş akışlarınızı ilgilendirir. Bir online mağaza entegrasyonu bunları yerine getirmez ve belgelendirmez. Bu konulardaki sorularınızı kasa sağlayıcınız ve mali müşavirinizle netleştirin.',
        },
      ],
      deliverables: [
        'Sağlayıcınıza dair yazılı bir fizibilite değerlendirmesi',
        'Mantıklıysa: test sisteminde denenmiş bir prototip',
        'Veri akışlarının, sorumlulukların ve çakışma kurallarının tanımı',
        'Uygulanırsa: izleme ve mutabakat özetiyle belgelenmiş entegrasyon',
      ],
      faq: [
        {
          question: 'Hangi kasa sistemlerini destekliyorsunuz?',
          answer:
            'Bir liste vermiyoruz, çünkü incelemeden söz vermek ciddi olmaz. Sağlayıcıyı, ürünü ve biliyorsanız sürümü söyleyin. Bilmiyorsanız, öğrenmenize yardımcı oluruz.',
        },
        {
          question: 'Fizibilite incelemesi ne kadara mal olur?',
          answer:
            'Kapsam, sistemin ne kadar iyi belgelendiğine ve test erişimlerinin olup olmadığına bağlıdır. Maliyet doğmadan önce kapsamı sizinle uzlaşırız. Kasa sağlayıcınızın arayüz ya da lisans ücretleri gerekirse ayrıca eklenir.',
        },
        {
          question: 'Kasa sağlayıcımın onayına ihtiyacım var mı?',
          answer:
            'Sık sık evet; örneğin API erişimi ya da lisansınızdaki değişiklikler için. Bunu ilk aşamada sizinle birlikte netleştiririz.',
        },
        {
          question: 'Sağlayıcımın arayüzü yoksa ne olur?',
          answer:
            'O zaman kontrollü içe ve dışa aktarma gibi alternatifleri konuşuruz. Günlük işte tutup tutmayacağı ancak testte görülür.',
        },
      ],
      related: ['shops', 'data'],
      ctaHeadline: 'Kasanızın bir mağazaya uyup uymadığını mı öğrenmek istiyorsunuz?',
    },
    data: {
      seo: {
        title: 'Veri ve dijitalleşme: analizler ve otomasyon',
        description:
          'Daha az elle iş, daha iyi genel bakış: küçük işletmeler için mevcut verilerinize dayalı analizler, panolar ve otomatik iş akışları.',
      },
      name: 'Veri ve dijitalleşme',
      eyebrow: 'Hizmet · Veri ve dijitalleşme',
      h1: 'Daha az elle iş. Anlayacağınız rakamlar.',
      lead: 'Birçok küçük işletmenin sandığından fazla verisi var – tablolara, e-postalara ve tek tek programlara dağılmış halde. Bunlardan anlaşılır analizler çıkarmanıza ve tekrarlayan işleri otomatikleştirmenize yardım ediyoruz. Bunu yaparken zaten elinizde olandan başlarız.',
      summary:
        'Mevcut verilerden analizler ve panolar, daha az çift giriş ve programlarınız arasında otomatik iş akışları.',
      highlights: [
        'Anlaşılır analizler ve panolar',
        'Programlar arasında otomatik iş akışları',
        'Dahili işler için küçük web araçları',
        'Yapay zekânın gerçekten nerede yardımcı olduğunun sakin incelenmesi',
      ],
      topic: 'data',
      secondaryCta: 'Neler dahil?',
      situations: [
        'Göstergeler her ay birkaç tablodan elle bir araya getiriliyor.',
        'Aynı bilgiler iki üç programa aktarılıyor.',
        'Talepler, siparişler ya da randevular e-posta, telefon ve kâğıt notlara dağılmış durumda.',
        'Rakamlara dayanarak karar vermek isterdiniz, ama değerlendirme çok zahmetli.',
      ],
      blocks: [
        {
          kind: 'cards',
          id: 'bausteine',
          eyebrow: 'Bileşenler',
          title: 'Neler dahil olabilir?',
          intro:
            'Her proje tüm bileşenlere ihtiyaç duymaz. Hangilerinin mantıklı olduğunu ilk görüşmede birlikte belirleriz.',
          items: [
            {
              title: 'Mevcut durum tespiti',
              text: 'Hangi verinin nerede durduğuna, kimlerin kullandığına ve zamanın nerede kaybolduğuna birlikte bakarız. Sonuç, mantıklı ilk adımları içeren kısa ve anlaşılır bir özet – kapsamlı bir konsept değil.',
            },
            {
              title: 'Analizler ve panolar',
              text: 'Verilerinizi, gerçekten ihtiyaç duyduğunuz rakamlar tek bakışta görülecek şekilde hazırlarız – örneğin aylık talepler, açık siparişler ya da hizmete göre ciro. Aşırı yüklü bir pano yerine birkaç anlamlı gösterge.',
            },
            {
              title: 'Otomatik iş akışları',
              text: 'Tekrarlayan işler çoğu zaman otomatikleştirilebilir: Talepler doğrudan bir listeye düşer, veriler programlar arasında aktarılır, bildirimler doğru kişiye gider – anlaşılır kurallar ve net sorumlulukla.',
            },
            {
              title: 'Küçük web araçları',
              text: 'Standart yazılımın uymadığı yerde, örneğin basit bir kayıt formu ya da ekibiniz için bir özet gibi yalın dahili uygulamalar geliştiririz. Mümkün olduğunca küçük, gerektiği kadar kapsamlı.',
            },
            {
              title: 'Mağaza ve kasadan gelen veriler',
              text: 'Hem online hem dükkânda satış yapıyorsanız, veriler erişilebilir olduğu sürece analizler her iki tarafı bir araya getirebilir. Nelerin mümkün olduğunu kasa sisteminizin incelemesi gösterir.',
            },
            {
              title: 'Yapay zekâ – gerçekten yardımcı olduğu yerde',
              text: 'Yapay zekâ bazı işlerde destek olabilir; örneğin talepleri ayırmada ya da belgeleri özetlemede. Fayda, emek ve risklerin birbirine uyup uymadığını sakin biçimde değerlendirir, insan denetimini baştan planlarız.',
            },
          ],
        },
      ],
      scenario: {
        title: 'Örnek senaryo: Her ay tablo işi yapan bir hizmet sağlayıcı',
        before:
          'Ay sonunda muhasebe dışa aktarımı, randevu takvimi ve bir sipariş listesindeki rakamlar elle bir tabloya kopyalanıyor. Bu zaman alıyor ve hataya açık.',
        goal: 'En önemli göstergeler kopyalama işi olmadan güncel ve izlenebilir şekilde elde olmalı.',
        approach:
          'Mevcut dışa aktarımlar otomatik okunur, temizlenir ve ekibin erişebildiği sade bir özet olarak sunulur.',
      },
      deliverables: [
        'Verilerinizin ve iş akışlarınızın önerilerle birlikte kısa bir özeti',
        'Çalışan bir çözüm – örneğin bir pano ya da otomatik bir iş akışı',
        'Anlaşılır dokümantasyon: ne zaman ve neden ne oluyor',
        'Bununla çalışacak kişiler için eğitim',
      ],
      faq: [
        {
          question: 'Bunun için yeni yazılım almamız gerekiyor mu?',
          answer:
            'Mutlaka değil. Çoğu zaman zaten kullandığınız programlarla çok şey yapılabilir. Ek bir araç mantıklıysa, siz karar vermeden önce maliyetleri ve alternatifleri açıklarız.',
        },
        {
          question: 'Verilerimiz oldukça dağınık. Bu bir sorun mu?',
          answer:
            'Bu normal durum. İşin bir kısmı verileri temizlemek ve bundan sonra düzgün kaydedilmeleri için kurallar belirlemektir.',
        },
        {
          question: 'Hassas verilere ne olur?',
          answer:
            'Yalnızca görev için gerekli verilerle çalışırız ve bunların nerede saklanıp işleneceğini önceden konuşuruz. Kişisel veriler söz konusuysa, veri işleme sözleşmesi de buna dahildir.',
        },
      ],
      related: ['shops', 'webdev'],
      ctaHeadline: 'Hangi iş akışı her hafta size gereksiz zaman kaybettiriyor?',
    },
  },
  process: {
    seo: {
      title: 'Çalışma şeklimiz: sizinle nasıl çalışıyoruz?',
      description:
        'aetheron küçük işletmelerle nasıl çalışır: ilk görüşme, yazılı değerlendirme, aşamalı uygulama, test aşaması ve düzgün bir teslim.',
    },
    eyebrow: 'Çalışma şeklimiz',
    h1: 'Anlaşılır, izlenebilir, kolay adımlarla.',
    lead: 'İyi dijital çözümler, ne için gerektiği net olduğunda ortaya çıkar. Bu yüzden teknikten değil, sizin günlük işinizden başlarız.',
    stepsEyebrow: 'Süreç',
    stepsTitle: 'İlk görüşmeden teslime kadar',
    steps: [
      {
        title: 'İlk görüşme',
        text: 'Neyin daha iyi gitmesini istediğinizi anlatırsınız. Sorular sorar, dinler ve yardımcı olup olamayacağımızı ve nasıl olacağını dürüstçe söyleriz.',
      },
      {
        title: 'Yazılı değerlendirme',
        text: 'Kapsamı, yaklaşımı, zaman çerçevesini ve maliyeti içeren – anlaşılır biçimde yazılmış – bir teklif alırsınız; sipariş vermeden önce.',
      },
      {
        title: 'Aşamalı uygulama',
        text: 'Kolay izlenebilir adımlarla çalışırız. Ara sonuçları erken görür, deneyebilir ve geri bildirim verebilirsiniz.',
      },
      {
        title: 'Test ve onay',
        text: 'Bir şey canlıya çıkmadan önce sizinle birlikte test ederiz – mağazalarda ve entegrasyonlarda önce bir test ortamında.',
      },
      {
        title: 'Teslim ve destek',
        text: 'Sonunda her şeyin nasıl çalıştığını anlatır ve en önemli noktaları belgelendiririz. Devam eden destek mümkündür, ancak zorunlu değildir.',
      },
    ],
    principlesEyebrow: 'İlkeler',
    principlesTitle: 'İşimizde bizim için önemli olanlar',
    needsTitle: 'Sizden neye ihtiyacımız var?',
    needs: [
      'Neyin daha iyi olması gerektiğine dair kısa bir açıklama – kendi sözlerinizle.',
      'Soruları yanıtlayabilecek ve karar verebilecek bir muhatap.',
      'Etkilenen mevcut sistemlere erişimler (örn. alan adı, barındırma, kasa sistemi).',
      'Ara sonuçlara geri bildirim için biraz zaman.',
    ],
    notDoingTitle: 'Bilerek yapmadıklarımız',
    notDoing: [
      'Google’da sıralama ya da belirli ciro artışları vaat etmeyiz.',
      'Yapay zaman baskısı yaratmayız, “yalnızca bugün” indirimleri sunmayız.',
      'İhtiyacınız olmayan araçlar önermeyiz – basit bir çözüm yetiyorsa bunu söyleriz.',
      'Sizin kararınız ve ziyaretçilerinizin onayı olmadan izleme hizmetleri eklemeyiz.',
      'İncelemeden önce bir kasa sistemi entegrasyonu vaat etmeyiz.',
    ],
    gatesTitle: 'Mağaza ve entegrasyonlarda: canlıdan önce onay',
    gatesText:
      'Ödemeler, siparişler ve bir kasa sistemiyle veri eşitlemeleri, bir test ortamında denendikten ve siz onay verdikten sonra canlıya geçer.',
  },
  about: {
    seo: {
      title: 'aetheron hakkında: kimler için ve nasıl çalışıyoruz?',
      description:
        'aetheron, Almanya’daki küçük işletmelere web siteleri, online mağazalar ve dijitalleşme konusunda destek olur – Almanca, Türkçe ya da İngilizce. Burada neyi savunduğumuz ve neyi sunmadığımız yazıyor.',
    },
    eyebrow: 'aetheron hakkında',
    h1: 'Küçük işletmeler için küçük bir ortak.',
    lead: 'aetheron, teknikte kaybolmadan güvenilir bir dijital çözüm isteyen işletmelere yöneliktir. Bu sayfada kimler için uygun olduğumuz, kimler için pek olmadığımız ve hangi dillerde çalıştığımız yazıyor.',
    forTitle: 'Bize uyar',
    forItems: [
      'Almanya’daki küçük işletmeler, serbest çalışanlar ve esnaf',
      'Anlaşılır açıklamalara ve net bir kapsama önem verenler',
      'Küçük başlayıp gerektiğinde büyüyen projeler',
      'Almanca, Türkçe ya da İngilizce’yi tercih edenler',
    ],
    notForTitle: 'Pek uymaz',
    notForItems: [
      'Sabit satın alma süreçleri ve çerçeve sözleşmeleri olan büyük şirketler',
      'Sıralama, ciro ya da hukuki güvence garantisi bekleyenler',
      'Ön inceleme olmadan herhangi bir kasa sisteminin hemen bağlanması',
    ],
    langTitle: 'Diller',
    langText:
      'Almanca, Türkçe ve İngilizce danışmanlık veriyor ve yazıyoruz. Bu web sitesi üç dilde de eksiksiz mevcuttur. Hukuken bağlayıcı metinler bunlardan ayrı ele alınır (bkz. Impressum ve gizlilik).',
    teamTitle: 'aetheron’un arkasında kim var?',
    factsTitle: 'Dürüstçe belirtilenler',
    factsText:
      'Belgeleyip yayımlama iznimiz olmadıkça burada müşteri logoları, değerlendirmeler, ödüller veya göstergeler göstermiyoruz.',
  },
  faq: {
    seo: {
      title: 'Web sitesi, online mağaza ve kasa sistemi entegrasyonu hakkında sık sorulan sorular',
      description:
        'aetheron’da maliyet, süreç, online mağazalar, kasa sistemi entegrasyonu, veri koruma ve diller hakkında sık sorulan soruların yanıtları.',
    },
    eyebrow: 'Sık sorulan sorular',
    h1: 'En önemli sorulara yanıtlar.',
    lead: 'Sorunuz burada yok mu? Bize yazın – memnuniyetle yanıtlarız.',
    groups: [
      {
        id: 'allgemein',
        title: 'Genel',
        items: [
          {
            question: 'aetheron kimler için uygun?',
            answer:
              'Teknik konulara kendileri dalmak zorunda kalmadan güvenilir bir web sitesi, kendi online mağazası ya da günlük işte daha az elle çalışma isteyen küçük işletme sahipleri ve sorumluları için.',
          },
          {
            question: 'Ne istediğimizi tam olarak bilmemiz gerekiyor mu?',
            answer: 'Hayır. Kaba bir açıklama yeterli. Formda “Henüz emin değilim” seçeneği var.',
          },
          {
            question: 'Bir proje ne kadara mal olur, ne kadar sürer?',
            answer:
              'İkisi de kapsama bağlıdır. İlk görüşmeden sonra, sipariş vermeden önce maliyet çerçevesi ve zaman planını içeren yazılı bir değerlendirme alırsınız.',
          },
          {
            question: 'Hangi dillerde çalışıyorsunuz?',
            answer: 'Almanca, Türkçe ve İngilizce. Bu web sitesi üç dilde de mevcut.',
          },
        ],
      },
      {
        id: 'shops',
        title: 'Online mağazalar',
        items: [
          {
            question: 'Her mağazada müşteri hesabı olması şart mı?',
            answer:
              'Hayır. Misafir olarak sipariş varsayılandır. Hesaplar isteğe bağlı bir seçenektir.',
          },
          {
            question: 'Ödemeleri kim işler?',
            answer:
              'Sözleşme yaptığınız bir ödeme hizmeti sağlayıcısı. Kart verilerini biz saklamayız.',
          },
          {
            question: 'Bir mağaza ne zaman canlıya çıkar?',
            answer:
              'Ancak bir test ortamında uçtan uca test yapıldıktan, hukuki metinleriniz onaylandıktan ve sizin açık onayınızdan sonra.',
          },
        ],
      },
      {
        id: 'kasse',
        title: 'Kasa sistemi entegrasyonu',
        items: [
          {
            question: 'Kasa sistemim bağlanabilir mi?',
            answer:
              'Üreticiye, ürüne, sürüme ve arayüzlere bağlıdır. Ayrı ayrı inceler ve neyin gerçekçi olduğunu önceden söyleriz.',
          },
          {
            question: 'Bir entegrasyon kasamı belgelendirir mi?',
            answer:
              'Hayır. Kasa, fiş ve vergiyle ilgili yükümlülükler kasa sisteminizi ve iş akışlarınızı ilgilendirir. Bunları kasa sağlayıcınız ve mali müşavirinizle netleştirin.',
          },
          {
            question: 'Arayüz yoksa ne olur?',
            answer:
              'O zaman kontrollü içe ve dışa aktarma gibi alternatifleri konuşuruz. Tutup tutmadığı ancak testte görülür.',
          },
        ],
      },
      {
        id: 'recht',
        title: 'Veri koruma ve hukuk',
        items: [
          {
            question: 'Web sitem ya da mağazam bu durumda KVKK/GDPR’ye uygun olur mu?',
            answer:
              'Veri tasarruflu teknoloji kullanır ve kullanılan hizmetleri belirtiriz. Teklifinizin bütün olarak hukuka uygun olup olmadığı ayrıca hukuki metinlerinize ve süreçlerinize bağlıdır ve yetkin bir uzman tarafından incelenmelidir.',
          },
          {
            question: 'Yapay zekâ kullanıyor musunuz?',
            answer:
              'Yalnızca kanıtlanabilir biçimde yardımcı olduğu ve sonuçların kontrol edilebildiği yerde. Çoğu zaman basit bir otomasyon daha iyi çözümdür.',
          },
          {
            question: 'Bu web sitesi izleme (tracking) kullanıyor mu?',
            answer:
              'Hayır. Bu web sitesi şu anda izleme ya da analiz hizmeti kullanmıyor ve üçüncü taraflardan içerik yüklemiyor.',
          },
        ],
      },
    ],
  },
  contact: {
    seo: {
      title: 'İletişim: projeyi görüşelim',
      description:
        'İşletmenizde dijital tarafta neyin daha iyi gitmesini istediğinizi aetheron’a yazın: web sitesi, online mağaza, kasa sistemi entegrasyonu ya da veri. Kısa bir açıklama yeterli.',
    },
    eyebrow: 'İletişim',
    h1: 'Projeyi görüşelim',
    lead: 'Konunun ne olduğunu kısaca anlatın. Kaba bir fikir iyi bir başlangıçtır – gerisini birlikte netleştiririz.',
    asideHelpTitle: 'Bir talepte neler yardımcı olur?',
    asideHelp: [
      'Neyin daha iyi olması gerekiyor – ve neden şimdi?',
      'Halihazırda neler var (web sitesi, kasa, programlar, tablolar)?',
      'İstenen bir zaman aralığı ya da sabit tarihler var mı?',
      'İsteğe bağlı: varsa kaba bir bütçe çerçevesi.',
    ],
    asideHelpNote: 'Bunların hiçbiri zorunlu değil. Belirsiz noktaları görüşmede netleştiririz.',
    nextTitle: 'Sonrasında ne olur?',
    next: [
      'Mesajınızı okur ve e-posta ile yanıtlarız.',
      'Gerekirse telefonla ya da görüntülü kısa bir görüşme ayarlarız.',
      'Ardından bağlayıcı olmayan yazılı bir değerlendirme alırsınız.',
    ],
    directTitle: 'Doğrudan iletişim',
    email: 'E-posta',
    phone: 'Telefon',
    booking: 'Online görüşme randevusu al',
    bookingSr: '{provider} yeni sekmede açılır',
    bookingNote:
      'Harici hizmet ({provider}). Açtığınızda, bu hizmetin gizlilik hükümleri geçerlidir.',
    bookingDisclosure:
      'Tıklamadan önce: Randevu alma {provider} üzerinden yapılır (merkezi ABD’de olan bir sağlayıcı). Bağlantıyı açtığınızda {provider} sunucularıyla bağlantı kurulur; bu sırada sağlayıcı IP adresiniz gibi teknik verileri alır. Randevu alırken ad, e-posta adresi ve gerekirse başka bilgileri doğrudan {provider} üzerinde girersiniz; bunları randevuyu organize etmek için biz de alırız. Kullanım isteğe bağlıdır – bize formdan ya da e-postayla da yazabilirsiniz.',
    bookingPolicy: '{provider} gizlilik bilgilendirmesi',
    mailOnlyTitle: 'Bize e-posta yazın',
    mailOnlyText:
      'Bize en hızlı e-posta ile ulaşırsınız. Yandaki notlar ilk değerlendirmede yardımcı olur.',
    mailButton: '{email} adresine e-posta gönder',
  },
  form: {
    heading: 'Talep yazın',
    requiredNote: 'Zorunlu alanlar {star} ile işaretlenmiştir.',
    requiredSr: 'yıldız',
    optional: '(isteğe bağlı)',
    topicLegend: 'Konu nedir?',
    topicHint: 'En uygun olanı seçin – ya da “Henüz emin değilim”.',
    topics: {
      website: { label: 'Web sitesi', hint: 'Yeni ya da yenileme' },
      shop: { label: 'Online mağaza', hint: 'Online satış yapmak' },
      pos: { label: 'Kasa sistemi entegrasyonu', hint: 'Kasa ve mağazayı bağlamak' },
      data: { label: 'Veri ve dijitalleşme', hint: 'Analiz, otomasyon' },
      unsure: { label: 'Henüz emin değilim', hint: 'Birlikte netleştiririz' },
    },
    name: 'Ad soyad',
    email: 'E-posta adresi',
    emailHint: 'Yanıtı bu adrese göndeririz.',
    company: 'İşletme',
    message: 'Talebiniz',
    messageHint: {
      website:
        'Örneğin: Halihazırda bir web siteniz var mı? Neyin daha iyi olması gerekiyor? Hangi diller?',
      shop: 'Örneğin: Ne satmak istiyorsunuz ve şimdiye kadar nasıl satış yaptınız?',
      pos: 'Örneğin: Kasa ile mağaza arasında ne eşitlenmeli – stok, fiyat, sipariş?',
      data: 'Örneğin: Hangi iş akışları zaman alıyor ve hangi programlar ya da tablolar işin içinde?',
      unsure:
        'Örneğin: Neyin daha iyi olması gerekiyor? Halihazırda bir web siteniz ya da belirli programlarınız var mı? Bir zaman çerçevesi var mı?',
    },
    details: {
      website: { url: 'Mevcut web sitesi', urlHint: 'Varsa, örn. www.ornek.de' },
      shop: {
        context: 'Şimdiye kadarki satış yolları',
        contextHint: 'Örneğin dükkân, pazar, pazaryeri ya da sosyal medya.',
      },
      pos: {
        legend: 'Kasa sisteminizle ilgili bilgiler',
        hint: 'Hepsi isteğe bağlı. Bilmiyorsanız boş bırakın – öğrenmenize yardımcı oluruz.',
        provider: 'Sağlayıcı',
        model: 'Ürün ya da model',
        version: 'Sürüm',
      },
      data: {
        tools: 'Kullanılan programlar',
        toolsHint: 'Örneğin Excel, muhasebe, randevu takvimi.',
      },
    },
    honeypot: 'Lütfen bu alanı boş bırakın',
    submit: 'Talebi gönder',
    submitting: 'Gönderiliyor …',
    privacyNote:
      'Bilgilerinizi yalnızca talebinizi yanıtlamak için kullanırız. Ayrıntıları şurada bulabilirsiniz:',
    privacyLink: 'gizlilik ve veri koruma bilgilendirmesi',
    errorSummaryTitle: 'Lütfen bilgilerinizi kontrol edin',
    errors: {
      nameRequired: 'Lütfen adınızı ve soyadınızı yazın.',
      nameTooLong: 'Lütfen adı en fazla {max} karaktere kısaltın.',
      emailRequired: 'Size yanıt verebilmemiz için lütfen e-posta adresinizi yazın.',
      emailInvalid: 'Lütfen e-posta adresini kontrol edin, örn. ad@firma.de.',
      companyTooLong: 'Lütfen işletme adını en fazla {max} karaktere kısaltın.',
      messageRequired: 'Lütfen talebinizi kısaca açıklayın.',
      messageTooShort: 'Lütfen talebinizi birkaç sözcük daha ayrıntılı açıklayın.',
      messageTooLong: 'Lütfen mesajı en fazla {max} karaktere kısaltın.',
      detailTooLong: 'Lütfen bu bilgiyi en fazla {max} karaktere kısaltın.',
      urlInvalid: 'Lütfen adresi kontrol edin, örn. www.ornek.de.',
    },
    statusSending: 'Talebiniz gönderiliyor …',
    statusBlocked: 'Talep gönderilemedi.',
    successTitle: 'Teşekkürler – mesajınız bize ulaştı.',
    successText:
      'Talebinizi okur ve e-posta ile yanıtlarız. Bu arada bir şey eklemek isterseniz şu adrese yazabilirsiniz:',
    failureTitle: 'Mesaj gönderilemedi.',
    failureText:
      'Girdiğiniz bilgiler duruyor. Lütfen biraz sonra yeniden deneyin – ya da talebinizi doğrudan e-posta ile gönderin.',
    notConfiguredTitle: 'Form henüz kurulmadı.',
    notConfiguredText: 'Lütfen talebinizi doğrudan e-posta ile gönderin.',
    mailButton: 'E-posta programını aç',
    mailSubject: 'Web sitesi üzerinden talep',
    mailLabels: {
      topic: 'Konu',
      name: 'Ad soyad',
      company: 'İşletme',
      url: 'Web sitesi',
      context: 'Şimdiye kadarki satış yolları',
      provider: 'Kasa sağlayıcısı',
      model: 'Kasa ürünü',
      version: 'Kasa sürümü',
      tools: 'Kullanılan programlar',
    },
    server: {
      successTitle: 'Teşekkürler – mesajınız bize ulaştı.',
      successText: 'Talebinizi okur ve e-posta ile yanıtlarız.',
      invalidTitle: 'Lütfen bilgilerinizi kontrol edin',
      invalidText: 'Bazı bilgiler eksik ya da geçersiz. Lütfen geri dönüp düzeltin.',
      failureTitle: 'Mesaj gönderilemedi.',
      failureText: 'Lütfen daha sonra yeniden deneyin ya da bize doğrudan e-posta yazın.',
      rateLimitedText: 'Kısa sürede çok fazla talep. Lütfen daha sonra yeniden deneyin.',
      back: 'Forma dön',
      home: 'Ana sayfaya git',
    },
  },
  legal: {
    draftTitle: 'Taslak – yayımlamadan önce inceletin.',
    draftText:
      'Bu sayfa, işaretlenmiş yer tutucular içeren bir şablondur. Hukuki danışmanlık değildir ve hukuken incelenmemiştir. Lütfen bilgileri tamamlayın ve metni yetkin bir uzmana inceletin.',
    translationNote:
      'Bu Türkçe metin, Almanca taslağın bilgilendirme amaçlı bir çevirisidir. Bağlayıcı metin Almanca sürümdür (hukuk danışmanınızın belirlemesi saklı kalmak üzere).',
    authoritative:
      'Bağlayıcı sürüm: Almanca (hukuk danışmanınızın belirlemesi saklı kalmak üzere).',
    reviewStatus: 'İnceleme durumu',
    notReviewed: 'henüz hukuken incelenmedi',
    imprint: {
      seo: {
        title: 'Yasal bilgiler (Impressum)',
        description: 'aetheron’un sağlayıcı bilgileri (Impressum).',
      },
      eyebrow: 'Yasal bilgiler',
      h1: 'Yasal bilgiler (Impressum)',
      intro: 'Alman DDG § 5 uyarınca bilgiler',
      labels: {
        owner: 'Sağlayıcı',
        representative: 'Temsile yetkili kişi',
        address: 'Adres',
        contact: 'İletişim',
        email: 'E-posta',
        phone: 'Telefon',
        vatId: 'KDV kimlik numarası (USt-IdNr.)',
        register: 'Ticaret sicili kaydı',
        content: 'İçeriklerden sorumlu',
        dispute: 'Tüketici uyuşmazlıklarının çözümü',
      },
      dispute:
        'Tüketici tahkim kurulu önünde uyuşmazlık çözüm süreçlerine katılıma ilişkin not: Bir bilginin gerekli olup olmadığını ve hangisinin gerektiğini yetkin bir uzmanla netleştirin.',
    },
    privacy: {
      seo: {
        title: 'Gizlilik ve veri koruma bilgilendirmesi',
        description: 'aetheron web sitesinde kişisel verilerin işlenmesine ilişkin bilgiler.',
      },
      eyebrow: 'Yasal bilgiler',
      h1: 'Gizlilik ve veri koruma bilgilendirmesi',
      updated: 'Güncelleme tarihi',
      sections: [
        {
          id: 'verantwortlicher',
          title: 'Veri sorumlusu',
          paragraphs: ['Bu web sitesindeki veri işlemeden sorumlu olan:', '{{controller}}'],
        },
        {
          id: 'hosting',
          title: 'Barındırma ve sunucu günlükleri',
          paragraphs: [
            'Bu web sitesi {{hostingProvider}} tarafından barındırılmaktadır (sunucu konumu: {{hostingLocation}}). Sayfa çağrıldığında sunucu, sayfayı sunmak ve işletimi sağlamak için teknik olarak gerekli verileri işler; örneğin IP adresi, tarih ve saat, çağrılan sayfa ve tarayıcı bilgileri.',
            'Hukuki dayanak GDPR m. 6/1 (f) bendidir (güvenli ve istikrarlı işletimde meşru menfaat). Saklama süresi barındırma sağlayıcısının ayarlarına bağlıdır.',
          ],
        },
        {
          id: 'kontaktformular',
          title: 'İletişim ve talep formu',
          paragraphs: [
            'Bize form ya da e-posta ile ulaştığınızda, talebinizi yanıtlamak için bilgilerinizi (ad, e-posta adresi, mesaj ve isteğe bağlı olarak verdiğiniz bilgiler, örn. işletme ya da kasa sistemi) işleriz.',
            'Hukuki dayanak, talep bir sözleşmeye yönelikse GDPR m. 6/1 (b) bendi, aksi halde m. 6/1 (f) bendidir. Talep kesin olarak yanıtlandığında ve saklama yükümlülükleri engel olmadığında bilgileri sileriz.',
            'Formun iletilmesi: {{formProcessor}}',
          ],
        },
        {
          id: 'tracking',
          title: 'Çerezler, izleme ve üçüncü taraf içerikleri',
          paragraphs: [
            'Bu web sitesi şu anda çerez ya da izleme veya analiz hizmeti kullanmamaktadır. Yazı tipleri yerel olarak sunulur. Üçüncü taraflardan içerik yüklenmez. Randevu bağlantısı, harici bir hizmeti yalnızca siz tıkladığınızda açar; bu durumda o hizmetin gizlilik hükümleri geçerlidir.',
            'Dil seçimi saklanmaz.',
          ],
        },
        {
          id: 'rechte',
          title: 'Haklarınız',
          paragraphs: [
            'Yasal hükümler çerçevesinde bilgi alma, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz haklarına sahipsiniz. Ayrıca bir veri koruma denetim otoritesine şikâyette bulunabilirsiniz.',
          ],
        },
      ],
      booking: {
        id: 'terminbuchung',
        title: 'Calendly üzerinden randevu alma',
        paragraphs: [
          'İletişim sayfasında Calendly hizmetinin (merkezi ABD’de olan bir sağlayıcı) online randevu bağlantısına yer veriyoruz. Web sitemizi ziyaret etmeniz tek başına Calendly’ye veri aktarılmasına yol açmaz. Bağlantıya tıkladığınızda Calendly’deki randevu sayfası açılır; bu sırada Calendly teknik verileri (örn. IP adresi, tarayıcı bilgileri) ve – randevu alırsanız – girdiğiniz verileri (örn. ad, e-posta adresi, randevu isteği, serbest metin) işler.',
          'Randevuyu gerçekleştirmek için randevu verilerini alırız. Hukuki dayanak GDPR m. 6/1 (b) bendidir (talebiniz üzerine sözleşme öncesi tedbirler), bunun dışında m. 6/1 (f) bendidir. Kullanım isteğe bağlıdır; alternatifler talep formu ve e-postadır.',
          'Üçüncü ülkeye aktarım (ABD): {{bookingTransfer}}',
          'Calendly tarafından yapılan işleme için sağlayıcının gizlilik bilgilendirmesi geçerlidir (https://calendly.com/privacy). Orada çerezler ya da benzeri teknolojiler de kullanılabilir; bundan kendi sayfasında Calendly sorumludur.',
        ],
      },
    },
  },
  notFound: {
    title: 'Böyle bir sayfa yok.',
    text: 'Adres eskimiş ya da yanlış yazılmış olabilir.',
    home: 'Ana sayfaya git',
  },
  placeholders: {
    bookingTransfer:
      'Calendly’ye ABD’ye aktarımın hukuki dayanağı (örn. yeterlilik kararı/sertifikasyon ya da standart sözleşme hükümleri) – işletmeci tarafından incelenip girilmelidir',
    owner: 'Ad soyad ya da işletme unvanı ve hukuki şekli',
    representative: 'Temsile yetkili kişi (şirket ise)',
    street: 'Cadde ve numara (tebligat yapılabilir adres)',
    city: 'Posta kodu ve şehir',
    vatId: 'USt-IdNr. (UStG § 27a) – ya da satırı kaldırın',
    register: 'Sicil mahkemesi ve numarası – ya da satırı kaldırın',
    contentResponsible: 'MStV § 18 md. 2 geçerliyse ad ve adres',
    hostingProvider: 'Barındırma sağlayıcısının adı ve adresi',
    hostingLocation: 'Sunucu konumu (örn. AB)',
    formProcessor: 'Formun iletim yolu, sağlayıcı, merkez, üçüncü ülkeye aktarımın hukuki dayanağı',
    privacyUpdated: 'Gizlilik bilgilendirmesinin tarihi (ay/yıl)',
    aboutText:
      'aetheron’un arkasındaki kişi(ler) hakkında iki üç cümle – yalnızca belgelenebilir bilgiler',
  },
};
