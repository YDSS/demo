var CACHE_VERSION = 1;
var CURRENT_CACHES = {
    prefetch: 'prefetch-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
    let prefetch = './style.css';

    console.log('Handling install event. Resources to pre-fetch:', prefetch);
    // 
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
        fetch(prefetch)
            .then(response => {
                return response.text();
            })
                .then(text => {
                    console.log(text);
                    return text;
                })
    // );
});

self.addEventListener('activate', ev => {
    console.log('Handling activate event.');
    console.log(ev);
});
