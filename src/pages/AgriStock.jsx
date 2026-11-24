import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { PatternBg } from '../components/Illustrations';
import { agristockFeatures, agristockReasons } from '../data/agristock';
import screenshot from '../assets/projects/agristock-connexion.webp';
import styles from './AgriStock.module.css';

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
  rocket: svg(<><path d="M12 15l-3-3c1-5 4-9 10-10-1 6-5 9-10 10z" transform="translate(1 0)" /><path d="M9 12H5l-2 3 4 1M12 15v4l3 2 1-4" /><circle cx="15.5" cy="8.5" r="1.5" /></>),
};

const BADGES = ['Sans internet', 'En français', 'Montants en FCFA', 'Pour Windows'];

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function AgriStock() {
  return (
    <main>
      <PageHero
        title="AgriStock —"
        titleEm="votre magasin agricole"
        subtitle="La gestion de votre magasin agricole, simple et sans internet."
        breadcrumb="AgriStock"
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
            <div className={styles.eye}>NOTRE LOGICIEL</div>
            <h2>
              Stock, ventes et comptes <em>au même endroit</em>
            </h2>
            <p>
              AgriStock est un logiciel pour Windows qui gère le stock, les
              ventes et les comptes d'un magasin de produits agricoles. Il est
              entièrement en français, les montants sont en FCFA, et il
              fonctionne sans connexion internet. Vos données restent sur
              votre ordinateur.
            </p>
            <ul className={styles.badges}>
              {BADGES.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <Link to="/contact" className={`btn-red ${styles.green}`}>
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
              <img
                src={screenshot}
                alt="Écran de connexion d'AgriStock : gestion de stock et de ventes pour le commerce agricole"
                width="1600"
                height="836"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FONCTIONNALITÉS ── */}
      <section className={styles.features}>
        <div className="section-eyebrow">FONCTIONNALITÉS</div>
        <h2 className="section-title">Tout ce qu'il faut pour <em>gérer le magasin</em></h2>
        <p className="section-sub">
          De la caisse aux rapports, chaque opération du quotidien est couverte.
        </p>
        <div className={styles.grid}>
          {agristockFeatures.map((f, i) => (
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

      {/* ── POURQUOI ── */}
      <section className={styles.why}>
        <PatternBg className={styles.whyPattern} opacity={0.07} />
        <div className={styles.whyInner}>
          <h2>Pourquoi choisir AgriStock ?</h2>
          <div className={styles.whyGrid}>
            {agristockReasons.map((r, i) => (
              <div key={r.title} className={styles.reason}>
                <span className={styles.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Envie de voir AgriStock en action ?"
        subtitle="Contactez-nous pour une démonstration et une mise en route dans votre magasin."
        btnLabel="Demander une démonstration"
      />
    </main>
  );
}
