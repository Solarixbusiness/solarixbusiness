'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SEO_CONSTANTS, getFullUrl } from '@/utils/seoConstants';

interface SocialMetaProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  url?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  siteName?: string;
  locale?: string;
}

export default function SocialMeta({
  title = SEO_CONSTANTS.DEFAULT_TITLE,
  description = SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  ogImage = SEO_CONSTANTS.DEFAULT_OG_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  url,
  publishedTime,
  modifiedTime,
  authorName,
  siteName = SEO_CONSTANTS.SITE_NAME,
  locale = 'it_IT',
}: SocialMetaProps) {
  const pathname = usePathname();
  const pageUrl = url || getFullUrl(pathname ?? '');
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : getFullUrl(ogImage);
  
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Rimuovi eventuali meta tag social esistenti in modo sicuro
      document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(el => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      
      // Funzione per creare e aggiungere meta tag
      const addMetaTag = (attributes: Record<string, string>) => {
        const meta = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => {
          meta.setAttribute(key, value);
        });
        document.head.appendChild(meta);
      };
      
      // Open Graph meta tags
      addMetaTag({ property: 'og:title', content: title });
      addMetaTag({ property: 'og:description', content: description });
      addMetaTag({ property: 'og:type', content: ogType });
      addMetaTag({ property: 'og:url', content: pageUrl });
      addMetaTag({ property: 'og:image', content: fullImageUrl });
      addMetaTag({ property: 'og:site_name', content: siteName });
      addMetaTag({ property: 'og:locale', content: locale });
      
      // Aggiungi meta tag opzionali per Open Graph
      if (publishedTime && ogType === 'article') {
        addMetaTag({ property: 'article:published_time', content: publishedTime });
      }
      
      if (modifiedTime && ogType === 'article') {
        addMetaTag({ property: 'article:modified_time', content: modifiedTime });
      }
      
      if (authorName && ogType === 'article') {
        addMetaTag({ property: 'article:author', content: authorName });
      }
      
      // Twitter Card meta tags
      addMetaTag({ name: 'twitter:card', content: twitterCard });
      addMetaTag({ name: 'twitter:title', content: title });
      addMetaTag({ name: 'twitter:description', content: description });
      addMetaTag({ name: 'twitter:image', content: fullImageUrl });
      addMetaTag({ name: 'twitter:url', content: pageUrl });
    } catch (error) {
      console.error('Errore durante la creazione dei SocialMeta:', error);
    }
    
    // Pulizia quando il componente viene smontato
    return () => {
      if (typeof window === 'undefined' || !document) return;
      
      try {
        document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(el => {
          if (el && el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
      } catch (error) {
        console.error('Errore durante la rimozione dei SocialMeta:', error);
      }
    };
  }, [title, description, ogImage, ogType, twitterCard, pageUrl, fullImageUrl, publishedTime, modifiedTime, authorName, siteName, locale]);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
