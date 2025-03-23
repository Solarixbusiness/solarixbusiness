'use client';

import React, { useEffect } from 'react';
import { SEO_CONSTANTS, getFullUrl } from '@/utils/seoConstants';

interface OfferSchema {
  price: string | number;
  priceCurrency: string;
  availability: string;
  url?: string;
  priceValidUntil?: string;
  itemCondition?: string;
  seller?: {
    name: string;
    url?: string;
  };
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  sku?: string;
  brand?: string;
  offers?: OfferSchema;
  price?: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
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
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Prepara l'URL completo dell'immagine
      const imageUrl = image.startsWith('http') ? image : getFullUrl(image);
      
      // Prepara l'URL della pagina
      const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
      
      // Crea i dati strutturati per il prodotto
      const productSchema: Record<string, any> = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': name,
        'description': description,
        'image': imageUrl,
        'brand': {
          '@type': 'Brand',
          'name': brand
        },
        'url': pageUrl
      };
      
      // Aggiungi SKU se fornito
      if (sku) {
        productSchema.sku = sku;
      }
      
      // Aggiungi categoria se fornita
      if (category) {
        productSchema.category = category;
      }
      
      // Aggiungi offerta se fornita o crea da prezzo e disponibilità
      if (offers) {
        productSchema.offers = {
          '@type': 'Offer',
          ...offers
        };
      } else if (price) {
        productSchema.offers = {
          '@type': 'Offer',
          'price': price,
          'priceCurrency': priceCurrency,
          'availability': `https://schema.org/${availability}`,
          'url': pageUrl
        };
      }
      
      // Aggiungi recensioni se fornite
      if (reviewCount && ratingValue) {
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
