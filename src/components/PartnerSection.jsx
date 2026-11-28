import { useState } from 'react';
import { motion } from 'framer-motion';
import aspPsm from '../assets/partners/asp-psm.webp';
import aRevet from '../assets/partners/a-revet.webp';
import isa from '../assets/partners/isa-koulikoro.webp';
import icones from '../assets/partners/icones.webp';
import noor from '../assets/partners/college-noor.webp';
import smtd from '../assets/partners/smtd.webp';
import styles from './PartnerSection.module.css';

// `short` is shown big on the back of the card, `full` spells it out.
const PARTNERS = [
  {
    name: 'ASP-PSM', short: 'ASP-PSM', logo: aspPsm, sector: 'Santé',
    full: 'Alliance du Secteur Privé pour la Promotion de la Santé au Mali',
  },
  {
    name: 'A-REVET', short: 'A-REVET', logo: aRevet, sector: 'Revêtements', wide: true,
    full: 'Les revêtements et plus',
  },
  {
    name: 'I.S.A Koulikoro', short: 'I.S.A', logo: isa, sector: 'Enseignement',
    full: 'Institut des Sciences Appliquées — Koulikoro',
  },
  {
    name: 'Icônes', short: 'Icônes', logo: icones, sector: 'Éducation',
    full: 'Icônes Complexe Scolaire',
  },
  {
    name: 'Collège NOOR', short: 'NOOR', logo: noor, sector: 'Éducation',
    full: 'Collège NOOR',
  },
  {
    name: 'SMTD', short: 'SMTD', logo: smtd, sector: 'Diffusion', wide: true,
    full: 'Société Malienne de Transmission et de Diffusion',
  },
];

function PartnerCard({ p, i }) {
  // Hover/focus flip the card on desktop; a tap toggles it on touch screens
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.li
      className={styles.cell}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <button
        type="button"
        className={`${styles.card} ${flipped ? styles.flipped : ''}`}
        onClick={() => setFlipped((f) => !f)}
        onMouseLeave={() => setFlipped(false)}
        aria-label={`${p.name} : ${p.full} (${p.sector})`}
      >
        <span className={styles.inner}>
          {/* Front: logo */}
          <span className={styles.front}>
            <span className={styles.logoBox}>
              <img
                src={p.logo}
                alt=""
                className={p.wide ? styles.wide : styles.square}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className={styles.caption}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.sector}>{p.sector}</span>
            </span>
          </span>

          {/* Back: what the name stands for */}
          <span className={styles.back} aria-hidden="true">
            <span className={styles.backGlow} />
            <span className={styles.short}>{p.short}</span>
            <span className={styles.rule} />
            <span className={styles.full}>{p.full}</span>
            <span className={styles.chip}>{p.sector}</span>
          </span>
        </span>
      </button>
    </motion.li>
  );
}

export default function PartnerSection({ eyebrow = 'ILS NOUS FONT CONFIANCE' }) {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.head}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h2 className={styles.title}>
          Des organisations maliennes qui <em>avancent avec nous</em>
        </h2>
        <p className={styles.hint}>Survolez ou touchez un logo pour découvrir le partenaire.</p>
      </motion.div>

      <ul className={styles.grid}>
        {PARTNERS.map((p, i) => <PartnerCard key={p.name} p={p} i={i} />)}
      </ul>
    </section>
  );
}
