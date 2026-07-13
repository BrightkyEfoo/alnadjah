import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /docs — l'ancienne « documentation produit » devient le
 * mode d'emploi du transporteur : déposer, payer, suivre, recevoir.
 */
const fr = {
  meta: {
    title: 'Guide pratique | Al-Nadjah Express',
    description:
      'Comment déposer un colis à Douala, suivre son envoi, le faire retirer à N’Djamena, et ce qui ne peut pas être expédié.',
  },
  eyebrow: 'Guide pratique',
  title: 'Déposer, suivre, recevoir.',
  intro:
    'Tout ce qu’il faut savoir avant de venir à l’agence, et tout ce qui se passe ensuite. Cinq minutes de lecture qui évitent une journée d’attente.',

  stepsTitle: 'Envoyer un colis, étape par étape',
  steps: [
    {
      index: '01',
      title: 'Préparer et déposer',
      body:
        'Apportez votre marchandise à l’agence de Douala, si possible déjà regroupée. Munissez-vous du nom, du numéro de téléphone et de la ville du destinataire. Le dépôt est accepté jusqu’à la veille du départ.',
    },
    {
      index: '02',
      title: 'Peser et emballer',
      body:
        'La balance est dans l’agence : la pesée se fait devant vous. Nous emballons ensuite au film étirable, marquons les colis fragiles et posons l’étiquette NDJ, qui porte votre numéro de suivi.',
    },
    {
      index: '03',
      title: 'Payer et garder le bordereau',
      body:
        'Le prix se calcule au kilo, au tarif annoncé au dépôt : rien n’est recalculé à l’arrivée. Vous repartez avec un bordereau de dépôt portant le numéro de suivi — gardez-le, il vaut preuve d’envoi.',
    },
    {
      index: '04',
      title: 'Suivre jusqu’à la remise',
      body:
        'Le colis part au prochain départ. Vous suivez son avancée en ligne avec votre numéro, et notre agent appelle le destinataire dès l’arrivée à N’Djamena.',
    },
  ],

  toolsTitle: 'Les outils du site',
  tools: {
    simulator: {
      title: 'Estimer le prix',
      body: 'Poids, ligne, type de marchandise : le simulateur donne le tarif avant même le déplacement.',
      cta: 'Ouvrir le simulateur',
    },
    track: {
      title: 'Suivre un colis',
      body: 'Le numéro de suivi figure sur votre bordereau de dépôt. Il suffit à connaître l’étape en cours.',
      cta: 'Suivre un colis',
    },
    agencies: {
      title: 'Trouver une agence',
      body: 'Adresses, téléphones et horaires de nos points de dépôt et de remise.',
      cta: 'Voir les agences',
    },
    support: {
      title: 'Parler à quelqu’un',
      body: 'Une question, un doute sur un envoi : nous répondons sur WhatsApp en moins de cinq minutes.',
      cta: 'Contacter le support',
    },
  },

  receiveTitle: 'Recevoir un colis à N’Djamena',
  receiveBody:
    'Notre agent appelle le destinataire dès le contrôle d’arrivée effectué. La remise se fait en main propre, jamais devant une porte close.',
  receiveItems: [
    'Une pièce d’identité au nom du destinataire.',
    'Le numéro de suivi communiqué par l’expéditeur.',
    'Le contrôle du colis se fait ensemble, à la remise : signalez tout dommage sur-le-champ.',
    'Une tierce personne peut retirer le colis si elle présente sa pièce d’identité et une autorisation écrite du destinataire.',
  ],

  forbiddenTitle: 'Ce que nous ne transportons pas',
  forbiddenItems: [
    'Espèces, or, bijoux et objets de très grande valeur.',
    'Produits inflammables, explosifs, gaz sous pression.',
    'Denrées périssables non conditionnées pour le voyage.',
    'Médicaments sans ordonnance et substances réglementées.',
    'Tout ce dont la loi camerounaise, tchadienne ou ivoirienne interdit le transport.',
  ],
  forbiddenNote:
    'En cas de doute sur un contenu, demandez-nous avant de faire le déplacement : nous répondons en quelques minutes.',

  labelTitle: 'Étiquettes, bordereaux et douane',
  labelBody:
    'Le détail de ce que porte l’étiquette NDJ, des documents remis au dépôt et des papiers à préparer pour le dédouanement à N’Djamena.',
  labelCta: 'Lire la référence',
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'Practical guide | Al-Nadjah Express',
    description:
      'How to drop off a parcel in Douala, track your shipment, collect it in N’Djamena, and what cannot be shipped.',
  },
  eyebrow: 'Practical guide',
  title: 'Drop off, track, collect.',
  intro:
    'Everything to know before coming to the branch, and everything that happens afterwards. Five minutes of reading that save a day of waiting.',

  stepsTitle: 'Sending a parcel, step by step',
  steps: [
    {
      index: '01',
      title: 'Prepare and drop off',
      body:
        'Bring your goods to the Douala branch, grouped together if possible. Have the recipient’s name, phone number and city with you. Parcels are accepted until the day before departure.',
    },
    {
      index: '02',
      title: 'Weighing and packing',
      body:
        'The scales are in the branch: weighing happens in front of you. We then wrap in stretch film, mark fragile parcels and apply the NDJ label, which carries your tracking number.',
    },
    {
      index: '03',
      title: 'Pay and keep the slip',
      body:
        'The price is calculated per kilo at the rate quoted on drop-off: nothing is recalculated on arrival. You leave with a drop-off slip bearing the tracking number — keep it, it is your proof of shipment.',
    },
    {
      index: '04',
      title: 'Track through to handover',
      body:
        'Your parcel leaves on the next departure. You follow its progress online with your number, and our agent calls the recipient as soon as it lands in N’Djamena.',
    },
  ],

  toolsTitle: 'Tools on this site',
  tools: {
    simulator: {
      title: 'Estimate the price',
      body: 'Weight, route, type of goods: the simulator gives you the rate before you even travel.',
      cta: 'Open the simulator',
    },
    track: {
      title: 'Track a parcel',
      body: 'The tracking number is on your drop-off slip. It is all you need to see the current stage.',
      cta: 'Track a parcel',
    },
    agencies: {
      title: 'Find a branch',
      body: 'Addresses, phone numbers and opening hours of our drop-off and collection points.',
      cta: 'View branches',
    },
    support: {
      title: 'Talk to someone',
      body: 'A question, a doubt about a shipment: we answer on WhatsApp in under five minutes.',
      cta: 'Contact support',
    },
  },

  receiveTitle: 'Collecting a parcel in N’Djamena',
  receiveBody:
    'Our agent calls the recipient as soon as the arrival check is done. Handover is always in person, never left at a closed door.',
  receiveItems: [
    'An ID document in the recipient’s name.',
    'The tracking number given to you by the sender.',
    'The parcel is inspected together at handover: report any damage there and then.',
    'A third party may collect the parcel with their own ID and a written authorisation from the recipient.',
  ],

  forbiddenTitle: 'What we do not carry',
  forbiddenItems: [
    'Cash, gold, jewellery and items of very high value.',
    'Flammable goods, explosives, pressurised gas.',
    'Perishables not packaged for the journey.',
    'Medicine without a prescription and regulated substances.',
    'Anything Cameroonian, Chadian or Ivorian law forbids transporting.',
  ],
  forbiddenNote:
    'If you are unsure about a content, ask us before making the trip: we answer within minutes.',

  labelTitle: 'Labels, slips and customs',
  labelBody:
    'The detail of what the NDJ label carries, the documents issued at drop-off, and the papers to prepare for customs clearance in N’Djamena.',
  labelCta: 'Read the reference',
};

const ar: Copy = {
  meta: {
    title: 'الدليل العملي | النجاح إكسبرس',
    description:
      'كيف تودع طردًا في دوالا، وتتبع شحنتك، وتستلمها في نجامينا، وما الذي لا يمكن شحنه.',
  },
  eyebrow: 'الدليل العملي',
  title: 'أودِع، تتبّع، استلم.',
  intro:
    'كل ما ينبغي معرفته قبل القدوم إلى الوكالة، وكل ما يجري بعد ذلك. خمس دقائق من القراءة توفّر يومًا من الانتظار.',

  stepsTitle: 'إرسال طرد، خطوة بخطوة',
  steps: [
    {
      index: '٠١',
      title: 'التجهيز والإيداع',
      body:
        'أحضِر بضاعتك إلى وكالة دوالا، مجمّعة إن أمكن. واحرص على معرفة اسم المستلم ورقم هاتفه ومدينته. يُقبل الإيداع حتى اليوم السابق للمغادرة.',
    },
    {
      index: '٠٢',
      title: 'الوزن والتغليف',
      body:
        'الميزان داخل الوكالة: يجري الوزن أمامك. ثم نغلّف بالغلاف اللاصق، ونضع علامة على الطرود القابلة للكسر، ونثبّت ملصق NDJ الذي يحمل رقم تتبعك.',
    },
    {
      index: '٠٣',
      title: 'الدفع والاحتفاظ بالإيصال',
      body:
        'يُحتسب السعر بالكيلوغرام وفق التعرفة المعلنة عند الإيداع: لا شيء يُعاد حسابه عند الوصول. تخرج بإيصال إيداع يحمل رقم التتبع — احتفظ به، فهو إثبات الإرسال.',
    },
    {
      index: '٠٤',
      title: 'التتبع حتى التسليم',
      body:
        'يسافر طردك في أقرب رحلة. تتابع تقدّمه عبر الإنترنت برقمك، ويتّصل وكيلنا بالمستلم فور الوصول إلى نجامينا.',
    },
  ],

  toolsTitle: 'أدوات الموقع',
  tools: {
    simulator: {
      title: 'تقدير السعر',
      body: 'الوزن، والخط، ونوع البضاعة: يعطيك المُحاكي التعرفة قبل أن تتحرّك من مكانك.',
      cta: 'فتح المُحاكي',
    },
    track: {
      title: 'تتبع طرد',
      body: 'رقم التتبع مدوّن على إيصال الإيداع، ويكفي وحده لمعرفة المرحلة الحالية.',
      cta: 'تتبع طرد',
    },
    agencies: {
      title: 'إيجاد وكالة',
      body: 'عناوين نقاط الإيداع والتسليم وأرقام هواتفها وأوقات عملها.',
      cta: 'عرض الوكالات',
    },
    support: {
      title: 'التحدث إلى شخص',
      body: 'سؤال أو شك بشأن شحنة: نردّ على واتساب في أقل من خمس دقائق.',
      cta: 'الاتصال بالدعم',
    },
  },

  receiveTitle: 'استلام طرد في نجامينا',
  receiveBody:
    'يتّصل وكيلنا بالمستلم فور إتمام فحص الوصول. ويجري التسليم باليد دائمًا، ولا يُترك الطرد أمام باب مغلق أبدًا.',
  receiveItems: [
    'بطاقة هوية باسم المستلم.',
    'رقم التتبع الذي يزوّدك به المرسِل.',
    'يُفحص الطرد معًا عند التسليم: أبلِغ عن أي ضرر في حينه.',
    'يمكن لشخص ثالث استلام الطرد ببطاقة هويته وتفويض خطي من المستلم.',
  ],

  forbiddenTitle: 'ما لا ننقله',
  forbiddenItems: [
    'النقود والذهب والمجوهرات والأشياء الباهظة القيمة.',
    'المواد القابلة للاشتعال والمتفجرات والغازات المضغوطة.',
    'المواد سريعة التلف غير المهيّأة للسفر.',
    'الأدوية دون وصفة طبية والمواد الخاضعة للتنظيم.',
    'كل ما يمنع القانون الكاميروني أو التشادي أو الإيفواري نقله.',
  ],
  forbiddenNote:
    'إن ساورك شك بشأن محتوى ما، اسألنا قبل أن تتكبّد عناء الحضور: نردّ خلال دقائق.',

  labelTitle: 'الملصقات والإيصالات والجمارك',
  labelBody:
    'تفصيل ما يحمله ملصق NDJ، والوثائق المسلَّمة عند الإيداع، والأوراق الواجب تحضيرها للتخليص الجمركي في نجامينا.',
  labelCta: 'قراءة المرجع',
};

export const docsCopy: Record<Locale, Copy> = { fr, en, ar };
