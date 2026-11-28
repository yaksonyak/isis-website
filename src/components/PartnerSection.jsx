import { motion } from 'framer-motion';
import aspPsm from '../assets/partners/asp-psm.webp';
import aRevet from '../assets/partners/a-revet.webp';
import isa from '../assets/partners/isa-koulikoro.webp';
import icones from '../assets/partners/icones.webp';
import noor from '../assets/partners/college-noor.webp';
import smtd from '../assets/partners/smtd.webp';
import styles from './PartnerSection.module.css';

const PARTNERS = [
  { name: 'ASP-PSM', full: 'Alliance du Secteur Privé pour la Promotion de la Santé au Mali', logo: aspPsm, sector: 'Santé' },
  { name: 'A-REVET', full: 'A-REVET — Les revêtements et plus', logo: aRevet, sector: 'Revêtements', wide: true },
  { name: 'I.S.A Koulikoro', full: 'Institut des Sciences Appliquées — Koulikoro', logo: isa, sector: 'Enseignement' },
  { name: 'Icônes', full: 'Icônes Complexe Scolaire', logo: icones, sector: 'Éducation' },
  { name: 'Collège NOOR', full: 'Collège NOOR', logo: noor, sector: 'Éducation' },
  { name: 'SMTD', full: 'Société Malienne de Transmission et de Diffusion', logo: smtd, sector: 'Diffusion', wide: true },
];

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
      </motion.div>

      <ul className={styles.grid}>
        {PARTNERS.map((p, i) => (
          <motion.li
            key={p.name}
            className={styles.tile}
            title={p.full}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className={styles.logoBox}>
              <img
                src={p.logo}
                alt={p.full}
                className={p.wide ? styles.wide : styles.square}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.caption}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.sector}>{p.sector}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
