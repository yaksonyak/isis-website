import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { ArrowIcon } from './Motifs';
import { ServiceIcons } from './serviceIcons';
import styles from './ServiceList.module.css';

export default function ServiceList({ services, detailed = false }) {
  return (
    <ol className={`${styles.list} ${detailed ? styles.detailed : ''}`}>
      {services.map((s, i) => (
        <Reveal as="li" key={s.id} delay={i * 0.06} className={styles.item}>
          <Link to={detailed ? '/contact' : '/services'} className={styles.row}>
            <span className={styles.num}>0{i + 1}</span>
            <span className={styles.icon}>{ServiceIcons[s.icon]}</span>
            <span className={styles.title}>{s.title}</span>
            <span className={styles.desc}>{s.description}</span>
            <span className={styles.arrow}><ArrowIcon size={18} /></span>
          </Link>
          {detailed && s.details && (
            <ul className={styles.details}>
              {s.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
