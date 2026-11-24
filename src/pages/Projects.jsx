import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Cover } from '../components/Illustrations';
import { projects, projectCategories } from '../data/projects';
import styles from './Projects.module.css';

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
                className={`${styles.card} ${p.featured ? styles.featured : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.imgWrap}>
                  {p.logo ? (
                    <div className={styles.logoBox}>
                      <img src={p.logo} alt={`Logo ${p.title.replace(/^(Implémentation|Intégration) /, '')}`} loading="lazy" decoding="async" />
                    </div>
                  ) : p.image ? (
                    <img src={p.image} alt={`Capture d'écran — ${p.title}`} loading="lazy" decoding="async" className={styles.shot} />
                  ) : (
                    <Cover category={p.category} seed={p.id} label={p.title} />
                  )}
                  <span className={styles.tag}>{p.category}</span>
                </div>
                <div className={styles.info}>
                  {p.featured && <span className={styles.featuredEye}>Réalisation phare</span>}
                  <h3>{p.title}</h3>
                  <p>{p.sector}</p>
                  {p.description && <p className={styles.desc}>{p.description}</p>}
                  {p.points && (
                    <ul className={styles.points}>
                      {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <strong>Bientôt disponible</strong>
            Nos missions de {active.toLowerCase()} seront présentées ici prochainement.
          </div>
        )}
      </section>

      <CTASection
        title="Un projet similaire en tête ?"
        subtitle="Décrivez-nous votre besoin : nous revenons vers vous avec une proposition adaptée."
      />
    </main>
  );
}
