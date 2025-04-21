// Nombre de la cache para la aplicación
const CACHE_NAME = 'inkart-studio-cache-v1';

// Archivos a cachear
const URLsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/img/logo.png',
  '/js/main.js',
  '/dist/servicework.js',
  '/contacto',
  '/quienes',
  '/galeria',
  '/servicios'
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');

  // Cacheamos los archivos cuando se instala el service worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Archivos cacheados');
        return cache.addAll(URLsToCache);
      })
  );
});

// Activación del service worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activado');

  // Limpiar caches antiguas
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Cache antiguo eliminado', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Manejo de las solicitudes fetch
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching', event.request.url);

  // Intentar obtener el recurso desde la cache o hacer una solicitud de red si no está en la cache
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Si el recurso está en cache, retornamos la cache
        if (cachedResponse) {
          console.log('Service Worker: Recurso desde la cache', event.request.url);
          return cachedResponse;
        }

        // Si no está en cache, se hace la solicitud a la red
        console.log('Service Worker: Recurso no encontrado en la cache, obteniendo desde la red', event.request.url);
        return fetch(event.request);
      })
  );
});
