import koa from 'koa';

const app = koa();

// set signed cookie
// app.keys = ['hi there', 'ydss'];

// set context for global use in lifecycle
app.context.name = 'YDSS';

app.use(function* () {
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
