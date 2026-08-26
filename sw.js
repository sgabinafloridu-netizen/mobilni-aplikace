// Minimální service worker — jen ať appka (a hlavně Trezor) funguje bez signálu,
// když si ji uživatel přidá na plochu. Až přibudou další soubory (obrázky, další
// stránky modulů), přidej je do CACHE_FILES.
var CACHE_NAME = "nez-odletis-v81";
var CACHE_FILES = [
  "./", "./index.html", "./manifest.json",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./video/uvitani.mp4", "./video/uvitani-poster.jpg",
  "./video/letenky-jak-kupuju.mp4", "./video/letenky-jak-kupuju-poster.jpg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) { return cache.addAll(CACHE_FILES); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request).catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
