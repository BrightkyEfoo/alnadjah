import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie des pages /agencies et /agencies/[id].
 * `days` est indexé sur `Date.getDay()` : 0 = dimanche.
 */
const fr = {
  meta: {
    title: 'Nos agences | Al-Nadjah Express',
    description:
      'Adresses, téléphones et horaires des agences Al-Nadjah Express. Déposez votre colis au plus près de chez vous.',
  },

  eyebrow: 'Nos agences',
  title: 'Poussez la porte la plus proche.',
  subtitle:
    'Nos points de dépôt et de retrait, leurs coordonnées et leurs horaires. C’est ici que commence le voyage de votre colis.',

  search: {
    label: 'Rechercher une agence',
    placeholder: 'Rechercher par ville ou par nom…',
  },

  loading: 'Chargement des agences…',
  error: 'Erreur lors du chargement des agences.',
  empty: 'Aucune agence ne correspond à votre recherche.',
  detailLink: 'Voir le détail',

  detail: {
    back: 'Toutes les agences',
    codeLabel: 'Agence',
    contactTitle: 'Coordonnées',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'E-mail',
    maps: 'Voir sur Google Maps',
    hoursTitle: 'Horaires d’ouverture',
    hoursEmpty: 'Horaires non communiqués.',
    closed: 'Fermé',
    notFound: 'Cette agence est introuvable.',
    loadError: 'Erreur lors du chargement.',
    metaFallbackTitle: 'Agence | Al-Nadjah Express',
    metaFallbackDescription:
      'Adresse, téléphone et horaires de cette agence Al-Nadjah Express.',
  },

  days: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  meta: {
    title: 'Our agencies | Al-Nadjah Express',
    description:
      'Addresses, phone numbers and opening hours of Al-Nadjah Express agencies. Drop off your parcel at the branch nearest you.',
  },

  eyebrow: 'Our agencies',
  title: 'Step through the nearest door.',
  subtitle:
    'Our drop-off and pick-up points, with their contact details and opening hours. This is where your parcel’s journey begins.',

  search: {
    label: 'Search for an agency',
    placeholder: 'Search by city or name…',
  },

  loading: 'Loading agencies…',
  error: 'Something went wrong while loading the agencies.',
  empty: 'No agency matches your search.',
  detailLink: 'View details',

  detail: {
    back: 'All agencies',
    codeLabel: 'Agency',
    contactTitle: 'Contact details',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    maps: 'Open in Google Maps',
    hoursTitle: 'Opening hours',
    hoursEmpty: 'Opening hours not provided.',
    closed: 'Closed',
    notFound: 'This agency could not be found.',
    loadError: 'Something went wrong while loading.',
    metaFallbackTitle: 'Agency | Al-Nadjah Express',
    metaFallbackDescription:
      'Address, phone number and opening hours of this Al-Nadjah Express agency.',
  },

  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
};

const ar: Copy = {
  meta: {
    title: 'وكالاتنا | Al-Nadjah Express',
    description:
      'عناوين وكالات Al-Nadjah Express وأرقام هواتفها ومواعيد عملها. أودِع طردك في أقرب وكالة إليك.',
  },

  eyebrow: 'وكالاتنا',
  title: 'ادفع الباب الأقرب إليك.',
  subtitle:
    'نقاط الإيداع والاستلام لدينا، مع بيانات التواصل ومواعيد العمل. من هنا تبدأ رحلة طردك.',

  search: {
    label: 'البحث عن وكالة',
    placeholder: 'ابحث بالمدينة أو بالاسم…',
  },

  loading: 'جارٍ تحميل الوكالات…',
  error: 'حدث خطأ أثناء تحميل الوكالات.',
  empty: 'لا توجد وكالة تطابق بحثك.',
  detailLink: 'عرض التفاصيل',

  detail: {
    back: 'كل الوكالات',
    codeLabel: 'وكالة',
    contactTitle: 'بيانات التواصل',
    addressLabel: 'العنوان',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد الإلكتروني',
    maps: 'الفتح في Google Maps',
    hoursTitle: 'مواعيد العمل',
    hoursEmpty: 'مواعيد العمل غير متوفرة.',
    closed: 'مغلق',
    notFound: 'تعذّر العثور على هذه الوكالة.',
    loadError: 'حدث خطأ أثناء التحميل.',
    metaFallbackTitle: 'وكالة | Al-Nadjah Express',
    metaFallbackDescription:
      'عنوان وكالة Al-Nadjah Express ورقم هاتفها ومواعيد عملها.',
  },

  days: [
    'الأحد',
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ],
};

export const agenciesCopy: Record<Locale, Copy> = { fr, en, ar };
