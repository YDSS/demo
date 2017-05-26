!(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then(() => console.log('[ServiceWorker] registered'));

        navigator.serviceWorker.ready.then(reg => {
            requestApplicationServerKey().then(key => {
                if (key) {
                    console.log(`applicationServerKey: ${key}`)
                    reg.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: key
                    })
                        .then(subscription => {
                            log('got subscription!');
                            let endpoint = subscription.endpoint;
                            log(`endpoint: ${endpoint}`);
                            let p256dh = subscription.getKey('p256dh');
                            log(`p256dh: ${p256dh}`);
                            let auth = subscription.getKey('auth');
                            log(`auth: ${auth}`);

                            postPubKey({
                                endpoint: endpoint,
                                p256dh: p256dh,
                                auth: auth
                            })
                                .then(ret => {

                                })
                        }, err => {
                            console.log('subscribe error:');
                            console.log(err);
                        })
                        .catch(err => {
                            console.log('subscribe catch error:');
                            console.log(err);
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
        return fetch('/vapidPublicKey', {
            method: 'GET'
        }).then(response => response.json())
        .then(ret => {
            if (ret.success) {
                let convertedVapidKey = urlBase64ToUint8Array(ret.vapidPublicKey);
                log(`convertedVapidKey: ${convertedVapidKey}`);
                return convertedVapidKey;
            }

            return null;
        });
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

    // When using your VAPID key in your web app,
    // you'll need to convert the URL safe base64 string to a Uint8Array to pass into the subscribe call
    function urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }

    function log(str) {
        let p = document.createElement('p');
        p.innerText = str;
        $output.appendChild(p);
    }
}());
