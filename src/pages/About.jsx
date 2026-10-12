import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import { BamakoArt } from '../components/Illustrations';
import styles from './About.module.css';


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
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 6h3a3 3 0 0 1-3 4M7 6H4a3 3 0 0 0 3 4" /></svg>, title: 'Excellence', desc: 'Nous nous engageons à livrer des solutions de la plus haute qualité à chaque projet.' },
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z" /></svg>, title: 'Innovation', desc: 'Toujours à la pointe des technologies pour vous offrir les meilleures solutions adaptées à l\'Afrique.' },
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>, title: 'Engagement', desc: 'Un accompagnement dédié et une relation de confiance durable avec nos partenaires.' },
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>, title: 'Intégrité', desc: 'Transparence et honnêteté dans toutes nos interactions et partenariats.' },
];

export default function About() {
  return (
    <main>
      <PageHero
        title="À propos de"
        titleEm="nous"
        subtitle="Découvrez notre équipe, notre vision et les valeurs qui guident notre mission en Afrique de l'Ouest."
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
              <BamakoArt className={styles.corpArt} />
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
            { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>, title: 'Notre vision', desc: 'Devenir un acteur de référence en Afrique de l\'Ouest dans l\'accompagnement à la transformation digitale des entreprises et organisations.' },
            { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>, title: 'Notre mission', desc: 'Fournir des solutions IT innovantes et performantes pour améliorer la productivité et la compétitivité de nos clients africains.' },
            { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2" /></svg>, title: 'Nos valeurs', desc: 'Excellence, Innovation, Engagement et Intégrité sont les piliers de toutes nos actions et décisions.' },
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
