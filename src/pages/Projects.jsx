import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { projects, projectCategories } from '../data/projects';
import styles from './Projects.module.css';

const BASE = 'https://images.unsplash.com';
const HERO_IMG = `${BASE}/photo-1522202176988-66273c2fd55f?w=1400&q=85&fit=crop&crop=center&auto=format`;

export default function Projects() {
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <main>
      <PageHero
        title="Nos"
        titleEm="réalisations"
        subtitle="Des projets concrets menés par nos équipes pour des clients à travers l'Afrique de l'Ouest."
        image={HERO_IMG}
        breadcrumb="Réalisations"
      />

      <section className={styles.section}>
        <div className="filter-bar">
          {projectCategories.map(cat => (
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
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
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
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.tag}>{p.category}</span>
                </div>
                <div className={styles.info}>
                  <h3>{p.title}</h3>
                  <p>{p.sector}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center" style={{ marginTop: 48 }}>
          <button className="btn-outline">Voir tous les projets</button>
        </div>
      </section>
    </main>
  );
}
