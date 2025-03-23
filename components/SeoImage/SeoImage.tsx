'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import OptimizedImage from '@/components/OptimizedImage/OptimizedImage';

interface SeoImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  title?: string;
  caption?: string;
  useOptimized?: boolean;
  containerClassName?: string;
}

export default function SeoImage({
  alt,
  title,
  caption,
  useOptimized = true,
  containerClassName = '',
  ...props
}: SeoImageProps) {
  // Verifica che l'alt text sia presente e significativo
  if (!alt || alt === '' || alt === 'image') {
    console.warn('SeoImage: Alt text is missing or not descriptive enough');
  }
  
  // Componente wrapper per l'immagine
  const ImageComponent = useOptimized ? OptimizedImage : Image;
  
  // Aggiungi attributi per migliorare l'accessibilità e il SEO
  const imageProps = {
    ...props,
    alt,
    title: title || alt,
    loading: props.priority ? undefined : ('lazy' as const),
    decoding: 'async' as const,
  };
  
  return (
    <figure className={containerClassName}>
      <ImageComponent {...imageProps} />
      {caption && (
        <figcaption>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
