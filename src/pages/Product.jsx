import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { PatternBg } from '../components/Illustrations';
import { getProduct, products } from '../data/products';
import styles from './Product.module.css';

const svg = (d) => (
  <svg fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{d}</svg>
);

const ICONS = {
  cart: svg(<><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6" /></>),
  users: svg(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>),
  box: svg(<><path d="M21 8l-9-5-9 5v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>),
  truck: svg(<><rect x="1" y="6" width="14" height="11" rx="1" /><path d="M15 10h4l3 3v4h-7z" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>),
  receipt: svg(<><path d="M5 2h14v20l-3-2-2 2-2-2-2 2-2-2-3 2z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" /></>),
  chart: svg(<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>),
  lock: svg(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>),
  rocket: svg(<><path d="M13 15l-3-3c1-5 4-9 10-10-1 6-5 9-10 10z" /><path d="M9 12H5l-2 3 4 1M12 15v4l3 2 1-4" /><circle cx="15.5" cy="8.5" r="1.5" /></>),
  file: svg(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></>),
  mobile: svg(<><rect x="6" y="2" width="12" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>),
};

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Product() {
  const { slug } = useParams();
  const product = getProduct(slug);
  if (!product) return <Navigate to="/projects" replace />;

  const { theme, screens } = product;
  const others = products.filter((p) => p.slug !== product.slug);
  const cols = Math.min(product.features.length, 4);

  return (
    <main
      key={product.slug}
      className={styles.page}
      style={{ '--accent': theme.accent, '--accent-dark': theme.dark, '--accent-light': theme.light, '--deep': theme.deep }}
    >
      <PageHero
        title={`${product.name} —`}
        titleEm={product.sector.toLowerCase()}
        subtitle={product.tagline}
        breadcrumb={product.name}
        parent={{ to: '/projects', label: 'Réalisations' }}
      />

      {/* ── PRÉSENTATION ── */}
      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.eye}>UN LOGICIEL ISIS CONSULTING</div>
            <h2>
              {product.headline[0]} <em>{product.headline[1]}</em>
            </h2>
            <p>{product.description}</p>
            <ul className={styles.badges}>
              {product.badges.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <Link to="/contact" className={`btn-red ${styles.accentBtn}`}>
              Demander une démonstration <ArrowIcon />
            </Link>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.window}>
              <img src={screens[0].src} alt={screens[0].alt} decoding="async" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FONCTIONNALITÉS ── */}
      <section className={styles.features}>
        <div className="section-eyebrow">FONCTIONNALITÉS</div>
        <h2 className="section-title">Ce que fait <em>{product.name}</em></h2>
        <div className={styles.grid} style={{ '--cols': cols }}>
          {product.features.map((f, i) => (
            <motion.article
              key={f.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            >
              <div className={styles.icon}>{ICONS[f.icon]}</div>
              <h3>{f.title}</h3>
              <ul>
                {f.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── APERÇU ── */}
      {screens.length > 1 && (
        <section className={styles.gallery}>
          <div className="section-eyebrow">APERÇU</div>
          <h2 className="section-title">{product.name} <em>en images</em></h2>
          <div className={styles.shots}>
            {screens.map((s) => (
              <figure key={s.src} className={styles.shot}>
                <div className={styles.window}>
                  <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                </div>
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── POURQUOI ── */}
      {product.reasons && (
        <section className={styles.why}>
          <PatternBg className={styles.whyPattern} opacity={0.07} />
          <div className={styles.whyInner}>
            <h2>Pourquoi choisir {product.name} ?</h2>
            <div className={styles.whyGrid}>
              {product.reasons.map((r, i) => (
                <div key={r.title} className={styles.reason}>
                  <span className={styles.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AUTRES LOGICIELS ── */}
      {others.length > 0 && (
        <section className={styles.others}>
          <div className={styles.othersInner}>
            <h2>Nos autres logiciels</h2>
            <div className={styles.othersList}>
              {others.map((o) => (
                <Link key={o.slug} to={`/logiciels/${o.slug}`} className={styles.other} style={{ '--c': o.theme.accent, '--cl': o.theme.light }}>
                  <img src={o.screens[0].src} alt="" loading="lazy" decoding="async" />
                  <span>
                    <strong>{o.name}</strong>
                    <small>{o.sector} · {o.platform}</small>
                  </span>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={product.cta.title}
        subtitle={product.cta.subtitle}
        btnLabel="Demander une démonstration"
      />
    </main>
  );
}
