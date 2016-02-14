let $output = document.getElementById('output');

let sample = {
    a: [1, 2],
    b: {
        c: 2,
        d: {
            f: 'ssss'
        }
    },
    g: new Date('2015-01-02')
}

let copy = copyDeep(sample);
console.dir(copy);
console.log('copy === sample: ' + (copy === sample));
console.log('copy.b === sample.b: ' + (copy.b === sample.b));
console.log('copy.b.d === sample.b.d: ' + (copy.b.d === sample.b.d));

/**
 * 深拷贝
 *
 * @param {Object} sample 待复制的样本
 * @return {Object} 复制体
 */
function copyDeep(sample) {
    if (sample == null) {
        return null;
    }
    
    // 先判断sample是array还是普通的Object,以此确定新对象的类型
    let copy = Array.isArray(sample) ? [] : {};
    Object.keys(sample).map(key => {
        copy[key] = typeof sample[key] === 'object' ? copyDeep(sample[key]) : sample[key];
    });

    return copy;
}
