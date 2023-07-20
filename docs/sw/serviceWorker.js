const APP_WEBCACHE = "web-app-cache";

self.addEventListener("activate", function (event) {
  console.log("ServiceWorker activated.");
});

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(APP_WEBCACHE).then(function (cache) {
      return cache.addAll([]);
    }),
  );
});

self.addEventListener("fetch", (e) => {});
