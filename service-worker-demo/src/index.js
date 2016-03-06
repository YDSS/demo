import 'index.css';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js?2', {
        // 控制整个domain
        scope: '/test/'
    }).then(function (registration) {
        var serviceWorker;

        if (registration.installing) {
            serviceWorker = registration.installing;
            document.querySelector('#kind').textContent = 'installing';
        // 安装完成，但还为替换原先的service worker
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
            document.querySelector('#kind').textContent = 'waiting';
        // 已生效
        } else if (registration.active) {
            serviceWorker = registration.active;
            document.querySelector('#kind').textContent = 'active';
        }
        if (serviceWorker) {

            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
} else {
    // The current browser doesn't support service workers.
}

window.onload = () => {
    setTimeout(() => {
    fetch('/test/test.css')
        .then(response => {
            return response.text();
        })
        .then(text => {
            console.log(text);
            return text;
        });
    }, 1000);
}
