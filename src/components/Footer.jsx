import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo-transparent.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <img src={logo} alt="ISIS Consulting" className={styles.logo} />
          <p className={styles.tagline}>L'Expertise en Marche<br />Afrique de l'Ouest</p>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">in</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook">f</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">ig</a>
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
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+22300000000">+223 XX XXX XXX</a></li>
            <li><a href="mailto:contact@isis-consulting.com">contact@isis-consulting.com</a></li>
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
