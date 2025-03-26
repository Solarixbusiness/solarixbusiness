'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SEO_CONSTANTS, getFullUrl } from '@/utils/seoConstants';

interface CanonicalLinksProps {
  canonicalPath?: string;
  languages?: string[];
}

export default function CanonicalLinks({
  canonicalPath,
  languages = SEO_CONSTANTS.LANGUAGES,
}: CanonicalLinksProps) {
  const pathname = usePathname();
  
  // Determina il percorso canonico
  const currentPath = canonicalPath || pathname;
  
  // Se il percorso è null, usa la home page
  if (!currentPath) {
    return null;
  }
  
  // Rimuovi eventuali prefissi di lingua dal percorso
  const pathWithoutLang = currentPath.replace(/^\/(it|en)/, '');
  
  // Crea l'URL canonico
  const canonicalUrl = getFullUrl(pathWithoutLang);
  
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Rimuovi eventuali link canonici o hreflang esistenti in modo sicuro
      document.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach(el => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      
      // Aggiungi il link canonico
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
      
      // Aggiungi i link per le lingue alternative
      languages.forEach(lang => {
        const alternateLink = document.createElement('link');
        alternateLink.rel = 'alternate';
        alternateLink.setAttribute('hreflang', lang);
        alternateLink.href = lang === SEO_CONSTANTS.DEFAULT_LANGUAGE 
          ? canonicalUrl 
          : getFullUrl(`/${lang}${pathWithoutLang}`);
        document.head.appendChild(alternateLink);
      });
      
      // Aggiungi il link x-default
      const defaultLink = document.createElement('link');
      defaultLink.rel = 'alternate';
      defaultLink.setAttribute('hreflang', 'x-default');
      defaultLink.href = canonicalUrl;
      document.head.appendChild(defaultLink);
    } catch (error) {
      console.error('Errore durante la creazione dei CanonicalLinks:', error);
    }
    
    // Pulizia quando il componente viene smontato
    return () => {
      if (typeof window === 'undefined' || !document) return;
      
      try {
        document.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach(el => {
          if (el && el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
      } catch (error) {
        console.error('Errore durante la rimozione dei CanonicalLinks:', error);
      }
    };
  }, [canonicalUrl, languages, pathWithoutLang]);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
