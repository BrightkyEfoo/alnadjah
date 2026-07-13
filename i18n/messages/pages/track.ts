import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /track. Le FR est la source de vérité : EN et AR sont typés
 * contre lui (une clé manquante casse le type-check).
 *
 * `dateLocale` / `numberLocale` sont des balises BCP-47 : l'arabe force le
 * système de chiffres latin (`-u-nu-latn`) pour rester cohérent avec les tarifs
 * affichés en chiffres occidentaux.
 */
const fr = {
  eyebrow: 'Suivi colis',
  title: 'Suivez votre colis en temps réel',
  subtitle:
    'Entrez votre numéro de tracking (ex : TST-AB12CD) pour voir l’état de votre envoi.',
  searchLabel: 'Numéro de tracking',
  searchCta: 'Rechercher',

  notFound: 'Aucun colis trouvé pour « {q} ».',
  genericError: 'Erreur lors de la recherche.',

  status: {
    IN_STOCK: 'En stock',
    LOADING: 'En chargement',
    IN_TRANSIT: 'En transit',
    ARRIVED: 'Arrivé',
    RECEIVED: 'Réceptionné',
    DELIVERED: 'Livré',
    LOST: 'Perdu',
  },

  info: {
    departureAgency: 'Agence de départ',
    arrivalAgency: 'Agence d’arrivée',
    currentWarehouse: 'Magasin actuel',
    transitRoute: 'Route de transit',
    addedValue: 'Valeur ajoutée',
    registeredAt: 'Date d’enregistrement',
    empty: '—',
  },

  progress: {
    title: 'Avancement',
    created: 'Colis enregistré',
    transit: 'En transit',
    arrived: 'Arrivé à destination',
    delivered: 'Remis au destinataire',
  },

  dateLocale: 'fr-FR',
  numberLocale: 'fr-FR',
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  eyebrow: 'Parcel tracking',
  title: 'Track your parcel in real time',
  subtitle:
    'Enter your tracking number (e.g. TST-AB12CD) to see the status of your shipment.',
  searchLabel: 'Tracking number',
  searchCta: 'Search',

  notFound: 'No parcel found for “{q}”.',
  genericError: 'Something went wrong during the search.',

  status: {
    IN_STOCK: 'In stock',
    LOADING: 'Loading',
    IN_TRANSIT: 'In transit',
    ARRIVED: 'Arrived',
    RECEIVED: 'Received',
    DELIVERED: 'Delivered',
    LOST: 'Lost',
  },

  info: {
    departureAgency: 'Departure agency',
    arrivalAgency: 'Arrival agency',
    currentWarehouse: 'Current warehouse',
    transitRoute: 'Transit route',
    addedValue: 'Added value',
    registeredAt: 'Registered on',
    empty: '—',
  },

  progress: {
    title: 'Progress',
    created: 'Parcel registered',
    transit: 'In transit',
    arrived: 'Arrived at destination',
    delivered: 'Handed to the recipient',
  },

  dateLocale: 'en-GB',
  numberLocale: 'en-US',
};

const ar: Copy = {
  eyebrow: 'تتبّع الطرود',
  title: 'تتبّع طردك لحظة بلحظة',
  subtitle: 'أدخل رقم التتبّع (مثال: TST-AB12CD) لمعرفة حالة شحنتك.',
  searchLabel: 'رقم التتبّع',
  searchCta: 'بحث',

  notFound: 'لم يُعثر على أي طرد بالرقم «{q}».',
  genericError: 'حدث خطأ أثناء البحث.',

  status: {
    IN_STOCK: 'في المخزن',
    LOADING: 'قيد التحميل',
    IN_TRANSIT: 'في الطريق',
    ARRIVED: 'وصل',
    RECEIVED: 'تمّ الاستلام',
    DELIVERED: 'تمّ التسليم',
    LOST: 'مفقود',
  },

  info: {
    departureAgency: 'وكالة الانطلاق',
    arrivalAgency: 'وكالة الوصول',
    currentWarehouse: 'المخزن الحالي',
    transitRoute: 'خطّ العبور',
    addedValue: 'القيمة المضافة',
    registeredAt: 'تاريخ التسجيل',
    empty: '—',
  },

  progress: {
    title: 'مراحل الشحن',
    created: 'تسجيل الطرد',
    transit: 'في الطريق',
    arrived: 'الوصول إلى الوجهة',
    delivered: 'التسليم إلى المرسل إليه',
  },

  dateLocale: 'ar-u-nu-latn',
  numberLocale: 'fr-FR',
};

export const trackCopy: Record<Locale, Copy> = { fr, en, ar };
