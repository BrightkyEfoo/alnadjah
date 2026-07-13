import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /support. Les valeurs de contact (numéros, e-mail) vivent
 * ici bien qu'identiques dans les trois langues : elles sont affichées.
 */
const fr = {
  meta: {
    title: 'Support | Al-Nadjah Express',
    description:
      'Une question sur un envoi ? WhatsApp +235 68 88 80 48, téléphone à Douala, e-mail. Réponse en moins de 5 minutes.',
  },

  eyebrow: 'Support',
  title: 'Quelqu’un vous répond.',
  intro:
    'Du dépôt à la remise, une vraie équipe suit votre colis. Choisissez le canal qui vous arrange — le plus rapide reste WhatsApp.',

  channels: [
    {
      key: 'whatsapp',
      title: 'WhatsApp',
      desc: 'Le canal le plus rapide. Réponse en moins de 5 minutes.',
      value: '+235 68 88 80 48',
    },
    {
      key: 'phone',
      title: 'Téléphone — Douala',
      desc: 'Du lundi au samedi, 8 h – 18 h (GMT+1).',
      value: '+237 6 88 39 56 08',
    },
    {
      key: 'email',
      title: 'E-mail',
      desc: 'Pour les devis, les gros volumes et les demandes écrites.',
      value: 'contact@alnadjah-express.com',
    },
  ],

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Ce qu’on nous demande le plus.',
    items: [
      {
        q: 'Combien coûte un envoi ?',
        a: 'Douala → N’Djamena : 2 500 F par kilo. Abidjan → N’Djamena : 7 000 F par kilo. Le colis est pesé devant vous à l’agence et le prix est annoncé au dépôt — il ne bouge plus.',
      },
      {
        q: 'Quand part mon colis ?',
        a: 'Sur Douala → N’Djamena, les départs ont lieu le mardi, le jeudi et le samedi, avec livraison en 24 h. Sur Abidjan → N’Djamena, les colis sont acceptés jusqu’au lundi 14 h pour un départ le mardi.',
      },
      {
        q: 'Comment suivre mon colis ?',
        a: 'Chaque colis reçoit une étiquette et un numéro de suivi dès le dépôt. Saisissez-le sur la page de suivi, ou envoyez-le-nous sur WhatsApp : nous vous disons exactement où il se trouve.',
      },
      {
        q: 'Puis-je envoyer des objets fragiles ?',
        a: 'Oui. Signalez-le au dépôt : le colis est marqué FRAGILE, isolé et manipulé à part. Chez nous cette mention n’est pas décorative.',
      },
      {
        q: 'Je ne suis pas au Cameroun. Pouvez-vous acheter pour moi ?',
        a: 'Oui. Envoyez-nous ce que vous cherchez sur WhatsApp : nous achetons sur place, validons la commande avec vous, emballons et expédions — le tout en une seule course.',
      },
      {
        q: 'Et pour l’électroménager ou les gros volumes ?',
        a: 'Machines, filtres, équipements, marchandise commerçante : chaque envoi volumineux fait l’objet d’un devis. Écrivez-nous avec les dimensions et le poids approximatif.',
      },
    ],
  },

  cta: {
    title: 'Toujours une question ?',
    body: 'Écrivez-nous sur WhatsApp — nous répondons en moins de 5 minutes, du lundi au samedi.',
    primary: 'Écrire sur WhatsApp',
    secondary: 'Simuler mon envoi',
  },
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'Support | Al-Nadjah Express',
    description:
      'A question about a shipment? WhatsApp +235 68 88 80 48, phone in Douala, email. We reply in under 5 minutes.',
  },

  eyebrow: 'Support',
  title: 'Someone will answer you.',
  intro:
    'From drop-off to handover, a real team follows your parcel. Pick whichever channel suits you — WhatsApp is still the fastest.',

  channels: [
    {
      key: 'whatsapp',
      title: 'WhatsApp',
      desc: 'The fastest channel. A reply in under 5 minutes.',
      value: '+235 68 88 80 48',
    },
    {
      key: 'phone',
      title: 'Phone — Douala',
      desc: 'Monday to Saturday, 8 a.m. – 6 p.m. (GMT+1).',
      value: '+237 6 88 39 56 08',
    },
    {
      key: 'email',
      title: 'Email',
      desc: 'For quotes, large volumes and written enquiries.',
      value: 'contact@alnadjah-express.com',
    },
  ],

  faq: {
    eyebrow: 'Frequently asked',
    title: 'What people ask us most.',
    items: [
      {
        q: 'How much does a shipment cost?',
        a: 'Douala → N’Djamena: 2 500 F per kilo. Abidjan → N’Djamena: 7 000 F per kilo. Your parcel is weighed in front of you at the agency and the price is quoted on the spot — it does not change afterwards.',
      },
      {
        q: 'When does my parcel leave?',
        a: 'On Douala → N’Djamena, departures are on Tuesday, Thursday and Saturday, with delivery in 24 hours. On Abidjan → N’Djamena, parcels are accepted until Monday 2 p.m. for a Tuesday departure.',
      },
      {
        q: 'How do I track my parcel?',
        a: 'Every parcel gets a label and a tracking number the moment it is dropped off. Enter it on the tracking page, or send it to us on WhatsApp and we will tell you exactly where it is.',
      },
      {
        q: 'Can I ship fragile items?',
        a: 'Yes. Tell us at drop-off: the parcel is marked FRAGILE, set apart and handled separately. With us, that label is not decoration.',
      },
      {
        q: 'I am not in Cameroon. Can you buy on my behalf?',
        a: 'Yes. Send us what you are looking for on WhatsApp: we buy locally, confirm the order with you, pack it and ship it — all in one go.',
      },
      {
        q: 'What about appliances and bulky goods?',
        a: 'Machines, filters, equipment, trade goods: every bulky shipment is quoted individually. Write to us with the approximate dimensions and weight.',
      },
    ],
  },

  cta: {
    title: 'Still have a question?',
    body: 'Message us on WhatsApp — we reply in under 5 minutes, Monday to Saturday.',
    primary: 'Message us on WhatsApp',
    secondary: 'Estimate my shipment',
  },
};

const ar: Copy = {
  meta: {
    title: 'الدعم | Al-Nadjah Express',
    description:
      'لديك سؤال عن إرسالية؟ واتساب ‎+235 68 88 80 48، أو الهاتف في دوالا، أو البريد الإلكتروني. نردّ في أقل من 5 دقائق.',
  },

  eyebrow: 'الدعم',
  title: 'هناك من يجيبك.',
  intro:
    'من الإيداع حتى التسليم، فريق حقيقي يتابع طردك. اختر القناة التي تناسبك — وتبقى واتساب الأسرع.',

  channels: [
    {
      key: 'whatsapp',
      title: 'واتساب',
      desc: 'القناة الأسرع. ردّ في أقل من 5 دقائق.',
      value: '+235 68 88 80 48',
    },
    {
      key: 'phone',
      title: 'الهاتف — دوالا',
      desc: 'من الاثنين إلى السبت، من 8:00 إلى 18:00 (توقيت غرينتش +1).',
      value: '+237 6 88 39 56 08',
    },
    {
      key: 'email',
      title: 'البريد الإلكتروني',
      desc: 'لطلبات التسعير والشحنات الكبيرة والاستفسارات الكتابية.',
      value: 'contact@alnadjah-express.com',
    },
  ],

  faq: {
    eyebrow: 'الأسئلة الشائعة',
    title: 'أكثر ما يُسأل عنه.',
    items: [
      {
        q: 'كم تبلغ تكلفة الإرسال؟',
        a: 'دوالا → نجامينا: 2 500 ف للكيلوغرام. أبيدجان → نجامينا: 7 000 ف للكيلوغرام. يُوزن طردك أمامك في الوكالة ويُعلن السعر عند الإيداع — ولا يتغيّر بعد ذلك.',
      },
      {
        q: 'متى ينطلق طردي؟',
        a: 'على خط دوالا → نجامينا، الانطلاق يوم الثلاثاء والخميس والسبت، مع التسليم خلال 24 ساعة. وعلى خط أبيدجان → نجامينا، تُقبل الطرود حتى الاثنين الساعة 14:00 للانطلاق يوم الثلاثاء.',
      },
      {
        q: 'كيف أتتبّع طردي؟',
        a: 'يحصل كل طرد على بطاقة ورقم تتبع لحظة إيداعه. أدخِل الرقم في صفحة التتبع، أو أرسله إلينا عبر واتساب ونخبرك بمكانه بالضبط.',
      },
      {
        q: 'هل يمكنني إرسال أغراض هشّة؟',
        a: 'نعم. أخبِرنا عند الإيداع: يُعلَّم الطرد بعبارة FRAGILE ويُفرَز ويُعامَل على حدة. هذه العبارة عندنا ليست للزينة.',
      },
      {
        q: 'لست في الكاميرون. هل تشترون نيابةً عني؟',
        a: 'نعم. أرسِل إلينا ما تبحث عنه عبر واتساب: نشتري من السوق المحلي، ونؤكّد الطلب معك، ثم نغلّفه ونشحنه — كل ذلك في عملية واحدة.',
      },
      {
        q: 'وماذا عن الأجهزة المنزلية والشحنات الكبيرة؟',
        a: 'آلات، ومرشّحات، ومعدّات، وبضائع تجارية: كل شحنة كبيرة تُسعَّر على حدة. راسِلنا مع الأبعاد التقريبية والوزن.',
      },
    ],
  },

  cta: {
    title: 'ما زال لديك سؤال؟',
    body: 'راسلنا عبر واتساب — نردّ في أقل من 5 دقائق، من الاثنين إلى السبت.',
    primary: 'راسلنا عبر واتساب',
    secondary: 'احسب تكلفة إرسالي',
  },
};

export const supportCopy: Record<Locale, Copy> = { fr, en, ar };
