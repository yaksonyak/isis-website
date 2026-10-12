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
│   ├── Header.jsx / .module.css     # Navigation sticky + menu mobile plein écran
│   ├── Footer.jsx / .module.css     # Footer + appel à l'action
│   ├── PageHero.jsx / .module.css   # Entête pages internes (indigo + bogolan)
│   ├── Motifs.jsx                   # Illustrations SVG : bogolan, Djenné, couvertures
│   ├── serviceIcons.jsx             # Icônes des services
│   ├── ServiceList.jsx / .module.css # Liste numérotée des expertises
│   ├── Testimonials.jsx / .module.css # Carrousel de témoignages
│   ├── PartnerSection.jsx / .module.css # Bandeau défilant technologies
│   ├── Reveal.jsx                   # Animation d'apparition au scroll
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

## Direction artistique « Banco & Indigo »

Identité inspirée du Mali : l'indigo des teintures, l'ocre du banco de Djenné,
le sable du Sahel et les motifs du bogolan, alliés au corail et au bleu du logo.
Typographies : **Fraunces** (titres, serif) et **Manrope** (texte).

| Token | Valeur | Usage |
|---|---|---|
| `--ink` | `#0B1324` | Indigo nuit — fonds sombres, textes |
| `--ivory` | `#F8F4EC` | Sable clair — fond principal |
| `--sand` | `#EFE6D6` | Sections secondaires |
| `--clay` | `#B5562F` | Terre de banco — accents |
| `--ochre` | `#C99A4B` | Or sahélien — filets, accents sur fond sombre |
| `--coral` | `#F0544F` | Rouge du logo — survols, CTA |
| `--sky` | `#38B2F5` | Bleu du logo — le fleuve Niger |

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

Le site n'utilise **aucune photo de stock** : tous les visuels sont des
illustrations SVG originales (`src/components/Motifs.jsx`) inspirées du
patrimoine malien — Grande Mosquée de Djenné, fleuve Niger, motifs bogolan.
Les couvertures des réalisations et articles sont générées par catégorie.

Pour ajouter de vraies photos de l'équipe ISIS ou de vos projets à Bamako,
placez-les dans `src/assets/` et importez-les dans les pages concernées.
