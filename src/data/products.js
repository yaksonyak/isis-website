import dmpeDossiers from '../assets/projects/dmpe-dossiers.webp';
import dmpeStats from '../assets/projects/dmpe-statistiques.webp';
import agristockProduits from '../assets/projects/agristock-produits.webp';
import agristockConnexion from '../assets/projects/agristock-connexion.webp';

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
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
