import koa from 'koa';

const app = koa();

app.use(function *() {
    this.body = 'Hello World';
});

app.listen(3000);
console.log('server start on port 3000');
