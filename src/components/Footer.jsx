import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo-transparent.png';
import { BogolanBand, ArrowIcon } from './Motifs';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <BogolanBand height={22} fg="#C99A4B" bg="#0B1324" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.big}>
            Construisons l'Afrique<br /><em>numérique</em>, ensemble.
          </h2>
          <Link to="/contact" className="btn-white">
            Démarrer un projet <ArrowIcon />
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoChip}>
              <img src={logo} alt="ISIS Consulting" className={styles.logo} />
            </div>
            <p className={styles.tagline}>
              Cabinet de conseil et de services informatiques, fondé à Bamako.
              L'expertise en marche, au service de l'Afrique de l'Ouest.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Réalisations</Link></li>
              <li><Link to="/blog">Journal</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Expertises</h4>
            <ul>
              <li><Link to="/services">Développement logiciel</Link></li>
              <li><Link to="/services">Intégration ERP</Link></li>
              <li><Link to="/services">Audit informatique</Link></li>
              <li><Link to="/services">Conseil IT</Link></li>
              <li><Link to="/services">Formation</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Bamako</h4>
            <ul>
              <li><span>Bamako, Mali</span></li>
              <li><a href="tel:+22300000000">+223 XX XXX XXX</a></li>
              <li><a href="mailto:contact@isis-consulting.com">contact@isis-consulting.com</a></li>
              <li><span>Lun – Ven · 08h – 17h</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} ISIS Consulting SARL — Tous droits réservés.</span>
          <div className={styles.legal}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
