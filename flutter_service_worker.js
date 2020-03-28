'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/jurica-koletic.jpg": "fd28aa1ceac893ac3b4ea47a615b1589",
"/assets/assets/images/azamat-zhanisov.jpg": "685c4565e6397420ac7c01c4dac49cf6",
"/assets/assets/images/story/story-3.jpg": "8f9aa85e1a850f162f2b9f6b79a4fb08",
"/assets/assets/images/story/story-4.jpg": "76f462632841e841f1c5d2d8aad962b5",
"/assets/assets/images/story/story-6.jpg": "8c8a4c33387374c30391085402f95138",
"/assets/assets/images/story/story-5.jpg": "e7a9e39497319f6681aa726d4a8c8ec5",
"/assets/assets/images/story/story-2.jpg": "0e9723e525db9c60b973696e064bd86a",
"/assets/assets/images/story/story-1.jpg": "367e6b3c746066a6712282a766bc8114",
"/assets/assets/images/foto-sushi.jpg": "34cdc11e8bf6c2a57c0dcfacc13cd81a",
"/assets/assets/images/aatik-tasneem.jpg": "ed30985aa948c8f11348c11396c05fe7",
"/assets/assets/images/lucas-sankey.jpg": "fdeb0e44c55d5eddf6d1c1a6278abbb4",
"/assets/assets/images/azamat-zhanisov-.jpg": "e2371c0b2602de2767cc3ff9d94c3f96",
"/assets/assets/images/averie-woodard.jpg": "43fec83eafec7fa93522bf42e74d4bb5",
"/assets/assets/images/michael-frattaroli.jpg": "7ada0f143b0706881e345821c636de93",
"/assets/assets/images/aiony-haust.jpg": "d74e00cb261d4ac7c22b964fee69dfac",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "f0ff7e048f5eba4b1b0cba9d00f198dc",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "4c829966366c0fc8361f2890f7f36360"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
