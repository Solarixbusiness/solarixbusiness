'use client';

import { useEffect } from 'react';

type MetricName = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB' | 'INP';

interface WebVitalMetric {
  id: string;
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
}

// Funzione per inviare i dati delle metriche a Google Analytics
const sendToGoogleAnalytics = (metric: WebVitalMetric) => {
  // Verifica se Google Analytics è disponibile
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  
  if (!analyticsId || typeof window === 'undefined' || !('gtag' in window)) {
    return;
  }
  
  // Invia l'evento a Google Analytics
  // @ts-ignore
  window.gtag('event', 'web-vitals', {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_name: metric.name,
    metric_value: metric.value,
    metric_rating: metric.rating,
    metric_delta: metric.delta,
    non_interaction: true,
  });
};

export default function WebVitals() {
  useEffect(() => {
    // Importa la libreria web-vitals in modo dinamico
    import('web-vitals').then(({ onCLS, onFID, onLCP, onFCP, onTTFB, onINP }) => {
      // Registra Cumulative Layout Shift
      onCLS(metric => {
        sendToGoogleAnalytics(metric as WebVitalMetric);
      });
      
      // Registra First Input Delay
      onFID(metric => {
        sendToGoogleAnalytics(metric as WebVitalMetric);
      });
      
      // Registra Largest Contentful Paint
      onLCP(metric => {
        sendToGoogleAnalytics(metric as WebVitalMetric);
      });
      
      // Registra First Contentful Paint
      onFCP(metric => {
        sendToGoogleAnalytics(metric as WebVitalMetric);
      });
      
      // Registra Time to First Byte
      onTTFB(metric => {
        sendToGoogleAnalytics(metric as WebVitalMetric);
      });
      
      // Registra Interaction to Next Paint (sperimentale)
      onINP(metric => {
        sendToGoogleAnalytics(metric as WebVitalMetric);
      });
    });
  }, []);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
