import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import styles from './Services.module.css';

export default function Services() {
  return (
    <main>
      <PageHero
        title="Nos"
        titleEm="services"
        subtitle="Une gamme complète de services IT pour vous accompagner à chaque étape de votre transformation digitale en Afrique de l'Ouest."
        breadcrumb="Services"
      />

      <section className={styles.section}>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.08} variant="detail" />
          ))}
        </div>
      </section>

      <CTASection
        title="Besoin d'un service spécifique ?"
        subtitle="Nos experts analysent vos besoins et vous proposent la meilleure solution."
      />
    </main>
  );
}
