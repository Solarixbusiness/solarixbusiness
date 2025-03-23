// Nome della cache
const CACHE_NAME = 'solarix-business-cache-v1';

// Risorse da mettere in cache all'installazione
const PRECACHE_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/logobus.png',
  '/images/faviconbus.ico',
  '/icons/shield.svg',
  '/icons/tools.svg',
  '/icons/certificate.svg',
  '/icons/performance.svg',
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

// Intercetta le richieste di rete
self.addEventListener('fetch', (event) => {
  // Ignora le richieste non GET
  if (event.request.method !== 'GET') return;

  // Ignora le richieste di analytics
  if (event.request.url.includes('google-analytics.com')) return;
  
  // Ignora le richieste di API
  if (event.request.url.includes('/api/')) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - restituisci la risposta dalla cache
        if (response) {
          return response;
        }

        // Clona la richiesta perché è un flusso che può essere consumato solo una volta
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // Controlla se abbiamo ricevuto una risposta valida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona la risposta perché è un flusso che può essere consumato solo una volta
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                // Metti la risposta nella cache
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Se la rete fallisce, prova a restituire la pagina offline
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
      })
  );
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
