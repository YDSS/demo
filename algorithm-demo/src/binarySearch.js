// 计算递归调用次数
let count = 0;

/**
 * 二分查找，递归求解
 *
 * @param {Array} arr 目标数组
 * @param {number|string} k 匹配的值
 * @return {number} 匹配值的index，若目标数组没有匹配的值，返回-1
 */
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
