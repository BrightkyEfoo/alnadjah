import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /api-docs. La référence d'API développeur n'a aucun sens
 * pour un transporteur : la route est conservée, mais la page devient la
 * référence des étiquettes NDJ, des bordereaux et des papiers de douane.
 */
const fr = {
  meta: {
    title: 'Étiquettes et documents | Al-Nadjah Express',
    description:
      'Numéro de suivi, étiquette NDJ, bordereau de dépôt, papiers de dédouanement : la référence des documents qui accompagnent chaque colis.',
  },
  eyebrow: 'Étiquettes et documents',
  title: 'Chaque colis porte son identité.',
  intro:
    'Un colis sans étiquette est un colis orphelin. Voici, dans le détail, ce que nous inscrivons sur le vôtre, ce que nous vous remettons au dépôt, et ce que la douane attend à l’arrivée.',

  trackingTitle: 'Le numéro de suivi',
  trackingFormatLabel: 'Format',
  trackingFormat: 'NDJ-XXXXXX',
  trackingBody:
    'Chaque colis reçoit un numéro unique dès la pesée. Il commence par le code de la ligne — NDJ pour N’Djamena — suivi de six caractères. C’est la seule référence à retenir : elle suit le colis du comptoir de Douala jusqu’à la main du destinataire.',
  trackingItems: [
    'Il est imprimé sur l’étiquette collée sur le colis et repris sur votre bordereau de dépôt.',
    'Il vous est envoyé sur WhatsApp le jour du dépôt, si vous nous laissez votre numéro.',
    'Communiquez-le au destinataire : il en aura besoin à la remise.',
    'Il ne contient aucune information sur le contenu du colis : il peut être partagé sans risque.',
  ],
  trackingCta: 'Suivre un colis',

  labelTitle: 'Ce que porte l’étiquette NDJ',
  labelItems: [
    { term: 'Numéro de suivi', desc: 'En gros caractères, lisible sans être manipulé, doublé d’un code à barres.' },
    { term: 'Expéditeur', desc: 'Nom et numéro de téléphone, tels que déclarés au dépôt.' },
    { term: 'Destinataire', desc: 'Nom, téléphone et ville de remise. Un numéro joignable évite un jour de stockage.' },
    { term: 'Poids pesé', desc: 'Le poids constaté sur la balance de l’agence, celui qui a servi au calcul du prix.' },
    { term: 'Ligne et date de départ', desc: 'Le convoi auquel le colis est rattaché — c’est ce qui l’empêche de rester à quai.' },
    { term: 'Mentions de manutention', desc: 'FRAGILE, HAUT/BAS, NE PAS GERBER : elles ne sont pas décoratives, elles dictent la place du colis dans le chargement.' },
  ],

  documentsTitle: 'Les documents remis',
  documentsItems: [
    { term: 'Bordereau de dépôt', desc: 'Remis à l’expéditeur après la pesée. Il porte le numéro de suivi, la désignation, le poids et le prix payé. Il vaut preuve d’envoi : gardez-le jusqu’à la remise.' },
    { term: 'Reçu de paiement', desc: 'Le montant réglé à l’agence, au tarif au kilo annoncé au dépôt. Aucun complément n’est demandé à l’arrivée.' },
    { term: 'Bordereau récapitulatif', desc: 'Pour les commerçants qui expédient plusieurs colis d’un coup : une seule feuille reprend tous les numéros de suivi du lot.' },
  ],

  customsTitle: 'Dédouanement à N’Djamena',
  customsBody:
    'La marchandise commerçante passe la douane à l’arrivée. Les retards viennent presque toujours d’un papier manquant, jamais du transport lui-même.',
  customsItems: [
    'Une facture d’achat lisible, au nom du destinataire, avec le prix réel de la marchandise.',
    'Une désignation exacte du contenu : « vêtements — 3 cartons » et non « effets personnels ».',
    'La pièce d’identité du destinataire, présentée à la remise.',
    'Pour l’électroménager et les gros volumes : la référence et le numéro de série de l’appareil.',
  ],
  customsNote:
    'Les droits de douane éventuels sont à la charge du destinataire et restent indépendants du tarif de transport.',

  bulkTitle: 'Envois en nombre',
  bulkBody:
    'Vous expédiez chaque semaine plusieurs dizaines de colis ? Nous préparons vos étiquettes à l’avance et vous remettons un bordereau récapitulatif unique. Écrivez-nous pour convenir du format.',
  bulkCta: 'Organiser un envoi groupé',
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'Labels and documents | Al-Nadjah Express',
    description:
      'Tracking number, NDJ label, drop-off slip, customs paperwork: the reference for the documents that travel with every parcel.',
  },
  eyebrow: 'Labels and documents',
  title: 'Every parcel carries its identity.',
  intro:
    'A parcel without a label is an orphan parcel. Here, in detail, is what we write on yours, what we hand you at drop-off, and what customs expects on arrival.',

  trackingTitle: 'The tracking number',
  trackingFormatLabel: 'Format',
  trackingFormat: 'NDJ-XXXXXX',
  trackingBody:
    'Every parcel is given a unique number as soon as it is weighed. It opens with the route code — NDJ for N’Djamena — followed by six characters. It is the only reference to remember: it follows the parcel from the Douala counter to the recipient’s hands.',
  trackingItems: [
    'It is printed on the label stuck to the parcel and repeated on your drop-off slip.',
    'We send it to you on WhatsApp on the day of drop-off, if you leave us your number.',
    'Pass it on to the recipient: they will need it at handover.',
    'It reveals nothing about the contents: it can be shared safely.',
  ],
  trackingCta: 'Track a parcel',

  labelTitle: 'What the NDJ label carries',
  labelItems: [
    { term: 'Tracking number', desc: 'In large type, readable without handling the parcel, and doubled as a barcode.' },
    { term: 'Sender', desc: 'Name and phone number, as declared at drop-off.' },
    { term: 'Recipient', desc: 'Name, phone and city of delivery. A reachable number saves a day in storage.' },
    { term: 'Weight', desc: 'The weight read on the branch scales — the one the price was calculated from.' },
    { term: 'Route and departure date', desc: 'The convoy the parcel belongs to; it is what keeps it from being left on the dock.' },
    { term: 'Handling marks', desc: 'FRAGILE, THIS WAY UP, DO NOT STACK: not decoration — they decide where the parcel sits in the load.' },
  ],

  documentsTitle: 'The documents we issue',
  documentsItems: [
    { term: 'Drop-off slip', desc: 'Given to the sender after weighing. It carries the tracking number, the description, the weight and the price paid. It is your proof of shipment: keep it until handover.' },
    { term: 'Payment receipt', desc: 'The amount settled at the branch, at the per-kilo rate quoted on drop-off. Nothing further is asked for on arrival.' },
    { term: 'Summary manifest', desc: 'For traders shipping several parcels at once: a single sheet listing every tracking number in the batch.' },
  ],

  customsTitle: 'Customs clearance in N’Djamena',
  customsBody:
    'Commercial goods clear customs on arrival. Delays almost always come from a missing paper, never from the transport itself.',
  customsItems: [
    'A legible purchase invoice in the recipient’s name, showing the real value of the goods.',
    'An exact description of the contents: “clothing — 3 boxes”, not “personal effects”.',
    'The recipient’s ID document, presented at handover.',
    'For appliances and bulky goods: the model reference and serial number.',
  ],
  customsNote:
    'Any customs duties are payable by the recipient and remain separate from the transport rate.',

  bulkTitle: 'Bulk shipments',
  bulkBody:
    'Shipping dozens of parcels every week? We prepare your labels in advance and issue a single summary manifest. Write to us and we will agree on the format.',
  bulkCta: 'Arrange a bulk shipment',
};

const ar: Copy = {
  meta: {
    title: 'الملصقات والوثائق | النجاح إكسبرس',
    description:
      'رقم التتبع، وملصق NDJ، وإيصال الإيداع، وأوراق الجمارك: مرجع الوثائق التي ترافق كل طرد.',
  },
  eyebrow: 'الملصقات والوثائق',
  title: 'كل طرد يحمل هويته.',
  intro:
    'الطرد بلا ملصق طردٌ يتيم. إليك بالتفصيل ما نكتبه على طردك، وما نسلّمه إليك عند الإيداع، وما تطلبه الجمارك عند الوصول.',

  trackingTitle: 'رقم التتبع',
  trackingFormatLabel: 'الصيغة',
  trackingFormat: 'NDJ-XXXXXX',
  trackingBody:
    'يحصل كل طرد على رقم فريد فور وزنه. يبدأ برمز الخط — NDJ لنجامينا — يليه ستة أحرف. وهو المرجع الوحيد الذي عليك حفظه: يرافق الطرد من مكتب دوالا إلى يد المستلم.',
  trackingItems: [
    'يُطبع على الملصق المثبّت على الطرد ويتكرّر على إيصال الإيداع.',
    'نرسله إليك على واتساب يوم الإيداع إن تركت لنا رقمك.',
    'أَبلِغه إلى المستلم: سيحتاجه عند التسليم.',
    'لا يكشف شيئًا عن محتوى الطرد: يمكن مشاركته دون خطر.',
  ],
  trackingCta: 'تتبع طرد',

  labelTitle: 'ما يحمله ملصق NDJ',
  labelItems: [
    { term: 'رقم التتبع', desc: 'بحروف كبيرة تُقرأ دون تحريك الطرد، مصحوبًا بشيفرة شريطية.' },
    { term: 'المرسِل', desc: 'الاسم ورقم الهاتف كما صُرّح بهما عند الإيداع.' },
    { term: 'المستلم', desc: 'الاسم والهاتف ومدينة التسليم. رقم يمكن الوصول إليه يوفّر يومًا من التخزين.' },
    { term: 'الوزن', desc: 'الوزن المسجَّل على ميزان الوكالة، وهو الذي حُسب السعر على أساسه.' },
    { term: 'الخط وتاريخ المغادرة', desc: 'الرحلة التي يتبعها الطرد؛ وهي ما يمنعه من البقاء في المستودع.' },
    { term: 'إشارات المناولة', desc: 'قابل للكسر، هذا الجانب للأعلى، ممنوع التكديس: ليست زينة، بل تحدّد موضع الطرد في الحمولة.' },
  ],

  documentsTitle: 'الوثائق المسلَّمة',
  documentsItems: [
    { term: 'إيصال الإيداع', desc: 'يُسلَّم للمرسِل بعد الوزن، ويحمل رقم التتبع ووصف المحتوى والوزن والمبلغ المدفوع. وهو إثبات الإرسال: احتفظ به حتى التسليم.' },
    { term: 'وصل الدفع', desc: 'المبلغ المسدَّد في الوكالة وفق التعرفة بالكيلوغرام المعلنة عند الإيداع. ولا يُطلب أي مبلغ إضافي عند الوصول.' },
    { term: 'الكشف الإجمالي', desc: 'للتجار الذين يشحنون عدة طرود دفعة واحدة: ورقة واحدة تجمع كل أرقام تتبع الشحنة.' },
  ],

  customsTitle: 'التخليص الجمركي في نجامينا',
  customsBody:
    'تمرّ البضائع التجارية بالجمارك عند الوصول. والتأخير يأتي في الغالب من ورقة ناقصة، لا من النقل نفسه.',
  customsItems: [
    'فاتورة شراء واضحة باسم المستلم، تبيّن القيمة الحقيقية للبضاعة.',
    'وصف دقيق للمحتوى: «ملابس — ٣ كراتين»، لا «أمتعة شخصية».',
    'بطاقة هوية المستلم، تُقدَّم عند التسليم.',
    'للأجهزة الكهربائية والشحنات الكبيرة: مرجع الجهاز ورقمه التسلسلي.',
  ],
  customsNote:
    'الرسوم الجمركية، إن وُجدت، على عاتق المستلم وتبقى منفصلة عن تعرفة النقل.',

  bulkTitle: 'الشحنات المجمّعة',
  bulkBody:
    'تشحن عشرات الطرود كل أسبوع؟ نُعدّ ملصقاتك مسبقًا ونسلّمك كشفًا إجماليًا واحدًا. اكتب إلينا لنتفق على الصيغة.',
  bulkCta: 'ترتيب شحنة مجمّعة',
};

export const apiDocsCopy: Record<Locale, Copy> = { fr, en, ar };
