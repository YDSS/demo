const fs = require('mz/fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();
const port = 8888;

// generate webpush keys
const webpush = require('web-push');
const vapidKeys = webpush.generateVAPIDKeys();

app.use(serve('.'));
app.use(koaBody());

// app.use(async function (ctx, next) {
router.post('/pubKey', async function (ctx, next) {
    // if (~ctx.request.url.indexOf('pubKey')) {
    let success = await storePubKey(ctx);
    ctx.type = 'application/json';
    ctx.body = JSON.stringify({ret: success ? 'success' : 'failure'});
    // }
});

router.get('/appServerKey', async function (ctx, next) {

})


async function storePubKey(ctx) {
    let body = ctx.request.body;
    console.log(`body: ${JSON.stringify(body)}`);

    let success = true;
    try {
        await fs.writeFile('./pubKey.json', JSON.stringify(body), { encoding: 'utf-8'});
    }
    catch (err) {
        success = false;
        console.error(err.toString());
    }

    return success;
}

app.listen(port);
console.log(`server start at port ${port}`);
