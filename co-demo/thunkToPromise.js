/**
 * @file thunk函数转换为promise对象
 * @author YDSS
 */
'use strict';
function thunkToPromise(fn) {
    return new Promise((resolve, reject) => {
        fn((err, ret) => {
            if (err) return reject(err);
            resolve(ret);
        });
    });
}

// test
function test(a, cb) {
    return cb(null, a);
}

function thunk(cb) {
    return test(2, cb);
}

let t2p = thunkToPromise(thunk);

t2p.then(ret => console.log(ret));

