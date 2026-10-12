import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logos/logo-transparent.png';
import { ArrowIcon } from './Motifs';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Réalisations' },
  { to: '/blog', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logoWrap} aria-label="ISIS Consulting — Accueil">
            <img src={logo} alt="ISIS Consulting" className={styles.logo} />
          </Link>

          <nav className={styles.nav} aria-label="Navigation principale">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button className={styles.btnContact} onClick={() => navigate('/contact')}>
            Prendre rendez-vous <ArrowIcon size={14} />
          </button>

          <button
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ''}`} aria-label="Navigation mobile">
        {NAV_LINKS.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
            style={{ transitionDelay: mobileOpen ? `${0.05 + i * 0.04}s` : '0s' }}
          >
            <span className={styles.mobileNum}>0{i + 1}</span>
            {label}
          </NavLink>
        ))}
        <div className={styles.mobileFoot}>
          <span>Bamako, Mali</span>
          <a href="mailto:contact@isis-consulting.com">contact@isis-consulting.com</a>
        </div>
      </nav>
    </>
  );
}
