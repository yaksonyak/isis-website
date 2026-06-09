import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logos/logo-transparent.png';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Réalisations' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  const handleContact = () => {
    closeMobile();
    navigate('/contact');
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logoWrap} onClick={closeMobile}>
          <img src={logo} alt="ISIS Consulting" className={styles.logo} />
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button className={styles.btnContact} onClick={handleContact}>
          Nous contacter
        </button>

        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
          onClick={toggleMobile}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Nav */}
      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
            }
            onClick={closeMobile}
          >
            {label}
          </NavLink>
        ))}
        <button className={`${styles.btnContact} ${styles.mobileCta}`} onClick={handleContact}>
          Nous contacter
        </button>
      </nav>
    </>
  );
}
