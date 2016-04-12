import koa from 'koa';

const app = koa();

// set signed cookie
// app.keys = ['hi there', 'ydss'];

// set context for global use in lifecycle
app.context.name = 'YDSS';

app.use(function *(next) {
    let start = new Date;  
    yield next;
    let ms = new Date - start;

    console.log('x-response-time');
    this.set('X-Response-Time', ms + 'ms');
});

app.use(function *(next) {
    yield next;

    console.log('test order');
});

app.use(function *() {
    this.cookies.set('name', 'tobi');
    this.body = 'Hello World';
});

// error handler
// if (app.env.development) {
    app.on('error', (err, cxt) => {
        console.log(err);
    });
//}

app.listen(3000);
console.log('server start on port 3000');
