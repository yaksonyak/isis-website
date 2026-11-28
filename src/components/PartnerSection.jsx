import { motion } from 'framer-motion';
import aRevet from '../assets/partners/a-revet.webp';
import isa from '../assets/partners/isa-koulikoro.webp';
import icones from '../assets/partners/icones.webp';
import noor from '../assets/partners/college-noor.webp';
import smtd from '../assets/partners/smtd.webp';
import aspPsm from '../assets/partners/asp-psm.webp';
import styles from './PartnerSection.module.css';

const PARTNERS = [
  { name: "ASP-PSM — Alliance du Secteur Privé pour la Promotion de la Santé au Mali", logo: aspPsm, tall: true },
  { name: 'A-REVET — Les revêtements et plus', logo: aRevet },
  { name: 'Institut des Sciences Appliquées (I.S.A) — Koulikoro', logo: isa, tall: true },
  { name: 'Icônes Complexe Scolaire', logo: icones, tall: true },
  { name: 'Collège NOOR', logo: noor, tall: true },
  { name: 'SMTD — Société Malienne de Transmission et de Diffusion', logo: smtd },
];

// Two identical runs side by side; the track slides by exactly one run.
const RUN = [...PARTNERS, ...PARTNERS];

export default function PartnerSection({ eyebrow = 'ILS NOUS FONT CONFIANCE' }) {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <motion.div
        className={styles.marquee}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div className={styles.run} key={copy} aria-hidden={copy === 1}>
              {RUN.map((p, i) => (
                <div key={`${p.name}-${i}`} className={`${styles.logo} ${p.tall ? styles.tall : ''}`} title={p.name}>
                  <img src={p.logo} alt={copy === 0 && i < PARTNERS.length ? p.name : ''} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
