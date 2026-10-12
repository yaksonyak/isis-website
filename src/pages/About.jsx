import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import Reveal from '../components/Reveal';
import { BogolanPattern } from '../components/Motifs';
import styles from './About.module.css';

const PILLARS = [
  { title: 'Vision', desc: "Devenir un acteur de référence en Afrique de l'Ouest dans l'accompagnement à la transformation digitale des entreprises et organisations." },
  { title: 'Mission', desc: 'Fournir des solutions IT innovantes et performantes pour améliorer la productivité et la compétitivité de nos clients africains.' },
];

const VALEURS = [
  { title: 'Excellence', desc: 'Nous nous engageons à livrer des solutions de la plus haute qualité, à chaque projet.' },
  { title: 'Innovation', desc: "Toujours à la pointe des technologies, pour des solutions adaptées à l'Afrique." },
  { title: 'Engagement', desc: 'Un accompagnement dédié et une relation de confiance durable avec nos partenaires.' },
  { title: 'Intégrité', desc: 'Transparence et honnêteté dans toutes nos interactions et partenariats.' },
];

export default function About() {
  return (
    <main>
      <PageHero
        title="Un cabinet malien,"
        titleEm="une ambition régionale."
        subtitle="Découvrez notre équipe, notre vision et les valeurs qui guident notre mission en Afrique de l'Ouest."
        breadcrumb="À propos"
        index="— Bamako, Mali"
      />

      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <Reveal className={styles.introAside}>
            <div className="section-eyebrow">Qui sommes-nous</div>
            <div className={styles.seal}>
              <BogolanPattern color="#F8F4EC" opacity={0.28} className={styles.sealPattern} />
              <span className={styles.sealMark}>ISIS</span>
              <span className={styles.sealSub}>Consulting SARL · Bamako</span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className={styles.lead}>
                Fondée à Bamako, ISIS Consulting SARL est une société de conseil et
                de services informatiques au service des entreprises et
                organisations d'<em>Afrique de l'Ouest</em>.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className={styles.cols}>
                <p>
                  Nous accompagnons nos clients dans leurs projets digitaux grâce à
                  des solutions innovantes, adaptées au contexte africain :
                  connectivité, coûts, réglementation et usages.
                </p>
                <p>
                  Nos consultants, développeurs et auditeurs locaux combinent
                  expertise technique internationale et connaissance approfondie
                  du terrain pour livrer des solutions à la hauteur de vos ambitions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.pillars}>
        <div className={`container ${styles.pillarsGrid}`}>
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className={styles.pillar}>
              <span className={styles.pillarNum}>0{i + 1}</span>
              <h2>Notre <em>{p.title.toLowerCase()}</em></h2>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <Reveal>
            <div className="section-eyebrow">Nos valeurs</div>
            <h2 className="section-title">Quatre piliers,<br /><em>chaque jour.</em></h2>
          </Reveal>
          <div className={styles.valuesGrid}>
            {VALEURS.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className={styles.value}>
                <span className={styles.valueLetter}>{v.title[0]}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnerSection eyebrow="Nos partenaires technologiques" />
    </main>
  );
}
