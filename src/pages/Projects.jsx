import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Cover } from '../components/Illustrations';
import { projects, projectCategories } from '../data/projects';
import { products } from '../data/products';
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
        subtitle="Les logiciels que nous concevons et les missions menées pour nos clients à travers l'Afrique de l'Ouest."
        breadcrumb="Réalisations"
      />

      {/* ── LOGICIELS ISIS CONSULTING ── */}
      <section className={styles.productsSection}>
        <div className="section-eyebrow">CONÇUS PAR ISIS CONSULTING</div>
        <h2 className="section-title">Nos <em>logiciels</em></h2>
        <p className="section-sub">
          Des produits développés par nos équipes, pensés pour le terrain.
        </p>

        <div className={styles.products}>
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              className={`${styles.card} ${styles.featured} ${i % 2 ? styles.reverse : ''}`}
              style={{ '--accent': p.theme.accent, '--accent-dark': p.theme.dark, '--accent-light': p.theme.light }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <div className={styles.imgWrap}>
                <img src={p.screens[0].src} alt={p.screens[0].alt} loading="lazy" decoding="async" className={styles.shot} />
              </div>
              <div className={styles.info}>
                <span className={styles.featuredEye}>{p.sector} · {p.platform}</span>
                <h3>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>
                <ul className={styles.points}>
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <Link to={`/logiciels/${p.slug}`} className={`link-arrow ${styles.more}`}>
                  Découvrir {p.name} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── MISSIONS CLIENTS ── */}
      <section className={styles.section}>
        <div className="section-eyebrow">POUR NOS CLIENTS</div>
        <h2 className="section-title">Missions <em>réalisées</em></h2>
        <p className="section-sub">
          Intégration ERP, développement sur mesure et audit.
        </p>

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
                  <h3>{p.title}</h3>
                  <p>{p.sector}</p>
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
