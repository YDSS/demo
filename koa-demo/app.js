import koa from 'koa';

const app = koa();

// set signed cookie
// app.keys = ['hi there', 'ydss'];

// set context for global use in lifecycle
app.context.name = 'YDSS';

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
});

app.use(function *() {
    console.log('>> two');
    this.body = 'two';
    // yield next;
    console.log('<< two');
});

app.use(function *(next){
    console.log('>> three');
    yield next;
    console.log('<< three');
});
// error handler
// if (app.env.development) {
app.on('error', (err, cxt) => {
    console.log(err);
});
//}

app.listen(3000);
console.log('server start on port 3000');
