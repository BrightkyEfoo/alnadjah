import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /simulateur. Le FR est la source de vérité : EN et AR sont
 * typés contre lui (une clé manquante casse le type-check).
 *
 * `numberLocale` est une balise BCP-47 : l'arabe réutilise `fr-FR` pour garder
 * les chiffres occidentaux et l'espace comme séparateur de milliers (2 500).
 */
const fr = {
  eyebrow: 'Simulateur de prix',
  title: 'Estimez le coût de votre envoi',
  subtitle:
    'Choisissez une route, renseignez la masse ou le volume, obtenez un prix instantanément.',

  routeLabel: 'Route de transit',
  routesLoading: 'Chargement des routes…',
  routePlaceholder: 'Sélectionnez une route',
  weightLabel: 'Masse (kg)',
  weightPlaceholder: 'Ex : 25',
  volumeLabel: 'Volume (m³)',
  volumePlaceholder: 'Ex : 1,5',
  submit: 'Calculer le prix',
  genericError: 'Impossible de calculer le prix. Réessayez.',

  types: {
    AIR: 'Aérien',
    SEA: 'Maritime',
    LAND: 'Terrestre',
  },

  result: {
    duration: '{n} j estimés',
    partnerBadge: 'Tarif partenaire',
    estimatedPrice: 'Prix estimé',
    savings: 'vous économisez {amount}',
    breakdownTitle: 'Détail du calcul',
    rowWeight: 'Masse',
    rowVolume: 'Volume',
    rowMode: 'Mode',
    modeMax: 'Le plus élevé des deux ({a} vs {b})',
    rowRate: 'Tarif appliqué',
    ratePartner: 'Partenaire',
    rateStandard: 'Standard',
    disclaimer:
      'Estimation à titre indicatif, hors frais annexes éventuels (magasinage, assurance). Le prix définitif est confirmé à l’enregistrement du colis.',
  },

  partner: {
    question: 'Vous êtes partenaire ? Connectez-vous pour voir vos tarifs négociés.',
    cta: 'Se connecter',
  },

  numberLocale: 'fr-FR',
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  eyebrow: 'Price simulator',
  title: 'Estimate the cost of your shipment',
  subtitle:
    'Pick a route, enter the weight or the volume, and get a price instantly.',

  routeLabel: 'Transit route',
  routesLoading: 'Loading routes…',
  routePlaceholder: 'Select a route',
  weightLabel: 'Weight (kg)',
  weightPlaceholder: 'e.g. 25',
  volumeLabel: 'Volume (m³)',
  volumePlaceholder: 'e.g. 1.5',
  submit: 'Calculate the price',
  genericError: 'We could not calculate the price. Please try again.',

  types: {
    AIR: 'Air',
    SEA: 'Sea',
    LAND: 'Road',
  },

  result: {
    duration: '{n} days estimated',
    partnerBadge: 'Partner rate',
    estimatedPrice: 'Estimated price',
    savings: 'you save {amount}',
    breakdownTitle: 'Calculation breakdown',
    rowWeight: 'Weight',
    rowVolume: 'Volume',
    rowMode: 'Mode',
    modeMax: 'The higher of the two ({a} vs {b})',
    rowRate: 'Applied rate',
    ratePartner: 'Partner',
    rateStandard: 'Standard',
    disclaimer:
      'This estimate is indicative and excludes any additional fees (storage, insurance). The final price is confirmed when the parcel is registered.',
  },

  partner: {
    question: 'Are you a partner? Sign in to see your negotiated rates.',
    cta: 'Sign in',
  },

  numberLocale: 'en-US',
};

const ar: Copy = {
  eyebrow: 'حاسبة الأسعار',
  title: 'قدّر تكلفة شحنتك',
  subtitle: 'اختر خطّ العبور، وأدخل الوزن أو الحجم، لتحصل على السعر فورًا.',

  routeLabel: 'خطّ العبور',
  routesLoading: 'جارٍ تحميل الخطوط…',
  routePlaceholder: 'اختر خطّ عبور',
  weightLabel: 'الوزن (kg)',
  weightPlaceholder: 'مثال: 25',
  volumeLabel: 'الحجم (m³)',
  volumePlaceholder: 'مثال: 1.5',
  submit: 'احسب السعر',
  genericError: 'تعذّر حساب السعر. يُرجى المحاولة مرّة أخرى.',

  types: {
    AIR: 'جوّي',
    SEA: 'بحري',
    LAND: 'برّي',
  },

  result: {
    duration: '{n} يومًا (تقديريًا)',
    partnerBadge: 'تعرفة الشركاء',
    estimatedPrice: 'السعر التقديري',
    savings: 'توفّر {amount}',
    breakdownTitle: 'تفصيل الحساب',
    rowWeight: 'الوزن',
    rowVolume: 'الحجم',
    rowMode: 'طريقة الحساب',
    modeMax: 'الأعلى من القيمتين ({a} مقابل {b})',
    rowRate: 'التعرفة المطبَّقة',
    ratePartner: 'شريك',
    rateStandard: 'عادية',
    disclaimer:
      'هذا التقدير إرشادي ولا يشمل الرسوم الإضافية المحتملة (التخزين، التأمين). يُؤكَّد السعر النهائي عند تسجيل الطرد.',
  },

  partner: {
    question: 'هل أنت شريك؟ سجّل الدخول للاطّلاع على تعرفاتك المتفاوض عليها.',
    cta: 'تسجيل الدخول',
  },

  numberLocale: 'fr-FR',
};

export const simulateurCopy: Record<Locale, Copy> = { fr, en, ar };
