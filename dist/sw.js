const cacheName = "v1";

async function handleRequest(event) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(event.request);

  if (cached) {
    return cached;
  }

  const response = await fetch(event.request);
  cache.put(event.request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});
