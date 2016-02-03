import Parallel from 'parallel';

// test spawn
let p = new Parallel([123, 21334, 435, 123]);

p.spawn(data => {
    return data.sort((a, b) => a - b);
})
    .then(ret => {
        console.log(ret);
    });

// test map
// let fibp = new Parallel([0, 1, 2]);
// 
// function fib(n) {
//     console.log('n: ' + n);
//     let r = n < 2 ? 1 : fib(n - 1) + fib(n - 2);
//     console.log('r: ' + r);
//     return r;
// }
// 
// let log = function () { console.log(arguments); };
// 
// fibp.map(fib).then(log);
// 
// // test require
// function add(m, n) {
//     return m + n;
// }
// 
// let r = new Parallel(1)
//     .require(add)
//     .spawn(a => {
//         console.log(add(a, 10));
//     });
// 
// // test enviroment
// let p = new Parallel([1, 2, 3], {
//     env: {
//         a: 1
//     }
// });
// 
// p.map(function (n) {
//     console.log(global.env.a);
//     console.log(n);
//     return n + global.env.a;
// })
//     .then(ret => {
//         console.log(ret);   
//     });
// 
