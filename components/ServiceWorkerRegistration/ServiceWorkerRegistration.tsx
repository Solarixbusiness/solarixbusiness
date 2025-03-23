'use client';

import { useEffect } from 'react';

// Dichiariamo l'interfaccia Window per aggiungere la proprietà refreshing
declare global {
  interface Window {
    refreshing?: boolean;
  }
}

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registrato con successo:', registration.scope);
            
            // Controlla se c'è un service worker in attesa
            if (registration.waiting) {
              // Notifica all'utente che c'è un aggiornamento disponibile
              notifyUpdate(registration);
            }
            
            // Ascolta per nuovi service worker in attesa
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // Notifica all'utente che c'è un aggiornamento disponibile
                    notifyUpdate(registration);
                  }
                });
              }
            });
          })
          .catch(error => {
            console.error('Errore durante la registrazione del Service Worker:', error);
          });
          
        // Controlla gli aggiornamenti ogni ora
        setInterval(() => {
          navigator.serviceWorker.getRegistration().then(registration => {
            if (registration) {
              registration.update();
            }
          });
        }, 60 * 60 * 1000);
        
        // Ascolta i messagi di controllo
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          // La pagina è stata presa in carico da un nuovo service worker
          if (window.refreshing) return;
          window.location.reload();
          window.refreshing = true;
        });
      });
    }
  }, []);
  
  // Funzione per notificare l'utente di un aggiornamento disponibile
  function notifyUpdate(registration: ServiceWorkerRegistration) {
    // Qui potresti mostrare un messaggio all'utente
    // Per semplicità, aggiorniamo automaticamente
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }
  
  // Non renderizza nulla, è solo un componente funzionale
  return null;
}
