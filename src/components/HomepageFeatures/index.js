import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Graph-Based Analysis',
    icon: 'fa-project-diagram',
    description: (
      <>Builds a complete resource graph to understand relationships and dependencies between resources.</>
    ),
  },
  {
    title: 'Pattern-as-Code',
    icon: 'fa-code',
    description: (
      <>Define patterns using declarative JSON files. Extend KubePattern without modifying the core codebase.</>
    ),
  },
  {
    title: 'Pattern Recognition',
    icon: 'fa-search',
    description: (
      <>Automatically detect architectural patterns like Sidecar and Health Probe across your entire cluster.</>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>
            <i className={clsx('fas', icon)}></i>
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}