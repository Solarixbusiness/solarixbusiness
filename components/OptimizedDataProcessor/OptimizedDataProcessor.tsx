'use client';

import React, { useState, useCallback } from 'react';
import { useTaskOptimization } from '../../hooks/useTaskOptimization';

interface DataItem {
  id: string;
  [key: string]: any;
}

interface OptimizedDataProcessorProps {
  data: DataItem[];
  onProcessComplete?: (results: any[]) => void;
  chunkSize?: number;
  processingDelay?: number;
}

export default function OptimizedDataProcessor({
  data,
  onProcessComplete,
  chunkSize = 50,
  processingDelay = 16 // ~60fps
}: OptimizedDataProcessorProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const { processInChunks, runOptimizedTasks } = useTaskOptimization();

  // Processa grandi dataset in modo ottimizzato
  const processLargeDataset = useCallback(async (dataset: DataItem[]) => {
    setIsProcessing(true);
    setProgress(0);

    try {
      const results = await processInChunks(
        dataset,
        async (item: DataItem, index: number) => {
          // Simula elaborazione pesante
          const processed = {
            ...item,
            processed: true,
            timestamp: Date.now(),
            index
          };

          // Aggiorna progress ogni 10 elementi
          if (index % 10 === 0) {
            setProgress((index / dataset.length) * 100);
          }

          return processed;
        },
        chunkSize
      );

      setProgress(100);
      onProcessComplete?.(results);
      return results;
    } catch (error) {
      console.error('Errore durante l\'elaborazione:', error);
      throw error;
    } finally {
      setIsProcessing(false);
    }
  }, [processInChunks, chunkSize, onProcessComplete]);

  // Filtra e ordina grandi dataset
  const filterAndSort = useCallback(async (
    dataset: DataItem[],
    filterFn: (item: DataItem) => boolean,
    sortFn: (a: DataItem, b: DataItem) => number
  ) => {
    // Prima fase: filtraggio
    const filteredResults = await processInChunks(dataset, async (item) => {
      return filterFn(item) ? item : null;
    }, chunkSize);

    // Rimozione elementi null
    const filtered = filteredResults.filter(Boolean) as DataItem[];
    
    // Ordinamento ottimizzato per grandi array
    const sorted = filtered.sort(sortFn);
    
    return sorted;
  }, [processInChunks, chunkSize]);

  // Aggregazione dati ottimizzata
  const aggregateData = useCallback(async (
    dataset: DataItem[],
    groupBy: string,
    aggregateFn: (group: DataItem[]) => any
  ) => {
    const groups = new Map<string, DataItem[]>();

    // Raggruppa in chunk per evitare blocchi
    await processInChunks(dataset, async (item) => {
      const key = item[groupBy];
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(item);
      return item;
    }, chunkSize);

    // Aggrega ogni gruppo
    const aggregationTasks = Array.from(groups.entries()).map(([key, group]) => 
      async () => ({
        key,
        result: aggregateFn(group)
      })
    );

    return await runOptimizedTasks(aggregationTasks);
  }, [processInChunks, runOptimizedTasks, chunkSize]);

  return (
    <div className="optimized-data-processor">
      {isProcessing && (
        <div className="processing-indicator">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>Elaborazione in corso... {Math.round(progress)}%</span>
        </div>
      )}
      
      <div className="processor-controls">
        <button
          onClick={() => processLargeDataset(data)}
          disabled={isProcessing}
          className="process-btn"
        >
          {isProcessing ? 'Elaborazione...' : 'Avvia Elaborazione'}
        </button>
        
        <div className="processor-stats">
          <span>Elementi: {data.length}</span>
          <span>Chunk Size: {chunkSize}</span>
        </div>
      </div>
    </div>
  );
}
