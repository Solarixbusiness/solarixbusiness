'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Verifica che siamo nel browser
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      // Aggiungiamo preconnect per Google Fonts
      const addPreconnect = () => {
        const links = [
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
        ];
        
        links.forEach(linkData => {
          const link = document.createElement('link');
          link.rel = linkData.rel;
          link.href = linkData.href;
          if (linkData.crossOrigin) {
            link.crossOrigin = linkData.crossOrigin;
          }
          document.head.appendChild(link);
        });
      };
      
      // Aggiungiamo preload per i font locali
      const preloadLocalFonts = () => {
        const fonts = [
          { href: '/fonts/roboto/Roboto-Regular.woff2', type: 'font/woff2', as: 'font', crossOrigin: 'anonymous' },
          { href: '/fonts/roboto/Roboto-Bold.woff2', type: 'font/woff2', as: 'font', crossOrigin: 'anonymous' },
          { href: '/fonts/orbitron/Orbitron-Medium.woff2', type: 'font/woff2', as: 'font', crossOrigin: 'anonymous' },
          { href: '/fonts/orbitron/Orbitron-Bold.woff2', type: 'font/woff2', as: 'font', crossOrigin: 'anonymous' }
        ];
        
        fonts.forEach(fontData => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = fontData.href;
          link.as = fontData.as;
          link.type = fontData.type;
          if (fontData.crossOrigin) {
            link.crossOrigin = fontData.crossOrigin;
          }
          document.head.appendChild(link);
        });
      };
      
      // Aggiungiamo font-display: swap per evitare FOIT (Flash of Invisible Text)
      const addFontDisplaySwap = () => {
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/fonts/roboto/Roboto-Regular.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('/fonts/roboto/Roboto-Bold.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Orbitron';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/orbitron/Orbitron-Medium.woff2') format('woff2');
          }
          
          @font-face {
            font-family: 'Orbitron';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('/fonts/orbitron/Orbitron-Bold.woff2') format('woff2');
          }
        `;
        document.head.appendChild(style);
      };
      
      addPreconnect();
      preloadLocalFonts();
      addFontDisplaySwap();
    } catch (error) {
      console.error('Error loading fonts:', error);
    }
  }, []);
  
  return null;
}
