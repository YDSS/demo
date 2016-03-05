// installing状态时触发, 可使用event.waitUtil block install过程
self.addEventListener('install', function(event) {
    // event.waitUntil(
        // caches.open(CURRENT_CACHES['prefetch']).then(function(cache) {
        //     cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
        //         return new Request(urlToPrefetch, {mode: 'no-cors'});
        //     })).then(function() {
        //         console.log('All resources have been fetched and cached.');
        //     })
        // }).catch(function(error) {
        //     console.error('Pre-fetching failed:', error);
        // })
    // );
});

// service worker在activated之前触发
self.addEventListener('activate', ev => {
});

// 客户端请求service worker控制的域名时触发
self.addEventListener('fetch', ev => {
    console.log('fetch');
    ev.respondWith(new Response('gotach!', {
        headers: { 'Content-Type': 'text/plain' }              
    }));
    // return fetch(ev.request);
});

