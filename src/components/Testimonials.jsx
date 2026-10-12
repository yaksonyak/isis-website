import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BogolanPattern } from './Motifs';
import styles from './Testimonials.module.css';

export default function Testimonials({ items }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, [items.length, i]);

  const t = items[i];

  return (
    <section className={styles.section}>
      <BogolanPattern color="#C99A4B" opacity={0.1} className={styles.pattern} />
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className="section-eyebrow" style={{ color: 'var(--ochre)' }}>Témoignages</div>
          <div className={styles.counter}>
            <span>0{i + 1}</span> / 0{items.length}
          </div>
        </div>

        <div className={styles.quoteMark} aria-hidden="true">“</div>

        <AnimatePresence mode="wait">
          <motion.figure
            key={t.id}
            className={styles.figure}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <blockquote className={styles.text}>{t.text}</blockquote>
            <figcaption className={styles.author}>
              <span className={styles.avatar}>{t.initials}</span>
              <span>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <div className={styles.dots} role="tablist" aria-label="Choisir un témoignage">
          {items.map((it, n) => (
            <button
              key={it.id}
              role="tab"
              aria-selected={n === i}
              aria-label={`Témoignage ${n + 1}`}
              className={`${styles.dot} ${n === i ? styles.dotActive : ''}`}
              onClick={() => setI(n)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
