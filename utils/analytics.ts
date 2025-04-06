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

// Configurazione del Consent Mode v2 e Privacy-Preserving Analytics
export function initializeAnalytics() {
  if (typeof window === 'undefined') return;

  // Carica lo script di Google Tag Manager con le nuove impostazioni di privacy
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
  script.async = true;
  script.setAttribute('data-cookieconsent', 'statistics');
  script.setAttribute('type', 'text/partytown');
  
  // Inizializza gtag con le impostazioni moderne
  window.dataLayer = window.dataLayer || [];
  const gtag = function(command: string, action: string, params?: any) {
    window.dataLayer?.push(arguments);
  };
  window.gtag = gtag;

  // Aspetta che lo script sia caricato prima di configurare
  script.onload = () => {
    // Configura il Consent Mode v2
    gtag('consent', 'default', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted',
      'security_storage': 'granted',
      'wait_for_update': 500
    });

    gtag('js', new Date().toISOString());
    gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '', {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      restricted_data_processing: true,
      cookie_flags: 'SameSite=None;Secure;Partitioned',
      privacy_sandbox: true
    });

    // Implementa il supporto per le nuove API di privacy
    if (typeof document !== 'undefined' && 'browsingTopics' in document) {
      (document as any).browsingTopics?.()
        .then((topics: Array<{ topic: string; taxonomyVersion: string }>) => {
          if (topics && topics.length > 0) {
            gtag('event', 'topics_available', {
              topics: topics.map(t => t.topic),
              non_interaction: true
            });
          }
        })
        .catch(() => {
          // Topics API non disponibile o negata
          console.debug('Topics API not available');
        });
    }
  };

  document.head.appendChild(script);
}

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: any) => void;
    dataLayer: any[];
  }
}
