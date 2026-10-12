import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { DjenneArt, ArrowIcon } from '../components/Motifs';
import styles from './Contact.module.css';

const CONTACT_ITEMS = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Adresse',
    value: 'Bamako, Mali',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.09-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
      </svg>
    ),
    label: 'Téléphone',
    value: '+223 XX XXX XXX',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@isis-consulting.com',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Heures d'ouverture",
    value: 'Lun – Ven : 08h00 – 17h00',
  },
];

export default function Contact() {
  return (
    <main>
      <PageHero
        title="Parlons de"
        titleEm="votre projet."
        subtitle="Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets."
        breadcrumb="Contact"
        index="— Lun – Ven · 08h – 17h"
      />

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <Reveal className={styles.infoCol}>
            <div className="section-eyebrow">Coordonnées</div>
            <h2>Venez nous voir <em>à Bamako.</em></h2>
            <p className={styles.infoSub}>
              Disponibles du lundi au vendredi pour toute demande, sur site ou à distance.
            </p>
            <div className={styles.items}>
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className={styles.item}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.itemLabel}>{item.label}</div>
                    <div className={styles.itemValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Bamako,Mali"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapCard}
            >
              <DjenneArt className={styles.mapArt} />
              <span className={styles.mapLabel}>
                Voir sur Google Maps <ArrowIcon size={14} />
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1} className={styles.formCol}>
            <h2>Envoyez-nous un message</h2>
            <p className={styles.infoSub}>Décrivez votre besoin, nous revenons vers vous rapidement.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
