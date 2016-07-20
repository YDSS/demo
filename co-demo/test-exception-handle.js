'use strict';

const co = require('co');

co(function* () {
    // try {
        yield console.log(a);
    // }
    // catch (e) {
    //     console.log('error: ' + e);
    // }
})
    .then(ret => {
        console.log('ret: ' + ret);   
    }, err => {
        console.log('reject err: ' + err);
    })
    .catch(err => {
        console.log('catch err: ' + err);   
    });
