/**
 * @file practice http
 * @author YDSS
 */
'use strict';

const http = require('http');

let server = http.createServer();
const port = 3001;

server.listen(port, () => {
    console.log(`server start at port ${port}`);
});

server.on('request', (req, res) => {
    console.log(req);
    res.end('hi there');
});
