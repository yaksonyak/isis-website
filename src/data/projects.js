import dmpeDossiers from '../assets/projects/dmpe-dossiers.webp';
import gestionScolaire from '../assets/projects/gestion-scolaire.webp';
import axelorLogo from '../assets/projects/axelor-logo.webp';
import dolibarrLogo from '../assets/projects/dolibarr-logo.webp';
import agristock from '../assets/projects/agristock-connexion.webp';

export const projects = [
  {
    id: 7,
    title: 'DMPe — Dossier Médical Patient électronique',
    sector: 'Secteur : Santé · Web & mobile hors connexion',
    category: 'Développement',
    image: dmpeDossiers,
    featured: true,
    description: "Plateforme complète pour les CSCOM et centres hospitaliers : du dossier patient aux statistiques sanitaires, avec une application mobile qui fonctionne sans connexion.",
    points: ['Dossiers patients', 'Statistiques sanitaires', 'Pharmacie & comptabilité', 'Mobile hors connexion'],
  },
  {
    id: 8,
    title: 'AgriStock — gestion de magasin agricole',
    sector: 'Secteur : Agriculture · Logiciel Windows hors connexion',
    category: 'Développement',
    image: agristock,
    featured: true,
    reverse: true,
    eyebrow: 'Notre logiciel',
    description: "Logiciel Windows qui gère le stock, les ventes et les comptes d'un magasin de produits agricoles. En français, en FCFA, et sans connexion internet.",
    points: ['Caisse & factures PDF', 'Ventes à crédit', 'Stock & inventaires', 'Rapports & export Excel'],
    link: '/agristock',
    linkLabel: 'Découvrir AgriStock',
  },
  {
    id: 1,
    title: 'Implémentation Axelor',
    sector: 'Secteur : Industrie',
    category: 'ERP',
    logo: axelorLogo,
  },
  {
    id: 2,
    title: 'Application de gestion scolaire',
    sector: 'Secteur : Éducation',
    category: 'Développement',
    image: gestionScolaire,
  },
  {
    id: 5,
    title: 'Intégration Dolibarr',
    sector: 'Secteur : Commerce',
    category: 'ERP',
    logo: dolibarrLogo,
  },
  {
    id: 3,
    title: 'Audit de sécurité IT',
    sector: 'Secteur : Finance',
    category: 'Audit',
  },
  {
    id: 4,
    title: 'Portail client sur mesure',
    sector: 'Secteur : Services',
    category: 'Développement',
  },
  {
    id: 6,
    title: 'Application mobile de terrain',
    sector: 'Secteur : Logistique',
    category: 'Développement',
  },
];

export const projectCategories = ['Tous', 'Développement', 'ERP', 'Audit', 'Conseil'];
