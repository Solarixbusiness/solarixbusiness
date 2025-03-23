'use client';

import { useEffect, useState } from 'react';
import styles from './PerformanceMetrics.module.css';

interface PerformanceData {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
}

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceData>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null
  });
  
  const [showMetrics, setShowMetrics] = useState(false);
  
  useEffect(() => {
    // Solo in ambiente di sviluppo o con un flag specifico
    const shouldShowMetrics = process.env.NODE_ENV === 'development' || 
                              localStorage.getItem('show-performance-metrics') === 'true';
    
    if (!shouldShowMetrics) return;
    
    // Abilita la visualizzazione delle metriche
    setShowMetrics(true);
    
    // First Contentful Paint (FCP)
    const observeFCP = () => {
      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            observer.disconnect();
          }
        }
      };
      
      const observer = new PerformanceObserver(entryHandler);
      observer.observe({ type: 'paint', buffered: true });
    };
    
    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
      };
      
      const observer = new PerformanceObserver(entryHandler);
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    };
    
    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];
      
      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          // Ignora gli spostamenti di layout causati dall'interazione dell'utente
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            clsEntries.push(entry);
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        }
      };
      
      const observer = new PerformanceObserver(entryHandler);
      observer.observe({ type: 'layout-shift', buffered: true });
    };
    
    // First Input Delay (FID)
    const observeFID = () => {
      const entryHandler = (entries: PerformanceObserverEntryList) => {
        for (const entry of entries.getEntries()) {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        }
      };
      
      const observer = new PerformanceObserver(entryHandler);
      observer.observe({ type: 'first-input', buffered: true });
    };
    
    // Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const ttfb = (navigationEntries[0] as any).responseStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    };
    
    // Esegui tutte le misurazioni
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      observeFCP();
      observeLCP();
      observeCLS();
      observeFID();
      measureTTFB();
    }
  }, []);
  
  if (!showMetrics) return null;
  
  // Funzione per formattare i millisecondi
  const formatTime = (time: number | null) => {
    if (time === null) return 'Measuring...';
    return `${Math.round(time)} ms`;
  };
  
  // Funzione per valutare le prestazioni
  const evaluateMetric = (metric: string, value: number | null) => {
    if (value === null) return 'neutral';
    
    switch (metric) {
      case 'fcp':
        return value < 1800 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor';
      case 'lcp':
        return value < 2500 ? 'good' : value < 4000 ? 'needs-improvement' : 'poor';
      case 'cls':
        return value < 0.1 ? 'good' : value < 0.25 ? 'needs-improvement' : 'poor';
      case 'fid':
        return value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor';
      case 'ttfb':
        return value < 200 ? 'good' : value < 500 ? 'needs-improvement' : 'poor';
      default:
        return 'neutral';
    }
  };
  
  return (
    <div className={styles.metricsContainer}>
      <h3>Performance Metrics</h3>
      <div className={styles.metrics}>
        <div className={`${styles.metric} ${styles[evaluateMetric('fcp', metrics.fcp)]}`}>
          <span className={styles.metricName}>FCP</span>
          <span className={styles.metricValue}>{formatTime(metrics.fcp)}</span>
        </div>
        <div className={`${styles.metric} ${styles[evaluateMetric('lcp', metrics.lcp)]}`}>
          <span className={styles.metricName}>LCP</span>
          <span className={styles.metricValue}>{formatTime(metrics.lcp)}</span>
        </div>
        <div className={`${styles.metric} ${styles[evaluateMetric('cls', metrics.cls)]}`}>
          <span className={styles.metricName}>CLS</span>
          <span className={styles.metricValue}>
            {metrics.cls === null ? 'Measuring...' : metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className={`${styles.metric} ${styles[evaluateMetric('fid', metrics.fid)]}`}>
          <span className={styles.metricName}>FID</span>
          <span className={styles.metricValue}>{formatTime(metrics.fid)}</span>
        </div>
        <div className={`${styles.metric} ${styles[evaluateMetric('ttfb', metrics.ttfb)]}`}>
          <span className={styles.metricName}>TTFB</span>
          <span className={styles.metricValue}>{formatTime(metrics.ttfb)}</span>
        </div>
      </div>
      <button 
        className={styles.closeButton}
        onClick={() => {
          setShowMetrics(false);
          localStorage.setItem('show-performance-metrics', 'false');
        }}
      >
        Close
      </button>
    </div>
  );
}
