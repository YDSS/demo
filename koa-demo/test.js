'use strict';
const koa = require('koa');
const app = koa();

app.use(function* () {
    this.body = 'hi';
    console.log(this.status);
});

app.listen(3001);
