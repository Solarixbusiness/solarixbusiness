/**
 * Carica uno script in modo asincrono
 * @param src URL dello script
 * @param id ID opzionale per lo script
 * @param callback Funzione di callback da eseguire quando lo script è caricato
 * @param attributes Attributi aggiuntivi da aggiungere allo script
 */
export function loadScript(
  src: string,
  id?: string,
  callback?: () => void,
  attributes?: Record<string, string>
): Promise<HTMLScriptElement> {
  return new Promise((resolve, reject) => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) {
      reject(new Error('Document not available'));
      return;
    }
    
    try {
      // Controlla se lo script è già stato caricato
      if (id && document.getElementById(id)) {
        if (callback) callback();
        const existingScript = document.getElementById(id) as HTMLScriptElement;
        if (existingScript) {
          resolve(existingScript);
          return;
        }
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      
      if (id) script.id = id;
      
      // Aggiungi attributi personalizzati
      if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
          script.setAttribute(key, value);
        });
      }
      
      script.onload = () => {
        if (callback) callback();
        resolve(script);
      };
      
      script.onerror = (error) => {
        reject(error);
      };
      
      // Verifica che document.body esista prima di appendere lo script
      if (document.body) {
        document.body.appendChild(script);
      } else if (document.head) {
        // Fallback su head se body non è disponibile
        document.head.appendChild(script);
      } else {
        reject(new Error('Neither document.body nor document.head is available'));
      }
    } catch (error) {
      console.error('Errore durante il caricamento dello script:', error);
      reject(error);
    }
  });
}

/**
 * Carica un foglio di stile in modo asincrono
 * @param href URL del foglio di stile
 * @param id ID opzionale per il foglio di stile
 */
export function loadStylesheet(
  href: string,
  id?: string
): Promise<HTMLLinkElement> {
  return new Promise((resolve, reject) => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) {
      reject(new Error('Document not available'));
      return;
    }
    
    try {
      // Controlla se il foglio di stile è già stato caricato
      if (id && document.getElementById(id)) {
        const existingLink = document.getElementById(id) as HTMLLinkElement;
        if (existingLink) {
          resolve(existingLink);
          return;
        }
      }
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      
      if (id) link.id = id;
      
      link.onload = () => {
        resolve(link);
      };
      
      link.onerror = (error) => {
        reject(error);
      };
      
      // Verifica che document.head esista prima di appendere il foglio di stile
      if (document.head) {
        document.head.appendChild(link);
      } else if (document.body) {
        // Fallback su body se head non è disponibile
        document.body.appendChild(link);
      } else {
        reject(new Error('Neither document.head nor document.body is available'));
      }
    } catch (error) {
      console.error('Errore durante il caricamento del foglio di stile:', error);
      reject(error);
    }
  });
}

/**
 * Rimuove in modo sicuro un elemento dal DOM
 * @param element Elemento da rimuovere
 */
export function safeRemoveElement(element: HTMLElement | null): void {
  if (!element) return;
  
  try {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  } catch (error) {
    console.error('Errore durante la rimozione dell\'elemento:', error);
  }
}

/**
 * Carica una libreria esterna in modo asincrono
 * @param libraryName Nome della libreria
 * @param globalObject Nome dell'oggetto globale che la libreria espone
 * @param scriptSrc URL dello script
 * @param stylesheetSrc URL opzionale del foglio di stile
 */
export function loadLibrary(
  libraryName: string,
  globalObject: string,
  scriptSrc: string,
  stylesheetSrc?: string
): Promise<any> {
  return new Promise(async (resolve, reject) => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined') {
      reject(new Error('Window not available'));
      return;
    }
    
    try {
      // Controlla se la libreria è già stata caricata
      if ((window as any)[globalObject]) {
        resolve((window as any)[globalObject]);
        return;
      }
      
      // Carica il foglio di stile se necessario
      if (stylesheetSrc) {
        await loadStylesheet(stylesheetSrc, `${libraryName}-stylesheet`);
      }
      
      // Carica lo script
      await loadScript(scriptSrc, `${libraryName}-script`);
      
      // Verifica che la libreria sia stata caricata correttamente
      if ((window as any)[globalObject]) {
        resolve((window as any)[globalObject]);
      } else {
        reject(new Error(`Failed to load ${libraryName}: global object ${globalObject} not found`));
      }
    } catch (error) {
      console.error(`Errore durante il caricamento della libreria ${libraryName}:`, error);
      reject(error);
    }
  });
}
