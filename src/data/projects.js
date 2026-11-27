import dmpeDossiers from '../assets/projects/dmpe-dossiers.webp';
import gestionScolaire from '../assets/projects/gestion-scolaire.webp';
import axelorLogo from '../assets/projects/axelor-logo.webp';
import dolibarrLogo from '../assets/projects/dolibarr-logo.webp';
import dmpeStats from '../assets/projects/dmpe-statistiques.webp';
import schoolDashboard from '../assets/projects/school-dashboard.webp';
import schoolFinances from '../assets/projects/school-finances.webp';
import schoolPaiements from '../assets/projects/school-paiements.webp';

export const projects = [
  {
    id: 7,
    title: 'DMPe — Dossier Médical Patient électronique',
    sector: 'Secteur : Santé · Web & mobile hors connexion',
    category: 'Développement',
    image: dmpeDossiers,
    details: {
      summary:
        "Plateforme de dossier médical patient électronique pour les CSCOM et centres hospitaliers, avec une application mobile qui fonctionne sans connexion et se synchronise dès le retour du réseau.",
      modules: [
        { title: 'Dossiers patients', desc: "Consultations, liste d'attente, analyses, rendez-vous et registre." },
        { title: 'Statistiques sanitaires', desc: 'Activités curatives, accouchements, morbidité/mortalité, planning familial, vaccination — par région et par centre.' },
        { title: 'Pharmacie & comptabilité', desc: 'Gestion des médicaments et suivi financier intégrés.' },
        { title: 'Application mobile hors connexion', desc: 'Les agents de santé travaillent sans réseau ; synchronisation automatique.' },
      ],
      gallery: [
        { src: dmpeDossiers, alt: 'DMPe — liste des dossiers patients (données anonymisées)' },
        { src: dmpeStats, alt: 'DMPe — statistiques des activités curatives' },
      ],
    },
  },
  {
    id: 8,
    title: 'ISIS School Manager — ERP de gestion scolaire',
    sector: 'Secteur : Éducation · Multi-écoles',
    category: 'ERP',
    image: schoolDashboard,
    details: {
      summary:
        "ERP web de gestion scolaire : une seule installation sert plusieurs écoles (Collège NOOR, École de démonstration), et chaque utilisateur voit les menus de son rôle (ADMIN, DIRECTION…). Pensé pour le système malien : cycles Préscolaire, Fondamental 1 et 2, Secondaire, montants en FCFA, téléphones au format +223.",
      url: 'https://erp-college-noor.ml',
      modules: [
        { title: 'Paramètres', desc: "Années scolaires, trimestres, niveaux (frais d'inscription, scolarité annuelle, moyenne de passage), salles et matières avec coefficient." },
        { title: 'Scolarité', desc: "Classes, élèves avec matricule automatique, inscriptions et import Excel. Le montant dû est calculé automatiquement à partir du niveau." },
        { title: 'Pédagogie', desc: 'Affectation des cours, créneaux horaires et emplois du temps par classe, professeur ou salle, avec impression.' },
        { title: 'Finances', desc: 'Situation des familles (attendu, encaissé, reste, taux de recouvrement, export CSV), reçus PDF numérotés, échéanciers avec relance des retards, dépenses.' },
        { title: 'Tableau de bord', desc: 'Effectifs, encaissements du jour et du mois, dépenses, absences, cantine, transport et alertes de stock.' },
        { title: 'Et aussi', desc: 'Évaluations, vie scolaire, personnel, stock, cantine, transport, comptabilité et administration.' },
      ],
      highlights: [
        "Conflits d'emploi du temps refusés (même professeur ou même salle au même moment), avec messages précis",
        'Double inscription sur la même année refusée',
        "Échéancier : total des tranches supérieur au montant dû refusé",
        'Chiffres cohérents entre le tableau de bord et la situation des familles',
      ],
      gallery: [
        { src: schoolDashboard, alt: 'ISIS School Manager — tableau de bord' },
        { src: schoolFinances, alt: 'ISIS School Manager — situation financière des familles (noms masqués)' },
        { src: schoolPaiements, alt: 'ISIS School Manager — paiements des familles avec reçus PDF (noms masqués)' },
      ],
    },
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
