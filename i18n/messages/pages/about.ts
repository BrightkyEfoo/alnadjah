import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/** Copie de la page /about — histoire et engagements d'Al-Nadjah Express. */
const fr = {
  meta: {
    title: 'À propos | Al-Nadjah Express',
    description:
      'Al-Nadjah Express achemine vos colis de Douala vers N’Djamena en 24 h, et d’Abidjan vers N’Djamena. Rapidité, sécurité, fidélité.',
  },

  eyebrow: 'À propos',
  title: 'Un colis, une parole tenue.',
  intro:
    'Al-Nadjah Express est une maison d’expédition basée à Douala. Nous acheminons colis, marchandises et effets personnels vers N’Djamena et la sous-région — trois départs par semaine, un tarif au kilo annoncé au dépôt.',

  mission: {
    eyebrow: 'Notre mission',
    title: 'Rapprocher ceux que la distance sépare.',
    body: 'Entre le Cameroun, le Tchad et la Côte d’Ivoire, envoyer un colis relevait trop souvent du pari : délais flous, prix recalculés à l’arrivée, marchandise abîmée. Nous avons construit l’inverse — une ligne régulière, un prix connu d’avance, un colis remis en main propre à la bonne personne.',
    body2:
      'Derrière chaque numéro de suivi, il y a quelqu’un qui attend. C’est cette personne-là qui fixe nos délais.',
  },

  lines: {
    eyebrow: 'Nos lignes',
    title: 'Deux corridors, une même exigence.',
    items: [
      {
        route: 'Douala → N’Djamena',
        price: '2 500 F/kg',
        detail: 'Livraison en 24 h. Départs le mardi, le jeudi et le samedi.',
      },
      {
        route: 'Abidjan → N’Djamena',
        price: '7 000 F/kg',
        detail:
          'Dépôt des colis jusqu’au lundi 14 h pour un départ le mardi.',
      },
    ],
  },

  values: {
    eyebrow: 'Notre devise',
    title: 'Rapidité · Sécurité · Fidélité',
    items: [
      {
        title: 'Rapidité',
        body: 'Douala–N’Djamena en 24 h, trois fois par semaine. Votre colis part le jour du dépôt, il n’attend pas dans un entrepôt.',
      },
      {
        title: 'Sécurité',
        body: 'Pesée devant vous, film étirable, étiquette NDJ dès le dépôt. Les colis fragiles sont marqués, isolés et manipulés à part.',
      },
      {
        title: 'Fidélité',
        body: 'Le prix annoncé au dépôt est celui que vous payez. Aucun frais découvert à l’arrivée, aucune promesse que nous ne pouvons tenir.',
      },
    ],
  },

  howWeWork: {
    eyebrow: 'Notre façon de travailler',
    title: 'Ce que nous faisons, au-delà du transport.',
    items: [
      {
        title: 'Nous achetons pour vous',
        body: 'Vous n’êtes pas au Cameroun ? Nous achetons sur place, validons la commande avec vous, puis expédions.',
      },
      {
        title: 'Nous emballons',
        body: 'Film, calage, étiquetage : la marchandise est préparée pour le voyage, pas seulement pour le trajet.',
      },
      {
        title: 'Nous répondons',
        body: 'WhatsApp, téléphone ou agence de Douala. Une vraie équipe, une réponse en moins de 5 minutes.',
      },
    ],
  },

  cta: {
    title: 'Un colis à confier ?',
    body: 'Déposez-le à l’agence de Douala, ou écrivez-nous sur WhatsApp au +235 68 88 80 48. Nous nous occupons du reste.',
    primary: 'Simuler mon envoi',
    secondary: 'Écrire sur WhatsApp',
  },
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'About | Al-Nadjah Express',
    description:
      'Al-Nadjah Express ships your parcels from Douala to N’Djamena in 24 hours, and from Abidjan to N’Djamena. Speed, safety, loyalty.',
  },

  eyebrow: 'About us',
  title: 'One parcel, one promise kept.',
  intro:
    'Al-Nadjah Express is a shipping house based in Douala. We carry parcels, goods and personal belongings to N’Djamena and across the region — three departures a week, a per-kilo price quoted when you drop off.',

  mission: {
    eyebrow: 'Our mission',
    title: 'Closing the distance between people.',
    body: 'Between Cameroon, Chad and Côte d’Ivoire, sending a parcel was too often a gamble: vague delivery times, prices recalculated on arrival, damaged goods. We built the opposite — a regular line, a price known upfront, and a parcel handed directly to the right person.',
    body2:
      'Behind every tracking number, someone is waiting. That person is what sets our deadlines.',
  },

  lines: {
    eyebrow: 'Our routes',
    title: 'Two corridors, one standard.',
    items: [
      {
        route: 'Douala → N’Djamena',
        price: '2 500 F/kg',
        detail: 'Delivered in 24 hours. Departures on Tuesday, Thursday and Saturday.',
      },
      {
        route: 'Abidjan → N’Djamena',
        price: '7 000 F/kg',
        detail: 'Parcels accepted until Monday 2 p.m. for a Tuesday departure.',
      },
    ],
  },

  values: {
    eyebrow: 'Our motto',
    title: 'Speed · Safety · Loyalty',
    items: [
      {
        title: 'Speed',
        body: 'Douala to N’Djamena in 24 hours, three times a week. Your parcel leaves the day you drop it off — it does not sit in a warehouse.',
      },
      {
        title: 'Safety',
        body: 'Weighed in front of you, wrapped in stretch film, labelled NDJ from the moment it arrives. Fragile parcels are marked, set apart and handled separately.',
      },
      {
        title: 'Loyalty',
        body: 'The price quoted at drop-off is the price you pay. No fees discovered on arrival, no promise we cannot keep.',
      },
    ],
  },

  howWeWork: {
    eyebrow: 'How we work',
    title: 'What we do beyond transport.',
    items: [
      {
        title: 'We buy on your behalf',
        body: 'Not in Cameroon? We buy locally, confirm the order with you, then ship it out.',
      },
      {
        title: 'We pack',
        body: 'Film, padding, labelling: your goods are prepared for the journey, not just for the ride.',
      },
      {
        title: 'We answer',
        body: 'WhatsApp, phone or the Douala agency. A real team, a reply in under 5 minutes.',
      },
    ],
  },

  cta: {
    title: 'A parcel to entrust to us?',
    body: 'Drop it off at our Douala agency, or message us on WhatsApp at +235 68 88 80 48. We handle the rest.',
    primary: 'Estimate my shipment',
    secondary: 'Message us on WhatsApp',
  },
};

const ar: Copy = {
  meta: {
    title: 'من نحن | Al-Nadjah Express',
    description:
      'تنقل Al-Nadjah Express طرودكم من دوالا إلى نجامينا خلال 24 ساعة، ومن أبيدجان إلى نجامينا. السرعة والأمان والوفاء.',
  },

  eyebrow: 'من نحن',
  title: 'طرد واحد، ووعد يُوفى به.',
  intro:
    'Al-Nadjah Express دار شحن مقرها دوالا. ننقل الطرود والبضائع والأمتعة الشخصية إلى نجامينا وإلى دول الجوار — ثلاث انطلاقات أسبوعيًا، وسعر بالكيلوغرام يُعلن عند الإيداع.',

  mission: {
    eyebrow: 'مهمتنا',
    title: 'تقريب من فرّقتهم المسافة.',
    body: 'بين الكاميرون وتشاد وساحل العاج، كان إرسال طرد أشبه بالمقامرة: مواعيد غامضة، وأسعار تُعاد حسابها عند الوصول، وبضاعة متضرّرة. بنينا العكس تمامًا — خط منتظم، وسعر معلوم مسبقًا، وطرد يُسلَّم يدًا بيد إلى صاحبه.',
    body2:
      'خلف كل رقم تتبع شخص ينتظر. هذا الشخص هو من يحدّد مواعيدنا.',
  },

  lines: {
    eyebrow: 'خطوطنا',
    title: 'ممرّان، ومعيار واحد.',
    items: [
      {
        route: 'دوالا → نجامينا',
        price: '2 500 ف/كغ',
        detail: 'التسليم خلال 24 ساعة. الانطلاق يوم الثلاثاء والخميس والسبت.',
      },
      {
        route: 'أبيدجان → نجامينا',
        price: '7 000 ف/كغ',
        detail: 'تُقبل الطرود حتى الاثنين الساعة 14:00 للانطلاق يوم الثلاثاء.',
      },
    ],
  },

  values: {
    eyebrow: 'شعارنا',
    title: 'السرعة · الأمان · الوفاء',
    items: [
      {
        title: 'السرعة',
        body: 'من دوالا إلى نجامينا خلال 24 ساعة، ثلاث مرات أسبوعيًا. طردك ينطلق يوم إيداعه، ولا ينتظر في المستودع.',
      },
      {
        title: 'الأمان',
        body: 'وزن أمام عينيك، وتغليف بالفيلم اللاصق، وبطاقة NDJ منذ الإيداع. الطرود الهشّة تُعلَّم وتُفرَز وتُعامَل على حدة.',
      },
      {
        title: 'الوفاء',
        body: 'السعر المعلن عند الإيداع هو ما تدفعه. لا رسوم تُكتشف عند الوصول، ولا وعد لا نستطيع الوفاء به.',
      },
    ],
  },

  howWeWork: {
    eyebrow: 'طريقتنا في العمل',
    title: 'ما نقوم به إلى جانب النقل.',
    items: [
      {
        title: 'نشتري نيابة عنك',
        body: 'لست في الكاميرون؟ نشتري لك من السوق المحلي، ونؤكّد الطلب معك، ثم نشحنه.',
      },
      {
        title: 'نغلّف',
        body: 'فيلم لاصق، وحشو واقٍ، وبطاقة تعريف: بضاعتك تُجهَّز للرحلة كاملة، لا للطريق وحده.',
      },
      {
        title: 'نجيب',
        body: 'واتساب أو الهاتف أو وكالة دوالا. فريق حقيقي، وردّ في أقل من 5 دقائق.',
      },
    ],
  },

  cta: {
    title: 'هل لديك طرد تودّ إرساله؟',
    body: 'أودِعه في وكالة دوالا، أو راسلنا عبر واتساب على الرقم +235 68 88 80 48. ونحن نتكفّل بالباقي.',
    primary: 'احسب تكلفة إرسالي',
    secondary: 'راسلنا عبر واتساب',
  },
};

export const aboutCopy: Record<Locale, Copy> = { fr, en, ar };
