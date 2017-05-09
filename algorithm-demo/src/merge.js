/**
 * 单次归并
 */
function merge(arr, low, mid, high) {
    let merged = [];
    let i = low; // i for traverse arr1, j for traverse arr2, k for merged index
    let j = mid + 1;
    let k = 0;
    for (; i <= mid && j <= high; k++) {
        if (arr[i] < arr[j]) {
            merged[k] = arr[i++];
        }
        else if (arr[j] < arr[i]) {
            merged[k] = arr[j++];
        }
        else {
            merged[k] = arr[i];
            i++;
            j++;
        }
    }

    if (i <= mid) {
        merged = merged.concat(arr.slice(i, mid + 1));
    }

    if (j <= high) {
        merged = merged.concat(arr.slice(j));
    }

    return merged;
}

/**
 * 单趟归并
 * @param {Array} arr 输入
 * @param {Number} length 每个序列的长度
 * @param {Number} n 总长度
 */
function mergePass(arr, length, n) {
    let i;
    let merged = [];
    for (i = 0; i + 2*length - 1 < n; i += 2*length) {
        merged = merged.concat(merge(arr, i, i + length - 1, i + 2*length - 1));
        console.log(merged)
    }

    if (i + length < n) {
        merged = merged.concat(merge(arr, i, i + length - 1, n - 1));
    }

    return merged;
}

/**
 * 二路归并
 */
function mergeShort(arr, n) {
    for (let i = 1; i < arr.length; i = 2 * i) {
        mergePass(arr, i, n);
    }
}

var ret = mergeShort([3, 12, 23, 32, 2, 5, 8, 99], 8);
console.log(ret);
