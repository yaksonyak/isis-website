import { motion, useScroll, useSpring } from 'framer-motion';

// Fine progress bar under the header, follows the page scroll.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: '0% 50%',
        position: 'fixed',
        top: 76,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1001,
        background: 'linear-gradient(90deg, var(--blue), var(--red))',
      }}
    />
  );
}
