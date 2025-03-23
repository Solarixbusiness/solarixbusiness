'use client';

import { useEffect } from 'react';
import { SEO_CONSTANTS } from '@/utils/seoConstants';
import { getFullUrl } from '@/utils/seoConstants';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  sku?: string;
  brand?: string;
  offers?: {
    price: number;
    priceCurrency?: string;
    availability?: string;
    priceValidUntil?: string;
    url?: string;
    itemCondition?: string;
    seller?: {
      name: string;
      url?: string;
    };
  };
  price?: number;
  priceCurrency?: string;
  availability?: string;
  url?: string;
  reviewCount?: number;
  ratingValue?: number;
  category?: string;
}

export default function ProductSchema({
  name,
  description,
  image,
  sku,
  brand = SEO_CONSTANTS.COMPANY_NAME,
  offers,
  price,
  priceCurrency = 'EUR',
  availability = 'InStock',
  url,
  reviewCount,
  ratingValue,
  category,
}: ProductSchemaProps) {
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Crea i dati strutturati per il prodotto
      const productSchema: Record<string, any> = {
        '@context': 'https://schema.org',
        '@type': SEO_CONSTANTS.SCHEMA_TYPES.PRODUCT,
        'name': name,
        'description': description,
        'image': image.startsWith('http') ? image : getFullUrl(image),
        'brand': {
          '@type': 'Brand',
          'name': brand
        }
      };
      
      // Aggiungi campi opzionali se presenti
      if (sku) productSchema.sku = sku;
      if (category) productSchema.category = category;
      if (url) productSchema.url = url.startsWith('http') ? url : getFullUrl(url);
      
      // Aggiungi informazioni sul prezzo se disponibili
      if (offers) {
        productSchema.offers = {
          '@type': 'Offer',
          'price': offers.price,
          'priceCurrency': offers.priceCurrency,
          'availability': offers.availability?.startsWith('http') ? offers.availability : `https://schema.org/${offers.availability}`,
          'url': offers.url ? (offers.url.startsWith('http') ? offers.url : getFullUrl(offers.url)) : (url ? (url.startsWith('http') ? url : getFullUrl(url)) : SEO_CONSTANTS.SITE_URL)
        };
        
        if (offers.priceValidUntil) productSchema.offers.priceValidUntil = offers.priceValidUntil;
        if (offers.itemCondition) productSchema.offers.itemCondition = offers.itemCondition;
        if (offers.seller) {
          productSchema.offers.seller = {
            '@type': 'Organization',
            'name': offers.seller.name
          };
          if (offers.seller.url) productSchema.offers.seller.url = offers.seller.url;
        }
      } else if (price !== undefined) {
        productSchema.offers = {
          '@type': 'Offer',
          'price': price,
          'priceCurrency': priceCurrency,
          'availability': `https://schema.org/${availability}`,
          'url': url ? (url.startsWith('http') ? url : getFullUrl(url)) : SEO_CONSTANTS.SITE_URL
        };
      }
      
      // Aggiungi recensioni se disponibili
      if (reviewCount !== undefined && ratingValue !== undefined) {
        productSchema.aggregateRating = {
          '@type': 'AggregateRating',
          'ratingValue': ratingValue,
          'reviewCount': reviewCount
        };
      }
      
      // Rimuovi eventuali script precedenti in modo sicuro
      const existingScript = document.getElementById('product-jsonld');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      
      // Aggiungi lo script JSON-LD alla pagina
      const script = document.createElement('script');
      script.id = 'product-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(productSchema);
      document.head.appendChild(script);
    } catch (error) {
      console.error('Errore durante la creazione del ProductSchema:', error);
    }
    
    return () => {
      if (typeof window === 'undefined' || !document) return;
      
      try {
        const scriptToRemove = document.getElementById('product-jsonld');
        if (scriptToRemove && scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      } catch (error) {
        console.error('Errore durante la rimozione del ProductSchema:', error);
      }
    };
  }, [name, description, image, sku, brand, offers, price, priceCurrency, availability, url, reviewCount, ratingValue, category]);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
