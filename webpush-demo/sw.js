const TAG = '[ServiceWorker]';

self.addEventListener('install', ev => {
    console.log(TAG, 'installed!');
});

self.addEventListener('activate', ev => {
    console.log(TAG, 'activated');
});

self.addEventListener('push', ev => {

});
