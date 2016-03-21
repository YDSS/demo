import express from 'express';
import httpProxy from 'http-proxy';

const appPort = 8081;
const proxiedPort = 8082;

const app = express();
const proxied = express();
const proxy = httpProxy.createProxyServer({});

app.use((req, res) => {
    proxy.web(req, res, {
        target: 'http://127.0.0.1:' + proxiedPort
    });
});

app.listen(appPort);
console.log('app server start on 127.0.0.1:%s', appPort);

proxied.use((req, res) => {
    res.type('text/plain');
    res.send('Hi there!');
});

proxied.listen(proxiedPort);
console.log('proxied server start on 127.0.0.1:%s', proxiedPort);
