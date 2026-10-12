import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ServiceList from '../components/ServiceList';
import Reveal from '../components/Reveal';
import { BogolanPattern, ArrowIcon } from '../components/Motifs';
import { services } from '../data/services';
import styles from './Services.module.css';

export default function Services() {
  return (
    <main>
      <PageHero
        title="Nos"
        titleEm="expertises."
        subtitle="Une gamme complète de services IT pour vous accompagner à chaque étape de votre transformation digitale en Afrique de l'Ouest."
        breadcrumb="Services"
        index={`— ${services.length} métiers`}
      />

      <section className={styles.section}>
        <div className="container">
          <ServiceList services={services} detailed />
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <Reveal className={styles.ctaCard}>
            <BogolanPattern color="#F8F4EC" opacity={0.18} className={styles.ctaPattern} />
            <div className={styles.ctaText}>
              <h2>Besoin d'un service <em>spécifique</em> ?</h2>
              <p>Nos experts analysent vos besoins et vous proposent la meilleure solution.</p>
            </div>
            <Link to="/contact" className="btn-white">Parler à un expert <ArrowIcon /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
