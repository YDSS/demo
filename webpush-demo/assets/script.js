!(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then(() => console.log('[ServiceWorker] registered'));

        navigator.serviceWorker.ready.then(reg => {
            requestApplicationServerKey().then(key => {
                if (key) {
                    reg.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: key
                    })
                        .then(subscription => {
                            log('got subscription!');
                            let endpoint = subscription.endpoint;
                            log(`endpoint: ${endpoint}`);
                            let key = subscription.getKey('p256dh');
                            log(`key: ${key}`);

                            postPubKey({
                                endpoint: endpoint,
                                key: key
                            })
                                .then(ret => {

                                })
                        });
                }
                else {
                    log('request application server key fail');
                }
            })
        })
    }

    let $output = document.getElementById('output');

    // postPubKey('1234456');

    function requestApplicationServerKey() {
        return fetch('/appServerKey', {
            method: 'GET'
        }).then(response => response.json())
        .then(ret => {
            if (ret.sucess) {
                return ret.key;
            }

            return null;
        })
    }

    function postPubKey(data) {
        // let request = new XMLHttpRequest();
        // request.onreadystatechange = function () {
        //     if (request.readyState === XMLHttpRequest.DONE) {
        //         if (request.status === 200) {
        //             let response = JSON.parse(request.response);
        //             console.log(response);
        //             if (response.ret === 'success') {
        //                 let p = document.createElement('p');
        //                 p.innerText = `<p>key: ${key}, response: ${response.ret}`;
        //                 $output.appendChild(p);
        //             }
        //         }
        //     }
        // }
        // request.send(formData);
        // request.open('post', '/pubKey');
        // let header = new Headers();
        // header.append('Content-Type', 'application/x-www-form-urlencoded');
        // let formData = new FormData();
        // formData.append('key', key);

        return fetch('/pubKey', {
            method: 'POST',
            body: {
                endpoint: data.endpoint,
                key: data.key
            }
            // headers: header
        }).then(response => response.json())
            .then(ret => {
                log(`<p>key: ${data.key}, endpoint: ${data.endpoint}, response: ${ret}`);
                return ret;
            });
    }

    function log(str) {
        let p = document.createElement('p');
        p.innerText = str;
        $output.appendChild(p);
    }
}());
