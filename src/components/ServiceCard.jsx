import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ICONS = {
  code: (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  erp: (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <rect x="6" y="7" width="12" height="2" rx="1" />
      <rect x="6" y="11" width="8" height="2" rx="1" />
    </svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  broadcast: (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  ),
  graduation: (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};

const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ServiceCard({ service, delay = 0, variant = 'grid' }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`${styles.card} ${variant === 'detail' ? styles.detail : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -10 }}
    >
      <div className={styles.icon}>
        {ICONS[service.icon]}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      {variant === 'detail' && service.details && (
        <ul className={styles.detailList}>
          {service.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}

      <button className={styles.link} onClick={() => navigate('/services')}>
        En savoir plus <ArrowIcon />
      </button>
    </motion.div>
  );
}
