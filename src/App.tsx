import * as styles from './App.css';

const CONTACT_EMAIL = 'help@adoptdontshop.app';

const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const EARLY_ACCESS_HREF = mailto('Early access — Adopt Don’t Shop');
const RESCUE_HREF = mailto('Rescue partner enquiry — Adopt Don’t Shop');
const CONTACT_HREF = mailto('Hello — Adopt Don’t Shop');

const features = [
  {
    icon: '\u{1F43E}',
    title: 'Find your match',
    body: 'Browse rescue pets near you and filter by what actually matters — size, energy, children, other pets — so you meet the ones who truly fit your home.',
  },
  {
    icon: '\u{1F3E1}',
    title: 'Built for rescues',
    body: 'Give rescue organisations the tools to manage listings, applications and adopters in one calm, modern place — instead of a tangle of spreadsheets and inboxes.',
  },
  {
    icon: '\u{1F49B}',
    title: 'Adopt with confidence',
    body: 'Guided applications, clear communication and support at every step — from your first hello to the day they come home.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Tell us about your home',
    body: 'Share a little about your household and what you’re looking for in a companion.',
  },
  {
    number: '2',
    title: 'Meet your matches',
    body: 'We surface the rescue pets who suit your life — not just the newest listings.',
  },
  {
    number: '3',
    title: 'Bring them home',
    body: 'Apply, chat with the rescue, and welcome your new companion the right way.',
  },
];

export const App = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className={styles.topBar} aria-hidden="true" />
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a href="#top" className={styles.wordmark}>
            <span aria-hidden="true" className={styles.wordmarkMark}>
              {'\u{1F43E}'}
            </span>
            Adopt Don&rsquo;t Shop
          </a>
          <a href={CONTACT_HREF} className={styles.navLink}>
            Contact
          </a>
        </div>
      </header>

      <main id="main" className={styles.main}>
        <section id="top" className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.container}>
            <p className={styles.eyebrow}>Launching soon</p>
            <h1 id="hero-heading" className={styles.heroTitle}>
              Every rescue pet deserves a loving home.
            </h1>
            <p className={styles.heroSubtitle}>
              Adopt Don&rsquo;t Shop is a modern adoption platform connecting rescue pets across the
              UK with the people ready to welcome them. We&rsquo;re putting the finishing touches on
              it now.
            </p>
            <div className={styles.ctaRow}>
              <a href={EARLY_ACCESS_HREF} className={styles.primaryCta}>
                Request early access
              </a>
              <a href={RESCUE_HREF} className={styles.secondaryCta}>
                I run a rescue
              </a>
            </div>
            <p className={styles.ctaNote}>No spam — just a note when we go live.</p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="features-heading">
          <div className={styles.container}>
            <h2 id="features-heading" className={styles.sectionTitle}>
              Why Adopt Don&rsquo;t Shop
            </h2>
            <ul className={styles.cardGrid}>
              {features.map(feature => (
                <li key={feature.title} className={styles.card}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardBody}>{feature.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.sectionAlt} aria-labelledby="how-heading">
          <div className={styles.container}>
            <h2 id="how-heading" className={styles.sectionTitle}>
              How it works
            </h2>
            <ol className={styles.steps}>
              {steps.map(step => (
                <li key={step.number} className={styles.step}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {step.number}
                  </span>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardBody}>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.rescueBand} aria-labelledby="rescue-heading">
          <div className={styles.container}>
            <h2 id="rescue-heading" className={styles.bandTitle}>
              Run a rescue organisation?
            </h2>
            <p className={styles.bandBody}>
              We&rsquo;re partnering with a small group of UK rescues ahead of launch. If you&rsquo;d
              like early access — and a say in how the platform works — we&rsquo;d love to hear from
              you.
            </p>
            <a href={RESCUE_HREF} className={styles.primaryCtaOnDark}>
              Become a launch partner
            </a>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-heading">
          <div className={styles.container}>
            <h2 id="final-heading" className={styles.sectionTitle}>
              Be first through the door
            </h2>
            <p className={styles.finalBody}>
              We&rsquo;ll email you the moment adoptions open. One message, no noise.
            </p>
            <a href={EARLY_ACCESS_HREF} className={styles.primaryCta}>
              Request early access
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <span className={styles.footerWordmark}>
            <span aria-hidden="true">{'\u{1F43E}'}</span> Adopt Don&rsquo;t Shop
          </span>
          <a href={CONTACT_HREF} className={styles.footerLink}>
            {CONTACT_EMAIL}
          </a>
          <p className={styles.footerMeta}>
            &copy; {year} Adopt Don&rsquo;t Shop · Built by ideaSquared in the UK.
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
