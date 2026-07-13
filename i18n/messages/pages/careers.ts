import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /carrieres — recrutement d'un transporteur : agence,
 * manutention, conduite, remise à N'Djamena, relation client.
 */
const fr = {
  meta: {
    title: 'Carrières | Al-Nadjah Express',
    description:
      'Agents d’agence, manutentionnaires, chauffeurs, agents de remise : les postes ouverts chez Al-Nadjah Express, à Douala et N’Djamena.',
  },
  eyebrow: 'Carrières',
  title: 'Le colis d’un autre, traité comme le sien.',
  intro:
    'Un colis qui arrive à l’heure et en bon état, c’est une chaîne de gestes bien faits : la pesée, l’étiquette, le film, le chargement, l’appel au destinataire. Nous recrutons celles et ceux qui tiennent leur maillon.',

  whyTitle: 'Travailler chez nous',
  why: [
    'Une équipe restreinte où chacun connaît le nom des colis qu’il manipule.',
    'Une rémunération fixe, payée à date, avec une prime liée aux départs tenus.',
    'Une formation aux gestes du métier : emballage, pesée, étiquetage NDJ, remise contrôlée.',
    'Des perspectives réelles : nos chefs d’équipe ont tous commencé au comptoir ou au quai.',
  ],

  openingsTitle: 'Postes ouverts',
  openings: [
    {
      title: 'Agent d’agence',
      location: 'Douala, Cameroun',
      type: 'Temps plein',
      body:
        'Accueil des expéditeurs, pesée devant le client, calcul du tarif au kilo, encaissement, remise du bordereau de dépôt. Bon relationnel, rigueur sur les chiffres, français parlé ; l’arabe ou l’anglais est un plus.',
    },
    {
      title: 'Manutentionnaire — emballage et pesée',
      location: 'Douala, Cameroun',
      type: 'Temps plein',
      body:
        'Emballage renforcé, film étirable, marquage des colis fragiles, étiquetage NDJ, préparation des palettes de départ. Travail debout, cadence soutenue les veilles de départ.',
    },
    {
      title: 'Chauffeur poids lourd',
      location: 'Ligne Douala – N’Djamena',
      type: 'Temps plein',
      body:
        'Conduite sur longue distance, respect des horaires de convoi, contrôle du chargement et des documents aux postes frontière. Permis poids lourd en règle et expérience avérée sur les axes sous-régionaux exigés.',
    },
    {
      title: 'Agent de remise',
      location: 'N’Djamena, Tchad',
      type: 'Temps plein',
      body:
        'Réception des colis à l’arrivée, contrôle de l’état, appel des destinataires, vérification de la pièce d’identité et du numéro de suivi, remise en main propre. Connaissance de la ville indispensable.',
    },
    {
      title: 'Chargé de relation client WhatsApp',
      location: 'Douala, Cameroun',
      type: 'Temps plein',
      body:
        'Réponse aux demandes en moins de cinq minutes, suivi des envois, information sur les jours de départ et les tarifs. Écrit correctement en français ; l’arabe est fortement apprécié.',
    },
  ],

  applyTitle: 'Postuler',
  applyBody:
    'Envoyez votre CV et une courte présentation par e-mail, ou passez directement à l’agence de Douala avec vos pièces. Nous répondons à toutes les candidatures, retenues ou non.',
  applyCta: 'Postuler sur WhatsApp',
  applyEmail: 'Envoyer un CV par e-mail',

  spontaneousTitle: 'Candidature spontanée',
  spontaneousBody:
    'Aucun poste ne correspond à votre profil ? Écrivez-nous quand même en précisant le métier visé, la ville et vos disponibilités. Les départs se multiplient, les équipes suivent.',
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'Careers | Al-Nadjah Express',
    description:
      'Counter agents, handlers, drivers, delivery agents: open roles at Al-Nadjah Express in Douala and N’Djamena.',
  },
  eyebrow: 'Careers',
  title: 'Someone else’s parcel, handled like your own.',
  intro:
    'A parcel that arrives on time and intact is a chain of small things done right: the weighing, the label, the film, the loading, the call to the recipient. We hire people who hold their link of that chain.',

  whyTitle: 'Working with us',
  why: [
    'A small team where everyone knows the parcels they handle by name.',
    'A fixed salary, paid on time, with a bonus tied to departures kept on schedule.',
    'Training in the craft: packing, weighing, NDJ labelling, verified handover.',
    'Real prospects: every one of our team leaders started at the counter or on the dock.',
  ],

  openingsTitle: 'Open roles',
  openings: [
    {
      title: 'Counter agent',
      location: 'Douala, Cameroon',
      type: 'Full time',
      body:
        'Welcoming senders, weighing in front of the customer, working out the per-kilo price, taking payment, issuing the drop-off slip. People skills, accuracy with numbers, spoken French; Arabic or English is a plus.',
    },
    {
      title: 'Handler — packing and weighing',
      location: 'Douala, Cameroon',
      type: 'Full time',
      body:
        'Reinforced packing, stretch film, marking fragile parcels, NDJ labelling, preparing the departure pallets. Standing work, intense pace the day before each departure.',
    },
    {
      title: 'Heavy goods driver',
      location: 'Douala – N’Djamena route',
      type: 'Full time',
      body:
        'Long-distance driving, keeping to convoy schedules, checking the load and the paperwork at border posts. Valid HGV licence and proven experience on regional corridors required.',
    },
    {
      title: 'Delivery agent',
      location: 'N’Djamena, Chad',
      type: 'Full time',
      body:
        'Receiving parcels on arrival, checking their condition, calling recipients, verifying ID and tracking number, handing over in person. Good knowledge of the city is essential.',
    },
    {
      title: 'WhatsApp customer officer',
      location: 'Douala, Cameroon',
      type: 'Full time',
      body:
        'Answering enquiries in under five minutes, following up shipments, explaining departure days and rates. Writes correct French; Arabic is highly valued.',
    },
  ],

  applyTitle: 'Apply',
  applyBody:
    'Send your CV and a short introduction by email, or come to the Douala branch with your documents. We reply to every application, successful or not.',
  applyCta: 'Apply on WhatsApp',
  applyEmail: 'Send a CV by email',

  spontaneousTitle: 'Speculative application',
  spontaneousBody:
    'No role matching your profile? Write to us anyway, stating the job you are after, the city and your availability. Departures keep growing, and the teams grow with them.',
};

const ar: Copy = {
  meta: {
    title: 'الوظائف | النجاح إكسبرس',
    description:
      'موظفو وكالة، عمال مناولة، سائقون، وكلاء تسليم: الوظائف الشاغرة في النجاح إكسبرس بدوالا ونجامينا.',
  },
  eyebrow: 'الوظائف',
  title: 'طرد غيرك، تعامل معه كأنه طردك.',
  intro:
    'وصول الطرد في موعده وسليمًا سلسلةٌ من الأعمال المتقنة: الوزن، والملصق، والتغليف، والتحميل، والاتصال بالمستلم. نوظّف من يُحسِن حلقته في هذه السلسلة.',

  whyTitle: 'العمل معنا',
  why: [
    'فريق صغير يعرف فيه كل واحد الطرود التي يحملها بالاسم.',
    'راتب ثابت يُدفع في موعده، مع مكافأة مرتبطة بالمغادرات المنضبطة.',
    'تدريب على مهارات المهنة: التغليف، والوزن، وملصق NDJ، والتسليم المُتحقَّق منه.',
    'فرص ترقٍّ حقيقية: كل رؤساء فرقنا بدأوا في الاستقبال أو في المستودع.',
  ],

  openingsTitle: 'الوظائف الشاغرة',
  openings: [
    {
      title: 'موظف وكالة',
      location: 'دوالا، الكاميرون',
      type: 'دوام كامل',
      body:
        'استقبال المرسِلين، والوزن أمام العميل، وحساب السعر بالكيلوغرام، والتحصيل، وتسليم إيصال الإيداع. حسن التعامل، ودقة في الأرقام، وإتقان الفرنسية؛ والعربية أو الإنجليزية ميزة إضافية.',
    },
    {
      title: 'عامل مناولة — التغليف والوزن',
      location: 'دوالا، الكاميرون',
      type: 'دوام كامل',
      body:
        'تغليف مُقوّى، وغلاف بلاستيكي لاصق، ووسم الطرود القابلة للكسر، وملصق NDJ، وتجهيز منصات المغادرة. عمل واقف، وإيقاع مكثّف عشية كل رحلة.',
    },
    {
      title: 'سائق شاحنة ثقيلة',
      location: 'خط دوالا – نجامينا',
      type: 'دوام كامل',
      body:
        'قيادة لمسافات طويلة، والالتزام بمواعيد القافلة، ومراقبة الحمولة والوثائق عند النقاط الحدودية. رخصة قيادة سارية للشاحنات الثقيلة وخبرة مثبتة على المحاور الإقليمية.',
    },
    {
      title: 'وكيل تسليم',
      location: 'نجامينا، تشاد',
      type: 'دوام كامل',
      body:
        'استلام الطرود عند الوصول، والتحقق من حالتها، والاتصال بالمستلمين، ومطابقة بطاقة الهوية ورقم التتبع، والتسليم باليد. معرفة جيدة بالمدينة شرط أساسي.',
    },
    {
      title: 'مسؤول خدمة العملاء على واتساب',
      location: 'دوالا، الكاميرون',
      type: 'دوام كامل',
      body:
        'الرد على الاستفسارات في أقل من خمس دقائق، ومتابعة الشحنات، وتوضيح أيام المغادرة والأسعار. كتابة سليمة بالفرنسية؛ والعربية مطلوبة بشدة.',
    },
  ],

  applyTitle: 'التقديم',
  applyBody:
    'أرسل سيرتك الذاتية وتعريفًا موجزًا بالبريد الإلكتروني، أو مُرّ على وكالة دوالا بوثائقك. نردّ على كل طلب، قُبِل أو لم يُقبل.',
  applyCta: 'التقديم عبر واتساب',
  applyEmail: 'إرسال السيرة الذاتية بالبريد',

  spontaneousTitle: 'طلب توظيف تلقائي',
  spontaneousBody:
    'لا وظيفة تناسب ملفك؟ اكتب إلينا على أي حال، مع ذكر المهنة والمدينة وأوقات توفّرك. المغادرات تتزايد، والفرق تتوسّع معها.',
};

export const careersCopy: Record<Locale, Copy> = { fr, en, ar };
