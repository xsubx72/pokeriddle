const CACHE_NAME = "pokeriddle-v1";
const ARCHIVOS_CACHE = [
  "index.html",
  "style.css",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ARCHIVOS_CACHE);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(respuestaCache) {
      return respuestaCache || fetch(event.request);
    })
  );
});