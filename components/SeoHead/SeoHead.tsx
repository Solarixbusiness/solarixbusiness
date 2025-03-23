'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SEO_CONSTANTS } from '../../utils/seoConstants';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: Record<string, any>;
  children?: React.ReactNode;
}

export default function SeoHead({
  title = 'solariXbusiness - Soluzioni energetiche per aziende',
  description = 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
  keywords = 'fotovoltaico aziende, pannelli solari industriali, energia solare business, impianti fotovoltaici aziendali, risparmio energetico',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
  structuredData,
  children
}: SeoHeadProps) {
  const pathname = usePathname();
  const siteUrl = 'https://solarixbusiness.it';
  const fullUrl = canonicalUrl || `${siteUrl}${pathname}`;
  
  // Dati strutturati di base per l'organizzazione
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SolariX Business',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONSTANTS.COMPANY_PHONE,
      contactType: 'customer service',
      availableLanguage: ['Italian', 'English']
    },
    sameAs: [
      'https://www.facebook.com/solarixbusiness',
      'https://www.instagram.com/solarixbusiness',
      'https://www.linkedin.com/company/solarixbusiness'
    ]
  };
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:site_name" content="SolariX Business" />
        <meta property="og:locale" content="it_IT" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Robots */}
        {noIndex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        
        {/* Favicon */}
        <link rel="icon" href="/images/faviconbus.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="it" href={`${siteUrl}${pathname}`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${pathname}`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${pathname}`} />
        
        {children}
      </Head>
      
      {/* Dati strutturati JSON-LD */}
      <JsonLd data={structuredData || baseStructuredData} />
    </>
  );
}
