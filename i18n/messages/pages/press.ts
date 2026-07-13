import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /press — espace presse d'un transporteur : contact,
 * kit de marque, faits vérifiables, communiqués (ouvertures de lignes).
 */
const fr = {
  meta: {
    title: 'Presse | Al-Nadjah Express',
    description:
      'Espace presse d’Al-Nadjah Express : contact, kit de marque, faits clés et communiqués sur nos lignes Douala – N’Djamena et Abidjan – N’Djamena.',
  },
  eyebrow: 'Presse',
  title: 'Espace presse.',
  intro:
    'Journalistes, rédactions, créateurs de contenu : voici de quoi parler d’Al-Nadjah Express sans se tromper d’un chiffre.',

  contactTitle: 'Contact presse',
  contactBody:
    'Demandes d’interview, chiffres, visuels d’agence ou reportage à bord d’un convoi : écrivez-nous. Réponse sous 48 heures ouvrées, en français, anglais ou arabe.',
  contactCta: 'Écrire à la presse',
  contactWhatsapp: 'Nous joindre sur WhatsApp',

  kitTitle: 'Kit de marque',
  kitBody:
    'Logo, sceau, palette (émeraude et or), photographies d’agence et de départ en haute définition : disponibles sur demande par e-mail. Merci de préciser le support et le contexte d’utilisation. Le nom s’écrit « Al-Nadjah Express », avec un trait d’union et sans point.',

  factsTitle: 'Faits clés',
  facts: [
    'Transporteur de colis basé à Douala, au Cameroun, avec une remise en main propre à N’Djamena, au Tchad.',
    'Ligne Douala → N’Djamena : livraison en 24 heures, 2 500 F/kg, départs le mardi, le jeudi et le samedi.',
    'Ligne Abidjan → N’Djamena : 7 000 F/kg, dépôt des colis jusqu’au lundi 14 h pour un départ le mardi.',
    'Services : achat sur place, emballage et pesée devant le client, traitement séparé des colis fragiles, suivi jusqu’à la remise.',
    'Temps de réponse moyen sur WhatsApp : moins de cinq minutes pendant les heures d’ouverture.',
    'Devise : Rapidité · Sécurité · Fidélité.',
  ],

  releasesTitle: 'Communiqués',
  releases: [
    {
      date: 'Juin 2026',
      title: 'Ouverture de la ligne Abidjan → N’Djamena',
      body:
        'Al-Nadjah Express relie désormais la Côte d’Ivoire au Tchad, au tarif de 7 000 F/kg. Les colis sont acceptés jusqu’au lundi 14 h pour un départ le mardi.',
    },
    {
      date: 'Mai 2026',
      title: 'Trois départs par semaine sur Douala → N’Djamena',
      body:
        'La liaison historique passe à trois départs hebdomadaires — mardi, jeudi et samedi — avec un délai de livraison maintenu à 24 heures et un tarif inchangé de 2 500 F/kg.',
    },
    {
      date: 'Avril 2026',
      title: 'Tarif dégressif pour les envois de 32 kg',
      body:
        'Les envois groupés de 32 kg bénéficient d’un tarif de 2 250 F/kg au lieu de 2 500 F, une mesure destinée aux commerçantes et commerçants qui réapprovisionnent régulièrement leur stock à N’Djamena.',
    },
  ],
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'Press | Al-Nadjah Express',
    description:
      'Al-Nadjah Express press room: contact, brand kit, key facts and releases on our Douala – N’Djamena and Abidjan – N’Djamena routes.',
  },
  eyebrow: 'Press',
  title: 'Press room.',
  intro:
    'Journalists, newsrooms, content creators: everything you need to write about Al-Nadjah Express without getting a figure wrong.',

  contactTitle: 'Press contact',
  contactBody:
    'Interview requests, figures, branch photography or a report from inside a convoy: write to us. We reply within 48 working hours, in French, English or Arabic.',
  contactCta: 'Email the press desk',
  contactWhatsapp: 'Reach us on WhatsApp',

  kitTitle: 'Brand kit',
  kitBody:
    'Logo, seal, palette (emerald and gold), high-resolution photographs of the branch and of departures: available on request by email. Please state the medium and the intended context. The name is written “Al-Nadjah Express”, with a hyphen and no full stop.',

  factsTitle: 'Key facts',
  facts: [
    'Parcel carrier based in Douala, Cameroon, delivering in person in N’Djamena, Chad.',
    'Douala → N’Djamena route: 24-hour delivery, 2,500 F/kg, departures on Tuesday, Thursday and Saturday.',
    'Abidjan → N’Djamena route: 7,000 F/kg, parcels accepted until Monday 2 pm for a Tuesday departure.',
    'Services: local purchasing, packing and weighing in front of the customer, separate handling of fragile parcels, tracking through to handover.',
    'Average response time on WhatsApp: under five minutes during opening hours.',
    'Motto: Speed · Security · Loyalty.',
  ],

  releasesTitle: 'Releases',
  releases: [
    {
      date: 'June 2026',
      title: 'Abidjan → N’Djamena route opens',
      body:
        'Al-Nadjah Express now connects Côte d’Ivoire to Chad at 7,000 F/kg. Parcels are accepted until Monday 2 pm for a Tuesday departure.',
    },
    {
      date: 'May 2026',
      title: 'Three weekly departures on Douala → N’Djamena',
      body:
        'The founding route moves to three departures a week — Tuesday, Thursday and Saturday — with delivery still within 24 hours and the rate unchanged at 2,500 F/kg.',
    },
    {
      date: 'April 2026',
      title: 'Reduced rate for 32 kg shipments',
      body:
        'Grouped shipments of 32 kg are charged 2,250 F/kg instead of 2,500 F, a measure aimed at the traders who restock in N’Djamena week after week.',
    },
  ],
};

const ar: Copy = {
  meta: {
    title: 'الصحافة | النجاح إكسبرس',
    description:
      'الغرفة الصحفية للنجاح إكسبرس: جهة الاتصال، وحقيبة العلامة، والحقائق الأساسية، والبيانات حول خطّي دوالا – نجامينا وأبيدجان – نجامينا.',
  },
  eyebrow: 'الصحافة',
  title: 'الغرفة الصحفية.',
  intro:
    'إلى الصحفيين وهيئات التحرير وصنّاع المحتوى: هنا ما يلزم للكتابة عن النجاح إكسبرس دون خطأ في رقم واحد.',

  contactTitle: 'جهة الاتصال الصحفي',
  contactBody:
    'طلبات المقابلات، والأرقام، وصور الوكالة، أو تغطية ميدانية على متن إحدى الرحلات: اكتبوا إلينا. نردّ خلال ٤٨ ساعة عمل، بالفرنسية أو الإنجليزية أو العربية.',
  contactCta: 'مراسلة القسم الصحفي',
  contactWhatsapp: 'تواصل عبر واتساب',

  kitTitle: 'حقيبة العلامة',
  kitBody:
    'الشعار، والختم، ولوحة الألوان (الزمرّدي والذهبي)، وصور عالية الدقة للوكالة وللمغادرة: متاحة عند الطلب بالبريد الإلكتروني. يُرجى ذكر الوسيلة وسياق الاستخدام. يُكتب الاسم «النجاح إكسبرس»، وبالحرف اللاتيني «Al-Nadjah Express».',

  factsTitle: 'حقائق أساسية',
  facts: [
    'شركة نقل طرود مقرّها دوالا في الكاميرون، مع تسليم باليد في نجامينا بتشاد.',
    'خط دوالا ← نجامينا: التسليم خلال ٢٤ ساعة، بسعر ٢٥٠٠ فرنك للكيلوغرام، ومغادرات يوم الثلاثاء والخميس والسبت.',
    'خط أبيدجان ← نجامينا: ٧٠٠٠ فرنك للكيلوغرام، وتُقبل الطرود حتى الاثنين الساعة الثانية ظهرًا لمغادرة يوم الثلاثاء.',
    'الخدمات: الشراء محليًا، والتغليف والوزن أمام العميل، ومعالجة منفصلة للطرود القابلة للكسر، والتتبع حتى التسليم.',
    'متوسط زمن الرد على واتساب: أقل من خمس دقائق خلال ساعات العمل.',
    'الشعار: سرعة · أمان · وفاء.',
  ],

  releasesTitle: 'البيانات الصحفية',
  releases: [
    {
      date: 'يونيو ٢٠٢٦',
      title: 'افتتاح خط أبيدجان ← نجامينا',
      body:
        'تربط النجاح إكسبرس الآن ساحل العاج بتشاد بسعر ٧٠٠٠ فرنك للكيلوغرام. تُقبل الطرود حتى الاثنين الساعة الثانية ظهرًا لمغادرة يوم الثلاثاء.',
    },
    {
      date: 'مايو ٢٠٢٦',
      title: 'ثلاث مغادرات أسبوعيًا على خط دوالا ← نجامينا',
      body:
        'ينتقل الخط التاريخي إلى ثلاث مغادرات في الأسبوع — الثلاثاء والخميس والسبت — مع الحفاظ على التسليم خلال ٢٤ ساعة وعلى السعر ذاته: ٢٥٠٠ فرنك للكيلوغرام.',
    },
    {
      date: 'أبريل ٢٠٢٦',
      title: 'سعر مخفّض لشحنات ٣٢ كغ',
      body:
        'تُحتسب الشحنات المجمّعة بوزن ٣٢ كغ بسعر ٢٢٥٠ فرنكًا للكيلوغرام بدل ٢٥٠٠ فرنك، وهو إجراء موجّه للتجار الذين يجدّدون بضاعتهم في نجامينا أسبوعًا بعد أسبوع.',
    },
  ],
};

export const pressCopy: Record<Locale, Copy> = { fr, en, ar };
