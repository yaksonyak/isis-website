import { motion } from 'framer-motion';
import styles from './PartnerSection.module.css';

const PARTNERS = [
  { name: 'Axelor', role: 'ERP open source', color: '#1E88E5' },
  { name: 'Dolibarr', role: 'ERP & CRM', color: '#263C5C' },
  { name: 'Java', role: 'Back-end', color: '#E65100' },
  { name: 'Spring Boot', role: 'Framework', color: '#6DB33F' },
  { name: 'Angular', role: 'Front-end', color: '#DD0031' },
  { name: 'Flutter', role: 'Mobile', color: '#0468D7' },
];

export default function PartnerSection({ eyebrow = 'NOS TECHNOLOGIES & PARTENAIRES' }) {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <motion.ul
        className={styles.logos}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {PARTNERS.map((p) => (
          <li key={p.name} className={styles.logo} style={{ '--c': p.color }}>
            <span className={styles.dot} />
            <span>
              <strong>{p.name}</strong>
              <small>{p.role}</small>
            </span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
