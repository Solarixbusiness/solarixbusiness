'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './OptimizedImage.module.css';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'className'> {
  lowQualitySrc?: string;
  className?: string;
  containerClassName?: string;
  disableBlur?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  lowQualitySrc,
  className = '',
  containerClassName = '',
  disableBlur = false,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Utilizziamo IntersectionObserver per rilevare quando l'immagine è visibile
  useEffect(() => {
    if (!imageRef.current || priority) {
      setIsInView(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Carichiamo l'immagine quando è a 200px dalla viewport
        threshold: 0.01
      }
    );
    
    observer.observe(imageRef.current);
    
    return () => {
      if (imageRef.current) {
        observer.disconnect();
      }
    };
  }, [priority]);
  
  // Funzione per gestire il caricamento dell'immagine
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  // Determiniamo la classe per l'effetto di sfocatura
  const blurClass = !disableBlur && !isLoaded ? styles.blur : '';
  
  return (
    <div 
      ref={imageRef} 
      className={`${styles.imageContainer} ${containerClassName}`}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: typeof height === 'number' ? `${height}px` : height }}
    >
      {isInView && (
        <>
          {!disableBlur && lowQualitySrc && !isLoaded && (
            <div 
              className={styles.placeholderImage}
              style={{ 
                backgroundImage: `url(${lowQualitySrc})`,
                width: '100%',
                height: '100%'
              }}
            />
          )}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleImageLoad}
            className={`${styles.image} ${blurClass} ${className} ${isLoaded ? styles.loaded : ''}`}
            priority={priority}
            {...props}
          />
        </>
      )}
      
      {!isInView && (
        <div 
          className={styles.placeholder}
          style={{ 
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0'
          }}
        />
      )}
    </div>
  );
}
