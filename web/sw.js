/* Deutschweg — offline cache. First load needs network; every load after is offline.
   The shell (index.html) is network-first so an update lands on the next visit;
   every other asset is cache-first so studying never waits for the network. */
const CACHE = 'deutschweg-v33';
const ASSETS = [
  './', 'index.html', 'styles.css', 'app.js',
  'engine/storage.js', 'engine/ledger.js', 'engine/checker.js',
  'engine/renderers.js', 'engine/practice.js', 'engine/adaptive.js',
  'engine/exam.js', 'engine/generator.js', 'engine/tracks.js',
  'data/inventory.js', 'data/chunks.js', 'data/syllabus.js',
  'data/bank.js', 'data/a0-u1-l1.js', 'data/catalog.js', 'data/library.js',
  'data/comprehension.js', 'data/dialogues.js', 'data/ladder.js',
  'audio/wasser.mp3',
  'manifest.webmanifest', 'icon.svg',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png',
  'icons/apple-touch-icon-180.png'
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

function put(req, res) {
  const copy = res.clone();
  caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
  return res;
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  const shell = e.request.mode === 'navigate' || /(\/|index\.html)$/.test(url.pathname);
  if (shell) {
    /* network-first: a new version replaces the old one instead of being cached behind it */
    e.respondWith(
      fetch(e.request).then(res => {
        caches.open(CACHE).then(c => c.put('index.html', res.clone())).catch(() => {});
        return res;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }
  /* cache-first: the app never depends on the network once installed */
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => put(e.request, res))
      .catch(() => caches.match('index.html')))
  );
});
