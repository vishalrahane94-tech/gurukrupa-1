const CACHE_NAME = 'gurukrupa-v2';
const urlsToCache = ['/gurukrupa-1/', '/gurukrupa-1/index.html', '/gurukrupa-1/icon-192x192.png', '/gurukrupa-1/icon-512x512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
