import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import logo from '../assets/logos/logo-transparent.png';
import dmpe from '../assets/projects/dmpe-dossiers.webp';
import school from '../assets/projects/school-dashboard.webp';
import agri from '../assets/projects/agristock-caisse.webp';
import pharma from '../assets/projects/pharma-dashboard.webp';
import styles from './Ecosystem.module.css';

// The ISIS "ecosystem": a pulsing core in Bamako, the four products
// orbiting it, linked by animated data streams. Layers move with the
// pointer at different depths.
const PRODUCTS = [
  { name: 'DMPe', sector: 'Santé', img: dmpe, x: 5, y: 7, depth: 22, delay: 0 },
  { name: 'School Manager', sector: 'Éducation', img: school, x: 60, y: 5, depth: 28, delay: 0.8 },
  { name: 'AgriStock', sector: 'Agriculture', img: agri, x: 4, y: 59, depth: 26, delay: 1.6 },
  { name: 'ISIS Pharma', sector: 'Pharmacie', img: pharma, x: 61, y: 61, depth: 20, delay: 2.4 },
];

// Tile centres, in % of the stage (tiles are 35% wide, ~30% tall)
const centre = (p) => ({ cx: p.x + 17.5, cy: p.y + 15 });

function Tile({ p, i, mx, my, inView, onOpen }) {
  const x = useTransform(mx, (v) => v * p.depth);
  const y = useTransform(my, (v) => v * p.depth);
  return (
    <motion.button
      type="button"
      className={styles.tile}
      style={{ left: `${p.x}%`, top: `${p.y}%`, x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ scale: 1.08, zIndex: 5 }}
      onClick={onOpen}
      aria-label={`${p.name} — voir nos réalisations`}
    >
      <span className={styles.tileFloat} style={{ animationDelay: `-${p.delay}s` }}>
        <span className={styles.tileShot}>
          <img src={p.img} alt="" loading="lazy" decoding="async" />
        </span>
        <span className={styles.tileMeta}>
          <strong>{p.name}</strong>
          <em>{p.sector}</em>
        </span>
      </span>
    </motion.button>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  // Pointer position, normalised to [-0.5, 0.5], smoothed
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 80, damping: 18 });
  const my = useSpring(rawY, { stiffness: 80, damping: 18 });
  const coreX = useTransform(mx, (v) => v * 10);
  const coreY = useTransform(my, (v) => v * 10);
  const gridX = useTransform(mx, (v) => v * -14);
  const gridY = useTransform(my, (v) => v * -14);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <div
      ref={ref}
      className={styles.stage}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      role="img"
      aria-label="L'écosystème ISIS : nos logiciels DMPe, School Manager, AgriStock et ISIS Pharma, conçus à Bamako"
    >
      <motion.div className={styles.grid} style={{ x: gridX, y: gridY }} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      {/* Orbits */}
      <div className={`${styles.orbit} ${styles.orbit1}`} aria-hidden="true"><span /></div>
      <div className={`${styles.orbit} ${styles.orbit2}`} aria-hidden="true"><span /><span /></div>

      {/* Data streams from each product to the core */}
      <svg className={styles.links} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="ecoLink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1E88E5" />
            <stop offset="1" stopColor="#FF4D4F" />
          </linearGradient>
        </defs>
        {PRODUCTS.map((p, i) => {
          const { cx, cy } = centre(p);
          return (
            <g key={p.name}>
              <motion.line
                x1={cx} y1={cy} x2="50" y2="50"
                className={styles.linkBase}
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15 }}
              />
              <line x1={cx} y1={cy} x2="50" y2="50" className={styles.linkFlow} style={{ animationDelay: `-${i * 0.6}s` }} />
            </g>
          );
        })}
      </svg>

      {/* Core */}
      <motion.div
        className={styles.core}
        style={{ x: coreX, y: coreY }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.1 }}
      >
        <span className={styles.pulse} />
        <span className={`${styles.pulse} ${styles.pulse2}`} />
        <span className={styles.coreInner}>
          <img src={logo} alt="" />
        </span>
        <motion.span
          className={styles.pin}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1 }}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          Bamako, Mali
        </motion.span>
      </motion.div>


      {PRODUCTS.map((p, i) => (
        <Tile key={p.name} p={p} i={i} mx={mx} my={my} inView={inView} onOpen={() => navigate('/projects')} />
      ))}
    </div>
  );
}
