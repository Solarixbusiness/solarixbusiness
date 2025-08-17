'use client';

import { useCallback } from 'react';

/**
 * Hook per ottimizzare attività lunghe JavaScript
 * Implementa scheduler.yield() con fallback per browser compatibility
 */

// Polyfill per scheduler.yield() con fallback
const yieldToMain = (): Promise<void> => {
  // Controlla se scheduler.yield() è disponibile
  if (typeof window !== 'undefined' && 
      'scheduler' in window && 
      typeof (window as any).scheduler?.yield === 'function') {
    return (window as any).scheduler.yield();
  }

  // Fallback con setTimeout per browser non supportati
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};

export const useTaskOptimization = () => {
  /**
   * Esegue una serie di operazioni suddividendole in task più piccoli
   */
  const runOptimizedTasks = useCallback(async <T>(
    tasks: Array<() => T | Promise<T>>,
    yieldInterval: number = 50
  ): Promise<T[]> => {
    const results: T[] = [];
    let lastYield = performance.now();

    for (const task of tasks) {
      // Esegui il task
      const result = await task();
      results.push(result);

      // Cedi il controllo se è passato troppo tempo
      if (performance.now() - lastYield > yieldInterval) {
        await yieldToMain();
        lastYield = performance.now();
      }
    }

    return results;
  }, []);

  /**
   * Processa un array di dati in chunk per evitare blocchi del thread
   */
  const processInChunks = useCallback(async <T, R>(
    data: T[],
    processor: (item: T, index: number) => R | Promise<R>,
    chunkSize: number = 10
  ): Promise<R[]> => {
    const results: R[] = [];
    
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      
      // Processa il chunk
      const chunkResults = await Promise.all(
        chunk.map((item, idx) => processor(item, i + idx))
      );
      
      results.push(...chunkResults);
      
      // Cedi il controllo dopo ogni chunk
      if (i + chunkSize < data.length) {
        await yieldToMain();
      }
    }

    return results;
  }, []);

  /**
   * Wrapper per funzioni che potrebbero essere pesanti
   */
  const withYielding = useCallback(async <T>(
    heavyFunction: () => Promise<T> | T,
    shouldYield: boolean = true
  ): Promise<T> => {
    const startTime = performance.now();
    
    const result = await heavyFunction();
    
    // Se la funzione ha impiegato troppo tempo e shouldYield è true, cedi il controllo
    if (shouldYield && performance.now() - startTime > 50) {
      await yieldToMain();
    }
    
    return result;
  }, []);

  /**
   * Ottimizza cicli lunghi suddividendoli
   */
  const optimizedLoop = useCallback(async <T>(
    items: T[],
    callback: (item: T, index: number) => void | Promise<void>,
    batchSize: number = 50
  ): Promise<void> => {
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      
      // Processa il batch
      for (let j = 0; j < batch.length; j++) {
        await callback(batch[j], i + j);
      }
      
      // Cedi il controllo dopo ogni batch
      if (i + batchSize < items.length) {
        await yieldToMain();
      }
    }
  }, []);

  return {
    runOptimizedTasks,
    processInChunks,
    withYielding,
    optimizedLoop,
    yieldToMain
  };
};
