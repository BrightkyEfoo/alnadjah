import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/** Copie de la page « Politique cookies ». */
const fr = {
  eyebrow: 'Cookies',
  title: 'Politique cookies',
  intro:
    'Ce site sert à s’informer sur nos lignes et à suivre un colis. Il dépose le strict minimum : les cookies qui le font fonctionner, et rien d’autre.',
  updatedLabel: 'Dernière mise à jour',
  updated: '13 juillet 2026',
  sections: [
    {
      heading: 'Ce qu’est un cookie',
      body: 'Un cookie est un petit fichier qu’un site enregistre dans votre navigateur. Il permet de retrouver une information d’une page à l’autre : la langue que vous avez choisie, une session de connexion ouverte, une préférence d’affichage.',
    },
    {
      heading: 'Cookies strictement nécessaires',
      body: 'Ces cookies ne peuvent pas être désactivés : sans eux, le site ne fonctionne pas.',
      items: [
        'langue : mémorise votre choix entre le français, l’anglais et l’arabe ;',
        'session : maintient votre connexion à l’espace client d’une page à l’autre ;',
        'sécurité : protège les formulaires contre les envois frauduleux.',
      ],
    },
    {
      heading: 'Mesure d’audience et publicité',
      body: 'Al-Nadjah Express n’utilise aujourd’hui aucun cookie publicitaire, aucun pixel de réseau social et aucun traceur tiers. Si une mesure d’audience venait à être mise en place, elle serait annoncée sur cette page et soumise à votre consentement préalable.',
    },
    {
      heading: 'Refuser ou supprimer les cookies',
      body: 'Tout navigateur permet de bloquer ou d’effacer les cookies depuis ses paramètres de confidentialité. Supprimer les cookies nécessaires vous fera perdre la langue choisie et vous déconnectera de votre espace client ; le suivi d’un colis à partir de son numéro de suivi restera possible.',
    },
    {
      heading: 'Une question',
      body: 'Pour toute question sur cette page, écrivez-nous sur WhatsApp au +235 68 88 80 48.',
    },
  ],
  linksTitle: 'À lire également',
  links: [
    { href: '/privacy', label: 'Politique de confidentialité' },
    { href: '/legal', label: 'Mentions légales' },
  ],
} as const;

type Copy = Localized<typeof fr>;

const en: Copy = {
  eyebrow: 'Cookies',
  title: 'Cookie policy',
  intro:
    'This site exists to present our routes and to track a parcel. It sets the bare minimum: the cookies that make it work, and nothing else.',
  updatedLabel: 'Last updated',
  updated: '13 July 2026',
  sections: [
    {
      heading: 'What a cookie is',
      body: 'A cookie is a small file a website stores in your browser. It carries a piece of information from one page to the next: the language you picked, an open session, a display preference.',
    },
    {
      heading: 'Strictly necessary cookies',
      body: 'These cookies cannot be turned off: without them, the site does not work.',
      items: [
        'language: remembers your choice between French, English and Arabic;',
        'session: keeps you signed in to your account area from page to page;',
        'security: protects forms against fraudulent submissions.',
      ],
    },
    {
      heading: 'Analytics and advertising',
      body: 'Al-Nadjah Express currently uses no advertising cookies, no social network pixels and no third-party trackers. Should analytics ever be introduced, it would be announced on this page and subject to your prior consent.',
    },
    {
      heading: 'Refusing or deleting cookies',
      body: 'Every browser lets you block or erase cookies from its privacy settings. Deleting the necessary cookies will lose your language choice and sign you out of your account area; tracking a parcel from its tracking number will still work.',
    },
    {
      heading: 'Questions',
      body: 'For any question about this page, message us on WhatsApp at +235 68 88 80 48.',
    },
  ],
  linksTitle: 'Read next',
  links: [
    { href: '/privacy', label: 'Privacy policy' },
    { href: '/legal', label: 'Legal notice' },
  ],
};

const ar: Copy = {
  eyebrow: 'ملفات تعريف الارتباط',
  title: 'سياسة ملفات تعريف الارتباط',
  intro:
    'يهدف هذا الموقع إلى التعريف بخطوطنا وتتبّع الطرود، ولا يضع سوى الحد الأدنى: الملفات التي تجعله يعمل، ولا شيء غيرها.',
  updatedLabel: 'آخر تحديث',
  updated: '١٣ يوليو ٢٠٢٦',
  sections: [
    {
      heading: 'ما ملف تعريف الارتباط',
      body: 'ملف تعريف الارتباط ملف صغير يحفظه الموقع في متصفّحك، فينقل معلومة من صفحة إلى أخرى: اللغة التي اخترتها، أو جلسة دخول مفتوحة، أو تفضيلًا في العرض.',
    },
    {
      heading: 'الملفات الضرورية حصرًا',
      body: 'لا يمكن تعطيل هذه الملفات، فبدونها لا يعمل الموقع.',
      items: [
        'اللغة: تحفظ اختيارك بين الفرنسية والإنجليزية والعربية؛',
        'الجلسة: تُبقيك متصلًا بحسابك من صفحة إلى أخرى؛',
        'الأمان: تحمي النماذج من الإرسال الاحتيالي.',
      ],
    },
    {
      heading: 'قياس الزيارات والإعلانات',
      body: 'لا تستخدم النجاح إكسبريس اليوم أي ملف إعلاني، ولا بكسل تتبّع لشبكات التواصل، ولا أي أداة تتبّع من طرف ثالث. وإذا اعتُمد قياس للزيارات مستقبلًا، فسيُعلَن عنه في هذه الصفحة ولن يُفعَّل إلا بموافقتك المسبقة.',
    },
    {
      heading: 'رفض الملفات أو حذفها',
      body: 'يتيح كل متصفّح حجب ملفات تعريف الارتباط أو محوها من إعدادات الخصوصية. وحذف الملفات الضرورية يُفقدك اللغة المختارة ويخرجك من حسابك، غير أن تتبّع الطرد برقم التتبّع يظلّ ممكنًا.',
    },
    {
      heading: 'سؤال',
      body: 'لأي استفسار بشأن هذه الصفحة، راسلنا عبر واتساب على الرقم ⁦+235 68 88 80 48⁩.',
    },
  ],
  linksTitle: 'اقرأ أيضًا',
  links: [
    { href: '/privacy', label: 'سياسة الخصوصية' },
    { href: '/legal', label: 'البيانات القانونية' },
  ],
};

export const cookiesCopy: Record<Locale, Copy> = { fr, en, ar };
