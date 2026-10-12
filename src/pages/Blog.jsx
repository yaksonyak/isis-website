import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Cover, ArrowIcon } from '../components/Motifs';
import { articles, blogCategories } from '../data/blog';
import styles from './Blog.module.css';

export default function Blog() {
  const [active, setActive] = useState('Tous');
  const filtered = active === 'Tous' ? articles : articles.filter((a) => a.category === active);
  const [featured, ...rest] = filtered;

  return (
    <main>
      <PageHero
        title="Le"
        titleEm="journal."
        subtitle="Articles techniques, bonnes pratiques IT et actualités de la transformation digitale en Afrique."
        breadcrumb="Journal"
        index="— Analyses & conseils"
      />

      <section className={styles.section}>
        <div className="container">
          <div className="filter-bar">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
            >
              {featured && (
                <article className={styles.featured}>
                  <div className={styles.featuredImg}>
                    <Cover category={featured.category} variant={featured.id} label={featured.title} />
                  </div>
                  <div className={styles.featuredBody}>
                    <span className={styles.meta}>{featured.category} · {featured.date}</span>
                    <h2>{featured.title}</h2>
                    <span className="link-arrow">Lire l'article <ArrowIcon /></span>
                  </div>
                </article>
              )}

              <div className={styles.grid}>
                {rest.map((a) => (
                  <article key={a.id} className={styles.card}>
                    <div className={styles.imgWrap}>
                      <Cover category={a.category} variant={a.id} label={a.title} />
                    </div>
                    <span className={styles.meta}>{a.category} · {a.date}</span>
                    <h3>{a.title}</h3>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
