// 计算递归调用次数
let count = 0;
/**
 * 二分查找，递归求解
 *
 * @param {Array} inputArr 目标数组
 * @param {number|string} key 匹配的值
 * @param {number} beginIndex 目标数组第一个元素的下标
 * @param {number} endIndex 目标数组最后一个元素的下标
 * @return {number} 匹配值的index，若目标数组没有匹配的值，返回-1
 */
function binarySearch(inputArr, key, beginIndex, endIndex) {
    console.group(`${count} time binary search`);
    count++;
    // 小数点后都舍去
    let midIndex = beginIndex + Math.round((endIndex - beginIndex) / 2);
    console.log(`middle index: ${midIndex}`);
    
    // 匹配则返回index
    if (key === inputArr[midIndex]) {
        console.log(`matched index: ${midIndex}`);
        return midIndex;
    }

    // 目标数组只有一个元素且没匹配上，返回-1
    if (beginIndex === endIndex) {
        console.log('input arr has no match');
        return -1;
    }
    console.groupEnd();

    debugger
    // 匹配中点左侧数组
    let retOfSearchLeft = binarySearch(inputArr, key, beginIndex, midIndex - 1);
    if (retOfSearchLeft !== -1) {
        return retOfSearchLeft;
    }

    // 匹配中点右侧数组
    return binarySearch(inputArr, key, midIndex + 1, endIndex);
}

function binSearch(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        console.group(`${count} time search`);
        count++

        mid = Math.round((low + high) / 2);
        console.log('mid: ' + mid);

        if (arr[mid] === k) {
            console.log('matched mid: ' + mid);
            return mid;
        }
        console.log('no matched');
        console.groupEnd();

        if (arr[mid] > k) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

binSearch(arr, 2);
