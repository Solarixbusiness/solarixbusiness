// Nome della cache
const CACHE_NAME = 'solarix-business-cache-v1';

// Risorse da mettere in cache all'installazione
const PRECACHE_RESOURCES = [
  '/',
  '/favico/favicon.ico',
  '/favico/favicon.svg',
  '/favico/favicon-96x96.png',
  '/favico/web-app-manifest-192x192.png',
  '/favico/web-app-manifest-512x512.png',
  '/favico/apple-touch-icon.png',
  '/icons/shield.svg',
  '/icons/tools.svg',
  '/icons/certificate.svg',
  '/icons/performance.svg',
  '/manifest.json'
];

// Installazione del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aperta');
        return cache.addAll(PRECACHE_RESOURCES);
      })
      .then(() => {
        // Forza l'attivazione immediata del service worker
        return self.skipWaiting();
      })
  );
});

// Attivazione del service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    // Elimina le cache vecchie
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      // Prende il controllo di tutte le pagine aperte
      return self.clients.claim();
    })
  );
});

// Funzione per verificare se il client è Safari
function isSafari(userAgent) {
  return /^((?!chrome|android).)*safari/i.test(userAgent);
}

// Intercetta le richieste di rete
self.addEventListener('fetch', (event) => {
  // Ignora le richieste non GET
  if (event.request.method !== 'GET') return;

  // Ignora le richieste di analytics
  if (event.request.url.includes('google-analytics.com')) return;
  
  // Ignora le richieste di API
  if (event.request.url.includes('/api/')) return;

  // Ignora le richieste chrome-extension
  if (event.request.url.startsWith('chrome-extension://')) return;

  // Verifica che lo schema della richiesta sia supportato (http o https)
  const url = new URL(event.request.url);
  if (!['http:', 'https:'].includes(url.protocol)) return;

  // Gestione speciale per Safari
  const isSafariRequest = event.request.headers && event.request.headers.get('user-agent') && 
                         isSafari(event.request.headers.get('user-agent'));

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - restituisci la risposta dalla cache
        if (response) {
          // Per Safari, verifica che la risposta non sia scaduta
          if (isSafariRequest) {
            const responseDate = response.headers.get('date');
            if (responseDate) {
              const date = new Date(responseDate);
              if ((new Date().getTime() - date.getTime()) > (24 * 60 * 60 * 1000)) {
                // Se la risposta è più vecchia di 24 ore, ricarica
                return fetchAndCache(event.request);
              }
            }
          }
          return response;
        }

        return fetchAndCache(event.request);
      })
  );
});

// Funzione per fetchare e cachare una risorsa
function fetchAndCache(request) {
  const fetchRequest = request.clone();

  return fetch(fetchRequest)
    .then((response) => {
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }

      const responseToCache = response.clone();

      try {
        caches.open(CACHE_NAME)
          .then((cache) => {
            if (['http:', 'https:'].includes(new URL(request.url).protocol)) {
              // Aggiungi headers per Safari
              const headers = new Headers(responseToCache.headers);
              headers.append('date', new Date().toUTCString());
              const responseWithDate = new Response(responseToCache.body, {
                status: responseToCache.status,
                statusText: responseToCache.statusText,
                headers: headers
              });
              cache.put(request, responseWithDate);
            }
          });
      } catch (error) {
        console.warn('Errore durante il caching:', error);
      }

      return response;
    })
    .catch(() => {
      if (request.mode === 'navigate') {
        return caches.match('/offline.html');
      }
    });
});

// Gestione dei messaggi
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Sincronizzazione in background
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-form-data') {
    event.waitUntil(syncFormData());
  }
});

// Funzione per sincronizzare i dati del form quando si torna online
async function syncFormData() {
  try {
    const db = await openDB();
    const tx = db.transaction('formData', 'readonly');
    const store = tx.objectStore('formData');
    const formDataList = await store.getAll();

    for (const formData of formDataList) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Rimuovi i dati sincronizzati dal database
          const deleteTx = db.transaction('formData', 'readwrite');
          const deleteStore = deleteTx.objectStore('formData');
          await deleteStore.delete(formData.id);
          await deleteTx.complete;
        }
      } catch (error) {
        console.error('Errore durante la sincronizzazione dei dati del form:', error);
      }
    }

    await tx.complete;
  } catch (error) {
    console.error('Errore durante l\'accesso al database:', error);
  }
}

// Funzione per aprire il database IndexedDB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('solariXbusiness', 1);

    request.onerror = (event) => {
      reject('Errore durante l\'apertura del database');
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('formData')) {
        db.createObjectStore('formData', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}
