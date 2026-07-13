import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page « Mentions légales ».
 *
 * Les valeurs de `contact.items` (numéros, e-mail) restent identiques dans les
 * trois langues : elles sont rendues en `dir="ltr"` par la page, sinon l'arabe
 * inverse l'ordre des chiffres.
 */
const fr = {
  eyebrow: 'Informations légales',
  title: 'Mentions légales',
  intro:
    'Qui édite ce site, qui l’héberge, et à qui s’adresser pour un colis comme pour une question juridique.',
  updatedLabel: 'Dernière mise à jour',
  updated: '13 juillet 2026',
  sections: [
    {
      heading: 'Éditeur du site',
      body: 'Al-Nadjah Express — transport et expédition de colis. Siège et agence principale à Douala, Cameroun. Lignes exploitées : Douala → N’Djamena et Abidjan → N’Djamena. Le site est édité par Al-Nadjah Express, qui en assure la publication et la mise à jour.',
    },
    {
      heading: 'Directeur de la publication',
      body: 'Le représentant légal d’Al-Nadjah Express, joignable aux coordonnées indiquées ci-dessous.',
    },
    {
      heading: 'Hébergement',
      body: 'Le site est hébergé chez un prestataire d’infrastructure cloud, sur des serveurs situés en Europe. Toute demande relative à l’hébergement doit être adressée à l’éditeur, qui la transmettra.',
    },
    {
      heading: 'Propriété intellectuelle',
      body: 'Le nom Al-Nadjah Express, le logo, les textes, les photographies et le code de ce site sont protégés. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable, est interdite.',
    },
    {
      heading: 'Photographies',
      body: 'Les photographies présentées sur ce site montrent nos agences, nos équipes et nos colis. Elles sont la propriété d’Al-Nadjah Express et ne peuvent être réutilisées sans accord.',
    },
    {
      heading: 'Signaler un contenu',
      body: 'Une erreur, une information obsolète, un usage abusif de notre nom ? Signalez-le-nous par WhatsApp ou par e-mail : nous corrigeons ce qui doit l’être.',
    },
  ],
  contactTitle: 'Nous joindre',
  contact: [
    { label: 'WhatsApp', value: '+235 68 88 80 48', href: 'https://wa.me/23568888048' },
    { label: 'Téléphone (Douala)', value: '+237 6 88 39 56 08', href: 'tel:+237688395608' },
    {
      label: 'E-mail',
      value: 'contact@alnadjah-express.com',
      href: 'mailto:contact@alnadjah-express.com',
    },
  ],
  linksTitle: 'Textes de référence',
  links: [
    { href: '/cgv', label: 'Conditions générales de transport' },
    { href: '/privacy', label: 'Politique de confidentialité' },
    { href: '/cookies', label: 'Politique cookies' },
  ],
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  eyebrow: 'Legal information',
  title: 'Legal notice',
  intro:
    'Who publishes this site, who hosts it, and whom to contact — about a parcel or about a legal question.',
  updatedLabel: 'Last updated',
  updated: '13 July 2026',
  sections: [
    {
      heading: 'Site publisher',
      body: 'Al-Nadjah Express — parcel transport and shipping. Head office and main branch in Douala, Cameroon. Routes operated: Douala → N’Djamena and Abidjan → N’Djamena. The site is published and maintained by Al-Nadjah Express.',
    },
    {
      heading: 'Publication director',
      body: 'The legal representative of Al-Nadjah Express, reachable through the contact details below.',
    },
    {
      heading: 'Hosting',
      body: 'The site is hosted by a cloud infrastructure provider, on servers located in Europe. Any request concerning hosting should be addressed to the publisher, who will pass it on.',
    },
    {
      heading: 'Intellectual property',
      body: 'The Al-Nadjah Express name, the logo, the texts, the photographs and the code of this site are protected. Any reproduction or reuse, in whole or in part, without prior written permission is prohibited.',
    },
    {
      heading: 'Photographs',
      body: 'The photographs on this site show our branches, our teams and our parcels. They belong to Al-Nadjah Express and may not be reused without consent.',
    },
    {
      heading: 'Reporting content',
      body: 'An error, an outdated detail, a misuse of our name? Report it by WhatsApp or email and we will correct what needs correcting.',
    },
  ],
  contactTitle: 'Get in touch',
  contact: [
    { label: 'WhatsApp', value: '+235 68 88 80 48', href: 'https://wa.me/23568888048' },
    { label: 'Phone (Douala)', value: '+237 6 88 39 56 08', href: 'tel:+237688395608' },
    {
      label: 'Email',
      value: 'contact@alnadjah-express.com',
      href: 'mailto:contact@alnadjah-express.com',
    },
  ],
  linksTitle: 'Reference documents',
  links: [
    { href: '/cgv', label: 'General conditions of carriage' },
    { href: '/privacy', label: 'Privacy policy' },
    { href: '/cookies', label: 'Cookie policy' },
  ],
};

const ar: Copy = {
  eyebrow: 'معلومات قانونية',
  title: 'البيانات القانونية',
  intro:
    'من ينشر هذا الموقع، ومن يستضيفه، وبمن تتّصل — سواء بشأن طرد أو بشأن مسألة قانونية.',
  updatedLabel: 'آخر تحديث',
  updated: '١٣ يوليو ٢٠٢٦',
  sections: [
    {
      heading: 'ناشر الموقع',
      body: 'النجاح إكسبريس — نقل الطرود وشحنها. المقر والوكالة الرئيسية في دوالا بالكاميرون. الخطوط المستثمَرة: دوالا ← إنجامينا وأبيدجان ← إنجامينا. تتولّى النجاح إكسبريس نشر هذا الموقع وتحديثه.',
    },
    {
      heading: 'مدير النشر',
      body: 'الممثّل القانوني لشركة النجاح إكسبريس، ويمكن الاتصال به عبر البيانات المذكورة أدناه.',
    },
    {
      heading: 'الاستضافة',
      body: 'يستضيف الموقعَ مزوّدُ بنية تحتية سحابية، على خوادم موجودة في أوروبا. وتُوجَّه كل طلبات الاستضافة إلى الناشر الذي يتولّى إحالتها.',
    },
    {
      heading: 'الملكية الفكرية',
      body: 'اسم النجاح إكسبريس وشعارها ونصوص هذا الموقع وصوره وشيفرته محمية جميعًا. ويُمنع نسخها أو إعادة استعمالها كليًّا أو جزئيًّا دون إذن كتابي مسبق.',
    },
    {
      heading: 'الصور',
      body: 'تُظهر الصور المنشورة على هذا الموقع وكالاتنا وفِرَقنا وطرودنا، وهي ملك للنجاح إكسبريس ولا يجوز إعادة استعمالها دون موافقتها.',
    },
    {
      heading: 'الإبلاغ عن محتوى',
      body: 'هل لاحظت خطأً أو معلومة قديمة أو استعمالًا غير مشروع لاسمنا؟ أبلِغنا عبر واتساب أو البريد الإلكتروني، ونصحّح ما يستوجب التصحيح.',
    },
  ],
  contactTitle: 'اتصل بنا',
  contact: [
    { label: 'واتساب', value: '+235 68 88 80 48', href: 'https://wa.me/23568888048' },
    { label: 'هاتف (دوالا)', value: '+237 6 88 39 56 08', href: 'tel:+237688395608' },
    {
      label: 'البريد الإلكتروني',
      value: 'contact@alnadjah-express.com',
      href: 'mailto:contact@alnadjah-express.com',
    },
  ],
  linksTitle: 'نصوص مرجعية',
  links: [
    { href: '/cgv', label: 'الشروط العامة للنقل' },
    { href: '/privacy', label: 'سياسة الخصوصية' },
    { href: '/cookies', label: 'سياسة ملفات تعريف الارتباط' },
  ],
};

export const legalCopy: Record<Locale, Copy> = { fr, en, ar };
