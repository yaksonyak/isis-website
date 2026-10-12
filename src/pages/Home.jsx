import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import PartnerSection from '../components/PartnerSection';
import ServiceList from '../components/ServiceList';
import Testimonials from '../components/Testimonials';
import Reveal from '../components/Reveal';
import { DjenneArt, BogolanPattern, ArrowIcon } from '../components/Motifs';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import styles from './Home.module.css';

const EASE = [0.22, 0.61, 0.36, 1];

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  { value: 50, suffix: '+', label: 'Projets livrés' },
  { value: 30, suffix: '+', label: 'Clients accompagnés' },
  { value: 5, suffix: '+', label: "Années d'expérience" },
  { value: 100, suffix: '%', label: 'Engagement qualité' },
];

const STEPS = [
  { k: 'Écouter', d: "Immersion dans vos métiers, vos contraintes et votre réalité terrain : réseau, budget, usages." },
  { k: 'Concevoir', d: "Architecture sobre et robuste, pensée pour durer et évoluer avec votre organisation." },
  { k: 'Déployer', d: "Mise en production maîtrisée, migration des données et accompagnement au changement." },
  { k: 'Transmettre', d: "Formation de vos équipes pour une autonomie réelle — le savoir reste chez vous." },
];

const CITIES = [
  { name: 'Bamako', x: 300, y: 196, main: true },
  { name: 'Dakar', x: 92, y: 132 },
  { name: 'Abidjan', x: 286, y: 330 },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <motion.div
              className={styles.heroBadge}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className={styles.heroDot} />
              Cabinet de conseil IT · Bamako, Mali
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            >
              L'expertise numérique, <em>enracinée</em> au Mali.
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            >
              Logiciels sur mesure, ERP, audit et conseil : nous accompagnons les
              entreprises et institutions d'Afrique de l'Ouest avec des solutions
              exigeantes, pensées pour leur réalité.
            </motion.p>

            <motion.div
              className={styles.heroBtns}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
            >
              <Link to="/contact" className="btn-red">Demander un devis <ArrowIcon /></Link>
              <Link to="/services" className="btn-outline">Nos expertises</Link>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
          >
            <DjenneArt className={styles.heroArt} />

            <motion.div
              className={`${styles.float} ${styles.floatA}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            >
              <span className={styles.floatN}><Counter to={50} suffix="+" /></span>
              <span className={styles.floatL}>projets livrés<br />en Afrique de l'Ouest</span>
            </motion.div>

            <motion.div
              className={`${styles.float} ${styles.floatB}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: EASE }}
            >
              <span className={styles.pulse} />
              <span className={styles.floatL}><strong>Axelor · Dolibarr</strong><br />intégration ERP sur mesure</span>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.heroFoot}>
          <span>Mali</span><span className={styles.sepDot} />
          <span>Sénégal</span><span className={styles.sepDot} />
          <span>Côte d'Ivoire</span><span className={styles.sepDot} />
          <span>Afrique de l'Ouest</span>
        </div>
      </section>

      <PartnerSection />

      {/* ── MANIFESTE ── */}
      <section className={styles.manifesto}>
        <div className="container">
          <Reveal>
            <div className="section-eyebrow">Notre conviction</div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className={styles.statement}>
              La transformation digitale de l'Afrique ne s'importe pas : elle se
              <em> construit</em>, ici, avec des talents qui connaissent le
              terrain. Depuis Bamako, nous allions <em>rigueur internationale</em> et
              compréhension intime du contexte local.
            </p>
          </Reveal>

          <div className={styles.manifestoFoot}>
            <Reveal delay={0.1}>
              <p className={styles.manifestoNote}>
                ISIS Consulting SARL accompagne PME, grandes entreprises et
                institutions dans le développement logiciel, l'intégration ERP,
                l'audit IT, le conseil et la formation.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/about" className="link-arrow">Découvrir le cabinet <ArrowIcon /></Link>
            </Reveal>
          </div>

          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className={styles.stat}>
                <div className={styles.statN}><Counter to={s.value} suffix={s.suffix} /></div>
                <div className={styles.statL}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Reveal>
              <div className="section-eyebrow">Expertises</div>
              <h2 className="section-title">Cinq métiers,<br /><em>une exigence.</em></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-sub">
                Une offre complète pour couvrir chaque étape de votre transformation
                numérique, du diagnostic à l'autonomie de vos équipes.
              </p>
            </Reveal>
          </div>
          <ServiceList services={services} />
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section className={styles.method}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Reveal>
              <div className="section-eyebrow">Notre approche</div>
              <h2 className="section-title">Une méthode <em>éprouvée</em>,<br />un rythme humain.</h2>
            </Reveal>
          </div>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.1} className={styles.step}>
                <BogolanPattern color="#B5562F" opacity={0.22} scale={0.7} className={styles.stepPattern} />
                <span className={styles.stepNum}>0{i + 1}</span>
                <h3>{s.k}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANCRAGE ── */}
      <section className={styles.region}>
        <div className={`container ${styles.regionGrid}`}>
          <Reveal>
            <div className="section-eyebrow">Ancrage</div>
            <h2 className="section-title">Né à Bamako,<br /><em>tourné vers la région.</em></h2>
            <p className="section-sub">
              Nos consultants, développeurs et auditeurs sont basés au Mali. Nous
              intervenons sur site ou à distance pour nos clients de toute
              l'Afrique de l'Ouest.
            </p>
            <Link to="/contact" className="link-arrow" style={{ marginTop: 32 }}>Nous rencontrer <ArrowIcon /></Link>
          </Reveal>

          <Reveal delay={0.15} className={styles.mapWrap}>
            <svg viewBox="0 0 440 400" className={styles.map} role="img" aria-label="Carte stylisée de l'Afrique de l'Ouest : Bamako, Dakar, Abidjan">
              <defs>
                <pattern id="mapdots" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="6" cy="6" r="1.6" fill="#B5562F" opacity=".35" />
                </pattern>
                <clipPath id="westAfrica">
                  <path d="M60 110 Q70 70 120 64 L220 58 Q290 40 360 62 Q420 80 428 150 L420 250 Q410 300 360 318 L300 344 Q240 360 190 330 Q150 300 110 270 Q70 230 62 180 Z" />
                </clipPath>
              </defs>
              <rect width="440" height="400" fill="url(#mapdots)" clipPath="url(#westAfrica)" />
              {/* fleuve Niger */}
              <path d="M150 230 Q210 210 260 200 Q300 192 330 160 Q360 128 400 140" fill="none" stroke="#38B2F5" strokeWidth="2" strokeOpacity=".7" strokeDasharray="4 6" />
              {CITIES.filter((c) => !c.main).map((c) => (
                <path key={c.name} d={`M300 196 Q${(300 + c.x) / 2} ${Math.min(196, c.y) - 50} ${c.x} ${c.y}`} fill="none" stroke="#0B1324" strokeOpacity=".35" strokeWidth="1" />
              ))}
              {CITIES.map((c) => (
                <g key={c.name}>
                  {c.main && <circle cx={c.x} cy={c.y} r="18" fill="#F0544F" opacity=".18" className={styles.ping} />}
                  <circle cx={c.x} cy={c.y} r={c.main ? 7 : 5} fill={c.main ? '#F0544F' : '#0B1324'} />
                  <text x={c.x + 12} y={c.y + 4} fontFamily="Manrope, sans-serif" fontSize={c.main ? 15 : 13} fontWeight={c.main ? 800 : 600} fill="#0B1324">{c.name}</text>
                </g>
              ))}
            </svg>
          </Reveal>
        </div>
      </section>

      <Testimonials items={testimonials} />
    </main>
  );
}
