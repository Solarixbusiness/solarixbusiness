'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTaskOptimization } from '../../hooks/useTaskOptimization';

interface CarouselItem {
  id: string;
  content: React.ReactNode;
}

interface OptimizedCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function OptimizedCarousel({ 
  items, 
  autoPlay = false, 
  interval = 5000,
  className = '' 
}: OptimizedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { withYielding, optimizedLoop } = useTaskOptimization();

  // Ottimizza il cambio slide con yielding
  const changeSlide = useCallback(async (newIndex: number) => {
    await withYielding(async () => {
      setCurrentIndex(newIndex);
    });
  }, [withYielding]);

  // Gestione autoplay ottimizzata
  const startAutoPlay = useCallback(async () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(async () => {
      await withYielding(async () => {
        setCurrentIndex(prev => (prev + 1) % items.length);
      });
    }, interval);
  }, [items.length, interval, withYielding]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Gestione touch/swipe ottimizzata
  const handleTouchStart = useCallback(async (e: React.TouchEvent) => {
    await withYielding(async () => {
      const touch = e.touches[0];
      // Logica touch start
    });
  }, [withYielding]);

  // Preload delle immagini in modo ottimizzato
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls: string[] = [];
      
      // Estrai URL delle immagini dai contenuti
      items.forEach(item => {
        // Logica per estrarre URL immagini dal contenuto
        // Questo dipende dalla struttura del tuo contenuto
      });

      await optimizedLoop(imageUrls, async (url) => {
        const img = new Image();
        img.src = url;
      }, 3); // Preload 3 immagini alla volta
    };

    preloadImages();
  }, [items, optimizedLoop]);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isPlaying, startAutoPlay, stopAutoPlay]);

  return (
    <div className={`carousel-container ${className}`}>
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="carousel-slide">
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {/* Controlli */}
      <button 
        onClick={() => changeSlide((currentIndex - 1 + items.length) % items.length)}
        className="carousel-btn carousel-prev"
        aria-label="Slide precedente"
      >
        ←
      </button>
      
      <button 
        onClick={() => changeSlide((currentIndex + 1) % items.length)}
        className="carousel-btn carousel-next"
        aria-label="Slide successiva"
      >
        →
      </button>

      {/* Indicatori */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controllo play/pause */}
      {autoPlay && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="carousel-play-pause"
          aria-label={isPlaying ? 'Pausa' : 'Play'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      )}
    </div>
  );
}
