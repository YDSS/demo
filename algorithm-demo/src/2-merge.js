/**
 * 单次归并，把arr从low到mid的数组和从mid+1到high的数组排序
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

    for (k = 0, i = low; i < high; k++, i++) {
        arr[i] = merged[k];
    }
}

/**
 * 自底向上的归并思路，按列的长度len把arr分成n/len列，从0开始相邻两列合并。该次合并完成后
 * 	len = 2 * len继续两两合并
 */

/**
* 单趟归并
* @param {Array} arr 输入
* @param {Number} length 每个序列的长度
* @param {Number} n 总长度
*/
function mergePass(arr, length, n) {
    let i;
    for (i = 0; i + 2*length - 1 < n; i += 2*length) {
        merge(arr, i, i + length - 1, i + 2*length - 1);
    }

    if (i + length < n) {
        merge(arr, i, i + length - 1, n - 1);
    }
}

/**
 * 总共执行log2n次mergePass，每次mergePass时间复杂度为O(n)，因此2-路归并时间复杂度为O(nlog2n)
 */
function mergeShort(arr, n) {
    for (let i = 1; i < n; i = 2 * i) {
        mergePass(arr, i, n);
    }

}

let arr = [3, 12, 23, 32, 2, 5, 8, 99];

mergeShort(arr, 8);
console.log(arr);

/**
 * 自顶向下的归并思路，每次归并都从中间把数组切开，分别归并左右两边的列，然后merge左右两边的列,时间复杂度也是O(nlog2n)
 */
function mergeShort(arr, low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2));
        mergeShort(arr, low, mid);
        mergeShort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}
