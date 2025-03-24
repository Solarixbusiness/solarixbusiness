'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeAnalytics } from '@/utils/analytics';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Inizializza Google Analytics solo se è disponibile l'ID di misurazione
    const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    
    if (measurementId) {
      initializeAnalytics();
    }
  }, []);
  
  // Traccia i cambiamenti di pagina
  useEffect(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const url = `${pathname}${searchParams ? `?${searchParams}` : ''}`;
      
      // Invia il pageview a Google Analytics
      (window as any).gtag('event', 'page_view', {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
