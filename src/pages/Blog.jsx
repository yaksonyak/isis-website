import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { articles, blogCategories } from '../data/blog';
import styles from './Blog.module.css';

const BASE = 'https://images.unsplash.com';
const HERO_IMG = `${BASE}/photo-1573496799652-408c2ac9fe98?w=1400&q=85&fit=crop&crop=faces,center&auto=format`;

export default function Blog() {
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous'
    ? articles
    : articles.filter(a => a.category === active);

  return (
    <main>
      <PageHero
        title="Blog /"
        titleEm="Actualités"
        subtitle="Articles techniques, bonnes pratiques IT et actualités de la transformation digitale en Afrique."
        image={HERO_IMG}
        breadcrumb="Blog"
      />

      <section className={styles.section}>
        <div className="filter-bar">
          {blogCategories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((a, i) => (
              <motion.article
                key={a.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.imgWrap}>
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.tag}>{a.category}</span>
                </div>
                <div className={styles.body}>
                  <h3>{a.title}</h3>
                  <p className={styles.date}>{a.date}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center" style={{ marginTop: 48 }}>
          <button className="btn-outline">Voir tous les articles</button>
        </div>
      </section>
    </main>
  );
}
