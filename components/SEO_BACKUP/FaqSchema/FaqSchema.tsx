'use client';

import React, { useEffect } from 'react';
import { SEO_CONSTANTS } from '@/utils/seoConstants';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
  title?: string;
}

export default function FaqSchema({ faqs, title = 'Domande frequenti' }: FaqSchemaProps) {
  useEffect(() => {
    if (typeof window === 'undefined' || !document) return;
    if (!faqs || faqs.length === 0) {
      return;
    }
    
    try {
      // Crea i dati strutturati per le FAQ
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': SEO_CONSTANTS.SCHEMA_TYPES.FAQ_PAGE,
        'mainEntity': faqs.map(faq => ({
          '@type': SEO_CONSTANTS.SCHEMA_TYPES.QUESTION,
          'name': faq.question,
          'acceptedAnswer': {
            '@type': SEO_CONSTANTS.SCHEMA_TYPES.ANSWER,
            'text': faq.answer
          }
        }))
      };
      
      // Rimuovi eventuali script precedenti in modo sicuro
      const existingScript = document.getElementById('faq-jsonld');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      
      // Aggiungi lo script JSON-LD alla pagina
      const script = document.createElement('script');
      script.id = 'faq-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    } catch (error) {
      console.error('Errore durante la creazione del FaqSchema:', error);
    }
    
    return () => {
      if (typeof window === 'undefined' || !document) return;
      
      try {
        const scriptToRemove = document.getElementById('faq-jsonld');
        if (scriptToRemove && scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      } catch (error) {
        console.error('Errore durante la rimozione del FaqSchema:', error);
      }
    };
  }, [faqs]);
  
  if (!faqs || faqs.length === 0) {
    return null;
  }
  
  return (
    <section className="faq-section">
      <h2>{title}</h2>
      <div itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            itemScope 
            itemProp="mainEntity" 
            itemType="https://schema.org/Question"
            className="faq-item"
          >
            <h3 itemProp="name">{faq.question}</h3>
            <div 
              itemScope 
              itemProp="acceptedAnswer" 
              itemType="https://schema.org/Answer"
            >
              <div itemProp="text" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
