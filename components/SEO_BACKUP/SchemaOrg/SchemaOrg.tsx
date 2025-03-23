'use client';

import React, { useEffect } from 'react';

interface SchemaOrgProps {
  type: 'Organization' | 'LocalBusiness' | 'WebSite' | 'FAQPage' | 'Product' | 'Service' | 'BreadcrumbList';
  data: Record<string, any>;
}

export default function SchemaOrg({ type, data }: SchemaOrgProps) {
  useEffect(() => {
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Crea i dati strutturati
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data
      };
      
      // Crea lo script JSON-LD
      const script = document.createElement('script');
      script.id = `schema-${type.toLowerCase()}`;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      
      // Rimuovi eventuali script precedenti con lo stesso ID in modo sicuro
      const existingScript = document.getElementById(`schema-${type.toLowerCase()}`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      
      // Aggiungi lo script al documento
      document.head.appendChild(script);
    } catch (error) {
      console.error(`Errore durante la creazione dello schema ${type}:`, error);
    }
    
    // Pulizia quando il componente viene smontato
    return () => {
      if (typeof window === 'undefined' || !document) return;
      
      try {
        const scriptToRemove = document.getElementById(`schema-${type.toLowerCase()}`);
        if (scriptToRemove && scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      } catch (error) {
        console.error(`Errore durante la rimozione dello schema ${type}:`, error);
      }
    };
  }, [type, data]);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
