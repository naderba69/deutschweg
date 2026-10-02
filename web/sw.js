/* Deutschweg — offline cache. First load needs network; every load after is offline. */
const CACHE = 'deutschweg-v7';
const ASSETS = [
  './', 'index.html', 'styles.css', 'app.js',
  'engine/storage.js', 'engine/ledger.js', 'engine/checker.js',
  'engine/renderers.js', 'engine/practice.js', 'engine/adaptive.js',
  'engine/exam.js', 'engine/generator.js', 'engine/tracks.js',
  'data/inventory.js', 'data/chunks.js', 'data/syllabus.js',
  'data/bank.js', 'data/a0-u1-l1.js', 'data/catalog.js', 'data/library.js',
  'data/comprehension.js', 'data/ladder.js',
  'audio/wasser.mp3',
  'manifest.webmanifest', 'icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* cache-first: the app never depends on the network once installed */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
