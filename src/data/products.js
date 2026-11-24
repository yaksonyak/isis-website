import dmpeDossiers from '../assets/projects/dmpe-dossiers.webp';
import dmpeStats from '../assets/projects/dmpe-statistiques.webp';
import agristockProduits from '../assets/projects/agristock-produits.webp';
import agristockConnexion from '../assets/projects/agristock-connexion.webp';
import pharmaDashboard from '../assets/projects/isis-pharma-tableau-de-bord.webp';
import pharmaConnexion from '../assets/projects/isis-pharma-connexion.webp';
import gestionScolaire from '../assets/projects/gestion-scolaire.webp';

/*
 * Logiciels conçus par ISIS Consulting.
 * Pour en ajouter un : copier un bloc, changer le `slug` et le contenu.
 * Il apparaît alors dans « Réalisations » et obtient sa page /logiciels/<slug>.
 * `reasons` est facultatif.
 */
export const products = [
  {
    slug: 'dmpe',
    name: 'DMPe',
    title: 'DMPe — Dossier Médical Patient électronique',
    sector: 'Santé',
    platform: 'Web & mobile hors connexion',
    tagline: 'Le dossier médical patient électronique pour les CSCOM et centres hospitaliers.',
    headline: ['Du dossier patient aux', 'statistiques sanitaires'],
    description:
      "Une plateforme complète pour les CSCOM et centres hospitaliers : du dossier patient aux statistiques sanitaires, avec une application mobile qui fonctionne même sans connexion.",
    badges: ['Web & mobile', 'Hors connexion', 'CSCOM & hôpitaux'],
    points: ['Dossiers patients', 'Statistiques sanitaires', 'Pharmacie & comptabilité', 'Mobile hors connexion'],
    theme: { accent: '#1E88E5', dark: '#1565C0', light: '#E3F2FD', deep: '#0B1E3F' },
    screens: [
      { src: dmpeDossiers, alt: 'DMPe — liste des dossiers patients (données anonymisées)', caption: 'Dossiers patients' },
      { src: dmpeStats, alt: "DMPe — statistiques des activités curatives par tranche d'âge", caption: 'Statistiques sanitaires' },
    ],
    features: [
      {
        icon: 'file',
        title: 'Dossiers patients',
        items: ['Consultations', "Liste d'attente", 'Analyses', 'Rendez-vous et registre'],
      },
      {
        icon: 'chart',
        title: 'Statistiques sanitaires',
        items: ['Activités curatives', 'Accouchements', 'Vaccination et planning familial', 'Par région et par centre'],
      },
      {
        icon: 'receipt',
        title: 'Pharmacie & comptabilité',
        items: ['Gestion des stocks de médicaments', 'Suivi financier intégré'],
      },
      {
        icon: 'mobile',
        title: 'Application mobile hors connexion',
        items: ['Les agents de santé travaillent sans réseau', 'Les données se synchronisent automatiquement'],
      },
    ],
    cta: {
      title: 'Envie de voir le DMPe en action ?',
      subtitle: 'Contactez-nous pour une démonstration adaptée à votre structure de santé.',
    },
  },
  {
    slug: 'agristock',
    name: 'AgriStock',
    title: 'AgriStock — gestion de magasin agricole',
    sector: 'Agriculture',
    platform: 'Logiciel Windows hors connexion',
    tagline: 'La gestion de votre magasin agricole, simple et sans internet.',
    headline: ['Stock, ventes et comptes', 'au même endroit'],
    description:
      "AgriStock est un logiciel pour Windows qui gère le stock, les ventes et les comptes d'un magasin de produits agricoles. Il est entièrement en français, les montants sont en FCFA, et il fonctionne sans connexion internet. Vos données restent sur votre ordinateur.",
    badges: ['Sans internet', 'En français', 'Montants en FCFA', 'Pour Windows'],
    points: ['Caisse & factures PDF', 'Ventes à crédit', 'Stock & inventaires', 'Rapports & export Excel'],
    theme: { accent: '#15805A', dark: '#0F6648', light: '#E3F4EC', deep: '#0B3B2C' },
    screens: [
      { src: agristockProduits, alt: 'AgriStock — catalogue des produits avec références, catégories, stock et prix en FCFA', caption: 'Catalogue des produits' },
      { src: agristockConnexion, alt: "AgriStock — écran de connexion", caption: 'Écran de connexion' },
    ],
    features: [
      {
        icon: 'cart',
        title: 'Caisse et ventes',
        items: [
          'Encaissement rapide au comptoir',
          'Factures en PDF, à imprimer ou à envoyer',
          'Retours de marchandise',
          'Historique complet des ventes',
        ],
      },
      {
        icon: 'users',
        title: 'Clients et crédit',
        items: [
          'Fiche pour chaque client',
          'Ventes à crédit et suivi de ce que chaque client doit',
          'Enregistrement des remboursements',
        ],
      },
      {
        icon: 'box',
        title: 'Stock',
        items: [
          'Catalogue classé par catégorie : semences, engrais, produits phytosanitaires, matériel…',
          'Stock mis à jour automatiquement à chaque vente et à chaque achat',
          'Quantités en vrac ou au détail (kg, litres, sacs…)',
          'Inventaires physiques pour comparer le stock réel au stock du logiciel',
        ],
      },
      {
        icon: 'truck',
        title: 'Achats et fournisseurs',
        items: ['Liste des fournisseurs', 'Achats enregistrés avec entrée automatique en stock'],
      },
      {
        icon: 'receipt',
        title: 'Dépenses',
        items: [
          'Suivi des dépenses du magasin : transport, loyer, électricité…',
          'Justificatifs joints (photo ou PDF du reçu)',
        ],
      },
      {
        icon: 'chart',
        title: 'Tableau de bord et rapports',
        items: [
          "Vue d'ensemble de l'activité en un coup d'œil",
          'Rapports sur les ventes, le stock et les dépenses, avec graphiques',
          'Export des données vers Excel',
        ],
      },
      {
        icon: 'lock',
        title: 'Sécurité et contrôle',
        items: [
          'Un compte par employé, avec des droits adaptés à son rôle (gérant, vendeur…)',
          'Journal des opérations : qui a fait quoi, et quand',
          'Sauvegarde et restauration des données en quelques clics',
        ],
      },
      {
        icon: 'rocket',
        title: 'Mise en route facile',
        items: [
          'Import de votre catalogue existant, y compris une liste écrite à la main, une fois saisie',
          'Saisie guidée des prix et du stock de départ',
          'Installation simple sur un ordinateur Windows',
        ],
      },
    ],
    reasons: [
      { title: 'Fonctionne hors connexion', desc: "Pas d'abonnement internet nécessaire, pas de coupure de service." },
      { title: 'Adapté au terrain', desc: 'Conçu pour les magasins agricoles au Mali, en français et en FCFA.' },
      {
        title: "Moins d'erreurs, plus de contrôle",
        desc: 'Vous savez à tout moment ce que vous avez en stock, ce que vous avez vendu et ce que vos clients vous doivent.',
      },
    ],
    cta: {
      title: 'Envie de voir AgriStock en action ?',
      subtitle: 'Contactez-nous pour une démonstration et une mise en route dans votre magasin.',
    },
  },
  {
    slug: 'isis-pharma',
    name: 'ISIS Pharma',
    title: "ISIS Pharma — gestion d'officine",
    sector: 'Pharmacie',
    platform: 'Stock, caisse, comptabilité OHADA',
    tagline: "La gestion d'officine : stock, caisse et comptabilité OHADA.",
    headline: ['Toute la pharmacie', 'dans un seul outil'],
    description:
      "ISIS Pharma est un logiciel de gestion d'officine. Il réunit la vente au comptoir, le suivi du stock par lots avec les dates de péremption, les achats et la comptabilité OHADA, avec un tableau de bord pour suivre l'activité de la pharmacie.",
    badges: ["Gestion d'officine", 'Suivi des lots', 'Comptabilité OHADA', 'Montants en FCFA'],
    points: ['Terminal de vente', 'Stock & lots', 'Alertes de péremption', 'Comptabilité OHADA'],
    theme: { accent: '#0F766E', dark: '#0B5A54', light: '#DDF3F0', deep: '#14304D' },
    screens: [
      { src: pharmaDashboard, alt: "ISIS Pharma — tableau de bord : chiffre d'affaires, valeur du stock, caisses ouvertes et alertes de péremption", caption: 'Tableau de bord' },
      { src: pharmaConnexion, alt: 'ISIS Pharma — écran de connexion', caption: 'Écran de connexion' },
    ],
    features: [
      {
        icon: 'cart',
        title: 'Caisse et ventes',
        items: ['Terminal de vente', 'Historique des ventes', 'Sessions de caisse', 'Assureurs et tiers payants'],
      },
      {
        icon: 'box',
        title: 'Stock et achats',
        items: ['Produits et étiquettes code-barres', 'Stock suivi par lots', 'Inventaire tournant', 'Achats et réceptions'],
      },
      {
        icon: 'chart',
        title: 'Tableau de bord et alertes',
        items: [
          "Chiffre d'affaires du jour et du mois",
          'Valeur du stock et caisses ouvertes',
          'Produits sous le seuil et lots périmés',
          'Péremptions à moins de 90 jours',
        ],
      },
      {
        icon: 'receipt',
        title: 'Comptabilité OHADA',
        items: ['Comptabilité intégrée, au référentiel OHADA', 'Suivi des achats avec reste à payer'],
      },
    ],
    cta: {
      title: 'Envie de voir ISIS Pharma en action ?',
      subtitle: 'Contactez-nous pour une démonstration dans votre pharmacie.',
    },
  },
  {
    slug: 'gestion-scolaire',
    name: 'Gestion scolaire',
    title: 'Application de gestion scolaire',
    sector: 'Éducation',
    platform: 'Scolarité, facturation, comptabilité',
    tagline: "L'application de gestion pour les établissements scolaires.",
    headline: ["De l'inscription des élèves", "au budget de l'école"],
    description:
      "Une application de gestion pour les établissements scolaires : inscriptions, activité scolaire et enseignants d'un côté, facturation, dépenses, comptabilité et budget de l'autre, avec un tableau de bord pour suivre les effectifs.",
    badges: ['Établissements scolaires', 'Scolarité', 'Finances', 'Tableau de bord'],
    points: ['Inscriptions', 'Facturation', 'Comptabilité', 'Gestion budgétaire'],
    theme: { accent: '#5B5BD6', dark: '#4343B0', light: '#EBEBFB', deep: '#23234A' },
    screens: [
      { src: gestionScolaire, alt: "Application de gestion scolaire — tableau de bord : nombre d'élèves par sexe", caption: 'Tableau de bord' },
    ],
    features: [
      {
        icon: 'users',
        title: 'Scolarité',
        items: ['Inscriptions', 'Activité scolaire', 'Enseignants', 'Messages et documents'],
      },
      {
        icon: 'receipt',
        title: 'Finances',
        items: ['Facturation', 'Dépenses', 'Comptabilité'],
      },
      {
        icon: 'chart',
        title: 'Pilotage',
        items: ['Gestion budgétaire', 'Prévisions de trésorerie', "Tableau de bord : élèves par sexe, inscriptions par classe"],
      },
    ],
    cta: {
      title: "Envie de voir l'application en action ?",
      subtitle: 'Contactez-nous pour une démonstration dans votre établissement.',
    },
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
