const CACHE_NAME = "gurukrupa-v4";
self.addEventListener("install", (e) => {
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => { if (k !== CACHE_NAME) return caches.delete(k); })))
    .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(() => caches.match("./")));
    return;
  }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
