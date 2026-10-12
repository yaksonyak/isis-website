import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BogolanPattern } from './Motifs';
import styles from './PageHero.module.css';

export default function PageHero({ title, titleEm, subtitle, breadcrumb, index }) {
  return (
    <section className={styles.hero}>
      <BogolanPattern color="#C99A4B" opacity={0.16} className={styles.pattern} />
      <div className={styles.sun} aria-hidden="true" />

      <div className={styles.inner}>
        {breadcrumb && (
          <div className={styles.breadcrumb}>
            <Link to="/">Accueil</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.current}>{breadcrumb}</span>
          </div>
        )}

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {title} {titleEm && <em>{titleEm}</em>}
        </motion.h1>

        <div className={styles.row}>
          {subtitle && (
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {subtitle}
            </motion.p>
          )}
          {index && <span className={styles.index}>{index}</span>}
        </div>
      </div>
    </section>
  );
}
