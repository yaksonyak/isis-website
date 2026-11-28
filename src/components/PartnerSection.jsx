import { motion } from 'framer-motion';
import styles from './PartnerSection.module.css';

const PARTNERS = [
  { name: 'AXELOR', style: { color: '#1E88E5', fontSize: '22px' }, highlight: { color: '#FF4D4F' }, highlightChar: 'L' },
  { name: 'Dolibarr', style: { color: '#2196F3', fontSize: '22px' } },
  { name: 'Java', style: { color: '#E65100', fontSize: '20px' } },
  { name: 'Spring', style: { color: '#6db33f', fontSize: '20px' } },
  { name: 'Angular', style: { color: '#DD0031', fontSize: '20px' } },
  { name: 'Flutter', style: { color: '#02569B', fontSize: '20px' } },
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
                <div key={`${p.name}-${i}`} className={styles.logo} style={{ ...p.style, fontWeight: 800 }}>
                  {p.name === 'AXELOR' ? (
                    <>AXE<span style={{ color: '#FF4D4F' }}>L</span>ØR</>
                  ) : (
                    p.name
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
