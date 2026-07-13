import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page /status — état des services en ligne (sondés en direct) et
 * rappel des jours de départ (information fixe, non sondée).
 */
const fr = {
  eyebrow: 'État du réseau',
  titleChecking: 'Vérification en cours…',
  titleOk: 'Tous les services sont opérationnels',
  titleDown: 'Incident en cours',
  subtitleOk: 'Le suivi, le simulateur et l’espace client répondent normalement.',
  subtitleDown:
    'Nos services en ligne ne répondent pas. Les colis, eux, continuent de voyager : écrivez-nous sur WhatsApp pour toute information.',
  checkedAt: 'Dernière vérification',

  services: {
    tracking: {
      label: 'Suivi de colis',
      desc: 'Recherche d’un envoi par numéro de suivi.',
    },
    simulator: {
      label: 'Simulateur de tarif',
      desc: 'Estimation du prix au kilo avant le dépôt.',
    },
    portal: {
      label: 'Espace client',
      desc: 'Historique des envois et notifications.',
    },
  },

  badgeOk: 'Opérationnel',
  badgeDown: 'Indisponible',
  badgeChecking: 'Vérification',

  departuresTitle: 'Départs de la semaine',
  departures: [
    {
      route: 'Douala → N’Djamena',
      days: 'Mardi · Jeudi · Samedi',
      note: 'Dépôt accepté jusqu’à la veille du départ. Livraison en 24 h.',
    },
    {
      route: 'Abidjan → N’Djamena',
      days: 'Départ le mardi',
      note: 'Dépôt des colis jusqu’au lundi 14 h.',
    },
  ],
  departuresNote:
    'Ces jours sont notre programme habituel ; ils ne sont pas mis à jour en direct. Un report éventuel est annoncé sur WhatsApp aux expéditeurs concernés.',

  incidentTitle: 'Un colis en attente ?',
  incidentBody:
    'Une panne du site n’arrête pas un convoi. Si vous cherchez un envoi et que le suivi ne répond pas, donnez-nous votre numéro de suivi : nous le retrouvons à la main.',
  incidentCta: 'Écrire sur WhatsApp',

  autoRefresh: 'Cette page se vérifie automatiquement chaque minute.',
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  eyebrow: 'Network status',
  titleChecking: 'Checking…',
  titleOk: 'All services are operational',
  titleDown: 'Ongoing incident',
  subtitleOk: 'Tracking, the rate simulator and the customer area are responding normally.',
  subtitleDown:
    'Our online services are not responding. Parcels keep moving all the same: write to us on WhatsApp for any information.',
  checkedAt: 'Last check',

  services: {
    tracking: {
      label: 'Parcel tracking',
      desc: 'Looking up a shipment by tracking number.',
    },
    simulator: {
      label: 'Rate simulator',
      desc: 'Estimating the per-kilo price before drop-off.',
    },
    portal: {
      label: 'Customer area',
      desc: 'Shipment history and notifications.',
    },
  },

  badgeOk: 'Operational',
  badgeDown: 'Unavailable',
  badgeChecking: 'Checking',

  departuresTitle: 'Departures this week',
  departures: [
    {
      route: 'Douala → N’Djamena',
      days: 'Tuesday · Thursday · Saturday',
      note: 'Parcels accepted until the day before departure. Delivered within 24 hours.',
    },
    {
      route: 'Abidjan → N’Djamena',
      days: 'Tuesday departure',
      note: 'Parcels accepted until Monday 2 pm.',
    },
  ],
  departuresNote:
    'These are our usual departure days; they are not updated live. Any postponement is announced on WhatsApp to the senders concerned.',

  incidentTitle: 'Waiting on a parcel?',
  incidentBody:
    'A website outage does not stop a convoy. If you are looking for a shipment and tracking is down, send us your tracking number: we will find it by hand.',
  incidentCta: 'Message us on WhatsApp',

  autoRefresh: 'This page checks itself automatically every minute.',
};

const ar: Copy = {
  eyebrow: 'حالة الشبكة',
  titleChecking: 'جارٍ التحقق…',
  titleOk: 'جميع الخدمات تعمل',
  titleDown: 'عطل جارٍ',
  subtitleOk: 'التتبع ومُحاكي الأسعار ومساحة العميل تستجيب بشكل طبيعي.',
  subtitleDown:
    'خدماتنا الإلكترونية لا تستجيب. أما الطرود فتواصل طريقها: راسلنا على واتساب للحصول على أي معلومة.',
  checkedAt: 'آخر تحقق',

  services: {
    tracking: {
      label: 'تتبع الطرود',
      desc: 'البحث عن شحنة برقم التتبع.',
    },
    simulator: {
      label: 'مُحاكي التعرفة',
      desc: 'تقدير السعر بالكيلوغرام قبل الإيداع.',
    },
    portal: {
      label: 'مساحة العميل',
      desc: 'سجلّ الشحنات والإشعارات.',
    },
  },

  badgeOk: 'يعمل',
  badgeDown: 'غير متاح',
  badgeChecking: 'جارٍ التحقق',

  departuresTitle: 'مغادرات الأسبوع',
  departures: [
    {
      route: 'دوالا ← نجامينا',
      days: 'الثلاثاء · الخميس · السبت',
      note: 'يُقبل الإيداع حتى اليوم السابق للمغادرة. التسليم خلال ٢٤ ساعة.',
    },
    {
      route: 'أبيدجان ← نجامينا',
      days: 'المغادرة يوم الثلاثاء',
      note: 'تُقبل الطرود حتى الاثنين الساعة الثانية ظهرًا.',
    },
  ],
  departuresNote:
    'هذه أيام مغادرتنا المعتادة، وهي غير محدَّثة لحظيًا. ويُعلَن أي تأجيل على واتساب للمرسِلين المعنيين.',

  incidentTitle: 'تنتظر طردًا؟',
  incidentBody:
    'تعطّل الموقع لا يوقف الرحلة. إن كنت تبحث عن شحنة والتتبع لا يستجيب، أرسل لنا رقم التتبع: نجده يدويًا.',
  incidentCta: 'راسلنا على واتساب',

  autoRefresh: 'تتحقّق هذه الصفحة تلقائيًا كل دقيقة.',
};

export const statusCopy: Record<Locale, Copy> = { fr, en, ar };
