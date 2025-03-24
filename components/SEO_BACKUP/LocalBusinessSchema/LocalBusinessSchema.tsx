'use client';

import React, { useEffect } from 'react';
import { SEO_CONSTANTS, getFullUrl } from '@/utils/seoConstants';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  logo?: string;
  image?: string;
  priceRange?: string;
  openingHours?: string[];
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    postalCode?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  sameAs?: string[];
}

export default function LocalBusinessSchema({
  name = SEO_CONSTANTS.COMPANY_NAME,
  description = SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  url = SEO_CONSTANTS.SITE_URL,
  telephone = SEO_CONSTANTS.COMPANY_PHONE,
  email = SEO_CONSTANTS.COMPANY_EMAIL,
  logo = SEO_CONSTANTS.COMPANY_LOGO,
  image,
  priceRange = '€€',
  openingHours = ['Mo-Fr 09:00-18:00'],
  address = {
    streetAddress: SEO_CONSTANTS.ADDRESS.STREET,
    addressLocality: SEO_CONSTANTS.ADDRESS.CITY,
    postalCode: SEO_CONSTANTS.ADDRESS.POSTAL_CODE,
    addressRegion: SEO_CONSTANTS.ADDRESS.REGION,
    addressCountry: SEO_CONSTANTS.ADDRESS.COUNTRY_CODE,
  },
  geo = {
    latitude: SEO_CONSTANTS.GEO.LATITUDE,
    longitude: SEO_CONSTANTS.GEO.LONGITUDE,
  },
  sameAs = [
    SEO_CONSTANTS.SOCIAL_FACEBOOK,
    SEO_CONSTANTS.SOCIAL_INSTAGRAM,
    SEO_CONSTANTS.SOCIAL_LINKEDIN,
  ],
}: LocalBusinessSchemaProps) {
  useEffect(() => {
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Crea i dati strutturati per l'azienda locale
      const localBusinessSchema: Record<string, any> = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': name,
        'description': description,
        'url': url,
        'telephone': telephone,
        'email': email,
        'logo': logo.startsWith('http') ? logo : getFullUrl(logo),
        'priceRange': priceRange,
        'openingHours': openingHours,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': address.streetAddress,
          'addressLocality': address.addressLocality,
          'postalCode': address.postalCode,
          'addressRegion': address.addressRegion,
          'addressCountry': address.addressCountry,
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': geo.latitude,
          'longitude': geo.longitude,
        },
        'sameAs': sameAs,
      };
      
      // Aggiungi l'immagine se fornita
      if (image) {
        localBusinessSchema.image = image.startsWith('http') ? image : getFullUrl(image);
      }
      
      // Rimuovi eventuali script precedenti in modo sicuro
      const existingScript = document.getElementById('localbusiness-jsonld');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      
      // Aggiungi lo script JSON-LD alla pagina
      const script = document.createElement('script');
      script.id = 'localbusiness-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(localBusinessSchema);
      document.head.appendChild(script);
    } catch (error) {
      console.error('Errore durante la creazione del LocalBusinessSchema:', error);
    }
    
    return () => {
      if (typeof window === 'undefined' || !document) return;
      
      try {
        const scriptToRemove = document.getElementById('localbusiness-jsonld');
        if (scriptToRemove && scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      } catch (error) {
        console.error('Errore durante la rimozione del LocalBusinessSchema:', error);
      }
    };
  }, [name, description, url, telephone, email, logo, image, priceRange, openingHours, address, geo, sameAs]);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
