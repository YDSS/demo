'use strict';

const koa = require('koa');
const serve = require('koa-static');
const fs = require('fs');
const app = koa();

const port = 8999;

// app.use(serve('.'));

app.use(function* () {
    if (this.path.indexOf('apple-app-site-association') > -1) {
        let file = fs.readFileSync('./apple-app-site-association');
        this.set('Content-Type', 'text/plain');
        this.body = file;
    }
    else if (this.path.indexOf('test.html') > -1) {
        let file = fs.readFileSync('./test.html');
        this.set('Content-Type', 'text/html');
        this.body = file;
    }
    else {
        this.body = 'Hi there';
    }
});

app.listen(port);
console.log(`server start at port: ${port}`);
