import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/** Copie de la page « Politique de confidentialité ». */
const fr = {
  eyebrow: 'Données personnelles',
  title: 'Politique de confidentialité',
  intro:
    'Expédier un colis suppose de nous confier des informations : votre nom, votre numéro, celui du destinataire. Cette page dit ce que nous en faisons — et ce que nous n’en faisons pas.',
  updatedLabel: 'Dernière mise à jour',
  updated: '13 juillet 2026',
  sections: [
    {
      heading: 'Qui traite vos données',
      body: 'Al-Nadjah Express, entreprise de transport de colis établie à Douala au Cameroun, est responsable des données collectées dans ses agences et sur ce site. Pour toute question relative à vos données, écrivez-nous sur WhatsApp au +235 68 88 80 48.',
    },
    {
      heading: 'Données collectées',
      body: 'Nous ne collectons que ce qui est nécessaire à l’acheminement d’un colis :',
      items: [
        'expéditeur : nom, numéro de téléphone, adresse e-mail si vous en fournissez une ;',
        'destinataire : nom, numéro de téléphone, ville de livraison ;',
        'colis : contenu déclaré, poids, dimensions, numéro de suivi, statut et horodatage de chaque étape ;',
        'paiement : montant, mode de règlement (espèces ou Mobile Money) et référence du reçu ;',
        'site : données techniques strictement nécessaires au fonctionnement du suivi en ligne.',
      ],
      note: 'Nous ne demandons jamais de code Mobile Money, de code secret ni de mot de passe bancaire — ni par téléphone, ni sur WhatsApp, ni sur ce site.',
    },
    {
      heading: 'Pourquoi nous les utilisons',
      body: 'Vos données servent exclusivement à :',
      items: [
        'acheminer le colis et le remettre au bon destinataire ;',
        'permettre le suivi en ligne à partir du numéro de suivi ;',
        'prévenir l’expéditeur et le destinataire par WhatsApp ou par téléphone à chaque étape ;',
        'établir les reçus et tenir la comptabilité de l’entreprise ;',
        'répondre aux formalités douanières et aux réquisitions des autorités compétentes.',
      ],
    },
    {
      heading: 'Qui y a accès',
      body: 'Seuls les agents d’Al-Nadjah Express à Douala, Abidjan et N’Djamena, ainsi que les transporteurs qui convoient le chargement, accèdent aux informations nécessaires à leur mission. Les administrations douanières peuvent en exiger la communication. Vos données ne sont ni vendues, ni louées, ni transmises à des annonceurs.',
    },
    {
      heading: 'Durée de conservation',
      body: 'Les données de suivi d’un colis sont conservées deux ans après la livraison, afin de pouvoir traiter une réclamation tardive. Les pièces comptables — reçus, factures — sont conservées dix ans, conformément aux obligations comptables applicables. Les numéros de téléphone utilisés pour les notifications sont supprimés à votre demande, sauf lorsqu’ils figurent sur une pièce comptable.',
    },
    {
      heading: 'Sécurité',
      body: 'L’accès aux dossiers de colis est réservé aux agents habilités et protégé par mot de passe. Les échanges entre votre navigateur et ce site sont chiffrés. Le suivi public n’affiche qu’un statut et un trajet : ni numéro de téléphone complet, ni adresse du destinataire.',
    },
    {
      heading: 'Vos droits',
      body: 'Vous pouvez demander l’accès à vos données, leur correction ou leur suppression, et vous opposer aux messages de notification. Écrivez-nous sur WhatsApp au +235 68 88 80 48 en indiquant votre numéro de suivi : nous répondons sous sept jours.',
    },
    {
      heading: 'Cookies',
      body: 'Ce site dépose un nombre limité de cookies, décrits en détail sur la page dédiée.',
    },
  ],
  linksTitle: 'À lire également',
  links: [
    { href: '/cookies', label: 'Politique cookies' },
    { href: '/cgv', label: 'Conditions générales de transport' },
  ],
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  eyebrow: 'Personal data',
  title: 'Privacy policy',
  intro:
    'Sending a parcel means trusting us with information: your name, your number, the recipient’s number. This page sets out what we do with it — and what we do not.',
  updatedLabel: 'Last updated',
  updated: '13 July 2026',
  sections: [
    {
      heading: 'Who processes your data',
      body: 'Al-Nadjah Express, a parcel transport company based in Douala, Cameroon, is responsible for the data collected at its branches and on this site. For any question about your data, message us on WhatsApp at +235 68 88 80 48.',
    },
    {
      heading: 'Data we collect',
      body: 'We collect only what is needed to carry a parcel:',
      items: [
        'sender: name, phone number, and email address if you provide one;',
        'recipient: name, phone number, delivery city;',
        'parcel: declared contents, weight, dimensions, tracking number, status and timestamp of each step;',
        'payment: amount, method (cash or Mobile Money) and receipt reference;',
        'website: technical data strictly necessary for online tracking to work.',
      ],
      note: 'We never ask for a Mobile Money code, a PIN or a banking password — not by phone, not on WhatsApp, not on this site.',
    },
    {
      heading: 'Why we use it',
      body: 'Your data is used solely to:',
      items: [
        'carry the parcel and hand it to the right recipient;',
        'make online tracking possible from the tracking number;',
        'notify sender and recipient by WhatsApp or phone at each step;',
        'issue receipts and keep the company’s accounts;',
        'meet customs formalities and lawful requests from the competent authorities.',
      ],
    },
    {
      heading: 'Who has access',
      body: 'Only Al-Nadjah Express staff in Douala, Abidjan and N’Djamena, along with the carriers who move the load, access the information their work requires. Customs authorities may require disclosure. Your data is never sold, rented or passed on to advertisers.',
    },
    {
      heading: 'How long we keep it',
      body: 'Parcel tracking data is kept for two years after delivery, so that a late claim can still be handled. Accounting records — receipts and invoices — are kept for ten years, as applicable accounting rules require. Phone numbers used for notifications are deleted at your request, except where they appear on an accounting record.',
    },
    {
      heading: 'Security',
      body: 'Access to parcel records is limited to authorised staff and protected by passwords. Traffic between your browser and this site is encrypted. Public tracking shows only a status and a route: no full phone number, no recipient address.',
    },
    {
      heading: 'Your rights',
      body: 'You may ask to access, correct or delete your data, and object to notification messages. Message us on WhatsApp at +235 68 88 80 48 with your tracking number: we reply within seven days.',
    },
    {
      heading: 'Cookies',
      body: 'This site sets a small number of cookies, described in full on the dedicated page.',
    },
  ],
  linksTitle: 'Read next',
  links: [
    { href: '/cookies', label: 'Cookie policy' },
    { href: '/cgv', label: 'General conditions of carriage' },
  ],
};

const ar: Copy = {
  eyebrow: 'البيانات الشخصية',
  title: 'سياسة الخصوصية',
  intro:
    'إرسال طرد يعني أن تأتمننا على معلومات: اسمك ورقم هاتفك ورقم المرسَل إليه. تبيّن هذه الصفحة ما نفعله بهذه المعلومات، وما لا نفعله بها.',
  updatedLabel: 'آخر تحديث',
  updated: '١٣ يوليو ٢٠٢٦',
  sections: [
    {
      heading: 'من يعالج بياناتك',
      body: 'النجاح إكسبريس، شركة نقل الطرود التي يقع مقرّها في دوالا بالكاميرون، هي المسؤولة عن البيانات التي تُجمع في وكالاتها وعلى هذا الموقع. لأي استفسار بشأن بياناتك، راسلنا عبر واتساب على الرقم ⁦+235 68 88 80 48⁩.',
    },
    {
      heading: 'البيانات التي نجمعها',
      body: 'لا نجمع إلا ما يلزم لنقل الطرد:',
      items: [
        'المرسِل: الاسم ورقم الهاتف والبريد الإلكتروني إن قدّمته؛',
        'المرسَل إليه: الاسم ورقم الهاتف ومدينة التسليم؛',
        'الطرد: المحتوى المصرّح به والوزن والأبعاد ورقم التتبّع وحالة كل مرحلة وتوقيتها؛',
        'الدفع: المبلغ وطريقة السداد (نقدًا أو عبر المحفظة الإلكترونية) ومرجع الوصل؛',
        'الموقع: البيانات التقنية اللازمة حصرًا لعمل خدمة التتبّع الإلكتروني.',
      ],
      note: 'لا نطلب منك أبدًا رمز المحفظة الإلكترونية ولا الرقم السرّي ولا كلمة مرور مصرفية، لا عبر الهاتف ولا عبر واتساب ولا على هذا الموقع.',
    },
    {
      heading: 'لماذا نستخدمها',
      body: 'تُستخدم بياناتك حصرًا من أجل:',
      items: [
        'نقل الطرد وتسليمه إلى المرسَل إليه الصحيح؛',
        'إتاحة التتبّع الإلكتروني انطلاقًا من رقم التتبّع؛',
        'إشعار المرسِل والمرسَل إليه عبر واتساب أو الهاتف في كل مرحلة؛',
        'تحرير الوصولات ومسك حسابات الشركة؛',
        'استيفاء الإجراءات الجمركية والاستجابة لطلبات السلطات المختصة.',
      ],
    },
    {
      heading: 'من يطّلع عليها',
      body: 'لا يطّلع على المعلومات إلا موظفو النجاح إكسبريس في دوالا وأبيدجان وإنجامينا، والناقلون الذين يرافقون الشحنة، وفي حدود ما تقتضيه مهمّتهم. وقد تطلب الإدارات الجمركية الاطّلاع عليها. ولا تُباع بياناتك ولا تُؤجَّر ولا تُسلَّم إلى المعلنين.',
    },
    {
      heading: 'مدّة الحفظ',
      body: 'تُحفظ بيانات تتبّع الطرد سنتين بعد التسليم، حتى يتسنّى النظر في أي شكوى متأخّرة. أمّا المستندات المحاسبية، من وصولات وفواتير، فتُحفظ عشر سنوات وفق الالتزامات المحاسبية السارية. وتُحذف أرقام الهواتف المستعملة في الإشعارات بناءً على طلبك، ما لم ترد في مستند محاسبي.',
    },
    {
      heading: 'الأمان',
      body: 'الاطّلاع على ملفات الطرود محصور في الموظفين المخوّلين ومحميّ بكلمة مرور. والاتصال بين متصفّحك وهذا الموقع مشفَّر. ولا تعرض صفحة التتبّع العلنية سوى حالة الطرد ومساره: لا رقم هاتف كاملًا ولا عنوان المرسَل إليه.',
    },
    {
      heading: 'حقوقك',
      body: 'يمكنك طلب الاطّلاع على بياناتك أو تصحيحها أو حذفها، والاعتراض على رسائل الإشعار. راسلنا عبر واتساب على الرقم ⁦+235 68 88 80 48⁩ مع ذكر رقم التتبّع، ونردّ عليك خلال سبعة أيام.',
    },
    {
      heading: 'ملفات تعريف الارتباط',
      body: 'يضع هذا الموقع عددًا محدودًا من ملفات تعريف الارتباط، مشروحة بالتفصيل في الصفحة المخصّصة لها.',
    },
  ],
  linksTitle: 'اقرأ أيضًا',
  links: [
    { href: '/cookies', label: 'سياسة ملفات تعريف الارتباط' },
    { href: '/cgv', label: 'الشروط العامة للنقل' },
  ],
};

export const privacyCopy: Record<Locale, Copy> = { fr, en, ar };
