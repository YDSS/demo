// installing状态时触发, 可使用event.waitUtil block install过程
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            cache.add(new Request('./style.css', {mode: 'no-cors'}))
            .then(function() {
                console.log('All resources have been fetched and cached.');
            })
        }).catch(function(error) {
            console.error('Pre-fetching failed:', error);
        })
    );
});

// service worker在activated之前触发
self.addEventListener('activate', ev => {
});

// 客户端请求service worker控制的域名时触发
self.addEventListener('fetch', ev => {
    console.log('hijack fetch');
    console.log(ev);
    ev.respondWith(
        caches.match(ev.request)
            .catch(() => fetch(ev.request))
                .then(response => {
                    debugger
                    caches.open('v1').then(cache => {
                        cache.put(ev.request, response.clone());          
                    })
                    return response;
                })
    );
    // return fetch(ev.request);
});

