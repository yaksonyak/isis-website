import styles from './PartnerSection.module.css';

const PARTNERS = ['Axelor', 'Dolibarr', 'Java', 'Spring Boot', 'Angular', 'Flutter', 'PostgreSQL', 'Docker', 'Linux'];

export default function PartnerSection({ eyebrow = 'Notre écosystème technologique' }) {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section className={styles.section} aria-label={eyebrow}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <div className={styles.track}>
        <div className={styles.marquee}>
          {items.map((p, i) => (
            <span key={i} className={styles.logo} aria-hidden={i >= PARTNERS.length}>
              {p}
              <span className={styles.star}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
