'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import Head from 'next/head';
import { SEO_CONSTANTS, getFullUrl } from '@/utils/seoConstants';
import { FaqItem } from '@/components/FaqSchema/FaqSchema';

interface SeoManagerProps {
  canonicalPath?: string;
  languages?: string[];
  organizationData?: Record<string, any>;
  localBusinessData?: Record<string, any>;
  faqItems?: FaqItem[];
  socialData?: {
    title?: string;
    description?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'product' | 'profile';
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  };
}

export default function SeoManager({
  canonicalPath,
  languages = SEO_CONSTANTS.LANGUAGES,
  organizationData,
  localBusinessData,
  faqItems,
  socialData,
}: SeoManagerProps) {
  const pathname = usePathname();
  
  // Determina il percorso canonico
  const currentPath = canonicalPath || pathname;
  
  // Rimuovi eventuali prefissi di lingua dal percorso
  const pathWithoutLang = currentPath ? currentPath.replace(/^\/(it|en)/, '') : '';
  
  // Crea l'URL canonico
  const canonicalUrl = getFullUrl(pathWithoutLang);

  // Prepara i dati strutturati
  const organizationSchema = organizationData ? {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...organizationData
  } : null;

  const localBusinessSchema = localBusinessData ? {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    ...localBusinessData
  } : null;

  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  } : null;

  // Prepara i dati social
  const {
    title = SEO_CONSTANTS.DEFAULT_TITLE,
    description = SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    ogImage = SEO_CONSTANTS.DEFAULT_OG_IMAGE,
    ogType = 'website',
    twitterCard = 'summary_large_image'
  } = socialData || {};

  const fullImageUrl = ogImage.startsWith('http') ? ogImage : getFullUrl(ogImage);

  return (
    <>
      <Head>
        {/* Link canonico */}
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        
        {/* Link hreflang per le lingue alternative */}
        {languages.map(lang => (
          <link 
            key={`hreflang-${lang}`}
            rel="alternate" 
            hrefLang={lang} 
            href={lang === SEO_CONSTANTS.DEFAULT_LANGUAGE 
              ? canonicalUrl 
              : getFullUrl(`/${lang}${pathWithoutLang}`)} 
          />
        ))}
        
        {/* Link x-default */}
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={canonicalUrl} 
          key="hreflang-default" 
        />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content={title} key="og-title" />
        <meta property="og:description" content={description} key="og-description" />
        <meta property="og:type" content={ogType} key="og-type" />
        <meta property="og:url" content={canonicalUrl} key="og-url" />
        <meta property="og:image" content={fullImageUrl} key="og-image" />
        <meta property="og:site_name" content={SEO_CONSTANTS.SITE_NAME} key="og-site-name" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content={twitterCard} key="twitter-card" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta name="twitter:description" content={description} key="twitter-description" />
        <meta name="twitter:image" content={fullImageUrl} key="twitter-image" />
      </Head>

      {/* JSON-LD per i dati strutturati dell'organizzazione */}
      {organizationSchema && (
        <Script 
          id="schema-organization" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
      )}
      
      {/* JSON-LD per i dati strutturati dell'azienda locale */}
      {localBusinessSchema && (
        <Script 
          id="schema-localbusiness" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
      )}
      
      {/* JSON-LD per i dati strutturati delle FAQ */}
      {faqSchema && (
        <Script 
          id="schema-faq" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
