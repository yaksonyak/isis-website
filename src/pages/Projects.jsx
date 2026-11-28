import { useMemo, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import PageHero from '../components/PageHero';
import ProjectModal from '../components/ProjectModal';
import { Cover } from '../components/Illustrations';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const EASE = [0.22, 0.61, 0.36, 1];

// Flagship products (with a detail sheet) get a full showcase row;
// the rest go in the filterable grid below.
const flagships = projects.filter((p) => p.details);
const others = projects.filter((p) => !p.details);

const sectorLabel = (p) => p.sector.replace('Secteur : ', '');

function BrowserFrame({ src, alt, className, style, eager }) {
  return (
    <motion.div className={`${styles.browser} ${className || ''}`} style={style}>
      <div className={styles.browserBar}><span /><span /><span /></div>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </motion.div>
  );
}

function ShowcaseRow({ project, index, onOpen }) {
  const ref = useRef(null);
  const stageRef = useRef(null);
  // The clipped screenshot can't observe itself (fully clipped = not visible),
  // so its reveal is driven by the stage around it.
  const stageInView = useInView(stageRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Parallax: the back screenshot drifts more than the front one
  const yBack = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const yFront = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const reverse = index % 2 === 1;
  const { details } = project;
  const [front, back] = details.gallery;
  const num = String(index + 1).padStart(2, '0');

  return (
    <article ref={ref} className={`${styles.showRow} ${reverse ? styles.showRowReverse : ''}`}>
      <motion.div
        ref={stageRef}
        className={styles.stage}
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <div className={`${styles.blob} ${styles[`blob${index % 4}`]}`} aria-hidden="true" />
        {back && <BrowserFrame src={back.src} alt={back.alt} className={styles.shotBack} style={{ y: yBack }} />}
        <motion.button
          type="button"
          className={styles.shotFrontBtn}
          onClick={() => onOpen(project)}
          aria-label={`Voir le détail : ${project.title}`}
          style={{ y: yFront }}
          initial={{ clipPath: 'inset(0 100% 0 0 round 14px)' }}
          animate={stageInView ? { clipPath: 'inset(0 0% 0 0 round 14px)' } : undefined}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* eager: a lazy image never loads while the reveal hides it */}
          <BrowserFrame src={front.src} alt={front.alt} className={styles.shotFront} eager />
          <span className={styles.zoomHint}>Voir le détail</span>
        </motion.button>
        <motion.span
          className={styles.floatPill}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className={styles.pillDot} />
          {sectorLabel(project)}
        </motion.span>
      </motion.div>

      <motion.div
        className={styles.showText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
      >
        <motion.span className={styles.bigNum} variants={fadeUp}>{num}</motion.span>
        <motion.span className={styles.showTag} variants={fadeUp}>{project.category}</motion.span>
        <motion.h3 variants={fadeUp}>{project.title}</motion.h3>
        {details.tagline && <motion.p className={styles.showTagline} variants={fadeUp}>{details.tagline}</motion.p>}
        <motion.p className={styles.showSummary} variants={fadeUp}>{details.summary}</motion.p>
        <motion.ul className={styles.chips} variants={fadeUp}>
          {details.modules.slice(0, 6).map((m) => <li key={m.title}>{m.title}</li>)}
        </motion.ul>
        <motion.div className={styles.showActions} variants={fadeUp}>
          <button type="button" className="btn-red" onClick={() => onOpen(project)}>
            Voir le détail
          </button>
          {details.url && (
            <a href={details.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Voir en ligne ↗
            </a>
          )}
        </motion.div>
      </motion.div>
    </article>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Card that tilts toward the cursor, with a light reflection following it
function TiltCard({ project, index }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 18 });
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 12);
    rx.set((0.5 - py) * 10);
    setGlare({ x: px * 100, y: py * 100, o: 1 });
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    setGlare((g) => ({ ...g, o: 0 }));
  };

  return (
    <motion.div
      layout
      className={styles.cardWrap}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: EASE }}
    >
      <motion.div
        className={styles.card}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className={styles.imgWrap}>
          {project.logo ? (
            <div className={styles.logoBox}>
              <img src={project.logo} alt={`Logo ${project.title.replace(/^(Implémentation|Intégration) /, '')}`} loading="lazy" decoding="async" />
            </div>
          ) : project.image ? (
            <img src={project.image} alt={`Capture d'écran — ${project.title}`} loading="lazy" decoding="async" className={styles.shot} />
          ) : (
            <Cover category={project.category} seed={project.id} label={project.title} />
          )}
          <span className={styles.tag}>{project.category}</span>
        </div>
        <div className={styles.info}>
          <h3>{project.title}</h3>
          <p>{project.sector}</p>
        </div>
        <span
          className={styles.glare}
          aria-hidden="true"
          style={{
            opacity: glare.o,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,.45), transparent 55%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState('Tous');

  const categories = useMemo(
    () => ['Tous', ...new Set(others.map((p) => p.category))],
    [],
  );
  const filtered = active === 'Tous' ? others : others.filter((p) => p.category === active);

  return (
    <main>
      <PageHero
        title="Nos"
        titleEm="réalisations"
        subtitle="Des projets concrets menés par nos équipes pour des clients à travers l'Afrique de l'Ouest."
        breadcrumb="Réalisations"
      />

      {/* ── PRODUITS PHARES ── */}
      <section className={styles.showcase}>
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">NOS PRODUITS</div>
          <h2 className="section-title">Des logiciels conçus <em>pour le terrain</em></h2>
          <p className="section-sub">
            Santé, éducation, commerce agricole, pharmacie : des solutions déployées au Mali,
            pensées pour le FCFA, le français et des connexions parfois absentes.
          </p>
        </motion.div>

        {flagships.map((p, i) => (
          <ShowcaseRow key={p.id} project={p} index={i} onOpen={setSelected} />
        ))}
      </section>

      {/* ── AUTRES RÉALISATIONS ── */}
      <section className={styles.section}>
        <div className={styles.head}>
          <div className="section-eyebrow">ET AUSSI</div>
          <h2 className="section-title">Autres <em>réalisations</em></h2>
        </div>

        <div className={styles.filterBar} role="tablist" aria-label="Filtrer les réalisations">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {active === cat && (
                <motion.span layoutId="projectFilter" className={styles.filterPill} transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
              <span className={styles.filterLabel}>{cat}</span>
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <TiltCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  );
}
