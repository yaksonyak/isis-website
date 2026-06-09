import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import styles from './StatCard.module.css';

function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatCard({ icon, value, suffix, label, delay = 0 }) {
  return (
    <div className={styles.stat}>
      <div className={styles.iconWrap}>
        {icon}
      </div>
      <div className={styles.number}>
        <AnimatedCounter target={value} />
        <em>{suffix}</em>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
