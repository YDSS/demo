import express from 'express';
import path from 'path';
// import {router as count} from './api/count';
import * as routers from './api/index';
import {router as pageRouter} from './page_router';

global.__CLIENT__ = false;
global.__DEVELOPMENT__ = true;
global.__DEVTOOLS__ = true;

const app = express();

app.use(express.static(path.join(__dirname, './dist')));

// api接口
for (let key of Object.keys(routers)) {
    app.use('/api', routers[key]);
}
// server端渲染页面的路由
app.use(pageRouter);

app.listen(8081);
console.log('server start on 8081');
