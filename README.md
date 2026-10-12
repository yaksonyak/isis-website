# ISIS Consulting SARL — Site Web React

Site vitrine professionnel pour ISIS Consulting SARL, cabinet de conseil IT basé à Bamako, Mali.

## Stack technique

- **React 19** + **Vite**
- **React Router DOM v7** — navigation SPA
- **Framer Motion** — animations scroll et hover
- **CSS Modules** — styles scopés par composant

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
# → http://localhost:5173

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Architecture

```
src/
├── assets/
│   └── logos/
│       ├── logo.png                 # Logo original
│       └── logo-transparent.png     # Logo fond transparent (utilisé)
├── components/
│   ├── Header.jsx / .module.css     # Navigation sticky + menu mobile
│   ├── Footer.jsx / .module.css     # Footer 4 colonnes
│   ├── PageHero.jsx / .module.css   # Entête pages internes (dégradé + motif)
│   ├── ServiceCard.jsx / .module.css # Carte service (grid + detail)
│   ├── StatCard.jsx / .module.css   # Compteur animé
│   ├── Illustrations.jsx            # Illustrations SVG (dashboard, Bamako, couvertures)
│   ├── PartnerSection.jsx / .module.css
│   ├── TestimonialCard.jsx / .module.css
│   ├── CTASection.jsx / .module.css
│   └── ContactForm.jsx / .module.css
├── pages/
│   ├── Home.jsx / .module.css       # / 
│   ├── About.jsx / .module.css      # /about
│   ├── Services.jsx / .module.css   # /services
│   ├── Projects.jsx / .module.css   # /projects
│   ├── Blog.jsx / .module.css       # /blog
│   └── Contact.jsx / .module.css    # /contact
├── data/
│   ├── services.js
│   ├── projects.js
│   ├── blog.js
│   └── testimonials.js
├── styles/
│   ├── variables.css   # CSS custom properties globales
│   └── utils.css       # Classes utilitaires (boutons, labels)
├── App.jsx             # Router + ScrollToTop
└── main.jsx            # Entry point
```

## Couleurs & identité visuelle

| Token | Valeur | Usage |
|---|---|---|
| `--blue` | `#1E88E5` | Couleur principale |
| `--blue-dark` | `#1565C0` | Hover / gradient |
| `--red` | `#FF4D4F` | CTA / accent |
| `--dark` | `#0F172A` | Textes |
| `--gray` | `#64748B` | Corps de texte |

## Routes

| URL | Page |
|---|---|
| `/` | Accueil |
| `/about` | À propos |
| `/services` | Services |
| `/projects` | Réalisations |
| `/blog` | Blog |
| `/contact` | Contact |

## Visuels

Le site n'utilise plus de photos de stock : les visuels sont des illustrations
SVG aux couleurs ISIS (`src/components/Illustrations.jsx`) — tableau de bord
ERP en FCFA, Bamako au bord du Niger (tour BCEAO, pont, pirogue), motifs
inspirés du bogolan et couvertures générées par catégorie pour les
réalisations et articles.

Pour ajouter de vraies photos de l'équipe ou de vos projets à Bamako, placez-les
dans `src/assets/` et importez-les dans les pages concernées.
