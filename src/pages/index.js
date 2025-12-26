import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Font Awesome icons
const RocketIcon = () => <i className="fas fa-rocket"></i>;
const PlayIcon = () => <i className="fas fa-play-circle"></i>;
const BookIcon = () => <i className="fas fa-book"></i>;
const GitHubIcon = () => <i className="fab fa-github"></i>;
const CheckIcon = () => <i className="fas fa-check-circle"></i>;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Kubernetes Pattern Recognition Made Simple
          </h1>
          <p className={styles.heroSubtitle}>
            Static analysis tool that identifies architectural patterns and configuration smells in your Kubernetes clusters
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.buttonPrimary)}
              to="/docs/getting-started">
              <RocketIcon /> Get Started
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.buttonSecondary)}
              to="#how-it-works">
              <PlayIcon /> See How It Works
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Graph-Based Analysis',
    icon: <i className="fas fa-project-diagram"></i>,
    description: (
      <>
        Builds a complete resource graph to understand relationships and dependencies between Kubernetes resources, enabling deep architectural insights.
      </>
    ),
  },
  {
    title: 'Pattern-as-Code',
    icon: <i className="fas fa-code"></i>,
    description: (
      <>
        Define patterns using declarative JSON files. Extend KubePattern with custom patterns without modifying the core codebase.
      </>
    ),
  },
  {
    title: 'Pattern Recognition',
    icon: <i className="fas fa-search"></i>,
    description: (
      <>
        Automatically detect architectural patterns like Sidecar, Health Probe, and Predictable Demands across your entire cluster.
      </>
    ),
  },
  {
    title: 'Confidence Scoring',
    icon: <i className="fas fa-chart-line"></i>,
    description: (
      <>
        Each detection includes confidence levels, severity ratings, and detailed scores to help you prioritize improvements.
      </>
    ),
  },
  {
    title: 'Best Practices',
    icon: <i className="fas fa-shield-alt"></i>,
    description: (
      <>
        Identify configuration smells and deviations from Kubernetes best practices and corporate policies automatically.
      </>
    ),
  },
  {
    title: 'Native CRD Output',
    icon: <i className="fas fa-fire"></i>,
    description: (
      <>
        Results are exposed as Kubernetes Custom Resources, making them easy to query, monitor, and integrate with existing tools.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>Why KubePattern?</h2>
          <p className={styles.sectionSubtitle}>
            Go beyond traditional linting with pattern-oriented validation
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <div className={styles.codeContainer}>
          <div className={styles.codeContent}>
            <h2>Simple Yet Powerful</h2>
            <p>
              KubePattern analyzes your cluster and creates K8sPattern CRDs that represent detected patterns with detailed information.
            </p>
            <ul className={styles.codeFeatures}>
              <li><CheckIcon /> Automatic cluster scanning</li>
              <li><CheckIcon /> RESTful API for integration</li>
              <li><CheckIcon /> Detailed pattern descriptions</li>
              <li><CheckIcon /> Resource relationship mapping</li>
            </ul>
            <Link
              className={clsx('button button--primary button--lg', styles.buttonPrimary)}
              to="/docs/getting-started">
              <BookIcon /> Read the Docs
            </Link>
          </div>
          <div className={styles.codeBlock}>
            <pre>
              <code>
{`# View detected patterns
kubectl get k8spatterns -A

# Example output:
apiVersion: kubepattern.dev/v1
kind: K8sPattern
metadata:
  name: sidecar-2109423650
  namespace: pattern-analysis-ns
spec:
  confidence: HIGH
  severity: INFO
  type: STRUCTURAL
  message: Pod 'frontend' in namespace 'production' 
    appears to be separated from its sidecar pod 
    'logging' in namespace 'production'.
  name: sidecar
  referenceLink: https://github.com/kubepattern/registry
  resources:
  - name: frontend
    namespace: production
    role: main-app
  - name: logging
    namespace: production
    role: sidecar
  scores:
  - category: Relationship
    score: 10`}
              </code>
            </pre>
          </div>
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
      description="Kubernetes Pattern Recognition Made Simple">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HowItWorks />
        <CallToAction />
      </main>
    </Layout>
  );
}