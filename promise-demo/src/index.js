/**
 * 测试promise的then(onFullfilled, onReject)第一个参数onFullfilled中的异常
 * 能否被onReject接住
 */
// function trim(str) {
//     if (typeof str !== 'string') {
//         throw new TypeError('Must be a string!');
//     }
// 
//     return new Promise((resolve, reject) => {
//         resolve(str.replace(/(^\s*)|(\s*$)/g, ''));
//     });
// }
// 
// trim(1234)
//     .then(ret => {
//         console.log(ret);
//     })
//     .catch(err => {
//         console.log(err);   
//     });

/**
 * end
 */

/**
 * 测试promise结构体中同步异步混杂
 */

// function test() {
//     return new Promise((resolve, reject) => {
//         var i = 0;
// 
//         setTimeout(() => {
//             i ++;
//         }, 100);
// 
//         resolve(i);
//     });
// }
// 
// test().then((ret) => console.log(ret));

/**
 * 测试resolve或reject后，之后的代码会不会执行
 */
function test() {
    return new Promise((resolve, reject) => {
        console.log('before resolve');
        resolve(1);
        // return resolve(1);

        console.log('after resolve');
    });
}

test();
