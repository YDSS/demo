import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import {router as count} from './api/count';
import {router as pageRouter} from './page_router';

const app = express();
const proxy = httpProxy.createProxyServer({});

app.use(express.static(path.join(__dirname, './dist')));

// api接口
app.use('/api', count);
// server端渲染页面的路由
app.use(pageRouter);

app.listen(8081);
console.log('server start on 8081');
