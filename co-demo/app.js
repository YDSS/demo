'use strict';

const co = require('co');
const request = require('request');

/**
 * delay promise 
 */
function delay(timeout) {
    return new Promise((resolve, reject) => {
        let res = Math.floor(Math.random() * 100);

        setTimeout(() => {
            resolve(res); 
        }, timeout);
    });
}

let seq = 0;
// test promise
co(function* () {
    console.log(`test ${seq}: \n`);
    console.log(yield delay(1000));
});

seq++;
// test array iterator
co(function* () {
    return yield [
        delay(1000),
        delay(200),
        delay(3000)
    ];
})
    .then(res => {
        console.log(`test ${seq}: \n`);
        console.log(res);   
    });

seq++;
// test object iterator
co(function* () {
    return yield {
        1: delay(100),
        2: delay(2000),
        3: delay(500)
    };
})
    .then(res => {
        console.log(`test ${seq}: \n`);
        console.log(res);
    });
