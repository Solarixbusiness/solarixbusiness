'use client';

import { useState } from 'react';
import styles from './IncentiveSection.module.css';

interface IncentiveArticle {
  id: string;
  type: string;
  title: string;
  context: string;
  problem: string;
  solution: string;
  benefits: string[];
}

interface IncentiveTypeSelectorProps {
  incentiveArticles: IncentiveArticle[];
  incentiveTypes: Array<{
    id: string;
    label: string;
    description: string;
  }>;
}

export default function IncentiveTypeSelector({ incentiveArticles, incentiveTypes }: IncentiveTypeSelectorProps) {
  const [activeType, setActiveType] = useState('national');
  
  const filteredArticles = incentiveArticles.filter(article => article.type === activeType);

  return (
    <>
      <div className={styles.incentiveTypes}>
        {incentiveTypes.map(type => (
          <button
            key={type.id}
            className={`${styles.typeButton} ${activeType === type.id ? styles.active : ''}`}
            onClick={() => setActiveType(type.id)}
          >
            <span className={styles.typeLabel}>{type.label}</span>
            <span className={styles.typeDescription}>{type.description}</span>
          </button>
        ))}
      </div>

      <div className={styles.articlesGrid}>
        {filteredArticles.map(article => (
          <article key={article.id} className={styles.articleCard}>
            <h3>{article.title}</h3>
            
            <div className={styles.articleSection}>
              <h4>Contesto</h4>
              <p>{article.context}</p>
            </div>
            
            <div className={styles.articleSection}>
              <h4>Problema</h4>
              <p>{article.problem}</p>
            </div>
            
            <div className={styles.articleSection}>
              <h4>Soluzione</h4>
              <p>{article.solution}</p>
            </div>
            
            <div className={styles.benefitsSection}>
              <h4>Vantaggi</h4>
              <ul>
                {article.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className={styles.checkIcon}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
