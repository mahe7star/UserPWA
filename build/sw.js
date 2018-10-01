importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
  );

workbox.precaching.precacheAndRoute([
  {
    "url": "css/style.css",
    "revision": "46ab1372dc42af5d0a4eb448565c09cc"
  },
  {
    "url": "index.html",
    "revision": "5ee9eff0c45087854ab7a3de552f161d"
  },
  {
    "url": "js/app.js",
    "revision": "40fbdf311c601d88c10da7ede4e9a432"
  }
]);