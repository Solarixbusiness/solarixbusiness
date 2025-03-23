'use client';

import { ReactNode, useEffect } from 'react';

/**
 * Componente che fornisce un wrapper sicuro per le manipolazioni del DOM
 * Intercetta e gestisce gli errori di manipolazione del DOM durante il ciclo di vita dei componenti React
 */
export default function SafeDOMWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      // Patch per il metodo removeChild per renderlo più sicuro
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function<T extends Node>(child: T): T {
        try {
          if (!child) {
            console.warn('SafeDOMWrapper: Tentativo di rimuovere un nodo figlio nullo');
            return child;
          }
          return originalRemoveChild.call(this, child) as T;
        } catch (error) {
          console.error('SafeDOMWrapper: Errore durante removeChild', error);
          return child;
        }
      };
      
      // Patch per il metodo appendChild per renderlo più sicuro
      const originalAppendChild = Node.prototype.appendChild;
      Node.prototype.appendChild = function<T extends Node>(node: T): T {
        try {
          if (!node) {
            console.warn('SafeDOMWrapper: Tentativo di aggiungere un nodo figlio nullo');
            return node;
          }
          return originalAppendChild.call(this, node) as T;
        } catch (error) {
          console.error('SafeDOMWrapper: Errore durante appendChild', error);
          return node;
        }
      };
      
      // Patch per il metodo insertBefore per renderlo più sicuro
      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function<T extends Node>(node: T, child: Node | null): T {
        try {
          if (!node) {
            console.warn('SafeDOMWrapper: Tentativo di inserire un nodo nullo');
            return node;
          }
          return originalInsertBefore.call(this, node, child) as T;
        } catch (error) {
          console.error('SafeDOMWrapper: Errore durante insertBefore', error);
          return node;
        }
      };
      
      // Ripristina i metodi originali quando il componente viene smontato
      return () => {
        try {
          Node.prototype.removeChild = originalRemoveChild;
          Node.prototype.appendChild = originalAppendChild;
          Node.prototype.insertBefore = originalInsertBefore;
        } catch (error) {
          console.error('SafeDOMWrapper: Errore durante il ripristino dei metodi originali', error);
        }
      };
    } catch (error) {
      console.error('SafeDOMWrapper: Errore durante l\'inizializzazione', error);
    }
  }, []);
  
  return <>{children}</>;
}
