import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import PartnerSection from '../components/PartnerSection';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { DashboardArt, BamakoArt } from '../components/Illustrations';
import styles from './Home.module.css';


const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function Counter({ to, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const dur = 1600;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(e * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  {
    icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 16l4-8 4 8"/><path d="M9 12h6"/></svg>,
    value: 50, suffix: '+', label: 'Projets réalisés',
  },
  {
    icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    value: 30, suffix: '+', label: 'Clients satisfaits',
  },
  {
    icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    value: 5, suffix: '+', label: "Années d'expérience",
  },
  {
    icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    value: 100, suffix: '%', label: 'Engagement qualité',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.heroBadge}>
            <span className={styles.heroDot} />
            ISIS Consulting — Bamako, Mali
          </div>
          <h1>
            Accélérez votre<br />
            transformation <em>digitale</em>
          </h1>
          <p className={styles.heroSub}>
            Nous accompagnons les entreprises d'Afrique de l'Ouest dans leur
            transformation numérique grâce à des solutions innovantes,
            performantes et adaptées à leur contexte.
          </p>
          <div className={styles.heroBtns}>
            <button className="btn-red" onClick={() => navigate('/contact')}>
              Demander un devis
            </button>
            <button className="btn-outline" onClick={() => navigate('/services')}>
              Découvrir nos services
            </button>
          </div>
          <div className={styles.heroProofs}>
            <span><span className={styles.proofDot} />Expertise certifiée</span>
            <span><span className={styles.proofDot} />50+ projets réalisés</span>
            <span><span className={styles.proofDot} />Afrique de l'Ouest</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className={styles.heroPhoto}>
            <DashboardArt className={styles.heroArt} />
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatN}><Counter to={50} suffix="+" /></div>
                <div className={styles.heroStatL}>Projets réalisés</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatN}><Counter to={30} suffix="+" /></div>
                <div className={styles.heroStatL}>Clients satisfaits</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutSplit}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.splitEye}>À PROPOS DE NOUS</div>
            <h2>
              L'expertise IT au service<br />
              de votre <em>performance</em>
            </h2>
            <p>
              ISIS Consulting SARL est une société de conseil et de services
              informatiques fondée à Bamako. Nous intervenons en Afrique de
              l'Ouest pour accompagner les entreprises dans le développement
              logiciel, l'intégration ERP, l'audit IT, le conseil et la formation.
            </p>
            <Link to="/about" className="link-arrow">
              En savoir plus <ArrowIcon />
            </Link>
          </motion.div>

          <motion.div
            className={styles.aboutPhotoWrap}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <BamakoArt className={styles.aboutArt} />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.servicesSection}>
        <div className="section-eyebrow">NOS SERVICES</div>
        <h2 className="section-title">Des solutions adaptées<br />à vos besoins</h2>
        <p className="section-sub">
          Une gamme complète de services IT pour votre transformation numérique en Afrique de l'Ouest.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsBox}>
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <PartnerSection />

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testiSection}>
        <div className="section-eyebrow">TÉMOIGNAGES</div>
        <h2 className="section-title">Ce que disent nos clients</h2>
        <p className="section-sub">
          Des partenaires à travers l'Afrique de l'Ouest qui nous font confiance.
        </p>
        <div className={styles.testiGrid}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </main>
  );
}
