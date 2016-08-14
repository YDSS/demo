'use strict';

const fs = require('fs');
const path = require('path');

const co = require('co');
const router = require('koa-router')();
const Util = require('./util/utils');

co(function* () {
    // try {
        console.log(1);
        const controllers = yield Util.traverseDir(path.join(__dirname, './controller'));

        router.get('/', controllers.home.index);
        // ajax api
        const api = controllers.api;
        // user
        router.get('/user', api.user.index);
    // }
    // catch (err) {
    //     console.log(err);
    //     throw err;
    // }
});

module.exports = router;
