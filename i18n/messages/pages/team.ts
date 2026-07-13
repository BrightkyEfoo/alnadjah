import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /team. Les membres sont décrits par leur poste et non par
 * leur nom : l'entreprise n'a pas communiqué de trombinoscope public.
 */
const fr = {
  meta: {
    title: 'L’équipe | Al-Nadjah Express',
    description:
      'Les femmes et les hommes d’Al-Nadjah Express : agence de Douala, escale de N’Djamena, achats, emballage et support WhatsApp.',
  },

  eyebrow: 'L’équipe',
  title: 'Des mains, pas un algorithme.',
  intro:
    'Un colis ne se déplace pas tout seul. Entre le comptoir de Douala et la remise à N’Djamena, il passe par une poignée de personnes qui répondent de lui à chaque étape.',

  membersTitle: 'Les postes qui tiennent la ligne',
  members: [
    {
      role: 'Comptoir de Douala',
      title: 'Dépôt, pesée et devis',
      body: 'C’est ici que tout commence. La balance est dans l’agence, le poids se lit à deux, et le prix se calcule à la vue de tous.',
    },
    {
      role: 'Achats et emballage',
      title: 'Course, film et étiquette',
      body: 'Achat sur place pour les clients qui ne sont pas au Cameroun, puis film étirable, calage et étiquette NDJ avant le départ.',
    },
    {
      role: 'Escale de N’Djamena',
      title: 'Réception et remise',
      body: 'Contrôle à l’arrivée, appel au destinataire, remise en main propre. Le colis ne change de main qu’une seule fois, et c’est la bonne.',
    },
    {
      role: 'Support WhatsApp',
      title: 'Une réponse en moins de 5 minutes',
      body: 'Du dépôt à la livraison, quelqu’un suit votre colis et vous répond — sur WhatsApp, au téléphone ou à l’agence.',
    },
  ],

  values: {
    eyebrow: 'Ce qui nous tient',
    title: 'Rapidité · Sécurité · Fidélité',
    body: 'Trois mots que nous n’avons pas choisis pour une affiche. Ils décrivent ce que l’équipe doit prouver sur chaque envoi : partir à l’heure, arriver intact, tenir parole.',
  },

  cta: {
    title: 'Parlez directement à quelqu’un.',
    body: 'Pas de formulaire, pas de robot. Écrivez-nous sur WhatsApp au +235 68 88 80 48, ou passez à l’agence de Douala.',
    primary: 'Nous contacter',
    secondary: 'Écrire sur WhatsApp',
  },
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'The team | Al-Nadjah Express',
    description:
      'The people behind Al-Nadjah Express: the Douala counter, the N’Djamena stopover, purchasing, packing and WhatsApp support.',
  },

  eyebrow: 'The team',
  title: 'Hands, not an algorithm.',
  intro:
    'A parcel does not move on its own. Between the Douala counter and the handover in N’Djamena, it passes through a handful of people who answer for it at every step.',

  membersTitle: 'The roles that hold the line',
  members: [
    {
      role: 'Douala counter',
      title: 'Drop-off, weighing and quote',
      body: 'This is where it all starts. The scale is right there in the agency, the weight is read by two people, and the price is worked out in plain sight.',
    },
    {
      role: 'Purchasing and packing',
      title: 'Errands, film and label',
      body: 'We buy locally for customers who are not in Cameroon, then wrap, pad and label each parcel NDJ before it leaves.',
    },
    {
      role: 'N’Djamena stopover',
      title: 'Receiving and handover',
      body: 'Checked on arrival, the recipient is called, the parcel is handed over in person. It changes hands only once — and it is the right pair of hands.',
    },
    {
      role: 'WhatsApp support',
      title: 'A reply in under 5 minutes',
      body: 'From drop-off to delivery, someone follows your parcel and answers you — on WhatsApp, on the phone, or at the agency.',
    },
  ],

  values: {
    eyebrow: 'What holds us together',
    title: 'Speed · Safety · Loyalty',
    body: 'Three words we did not pick for a poster. They describe what the team has to prove on every single shipment: leave on time, arrive intact, keep our word.',
  },

  cta: {
    title: 'Talk to a real person.',
    body: 'No forms, no bots. Message us on WhatsApp at +235 68 88 80 48, or come by the Douala agency.',
    primary: 'Contact us',
    secondary: 'Message us on WhatsApp',
  },
};

const ar: Copy = {
  meta: {
    title: 'فريقنا | Al-Nadjah Express',
    description:
      'الأشخاص الذين يقفون خلف Al-Nadjah Express: مكتب دوالا، ومحطة نجامينا، والمشتريات، والتغليف، ودعم واتساب.',
  },

  eyebrow: 'فريقنا',
  title: 'أيادٍ، لا خوارزمية.',
  intro:
    'الطرد لا يتحرّك من تلقاء نفسه. بين مكتب دوالا والتسليم في نجامينا، يمرّ بين أيدي عدد قليل من الأشخاص يتحمّلون مسؤوليته في كل مرحلة.',

  membersTitle: 'المواقع التي تحفظ الخط',
  members: [
    {
      role: 'مكتب دوالا',
      title: 'الإيداع والوزن وتقدير السعر',
      body: 'من هنا يبدأ كل شيء. الميزان داخل الوكالة، والوزن يُقرأ باثنين، والسعر يُحسب على مرأى من الجميع.',
    },
    {
      role: 'المشتريات والتغليف',
      title: 'الشراء والتغليف والبطاقة',
      body: 'نشتري محليًا للعملاء الذين ليسوا في الكاميرون، ثم نغلّف ونحشو ونضع بطاقة NDJ على كل طرد قبل انطلاقه.',
    },
    {
      role: 'محطة نجامينا',
      title: 'الاستلام والتسليم',
      body: 'فحص عند الوصول، واتصال بالمستلِم، وتسليم يدًا بيد. الطرد ينتقل من يد إلى يد مرّة واحدة فقط، وإلى اليد الصحيحة.',
    },
    {
      role: 'دعم واتساب',
      title: 'ردّ في أقل من 5 دقائق',
      body: 'من الإيداع حتى التسليم، هناك من يتابع طردك ويجيبك — عبر واتساب أو الهاتف أو في الوكالة.',
    },
  ],

  values: {
    eyebrow: 'ما يجمعنا',
    title: 'السرعة · الأمان · الوفاء',
    body: 'ثلاث كلمات لم نخترها من أجل ملصق. إنها تصف ما على الفريق إثباته في كل إرسالية: الانطلاق في موعده، والوصول سليمًا، والوفاء بالوعد.',
  },

  cta: {
    title: 'تحدّث إلى إنسان حقيقي.',
    body: 'لا استمارات ولا روبوتات. راسلنا عبر واتساب على الرقم +235 68 88 80 48، أو مُرّ بوكالة دوالا.',
    primary: 'تواصل معنا',
    secondary: 'راسلنا عبر واتساب',
  },
};

export const teamCopy: Record<Locale, Copy> = { fr, en, ar };
