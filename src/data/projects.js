import dmpeDossiers from '../assets/projects/dmpe-dossiers.webp';
import gestionScolaire from '../assets/projects/gestion-scolaire.webp';
import axelorLogo from '../assets/projects/axelor-logo.webp';

export const projects = [
  {
    id: 7,
    title: 'DMPe — Dossier Médical Patient électronique',
    sector: 'Secteur : Santé · Web & mobile hors connexion',
    category: 'Développement',
    image: dmpeDossiers,
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
    id: 5,
    title: 'Intégration Dolibarr',
    sector: 'Secteur : Commerce',
    category: 'ERP',
  },
  {
    id: 6,
    title: 'Application mobile de terrain',
    sector: 'Secteur : Logistique',
    category: 'Développement',
  },
];

export const projectCategories = ['Tous', 'Développement', 'ERP', 'Audit', 'Conseil'];
