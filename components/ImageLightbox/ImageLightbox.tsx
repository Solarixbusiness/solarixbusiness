'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, alt, width = 800, height = 500 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const imageRef = useRef<HTMLDivElement>(null);

  const openLightbox = () => {
    setIsOpen(true);
    setPosition({ x: 0, y: 0 }); // Reset position when opening
    setScale(1); // Reset scale when opening
    // Impedisce lo scroll della pagina quando il lightbox è aperto
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = (e: React.MouseEvent) => {
    // Chiudi solo se si clicca fuori dall'immagine o sul pulsante di chiusura
    if (
      e.target === e.currentTarget ||
      (e.currentTarget as HTMLElement).getAttribute('data-close') === 'true'
    ) {
      setIsOpen(false);
      // Ripristina lo scroll della pagina
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    }
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo click sinistro
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartPos({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    setPosition({ x: newX, y: newY });
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newX = touch.clientX - startPos.x;
    const newY = touch.clientY - startPos.y;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Gestione dello zoom con la rotellina del mouse
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = -Math.sign(e.deltaY);
    const newScale = Math.max(0.5, Math.min(5, scale + delta * 0.1));
    setScale(newScale);
  };

  // Gestione del pinch zoom su dispositivi touch
  let initialDistance = 0;
  const handleTouchStartZoom = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      initialDistance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
    }
  };

  const handleTouchMoveZoom = (e: TouchEvent) => {
    if (e.touches.length === 2 && initialDistance > 0) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      
      const delta = currentDistance / initialDistance;
      const newScale = Math.max(0.5, Math.min(5, scale * delta));
      setScale(newScale);
      initialDistance = currentDistance;
    }
  };

  // Aggiungi e rimuovi event listener per il drag e lo zoom
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStartZoom);
      window.addEventListener('touchmove', handleTouchMoveZoom);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleMouseUp);
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStartZoom);
        window.removeEventListener('touchmove', handleTouchMoveZoom);
      };
    }
  }, [isOpen, isDragging, startPos, scale]);

  return (
    <>
      {/* Immagine anteprima cliccabile */}
      <div 
        className="relative w-full cursor-pointer" 
        style={{ height: `${height}px` }}
        onClick={openLightbox}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20">
          <div className="bg-white bg-opacity-80 px-4 py-2 rounded-md text-gray-800 font-medium">
            Clicca per ingrandire
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeLightbox}
        >
          <div 
            ref={imageRef}
            className="relative w-[90vw] h-[90vh] max-w-[1600px] cursor-move"
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClick={(e) => e.stopPropagation()} // Previene la chiusura quando si clicca sull'immagine
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
              draggable={false}
            />
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
              onClick={closeLightbox}
              data-close="true"
              aria-label="Chiudi"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-md">
              <p className="text-center text-gray-800 text-sm">Trascina l'immagine per spostarla • Usa la rotellina del mouse per zoomare</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
