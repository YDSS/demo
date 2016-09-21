'use strict';

const co = require('./co-simulate');

co(function* () {
    console.log('start');
    let a = yield testA();
    console.log(`a: ${a}`);
    let b = yield testB();
    console.log(`b: ${b}`);
    let c = yield testC();
    console.log(`c: ${c}`);

    // console.log('%s, %s, %s', a, b, c);
});

function testA() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(4);
        }, 3000);
    });
}

function testB() {
    return 3;
}

function testC() {
    return 2;
}
