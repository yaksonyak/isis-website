import { motion } from 'framer-motion';
import styles from './TestimonialCard.module.css';

const QuoteIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.stars}>★★★★★</div>
      <div className={styles.quoteWrap}>
        <QuoteIcon />
      </div>
      <p className={styles.text}>{testimonial.text}</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{testimonial.initials}</div>
        <div>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.role}>{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}
