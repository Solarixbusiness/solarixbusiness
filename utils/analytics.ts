import { useEffect } from 'react';

/**
 * Invia le metriche di performance a Google Analytics
 * @param metric Nome della metrica
 * @param value Valore della metrica
 * @param category Categoria della metrica
 */
export function sendPerformanceMetric(metric: string, value: number, category: string = 'Web Vitals') {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = window.gtag;
    
    // Invia l'evento a Google Analytics
    gtag('event', metric, {
      event_category: category,
      value: Math.round(value),
      non_interaction: true,
    });
  }
}

/**
 * Misura e invia le metriche Web Vitals a Google Analytics
 */
export function measureWebVitals() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          sendPerformanceMetric('FCP', entry.startTime);
          fcpObserver.disconnect();
        }
      }
    });
    
    fcpObserver.observe({ type: 'paint', buffered: true });
    
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      sendPerformanceMetric('LCP', lastEntry.startTime);
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        sendPerformanceMetric('FID', (entry as any).processingStart - entry.startTime);
        fidObserver.disconnect();
      }
    });
    
    fidObserver.observe({ type: 'first-input', buffered: true });
    
    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // Ignora gli spostamenti di layout causati dall'interazione dell'utente
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      }
      
      // Invia CLS solo quando l'utente lascia la pagina
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          sendPerformanceMetric('CLS', clsValue);
        }
      }, { once: true });
    });
    
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    
    // Time to First Byte (TTFB)
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const ttfb = (navigationEntries[0] as any).responseStart;
      sendPerformanceMetric('TTFB', ttfb);
    }
  }
}

// Funzione per il tipo gtag
type GtagFunction = (command: string, ...args: any[]) => void;

/**
 * Inizializza Google Analytics
 */
export function initializeAnalytics() {
  if (typeof window !== 'undefined') {
    try {
      const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
      
      if (!measurementId) {
        console.warn('ID di Google Analytics non configurato');
        return;
      }

      // Aggiungi il script di Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.onload = () => {
        // Inizializza Google Analytics
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function() {
          window.dataLayer.push(arguments);
        };
        
        window.gtag('js', new Date());
        window.gtag('config', measurementId, {
          send_page_view: true,
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure',
        });

        // Misura e invia le metriche Web Vitals
        measureWebVitals();
      };
      
      // Aggiungi lo script alla pagina
      document.head.appendChild(script);
    } catch (error) {
      console.error('Errore durante l\'inizializzazione di Google Analytics:', error);
    }
  }
}
