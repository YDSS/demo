'use strict';

const fs = require('fs');
const co = require('co');
const thunkify = require('thunkify');
const request = require('request');

let readFile = thunkify(fs.readFile);
let execFile = thunkify(require('child_process').execFile);
// test yield async func
co(function* () {
    try {
        let c = yield execFile('./bin/test');
        console.log(c);
    } catch (e) {
        console.log(e);
    }
});
// test exception flow
// function* funA() {
//     console.log(a);
//     return 1;
//     console.log(a);
// 
// function* funB() {
//     return 2;
// }
// 
// co(function* () {
//     let a = yield funA(); // line 1
// 
//     // console.log(c); // line 2
// 
//     let b = yield funB(); // line 3
// }).then(res => {
//     console.log('res');
// }, err => {
//     console.log('err: ' + err);
// });

/**
 * delay promise 
 */
// function delay(timeout) {
//     return new Promise((resolve, reject) => {
//         let res = Math.floor(Math.random() * 100);
// 
//         setTimeout(() => {
//             resolve(res); 
//         }, timeout);
//     });
// }
// 
// let seq = 0;
// // test promise
// co(function* () {
//     console.log(`test ${seq}: \n`);
//     let a = yield delay(1000);
//     let b = yield delay(300);
//     let c = yield delay(200);
//     console.log('%d ; %d ; %d', a, b, c)
// });

//seq++;
//// test array iterator
//co(function* () {
//    return yield [
//        delay(1000),
//        delay(200),
//        delay(3000)
//    ];
//})
//    .then(res => {
//        console.log(`test ${seq}: \n`);
//        console.log(res);
//    });
//
//seq++;
//// test object iterator
//co(function* () {
//    return yield {
//        1: delay(100),
//        2: delay(2000),
//        3: delay(500)
//    };
//})
//    .then(res => {
//        console.log(`test ${seq}: \n`);
//        console.log(res);
//    });
