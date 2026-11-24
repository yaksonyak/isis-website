import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PatternBg } from './Illustrations';
import styles from './CTASection.module.css';

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.09-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
  </svg>
);

export default function CTASection({
  title = "Prêt à démarrer votre projet ?",
  subtitle = "Parlons de vos besoins et construisons ensemble votre succès en Afrique de l'Ouest.",
  btnLabel = "Nous contacter",
}) {
  return (
    <section className={styles.cta}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <PatternBg className={styles.pattern} opacity={0.14} />
        <span className={styles.orb} />
        <span className={styles.orbRed} />

        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={styles.actions}>
          <Link to="/contact" className={styles.btn}>
            {btnLabel} <ArrowIcon />
          </Link>
          <a href="tel:+22366614663" className={styles.phone}>
            <PhoneIcon /> +223 66 61 46 63
          </a>
        </div>
      </motion.div>
    </section>
  );
}
