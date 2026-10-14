import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PatternBg } from './Illustrations';
import styles from './PageHero.module.css';

export default function PageHero({ title, titleEm, subtitle, breadcrumb }) {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.overlay} />
        <PatternBg className={styles.pattern} opacity={0.16} />
        <span className={styles.orb} />
        <span className={styles.orbRed} />
      </div>

      <div className={styles.inner}>
        {breadcrumb && (
          <div className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span className={styles.current}>{breadcrumb}</span>
          </div>
        )}

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}{title.endsWith('-') ? '' : ' '}{titleEm && <em>{titleEm}</em>}
        </motion.h1>

        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
