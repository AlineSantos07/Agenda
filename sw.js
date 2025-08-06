const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/Agenda/',
    '/Agenda/index.html',
    '/Agenda/style.css',
    '/Agenda/manifest.json',
    '/Agenda/icons/favicon-16x16.png',
    '/Agenda/icons/favicon-32x32.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

