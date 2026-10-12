import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Cover, ArrowIcon } from '../components/Motifs';
import { projects, projectCategories } from '../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const [active, setActive] = useState('Tous');
  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.category === active);

  return (
    <main>
      <PageHero
        title="Nos"
        titleEm="réalisations."
        subtitle="Des projets concrets menés par nos équipes pour des clients à travers l'Afrique de l'Ouest."
        breadcrumb="Réalisations"
        index={`— ${projects.length} études de cas`}
      />

      <section className={styles.section}>
        <div className="container">
          <div className="filter-bar">
            {projectCategories.map((cat) => (
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
                <motion.article
                  key={p.id}
                  className={styles.card}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className={styles.imgWrap}>
                    <Cover category={p.category} variant={p.id} label={p.title} />
                    <span className={styles.tag}>{p.category}</span>
                    <span className={styles.num}>{String(p.id).padStart(2, '0')}</span>
                  </div>
                  <div className={styles.info}>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.sector.replace('Secteur : ', '')}</p>
                    </div>
                    <span className={styles.arrow}><ArrowIcon size={16} /></span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
