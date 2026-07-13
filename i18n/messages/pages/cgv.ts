import type { Locale } from '@/i18n/config';
import type { Localized } from '@/i18n/localized';

/**
 * Copie de la page « Conditions générales de transport ».
 *
 * En arabe, les numéros de téléphone et les tarifs latins sont encadrés par
 * des isolats bidi (U+2066 … U+2069) : sans eux, l'algorithme bidirectionnel
 * renvoie le « + » ou les chiffres du mauvais côté du texte RTL.
 */
const fr = {
  eyebrow: 'Conditions générales',
  title: 'Conditions générales de transport',
  intro:
    'Ces conditions régissent tout colis confié à Al-Nadjah Express, au départ de Douala ou d’Abidjan. Déposer un colis dans l’une de nos agences vaut acceptation pleine et entière de ce qui suit.',
  updatedLabel: 'Dernière mise à jour',
  updated: '13 juillet 2026',
  sections: [
    {
      heading: 'Objet du contrat',
      body: 'Al-Nadjah Express est une entreprise de transport et d’expédition de colis établie à Douala, au Cameroun. Elle achemine des marchandises sur les lignes Douala → N’Djamena et Abidjan → N’Djamena. Le contrat de transport lie l’expéditeur, qui dépose le colis et le règle, à Al-Nadjah Express, qui s’engage à le remettre au destinataire désigné sur le bordereau.',
    },
    {
      heading: 'Dépôt et acceptation du colis',
      body: 'Chaque colis est pesé, mesuré, emballé et étiqueté à l’agence, devant l’expéditeur. Celui-ci déclare le contenu réel du colis et fournit le nom et le numéro de téléphone du destinataire. Al-Nadjah Express peut ouvrir, contrôler ou refuser tout colis dont le contenu déclaré paraît inexact, dangereux ou interdit, sans que ce refus ouvre droit à indemnité.',
    },
    {
      heading: 'Marchandises interdites',
      body: 'Ne peuvent en aucun cas être confiés au transport :',
      items: [
        'espèces, or, bijoux, pierres précieuses et titres au porteur ;',
        'armes, munitions, explosifs, gaz et produits inflammables ;',
        'stupéfiants et substances psychotropes ;',
        'denrées périssables non conditionnées pour un voyage de vingt-quatre heures ;',
        'animaux vivants ;',
        'contrefaçons et marchandises dont la circulation est interdite au Cameroun, en Côte d’Ivoire ou au Tchad.',
      ],
      note: 'L’expéditeur qui dissimule une marchandise interdite en supporte seul les conséquences douanières, pénales et financières, et reste redevable du prix du transport.',
    },
    {
      heading: 'Poids, volume et tarification',
      body: 'Le tarif est annoncé au dépôt et calculé au kilo : 2 500 F CFA/kg sur la ligne Douala → N’Djamena, 7 000 F CFA/kg sur la ligne Abidjan → N’Djamena. Les colis légers mais encombrants sont facturés au poids volumétrique (longueur × largeur × hauteur en centimètres, divisé par 5 000). L’électroménager, les colis hors gabarit et les envois volumineux font l’objet d’un devis préalable. Le règlement s’effectue au dépôt, en espèces ou par Mobile Money : aucun colis ne part sans être payé.',
    },
    {
      heading: 'Délais d’acheminement',
      body: 'Les départs de Douala ont lieu le mardi, le jeudi et le samedi ; la livraison à N’Djamena intervient sous vingt-quatre heures à compter du départ. Les colis sont acceptés à l’agence jusqu’à la veille du départ. Ces délais sont des délais d’usage, non des engagements de résultat : contrôles douaniers, formalités administratives, état des routes et cas de force majeure peuvent les allonger sans ouvrir droit à indemnité.',
    },
    {
      heading: 'Livraison et retrait',
      body: 'Le destinataire retire son colis à l’agence d’arrivée sur présentation du numéro de suivi et d’une pièce d’identité, ou signe une décharge lors d’une remise en main propre. Passé quinze jours après l’avis de mise à disposition, des frais de garde peuvent être appliqués. Un colis non réclamé au bout de quatre-vingt-dix jours peut être renvoyé à l’expéditeur à ses frais.',
    },
    {
      heading: 'Responsabilité et indemnisation',
      body: 'Al-Nadjah Express répond de la perte et de l’avarie survenues entre la prise en charge et la remise. L’indemnisation est plafonnée à dix fois le prix du transport payé pour le colis concerné, sauf déclaration de valeur souscrite au dépôt et facturée en supplément. Aucune indemnité n’est due en cas d’emballage insuffisant fourni par l’expéditeur, de vice propre de la marchandise, de fausse déclaration de contenu, de saisie par une autorité ou de force majeure.',
    },
    {
      heading: 'Réclamations et litiges',
      body: 'Toute réclamation doit nous parvenir dans les sept jours suivant la mise à disposition du colis, par WhatsApp au +235 68 88 80 48 ou à l’agence de dépôt, accompagnée du numéro de suivi et de photographies du colis. Les parties recherchent d’abord un règlement amiable. À défaut d’accord, le litige relève du droit camerounais et de la compétence des juridictions de Douala.',
    },
    {
      heading: 'Modification des conditions',
      body: 'Al-Nadjah Express peut modifier ces conditions à tout moment. La version applicable à un envoi est celle publiée sur ce site le jour du dépôt du colis.',
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
  eyebrow: 'Terms and conditions',
  title: 'General conditions of carriage',
  intro:
    'These conditions govern every parcel entrusted to Al-Nadjah Express, whether it leaves from Douala or Abidjan. Handing a parcel over at one of our branches means accepting them in full.',
  updatedLabel: 'Last updated',
  updated: '13 July 2026',
  sections: [
    {
      heading: 'Purpose of the contract',
      body: 'Al-Nadjah Express is a parcel transport and shipping company based in Douala, Cameroon. It carries goods on the Douala → N’Djamena and Abidjan → N’Djamena routes. The contract of carriage binds the sender, who hands over and pays for the parcel, to Al-Nadjah Express, which undertakes to deliver it to the recipient named on the waybill.',
    },
    {
      heading: 'Drop-off and acceptance',
      body: 'Every parcel is weighed, measured, wrapped and labelled at the branch, in the sender’s presence. The sender declares the parcel’s actual contents and provides the recipient’s name and phone number. Al-Nadjah Express may open, inspect or refuse any parcel whose declared contents appear inaccurate, dangerous or prohibited; such a refusal gives rise to no compensation.',
    },
    {
      heading: 'Prohibited goods',
      body: 'The following may never be handed over for carriage:',
      items: [
        'cash, gold, jewellery, precious stones and bearer securities;',
        'weapons, ammunition, explosives, gas and flammable products;',
        'narcotics and psychotropic substances;',
        'perishable goods not packed for a twenty-four-hour journey;',
        'live animals;',
        'counterfeit goods and any merchandise banned from circulation in Cameroon, Côte d’Ivoire or Chad.',
      ],
      note: 'A sender who conceals prohibited goods bears the customs, criminal and financial consequences alone, and still owes the carriage price.',
    },
    {
      heading: 'Weight, volume and pricing',
      body: 'The price is quoted at drop-off and charged by the kilo: 2,500 FCFA/kg on the Douala → N’Djamena route and 7,000 FCFA/kg on the Abidjan → N’Djamena route. Light but bulky parcels are charged on volumetric weight (length × width × height in centimetres, divided by 5,000). Household appliances, oversized parcels and large consignments are quoted individually beforehand. Payment is made at drop-off, in cash or by Mobile Money: no parcel leaves unpaid.',
    },
    {
      heading: 'Transit times',
      body: 'Departures from Douala take place on Tuesday, Thursday and Saturday; delivery in N’Djamena follows within twenty-four hours of departure. Parcels are accepted at the branch until the day before departure. These are customary transit times, not guaranteed results: customs inspections, administrative formalities, road conditions and events of force majeure may extend them without giving rise to compensation.',
    },
    {
      heading: 'Delivery and collection',
      body: 'The recipient collects the parcel at the arrival branch on presentation of the tracking number and proof of identity, or signs a receipt on hand delivery. Fifteen days after the notice of availability, storage fees may apply. A parcel left unclaimed for ninety days may be returned to the sender at the sender’s expense.',
    },
    {
      heading: 'Liability and compensation',
      body: 'Al-Nadjah Express is liable for loss or damage occurring between collection and delivery. Compensation is capped at ten times the carriage price paid for the parcel concerned, unless a declared value was taken out at drop-off and charged as a supplement. No compensation is due where packaging supplied by the sender was inadequate, where the goods carried an inherent defect, where contents were misdeclared, where an authority seized the parcel, or in cases of force majeure.',
    },
    {
      heading: 'Claims and disputes',
      body: 'Claims must reach us within seven days of the parcel being made available, by WhatsApp on +235 68 88 80 48 or at the branch where the parcel was handed over, together with the tracking number and photographs of the parcel. The parties first seek an amicable settlement. Failing agreement, the dispute is governed by Cameroonian law and falls within the jurisdiction of the courts of Douala.',
    },
    {
      heading: 'Changes to these conditions',
      body: 'Al-Nadjah Express may amend these conditions at any time. The version applicable to a shipment is the one published on this site on the day the parcel was handed over.',
    },
  ],
  linksTitle: 'Read next',
  links: [
    { href: '/privacy', label: 'Privacy policy' },
    { href: '/legal', label: 'Legal notice' },
  ],
};

const ar: Copy = {
  eyebrow: 'الشروط العامة',
  title: 'الشروط العامة للنقل',
  intro:
    'تنظّم هذه الشروط كل طرد يُسلَّم إلى النجاح إكسبريس، سواء انطلق من دوالا أو من أبيدجان. إن إيداع الطرد في أحد وكالاتنا يعني قبول هذه الشروط كاملةً.',
  updatedLabel: 'آخر تحديث',
  updated: '١٣ يوليو ٢٠٢٦',
  sections: [
    {
      heading: 'موضوع العقد',
      body: 'النجاح إكسبريس شركة لنقل الطرود وشحنها، مقرّها مدينة دوالا في الكاميرون. تنقل البضائع على خطّي دوالا ← إنجامينا وأبيدجان ← إنجامينا. يربط عقد النقل بين المرسِل الذي يودع الطرد ويسدّد ثمن نقله، وبين النجاح إكسبريس التي تلتزم بتسليمه إلى المرسَل إليه المذكور في وصل الشحن.',
    },
    {
      heading: 'الإيداع وقبول الطرد',
      body: 'يُوزن كل طرد ويُقاس ويُغلَّف ويُعنون في الوكالة بحضور المرسِل، الذي يصرّح بمحتواه الحقيقي ويقدّم اسم المرسَل إليه ورقم هاتفه. ويحقّ للنجاح إكسبريس فتح أي طرد أو تفتيشه أو رفضه إذا بدا المحتوى المصرّح به غير مطابق أو خطِرًا أو ممنوعًا، دون أن يترتّب على هذا الرفض أي تعويض.',
    },
    {
      heading: 'البضائع الممنوعة',
      body: 'لا يجوز بأي حال تسليم ما يلي للنقل:',
      items: [
        'النقود والذهب والمجوهرات والأحجار الكريمة والسندات لحاملها؛',
        'الأسلحة والذخائر والمتفجّرات والغازات والمواد القابلة للاشتعال؛',
        'المخدّرات والمؤثّرات العقلية؛',
        'المواد سريعة التلف غير المهيّأة لرحلة تدوم أربعًا وعشرين ساعة؛',
        'الحيوانات الحيّة؛',
        'السلع المقلّدة وكل بضاعة يُمنع تداولها في الكاميرون أو كوت ديفوار أو تشاد.',
      ],
      note: 'يتحمّل المرسِل الذي يخفي بضاعة ممنوعة وحده التبعات الجمركية والجزائية والمالية، ويبقى ملزَمًا بدفع ثمن النقل.',
    },
    {
      heading: 'الوزن والحجم والتسعير',
      body: 'يُعلَن السعر عند الإيداع ويُحسب بالكيلوغرام: ⁦2 500⁩ فرنك إفريقي للكيلوغرام على خط دوالا ← إنجامينا، و⁦7 000⁩ فرنك إفريقي للكيلوغرام على خط أبيدجان ← إنجامينا. أمّا الطرود الخفيفة الكبيرة الحجم فتُحتسب بالوزن الحجمي (الطول × العرض × الارتفاع بالسنتيمتر مقسومًا على ⁦5 000⁩). وتخضع الأجهزة الكهرومنزلية والطرود الخارجة عن المقاييس والشحنات الكبيرة لعرض سعر مسبق. ويتم الدفع عند الإيداع نقدًا أو عبر المحفظة الإلكترونية: لا يغادر أي طرد قبل تسديد ثمنه.',
    },
    {
      heading: 'آجال النقل',
      body: 'تنطلق الشحنات من دوالا أيام الثلاثاء والخميس والسبت، ويتم التسليم في إنجامينا خلال أربع وعشرين ساعة من موعد الانطلاق. وتُقبل الطرود في الوكالة حتى اليوم السابق للانطلاق. وهذه آجال معتادة لا التزام بنتيجة: فقد تطيلها المعاينات الجمركية والإجراءات الإدارية وحالة الطرق والقوة القاهرة، دون أن يترتّب على ذلك أي تعويض.',
    },
    {
      heading: 'التسليم والاستلام',
      body: 'يستلم المرسَل إليه طرده في وكالة الوصول بعد تقديم رقم التتبّع وبطاقة هوية، أو يوقّع على وصل الاستلام عند التسليم المباشر. وبعد خمسة عشر يومًا من إشعار الجاهزية، قد تُطبَّق رسوم حفظ. وللشركة أن تعيد إلى المرسِل، على نفقته، أي طرد لم يُطالَب به بعد تسعين يومًا.',
    },
    {
      heading: 'المسؤولية والتعويض',
      body: 'تتحمّل النجاح إكسبريس مسؤولية الضياع والتلف الواقعَين بين تسلّم الطرد وتسليمه. ويُحدَّد التعويض بعشرة أضعاف ثمن النقل المدفوع عن الطرد المعني، ما لم يُصرَّح بقيمة الطرد عند الإيداع مقابل رسم إضافي. ولا يُستحقّ أي تعويض في حالات التغليف غير الكافي الذي يوفّره المرسِل، أو العيب الذاتي في البضاعة، أو التصريح الكاذب بالمحتوى، أو حجز السلطات للطرد، أو القوة القاهرة.',
    },
    {
      heading: 'الشكاوى والنزاعات',
      body: 'يجب أن تصلنا الشكوى خلال سبعة أيام من وضع الطرد رهن الاستلام، عبر واتساب على الرقم ⁦+235 68 88 80 48⁩ أو في وكالة الإيداع، مرفقةً برقم التتبّع وصور الطرد. ويسعى الطرفان أولًا إلى تسوية ودّية، وعند تعذّرها يخضع النزاع للقانون الكاميروني ولاختصاص محاكم دوالا.',
    },
    {
      heading: 'تعديل الشروط',
      body: 'يجوز للنجاح إكسبريس تعديل هذه الشروط في أي وقت. والنسخة السارية على أي شحنة هي المنشورة على هذا الموقع يوم إيداع الطرد.',
    },
  ],
  linksTitle: 'اقرأ أيضًا',
  links: [
    { href: '/privacy', label: 'سياسة الخصوصية' },
    { href: '/legal', label: 'البيانات القانونية' },
  ],
};

export const cgvCopy: Record<Locale, Copy> = { fr, en, ar };
