import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo-transparent.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <img src={logo} alt="ISIS Consulting" className={styles.logo} />
          <p className={styles.tagline}>Cabinet de conseil et de services informatiques basé à Bamako, au service des entreprises d'Afrique de l'Ouest.</p>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-1.9 3.76-1.9 4 0 4.88 2.5 4.88 5.9V21h-4v-5c0-1.3-.03-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4z" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.3-.1-2.300 0-3.800 1.400-3.800 3.900v2.300H8v3h2.500V21z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Réalisations</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Développement logiciel</Link></li>
            <li><Link to="/services">Intégration ERP</Link></li>
            <li><Link to="/services">Audit informatique</Link></li>
            <li><Link to="/services">Conseil IT</Link></li>
            <li><Link to="/services">Formation</Link></li>
            <li><Link to="/agristock">Logiciel AgriStock</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+22366614663">+223 66 61 46 63</a></li>
            <li><a href="tel:+22376299328">+223 76 29 93 28</a></li>
            <li><a href="mailto:Commercial@isis-consulting.ml">Commercial@isis-consulting.ml</a></li>
            <li><span>Bamako, Mali</span></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} ISIS Consulting SARL. Tous droits réservés.</span>
        <div className={styles.legal}>
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
