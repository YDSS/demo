import koa from 'koa';
import notifier from 'node-notifier';

const app = koa();

// set signed cookie
app.keys = ['hi there', 'ydss'];

// set context for global use in lifecycle
// app.context.name = 'YDSS';

// app.use(function *(next) {
//     let start = new Date;  
//     yield next;
//     let ms = new Date - start;
// 
//     console.log('x-response-time');
//     this.set('X-Response-Time', ms + 'ms');
// });
// 
// app.use(function *(next) {
//     yield next;
// 
//     console.log('test order');
// });
// 
// app.use(function *() {
//     this.cookies.set('name', 'tobi');
//     this.body = 'Hello World';
// });
app.use(function *(next){
    console.log('>> one');
    yield next;
    console.log('<< one');
    this.body = 'Hello World';
});

// test middleware.call to compose multiple middlewares
let midware1 = function *(next) {
    console.log('>> midware1');
    yield next;
    console.log('<< midware1');
};

let midware2 = function *(next) {
    console.log('>> midware2');
    yield next;
    console.log('<< midware2');
};

let all = function *(next) {
    yield midware1.call(this, midware2.call(this, next));
}

app.use(all);
    
// error handler
// if (app.env.development) {
app.on('error', (err, cxt) => {
    console.log(err);
});
//}

app.listen(3000);
console.log('server start on port 3000');

