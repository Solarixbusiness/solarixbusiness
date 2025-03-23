'use client';

import { useEffect } from 'react';

interface ScriptLoaderProps {
  src: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  onLoad?: () => void;
}

export default function ScriptLoader({
  src,
  id,
  async = true,
  defer = true,
  strategy = 'lazyOnload',
  onLoad
}: ScriptLoaderProps) {
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Se lo script è già presente, non lo carichiamo di nuovo
      if (id && document.getElementById(id)) {
        if (onLoad) onLoad();
        return;
      }

      // Funzione per caricare lo script
      const loadScript = () => {
        try {
          const script = document.createElement('script');
          script.src = src;
          script.async = async;
          script.defer = defer;
          if (id) script.id = id;
          
          if (onLoad) {
            script.onload = onLoad;
          }
          
          // Verifica che document.body esista prima di appendere lo script
          if (document.body) {
            document.body.appendChild(script);
          } else if (document.head) {
            // Fallback su head se body non è disponibile
            document.head.appendChild(script);
          }
        } catch (error) {
          console.error('Errore durante il caricamento dello script:', error);
        }
      };

      // Strategia di caricamento
      if (strategy === 'beforeInteractive') {
        loadScript();
      } else if (strategy === 'afterInteractive') {
        if (document.readyState === 'complete') {
          loadScript();
        } else {
          window.addEventListener('load', loadScript);
          return () => {
            if (typeof window !== 'undefined') {
              window.removeEventListener('load', loadScript);
            }
          };
        }
      } else if (strategy === 'lazyOnload') {
        // Utilizziamo Intersection Observer per caricare lo script quando l'utente è vicino al footer
        if ('IntersectionObserver' in window) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  loadScript();
                  observer.disconnect();
                }
              });
            },
            { rootMargin: '200px' }
          );
          
          // Osserviamo il footer o un elemento vicino alla fine della pagina
          const footer = document.querySelector('footer');
          if (footer) {
            observer.observe(footer);
            return () => {
              if (observer) {
                observer.disconnect();
              }
            };
          } else {
            // Se non c'è un footer, carichiamo lo script dopo un ritardo
            const timer = setTimeout(loadScript, 3000);
            return () => clearTimeout(timer);
          }
        } else {
          // Fallback per browser che non supportano IntersectionObserver
          const timer = setTimeout(loadScript, 3000);
          return () => clearTimeout(timer);
        }
      }
    } catch (error) {
      console.error('Errore durante l\'inizializzazione dello ScriptLoader:', error);
    }
  }, [src, id, async, defer, strategy, onLoad]);

  return null;
}
