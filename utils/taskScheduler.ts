/**
 * Task Scheduler utility per ottimizzare attività lunghe JavaScript
 * Implementa scheduler.yield() con fallback cross-browser
 */

// Dichiarazione per scheduler API
declare global {
  interface Scheduler {
    yield(): Promise<void>;
  }
  
  var scheduler: Scheduler | undefined;
}

// Polyfill per scheduler.yield() con fallback
function yieldToMain(): Promise<void> {
  if (typeof globalThis !== 'undefined' && globalThis.scheduler?.yield) {
    return globalThis.scheduler.yield();
  }

  // Fallback con setTimeout per browser non supportati
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

/**
 * Esegue una serie di job suddividendoli in task più piccoli
 * per evitare di bloccare il thread principale
 */
export async function runJobs<T>(
  jobQueue: Array<() => T | Promise<T>>,
  deadline: number = 50
): Promise<T[]> {
  const results: T[] = [];
  let lastYield = performance.now();

  for (const job of jobQueue) {
    // Esegui il job
    const result = await job();
    results.push(result);

    // Se è passato troppo tempo dall'ultimo yield, cedi il controllo
    if (performance.now() - lastYield > deadline) {
      await yieldToMain();
      lastYield = performance.now();
    }
  }

  return results;
}

/**
 * Processa un array di dati suddividendo il lavoro in chunk
 * per evitare attività lunghe
 */
export async function processDataChunked<T, R>(
  data: T[],
  processor: (item: T) => R | Promise<R>,
  chunkSize: number = 10,
  deadline: number = 50
): Promise<R[]> {
  const results: R[] = [];
  let lastYield = performance.now();

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    
    // Processa il chunk
    for (const item of chunk) {
      const result = await processor(item);
      results.push(result);
    }

    // Cedi il controllo dopo ogni chunk se necessario
    if (performance.now() - lastYield > deadline) {
      await yieldToMain();
      lastYield = performance.now();
    }
  }

  return results;
}

/**
 * Wrapper per funzioni async che potrebbero essere lunghe
 * Aggiunge automaticamente yielding periodico
 */
export async function withYielding<T>(
  asyncFunction: () => Promise<T>,
  yieldInterval: number = 50
): Promise<T> {
  const startTime = performance.now();
  
  // Esegui la funzione
  const result = await asyncFunction();
  
  // Se ha impiegato troppo tempo, cedi il controllo
  if (performance.now() - startTime > yieldInterval) {
    await yieldToMain();
  }
  
  return result;
}

/**
 * Scheduler per attività con priorità
 */
export class TaskScheduler {
  private highPriorityQueue: Array<() => Promise<void>> = [];
  private normalPriorityQueue: Array<() => Promise<void>> = [];
  private isRunning = false;

  /**
   * Aggiunge un task ad alta priorità
   */
  addHighPriorityTask(task: () => Promise<void>): void {
    this.highPriorityQueue.push(task);
    this.scheduleExecution();
  }

  /**
   * Aggiunge un task a priorità normale
   */
  addTask(task: () => Promise<void>): void {
    this.normalPriorityQueue.push(task);
    this.scheduleExecution();
  }

  /**
   * Esegue i task in coda rispettando le priorità
   */
  private async scheduleExecution(): Promise<void> {
    if (this.isRunning) return;
    
    this.isRunning = true;
    let lastYield = performance.now();

    try {
      while (this.highPriorityQueue.length > 0 || this.normalPriorityQueue.length > 0) {
        // Esegui prima i task ad alta priorità
        if (this.highPriorityQueue.length > 0) {
          const task = this.highPriorityQueue.shift()!;
          await task();
        } else if (this.normalPriorityQueue.length > 0) {
          const task = this.normalPriorityQueue.shift()!;
          await task();
        }

        // Cedi il controllo periodicamente
        if (performance.now() - lastYield > 50) {
          await yieldToMain();
          lastYield = performance.now();
        }
      }
    } finally {
      this.isRunning = false;
    }
  }
}

// Istanza globale del task scheduler
export const globalTaskScheduler = new TaskScheduler();
