let $output = document.getElementById('output');

// 测试在promise结构体中抛出error是否真能抛出去
function testThrowErrorInPromise() {
    let p = Promise.resolve();

    p.then(() => {
        throw new Error('hahhah');
    })
        .catch(err => {
            console.log('error in catch: ' + err.message);
            throw err;
        });

    console.log('conutine...');
}

testThrowErrorInPromise();
