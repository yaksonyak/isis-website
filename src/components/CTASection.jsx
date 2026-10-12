import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './CTASection.module.css';

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function CTASection({
  title = "Prêt à démarrer votre projet ?",
  subtitle = "Parlons de vos besoins et construisons ensemble votre succès en Afrique de l'Ouest.",
  btnLabel = "Nous contacter",
}) {
  const navigate = useNavigate();

  return (
    <section className={styles.cta}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
      <motion.button
        className={styles.btn}
        onClick={() => navigate('/contact')}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(0,0,0,.2)' }}
      >
        {btnLabel} <ArrowIcon />
      </motion.button>
    </section>
  );
}
