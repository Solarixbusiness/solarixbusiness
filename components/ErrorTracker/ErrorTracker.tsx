'use client';

import { useEffect } from 'react';

export default function ErrorTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Funzione per inviare gli errori a Google Analytics
      const sendErrorToAnalytics = (error: Error, errorInfo: string) => {
        if ('gtag' in window) {
          (window as any).gtag('event', 'javascript_error', {
            event_category: 'Error',
            event_label: `${error.message} | ${errorInfo}`,
            non_interaction: true
          });
        }
      };
      
      // Gestione degli errori non catturati
      const handleError = (event: ErrorEvent) => {
        const { message, filename, lineno, colno, error } = event;
        const errorInfo = `${filename}:${lineno}:${colno}`;
        
        sendErrorToAnalytics(
          error || new Error(message),
          errorInfo
        );
      };
      
      // Gestione delle promise non gestite
      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        const error = event.reason instanceof Error 
          ? event.reason 
          : new Error(String(event.reason));
        
        sendErrorToAnalytics(
          error,
          'Unhandled Promise Rejection'
        );
      };
      
      // Registra i gestori di eventi
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);
      
      // Pulisci i gestori di eventi quando il componente viene smontato
      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, []);
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
