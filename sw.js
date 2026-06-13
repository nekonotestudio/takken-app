const CACHE = 'takken-v1';
const ASSETS = [
  '/takken-app/',
  '/takken-app/index.html',
  '/takken-app/questions.js',
  '/takken-app/questions2.js',
  '/takken-app/manifest.json',
  '/takken-app/icon-192.png',
  '/takken-app/icon-512.png'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))); });
