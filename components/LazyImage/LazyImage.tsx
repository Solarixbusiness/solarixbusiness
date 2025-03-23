'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './LazyImage.module.css';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  style?: React.CSSProperties;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  fill = false,
  placeholder = 'empty',
  blurDataURL,
  style,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    // Utilizziamo Intersection Observer per caricare l'immagine solo quando è visibile
    if (!priority && 'IntersectionObserver' in window) {
      try {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
              }
            });
          },
          { rootMargin: '200px' } // Inizia a caricare l'immagine quando è a 200px dallo schermo
        );
        
        // Utilizziamo il ref invece di document.getElementById
        if (containerRef.current) {
          observer.observe(containerRef.current);
          
          // Cleanup function
          return () => {
            try {
              if (containerRef.current) {
                observer.unobserve(containerRef.current);
              }
              observer.disconnect();
            } catch (error) {
              console.error('Errore durante la disconnessione dell\'observer:', error);
            }
          };
        }
      } catch (error) {
        console.error('Errore durante l\'inizializzazione dell\'IntersectionObserver:', error);
        setIsInView(true); // Fallback: mostra l'immagine in caso di errore
      }
    } else {
      setIsInView(true);
    }
  }, [src, priority]);
  
  return (
    <div 
      className={`${styles.lazyImageContainer} ${className}`} 
      id={`lazy-image-${src.replace(/\W/g, '')}`}
      style={style}
      ref={containerRef}
    >
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${styles.lazyImage} ${isLoaded ? styles.loaded : ''}`}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          sizes={sizes}
          quality={quality}
          fill={fill}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
        />
      )}
      {!isLoaded && (
        <div className={styles.placeholder}>
          <div className={styles.shimmer}></div>
        </div>
      )}
    </div>
  );
}
