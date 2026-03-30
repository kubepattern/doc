import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Icone aggiornate
const HeaderIcon = () => <i className="fas fa-bolt"></i>;
const GitHubIcon = () => <i className="fab fa-github"></i>;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <HeaderIcon /> {siteConfig.title}
          </h1>
          <p className={styles.heroSubtitle}>
            An open-source tool that helps you manage Custom Resources interactions in your clusters, ensuring best practices and improving maintainability.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.buttonPrimary)}
              to="/docs/getting-started">
              <HeaderIcon /> Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Icone delle use case aggiornate
const UseCaseList = [
  {
    title: 'Configuration Validation',
    icon: <i className="fas fa-shield-check"></i>, // Era fa-shipping-fast
    description: (
      <>
        KubePattern checks for Configuration Issues in your Kubernetes clusters.
      </>
    ),
  },
    {
    title: 'Custom Resources Governance',
    icon: <i className="fas fa-network-wired"></i>, // Era fa-balance-scale
    description: (
      <>
        Enhance CRD governance by enforcing complex logical patterns across multiple resources and namespaces.
      </>
    ),
  },
  {
    title: 'Cluster Auditing',
    icon: <i className="fas fa-microscope"></i>, // Era fa-stethoscope
    description: (
      <>
        Perform a comprehensive scan of existing clusters to identify technical debt, “smells,” and opportunities for architectural refactoring.
      </>
    ),
  }
];

function UseCase({icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.useCaseCol)}>
      <div className={styles.useCaseCard}>
        <div className={styles.useCaseIcon}>{icon}</div>
        <h3 className={styles.useCaseTitle}>{title}</h3>
        <p className={styles.useCaseDescription}>{description}</p>
      </div>
    </div>
  );
}

function UseCasesSection() {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>Use Cases</h2>
          <p className={styles.sectionSubtitle}>
            Dove KubePattern fa la differenza
          </p>
        </div>
        <div className="row">
          {UseCaseList.map((props, idx) => (
            <UseCase key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2>Ready to Improve Your Kubernetes Architecture?</h2>
        <p>
          Join the community and start detecting patterns in your cluster today. It's free and open source!
        </p>
        <Link
          className={clsx('button button--primary button--lg', styles.ctaButton)}
          to="https://github.com/kubepattern/kubepattern">
          <GitHubIcon /> View on GitHub
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Architecture Validator made for Kubernetes">
      <HomepageHeader />
      <main>
        <UseCasesSection />
        <CallToAction />
      </main>
    </Layout>
  );
}