'use strict';

const co = require('./co-simulate');

co(function* () {
    let a = yield testA();
    let b = yield testB();
    let c = yield testC();

    console.log('%s, %s, %s', a, b, c);
});

function testA() {
    return 4;
}

function testB() {
    return 3;
}

function testC() {
    return 2;
}
