'use strict';

const path = require('path');
const loading = require('loading');

let app = {};

loading(path.resolve(__dirname, './')).into(app, 'controller');

console.log(app.controller.a.b.c);

