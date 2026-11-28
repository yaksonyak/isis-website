import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  const { details } = project;
  const [shot, setShot] = useState(0);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const gallery = details.gallery || [];

  // Rendered in <body> so page-transition transforms can't offset it
  return createPortal(
    <motion.div
      className={styles.backdrop}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <button className={styles.close} onClick={onClose} aria-label="Fermer">×</button>

        {gallery.length > 0 && (
          <div className={styles.gallery}>
            <div className={styles.shotMain}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={shot}
                  src={gallery[shot].src}
                  alt={gallery[shot].alt}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
            </div>
            {gallery.length > 1 && (
              <div className={styles.thumbs}>
                {gallery.map((g, i) => (
                  <button
                    key={g.alt}
                    className={`${styles.thumb} ${i === shot ? styles.thumbActive : ''}`}
                    onClick={() => setShot(i)}
                    aria-label={g.alt}
                  >
                    <img src={g.src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className={styles.body}>
          <span className={styles.tag}>{project.category}</span>
          <h2 id="project-modal-title">{project.title}</h2>
          {details.tagline && <p className={styles.tagline}>{details.tagline}</p>}
          <p className={styles.sector}>{project.sector}</p>
          <p className={styles.summary}>{details.summary}</p>

          {details.modules && (
            <>
              <h3>{details.modulesTitle || 'Les modules'}</h3>
              <ul className={styles.modules}>
                {details.modules.map((m) => (
                  <li key={m.title}><strong>{m.title}</strong>{m.desc}</li>
                ))}
              </ul>
            </>
          )}

          {details.highlights && (
            <>
              <h3>{details.highlightsTitle || 'Règles métier maîtrisées'}</h3>
              <ul className={styles.highlights}>
                {details.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </>
          )}

          {details.url && (
            <a href={details.url} target="_blank" rel="noopener noreferrer" className="btn-red">
              Voir l'application en ligne →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
