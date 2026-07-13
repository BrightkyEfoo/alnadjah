import type { Localized } from '../localized';

/**
 * Dictionnaire FR — source de vérité. `en.ts` et `ar.ts` doivent en respecter
 * la forme (le type `Messages` est dérivé d'ici et les autres langues sont
 * typées contre lui : une clé manquante casse le type-check).
 */
export const fr = {
  brand: {
    name: 'Al-Nadjah Express',
    motto: 'Rapidité · Sécurité · Fidélité',
    tagline: 'Envoi de colis express',
  },

  common: {
    login: 'Se connecter',
    register: 'Créer un compte',
    start: 'Commencer',
    contact: 'Nous contacter',
    whatsapp: 'WhatsApp',
    learnMore: 'En savoir plus',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    previous: 'Précédent',
    next: 'Suivant',
    pause: 'Pause',
    play: 'Lecture',
    perKg: '/kg',
    from: 'Départ',
    to: 'Arrivée',
  },

  nav: {
    routes: 'Nos lignes',
    services: 'Services',
    gallery: 'En images',
    agencies: 'Agences',
    simulator: 'Simulateur',
    track: 'Suivi de colis',
    pricing: 'Tarifs',
  },

  hero: {
    eyebrow: 'Douala · N’Djamena · Abidjan',
    titleLine1: 'Vos colis',
    titleLine2: 'traversent le désert',
    titleLine3: 'en 24 heures.',
    subtitle:
      'Al-Nadjah Express achemine vos marchandises entre le Cameroun, le Tchad et la Côte d’Ivoire. Départs trois fois par semaine, tarif au kilo annoncé au dépôt, colis suivi jusqu’à la remise en main propre.',
    ctaPrimary: 'Envoyer un colis',
    ctaSecondary: 'Suivre mon colis',
    stat1Label: 'Délai Douala → N’Djamena',
    stat1Value: '24 h',
    stat2Label: 'Tarif au kilo',
    stat2Value: '2 500 F',
    stat3Label: 'Départs par semaine',
    stat3Value: '3',
  },

  routes: {
    eyebrow: 'Nos lignes',
    title: 'Trois pays, une seule adresse.',
    subtitle:
      'Des liaisons régulières, un tarif annoncé à l’avance, aucune surprise à l’arrivée.',
    items: [
      {
        from: 'Douala',
        to: 'N’Djamena',
        price: '2 500 F/kg',
        schedule: 'Mardi · Jeudi · Samedi',
        note: 'Livraison en 24 h. Dépôt à l’agence de Douala jusqu’à la veille du départ.',
      },
      {
        from: 'Abidjan',
        to: 'N’Djamena',
        price: '7 000 F/kg',
        schedule: 'Départs programmés',
        note: 'Dépôt des colis jusqu’au lundi 14 h pour un départ le mardi.',
      },
      {
        from: 'Douala',
        to: 'Toute la sous-région',
        price: 'Sur devis',
        schedule: 'À la demande',
        note: 'Gros volumes, électroménager, marchandise commerçante — nous étudions chaque envoi.',
      },
    ],
  },

  gallery: {
    eyebrow: 'En images',
    title: 'Notre réseau en action.',
    subtitle:
      'De l’agence de Douala jusqu’à la remise à N’Djamena : ce que vos colis traversent.',
    slides: [
      {
        title: 'Remis en main propre',
        description:
          'Un filtre à eau commandé depuis Douala, réceptionné à N’Djamena. Vérifié, intact, remis à son destinataire.',
        alt: 'Deux hommes tenant un carton de filtre à eau livré par Al-Nadjah Express',
      },
      {
        title: 'Le dernier mètre',
        description:
          'De notre agent au destinataire : le colis ne change de main qu’une seule fois, et c’est la bonne.',
        alt: 'Un agent remet un colis emballé à une cliente',
      },
      {
        title: 'Vos achats, arrivés',
        description:
          'Textiles, cadeaux, effets personnels — emballés avec soin au départ, ouverts avec le sourire à l’arrivée.',
        alt: 'Une cliente reçoit son colis emballé',
      },
      {
        title: 'Rapidité, sécurité, fidélité',
        description:
          'Nos trois promesses tiennent dans une seule chose : un colis qui arrive à l’heure et en bon état.',
        alt: 'Une cliente porte son colis livré par Al-Nadjah Express',
      },
      {
        title: 'Livraison confirmée',
        description:
          'Le destinataire reçoit, contrôle, valide. La course se referme sur une remise vérifiée.',
        alt: 'Remise d’un colis à une cliente',
      },
      {
        title: 'Derrière chaque colis, quelqu’un attend',
        description:
          'C’est ce qui nous fait tenir les délais : à l’autre bout, ce n’est pas un numéro de suivi, c’est une personne.',
        alt: 'Cliente satisfaite avec son colis',
      },
      {
        title: 'Gros volumes et électroménager',
        description:
          'Machines, filtres, équipements : nous prenons en charge l’achat, l’emballage et l’expédition jusqu’à destination.',
        alt: 'Un homme porte un carton de filtre à eau',
      },
      {
        title: 'Douala → N’Djamena en 24 h',
        description:
          'Chez nous c’est 24 h, pas plus. Des départs réguliers entre le Cameroun et le Tchad, toute l’année.',
        alt: 'Affiche Al-Nadjah Express : envoi de colis Douala – N’Djamena en 24 h',
      },
      {
        title: 'Abidjan → N’Djamena',
        description:
          'La Côte d’Ivoire aussi est desservie : 7 000 F/kg, dépôt des colis jusqu’au lundi 14 h pour un départ le mardi.',
        alt: 'Affiche Al-Nadjah Express : ligne Côte d’Ivoire – N’Djamena, 7 000 F/kg',
      },
      {
        title: '2 500 F le kilo',
        description:
          'Mardi, jeudi, samedi. Un tarif clair au kilo, annoncé au dépôt — aucune surprise à l’arrivée.',
        alt: 'Affiche tarif 2 500 F/kg Douala – N’Djamena',
      },
      {
        title: 'Une femme, un business',
        description:
          'Commerçantes et entrepreneures : vous vendez, nous expédions. Votre marchandise part à N’Djamena en 24 h.',
        alt: 'Trois femmes entrepreneures avec un carton Al-Nadjah Express',
      },
      {
        title: 'Le Tchad à portée de colis',
        description:
          'Douala–N’Djamena trois fois par semaine, à 2 500 F/kg. La distance n’est plus une excuse.',
        alt: 'Affiche Douala – N’Djamena avec la place de la Nation',
      },
      {
        title: 'Tarif spécial gros envois',
        description:
          'Du 17 au 31 juillet : 2 250 F/kg au lieu de 2 500 F pour tout envoi de 32 kg. Les habitués savent en profiter.',
        alt: 'Affiche promotion 2 250 F/kg pour les envois de 32 kg',
      },
      {
        title: 'Al-Nadjah Express',
        description:
          'Rapidité · Sécurité · Fidélité. Le sceau que vous retrouvez sur chacun de nos colis, au départ de Douala.',
        alt: 'Sceau Al-Nadjah Express — Douala',
      },
      {
        title: 'Achat, validation, expédition',
        description:
          'Vous n’êtes pas sur place ? Nous achetons pour vous, validons la commande et expédions — le tout en une seule course.',
        alt: 'Affiche des services Al-Nadjah Express avec un livreur',
      },
      {
        title: 'Étiqueté, filmé, prêt à partir',
        description:
          'Chaque colis porte son étiquette NDJ dès le dépôt. Plus de confusion, plus de colis orphelin à l’arrivée.',
        alt: 'Colis roulés, filmés et étiquetés Al-Nadjah Express',
      },
      {
        title: 'En route pour l’aéroport',
        description:
          'Départ vers N’Djamena : les colis passent l’enregistrement sous la supervision de notre équipe.',
        alt: 'Colis Al-Nadjah Express sur un chariot à l’aéroport',
      },
      {
        title: 'Emballage renforcé',
        description:
          'Film étirable, pesée, étiquetage : votre marchandise est préparée pour le voyage, pas seulement pour le trajet.',
        alt: 'Colis emballés et étiquetés à l’agence',
      },
      {
        title: 'Fragile ? Traité comme tel',
        description:
          'Les colis sensibles sont marqués, isolés et manipulés à part. La mention FRAGILE n’est pas décorative.',
        alt: 'Colis marqués FRAGILE prêts pour N’Djamena',
      },
      {
        title: 'Envoi des colis express',
        description:
          'Rapidité, sécurité, fidélité : trois mots, et une entreprise qui s’engage à les tenir sur chaque envoi.',
        alt: 'Bannière Al-Nadjah Express — envoi des colis express',
      },
      {
        title: 'Pesé devant vous',
        description:
          'La balance est là, dans l’agence. Le poids se lit à deux, et le prix se calcule à la vue de tous.',
        alt: 'Colis pesés et emballés à l’agence de Douala',
      },
      {
        title: 'Une équipe qui répond',
        description:
          'WhatsApp, téléphone ou agence : quelqu’un suit votre colis du dépôt jusqu’à la livraison. Réponse en moins de 5 minutes.',
        alt: 'L’équipe Al-Nadjah Express avec un carton',
      },
    ],
  },

  services: {
    eyebrow: 'Nos services',
    title: 'Plus qu’un transporteur.',
    subtitle:
      'Nous ne déplaçons pas seulement des colis : nous achetons, emballons, pesons, expédions et livrons.',
    items: [
      {
        title: 'Expédition express 24 h',
        body: 'Douala → N’Djamena mardi, jeudi et samedi. Votre colis part le jour du dépôt.',
      },
      {
        title: 'Achat sur place',
        body: 'Vous n’êtes pas au Cameroun ? Nous achetons pour vous, validons la commande, puis expédions.',
      },
      {
        title: 'Emballage et pesée',
        body: 'Film étirable, étiquette NDJ, pesée devant vous. Le prix se calcule à la vue de tous.',
      },
      {
        title: 'Colis fragiles',
        body: 'Marqués, isolés, manipulés à part. La mention FRAGILE n’est pas décorative chez nous.',
      },
      {
        title: 'Suivi de bout en bout',
        body: 'Un numéro de suivi, une trace à chaque étape, une remise confirmée au destinataire.',
      },
      {
        title: 'Support humain',
        body: 'WhatsApp, téléphone ou agence. Une vraie équipe, une réponse en moins de 5 minutes.',
      },
    ],
  },

  stats: {
    eyebrow: 'En chiffres',
    title: 'La confiance, ça se mesure.',
    items: [
      { value: '24 h', label: 'Douala → N’Djamena' },
      { value: '3', label: 'Départs par semaine' },
      { value: '2 500 F', label: 'Le kilo, tout compris' },
      { value: '< 5 min', label: 'Temps de réponse WhatsApp' },
    ],
  },

  pricing: {
    eyebrow: 'Tarifs',
    title: 'Un prix au kilo, annoncé au dépôt.',
    subtitle:
      'Pas de frais cachés, pas de recalcul à l’arrivée. La balance est dans l’agence, et vous la voyez.',
    cta: 'Simuler mon envoi',
    note: 'Tarifs indicatifs. Les envois volumineux et l’électroménager font l’objet d’un devis.',
  },

  cta: {
    title: 'Un colis à envoyer ?',
    subtitle:
      'Déposez-le à l’agence de Douala, ou écrivez-nous sur WhatsApp. Nous nous occupons du reste.',
    primary: 'Envoyer un colis',
    secondary: 'Écrire sur WhatsApp',
  },

  footer: {
    about:
      'Al-Nadjah Express achemine vos colis entre le Cameroun, le Tchad et la Côte d’Ivoire depuis Douala. Rapidité, sécurité, fidélité.',
    company: 'Société',
    services: 'Services',
    legal: 'Légal',
    contactTitle: 'Contact',
    rights: 'Tous droits réservés.',
    douala: 'Douala, Cameroun',
    ndjamena: 'N’Djamena, Tchad',
    links: {
      about: 'Qui sommes-nous',
      team: 'Notre équipe',
      contact: 'Nous contacter',
      cgv: 'Conditions de transport',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      legal: 'Mentions légales',
    },
  },
} as const;

export type Messages = Localized<typeof fr>;
