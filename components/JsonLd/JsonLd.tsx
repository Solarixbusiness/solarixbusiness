'use client';

import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, any>;
  type?: string;
}

export default function JsonLd({ data, type = 'application/ld+json' }: JsonLdProps) {
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Rimuovi eventuali script JSON-LD precedenti con lo stesso ID in modo sicuro
      const existingScript = document.getElementById('json-ld-' + data['@type']);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      
      // Crea un nuovo script per i dati strutturati
      const script = document.createElement('script');
      script.id = 'json-ld-' + data['@type'];
      script.type = type;
      script.text = JSON.stringify(data);
      
      // Aggiungi lo script all'head del documento
      document.head.appendChild(script);
    } catch (error) {
      console.error(`Errore durante la creazione del JSON-LD per ${data['@type']}:`, error);
    }
    
    // Pulisci quando il componente viene smontato
    return () => {
      if (typeof window === 'undefined' || !document) return;
      
      try {
        const scriptToRemove = document.getElementById('json-ld-' + data['@type']);
        if (scriptToRemove && scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      } catch (error) {
        console.error(`Errore durante la rimozione del JSON-LD per ${data['@type']}:`, error);
      }
    };
  }, [data, type]);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
