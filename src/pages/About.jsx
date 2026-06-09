import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import styles from './About.module.css';

const BASE = 'https://images.unsplash.com';
const HERO_IMG = `${BASE}/photo-1521737711867-e3b97375f902?w=1400&q=85&fit=crop&crop=center&auto=format`;
const CORP_IMG = `${BASE}/photo-1504384308090-c894fdcc538d?w=800&q=85&fit=crop&crop=center&auto=format`;

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const initial = direction === 'left' ? { opacity: 0, x: -32 }
    : direction === 'right' ? { opacity: 0, x: 32 }
    : { opacity: 0, y: 28 };
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
};

const VALEURS = [
  { icon: '🏆', title: 'Excellence', desc: 'Nous nous engageons à livrer des solutions de la plus haute qualité à chaque projet.' },
  { icon: '💡', title: 'Innovation', desc: 'Toujours à la pointe des technologies pour vous offrir les meilleures solutions adaptées à l\'Afrique.' },
  { icon: '🤝', title: 'Engagement', desc: 'Un accompagnement dédié et une relation de confiance durable avec nos partenaires.' },
  { icon: '🔒', title: 'Intégrité', desc: 'Transparence et honnêteté dans toutes nos interactions et partenariats.' },
];

export default function About() {
  return (
    <main>
      <PageHero
        title="À propos de"
        titleEm="nous"
        subtitle="Découvrez notre équipe, notre vision et les valeurs qui guident notre mission en Afrique de l'Ouest."
        image={HERO_IMG}
        breadcrumb="À propos"
      />

      {/* ── QUI SOMMES-NOUS ── */}
      <section className={styles.introSection}>
        <div className={styles.introGrid}>
          <FadeIn direction="left">
            <div className={styles.introText}>
              <div className={styles.eye}>QUI SOMMES-NOUS ?</div>
              <h2>ISIS Consulting <em>SARL</em></h2>
              <p>
                Fondée à Bamako au Mali, ISIS Consulting SARL est une société de
                conseil et de services informatiques. Nous accompagnons les
                entreprises et organisations d'Afrique de l'Ouest dans leurs
                projets digitaux grâce à des solutions innovantes adaptées au
                contexte africain.
              </p>
              <p>
                Nos équipes de consultants, développeurs et auditeurs locaux
                combinent expertise technique internationale et connaissance
                approfondie du terrain pour livrer des solutions à la hauteur
                de vos ambitions.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className={styles.corpWrap}>
              <img
                src={CORP_IMG}
                srcSet={`${BASE}/photo-1504384308090-c894fdcc538d?w=600&q=80&fit=crop&crop=center&auto=format 600w,
                         ${BASE}/photo-1504384308090-c894fdcc538d?w=800&q=85&fit=crop&crop=center&auto=format 800w,
                         ${BASE}/photo-1504384308090-c894fdcc538d?w=1200&q=85&fit=crop&crop=center&auto=format 1200w`}
                sizes="(max-width: 900px) 100vw, 45vw"
                alt="Équipe ISIS Consulting au travail dans un bureau moderne"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── VISION MISSION VALEURS ── */}
      <section className={styles.vmvSection}>
        <div className="section-eyebrow">NOTRE ADN</div>
        <h2 className="section-title">Vision, Mission & <em>Valeurs</em></h2>
        <div className={styles.vmvGrid}>
          {[
            { icon: '👁️', title: 'Notre vision', desc: 'Devenir un acteur de référence en Afrique de l\'Ouest dans l\'accompagnement à la transformation digitale des entreprises et organisations.' },
            { icon: '🎯', title: 'Notre mission', desc: 'Fournir des solutions IT innovantes et performantes pour améliorer la productivité et la compétitivité de nos clients africains.' },
            { icon: '⭐', title: 'Nos valeurs', desc: 'Excellence, Innovation, Engagement et Intégrité sont les piliers de toutes nos actions et décisions.' },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className={styles.vmvCard}>
                <div className={styles.vmvIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── VALEURS FONDAMENTALES ── */}
      <section className={styles.valeursSection}>
        <h2 className="section-title">Nos <em>valeurs</em> fondamentales</h2>
        <div className={styles.valeursGrid}>
          {VALEURS.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <motion.div
                className={styles.valeurItem}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,.1)' }}
              >
                <div className={styles.valeurDot}>{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <PartnerSection eyebrow="NOS PARTENAIRES TECHNOLOGIQUES" />
    </main>
  );
}
