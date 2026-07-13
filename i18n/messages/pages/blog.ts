import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /blog — le « carnet de route » d'un transporteur :
 * emballage, jours de départ, dédouanement, gros volumes.
 */
const fr = {
  meta: {
    title: 'Le carnet de route | Al-Nadjah Express',
    description:
      'Emballage, jours de départ, dédouanement, gros volumes : les notes de terrain des agents Al-Nadjah Express.',
  },
  eyebrow: 'Le carnet de route',
  title: 'Ce que la route nous apprend.',
  intro:
    'Nos agents notent ce qu’ils voient au dépôt de Douala et à la remise à N’Djamena : ce qui protège un colis, ce qui le retarde, ce qui le bloque à la douane. Voici leurs notes, mises à jour au fil des convois.',

  articlesTitle: 'Dernières notes',
  articles: [
    {
      tag: 'Emballage',
      date: '4 juillet 2026',
      title: 'Emballer un colis pour la route de N’Djamena',
      excerpt:
        'Un carton double cannelure, du film étirable, aucun vide à l’intérieur : trois gestes qui expliquent pourquoi certains colis arrivent intacts et d’autres non. Ce que nous faisons à l’agence, et ce que vous pouvez faire avant de venir.',
    },
    {
      tag: 'Coulisses',
      date: '27 juin 2026',
      title: 'Douala → N’Djamena : les 24 heures, heure par heure',
      excerpt:
        'Du dépôt de la veille jusqu’à la remise en main propre : pesée, étiquetage NDJ, enregistrement, vol, réception, contrôle, appel au destinataire. Le détail d’un trajet qui tient sa promesse.',
    },
    {
      tag: 'Douane',
      date: '18 juin 2026',
      title: 'Dédouanement à N’Djamena : les papiers à préparer',
      excerpt:
        'Facture d’achat, désignation exacte du contenu, pièce d’identité du destinataire. La plupart des retards à l’arrivée ne viennent pas du transport, mais d’une ligne manquante sur une facture.',
    },
    {
      tag: 'Réglementation',
      date: '9 juin 2026',
      title: 'Ce que nous ne pouvons pas transporter',
      excerpt:
        'Espèces, produits inflammables, denrées périssables, médicaments sans ordonnance : la liste est courte, mais elle ne se négocie pas. Mieux vaut la connaître avant de faire la queue au dépôt.',
    },
    {
      tag: 'Lignes',
      date: '30 mai 2026',
      title: 'Abidjan → N’Djamena : dépôt jusqu’au lundi 14 h',
      excerpt:
        'La ligne ivoirienne fonctionne sur un rythme différent de Douala. Départ le mardi, dépôt des colis jusqu’au lundi 14 h, tarif à 7 000 F/kg. Ce qu’il faut anticiper quand on expédie depuis Abidjan.',
    },
    {
      tag: 'Commerçants',
      date: '21 mai 2026',
      title: 'Vendre à N’Djamena sans quitter son marché',
      excerpt:
        'Nous achetons à Douala, nous validons la commande avec vous, nous emballons et nous expédions. Comment des commerçantes de N’Djamena renouvellent leur stock chaque semaine sans prendre l’avion.',
    },
  ],

  followTitle: 'Ne rien manquer',
  followBody:
    'Les notes partent aussi sur WhatsApp, le jour de leur publication, avec les changements de jours de départ et les tarifs spéciaux.',
  followCta: 'Écrire sur WhatsApp',
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'The road journal | Al-Nadjah Express',
    description:
      'Packing, departure days, customs clearance, bulk shipments: field notes from the Al-Nadjah Express team.',
  },
  eyebrow: 'The road journal',
  title: 'What the road teaches us.',
  intro:
    'Our agents write down what they see at the Douala counter and at the N’Djamena handover: what protects a parcel, what delays it, what holds it at customs. These are their notes, updated convoy after convoy.',

  articlesTitle: 'Latest notes',
  articles: [
    {
      tag: 'Packing',
      date: '4 July 2026',
      title: 'Packing a parcel for the road to N’Djamena',
      excerpt:
        'Double-wall cardboard, stretch film, no empty space inside: three habits that explain why some parcels arrive intact and others do not. What we do at the counter, and what you can do before you come.',
    },
    {
      tag: 'Behind the scenes',
      date: '27 June 2026',
      title: 'Douala → N’Djamena: the 24 hours, hour by hour',
      excerpt:
        'From the drop-off the day before to the handover in person: weighing, NDJ labelling, check-in, flight, reception, inspection, call to the recipient. The detail of a journey that keeps its promise.',
    },
    {
      tag: 'Customs',
      date: '18 June 2026',
      title: 'Customs in N’Djamena: the papers to prepare',
      excerpt:
        'Purchase invoice, exact description of the contents, recipient’s ID. Most delays on arrival do not come from transport, but from one missing line on an invoice.',
    },
    {
      tag: 'Rules',
      date: '9 June 2026',
      title: 'What we cannot carry',
      excerpt:
        'Cash, flammable goods, perishables, medicine without a prescription: the list is short, but it is not negotiable. Better to know it before queuing at the counter.',
    },
    {
      tag: 'Routes',
      date: '30 May 2026',
      title: 'Abidjan → N’Djamena: drop-off until Monday 2 pm',
      excerpt:
        'The Ivorian route runs to a different rhythm than Douala. Departure on Tuesday, parcels accepted until Monday 2 pm, 7,000 F/kg. What to plan for when you ship from Abidjan.',
    },
    {
      tag: 'Traders',
      date: '21 May 2026',
      title: 'Selling in N’Djamena without leaving your market',
      excerpt:
        'We buy in Douala, we confirm the order with you, we pack and we ship. How traders in N’Djamena restock every week without boarding a plane.',
    },
  ],

  followTitle: 'Never miss one',
  followBody:
    'Every note also goes out on WhatsApp the day it is published, together with changes to departure days and special rates.',
  followCta: 'Message us on WhatsApp',
};

const ar: Copy = {
  meta: {
    title: 'دفتر الطريق | النجاح إكسبرس',
    description:
      'التغليف، أيام المغادرة، التخليص الجمركي، الشحنات الكبيرة: ملاحظات ميدانية من فريق النجاح إكسبرس.',
  },
  eyebrow: 'دفتر الطريق',
  title: 'ما تُعلّمنا إياه الطريق.',
  intro:
    'يدوّن وكلاؤنا ما يرونه في وكالة دوالا وعند التسليم في نجامينا: ما يحمي الطرد، وما يؤخّره، وما يوقفه في الجمارك. هذه ملاحظاتهم، تتجدّد مع كل رحلة.',

  articlesTitle: 'أحدث الملاحظات',
  articles: [
    {
      tag: 'التغليف',
      date: '٤ يوليو ٢٠٢٦',
      title: 'كيف تُغلّف طردًا في طريقه إلى نجامينا',
      excerpt:
        'كرتون مزدوج، غلاف بلاستيكي لاصق، ولا فراغ في الداخل: ثلاث عادات تفسّر لماذا تصل بعض الطرود سليمة وأخرى لا. ما نفعله في الوكالة، وما يمكنك فعله قبل الحضور.',
    },
    {
      tag: 'من الميدان',
      date: '٢٧ يونيو ٢٠٢٦',
      title: 'دوالا ← نجامينا: أربع وعشرون ساعة، ساعةً بساعة',
      excerpt:
        'من الإيداع في اليوم السابق إلى التسليم باليد: الوزن، ملصق NDJ، التسجيل، الرحلة، الاستلام، المراجعة، الاتصال بالمستلم. تفاصيل رحلة تفي بوعدها.',
    },
    {
      tag: 'الجمارك',
      date: '١٨ يونيو ٢٠٢٦',
      title: 'التخليص الجمركي في نجامينا: الأوراق المطلوبة',
      excerpt:
        'فاتورة الشراء، وصف دقيق للمحتوى، بطاقة هوية المستلم. أغلب التأخير عند الوصول لا يأتي من النقل، بل من سطر ناقص في فاتورة.',
    },
    {
      tag: 'الأنظمة',
      date: '٩ يونيو ٢٠٢٦',
      title: 'ما لا يمكننا نقله',
      excerpt:
        'النقود، والمواد القابلة للاشتعال، والمواد سريعة التلف، والأدوية دون وصفة: القائمة قصيرة، لكنها غير قابلة للتفاوض. من الأفضل معرفتها قبل الوقوف في الطابور.',
    },
    {
      tag: 'الخطوط',
      date: '٣٠ مايو ٢٠٢٦',
      title: 'أبيدجان ← نجامينا: الإيداع حتى الاثنين الساعة الثانية ظهرًا',
      excerpt:
        'يسير الخط الإيفواري على إيقاع مختلف عن دوالا. المغادرة يوم الثلاثاء، وقبول الطرود حتى الاثنين الساعة الثانية ظهرًا، بسعر ٧٠٠٠ فرنك للكيلوغرام. ما ينبغي ترتيبه قبل الشحن من أبيدجان.',
    },
    {
      tag: 'التجار',
      date: '٢١ مايو ٢٠٢٦',
      title: 'البيع في نجامينا دون مغادرة سوقك',
      excerpt:
        'نشتري في دوالا، ونؤكّد الطلب معك، ونغلّف ونشحن. كيف تُجدّد تاجرات نجامينا بضاعتهن كل أسبوع دون ركوب الطائرة.',
    },
  ],

  followTitle: 'لا تفوّت شيئًا',
  followBody:
    'تُنشر كل ملاحظة أيضًا على واتساب يوم صدورها، مع تغييرات أيام المغادرة والأسعار الخاصة.',
  followCta: 'راسلنا على واتساب',
};

export const blogCopy: Record<Locale, Copy> = { fr, en, ar };
