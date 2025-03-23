/**
 * Invia le metriche di performance a Google Analytics
 * @param metric Nome della metrica
 * @param value Valore della metrica
 * @param category Categoria della metrica
 */
export function sendPerformanceMetric(metric: string, value: number, category: string = 'Web Vitals') {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    
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
type GtagFunction = (...args: any[]) => void;

/**
 * Inizializza Google Analytics
 * @param measurementId ID di misurazione di Google Analytics
 */
export function initializeAnalytics(measurementId: string) {
  if (typeof window !== 'undefined' && !window.location.href.includes('localhost')) {
    try {
      // Carica lo script di Google Analytics
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      
      // Inizializza Google Analytics
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Definizione della funzione gtag
      const gtag: GtagFunction = function() {
        (window as any).dataLayer.push(arguments);
      };
      
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', measurementId, {
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
      });
      
      // Aggiungi lo script al documento in modo sicuro
      if (document && document.head) {
        document.head.appendChild(script);
        
        // Misura e invia le metriche Web Vitals
        measureWebVitals();
      }
    } catch (error) {
      console.error('Errore durante l\'inizializzazione di Google Analytics:', error);
    }
  }
}
