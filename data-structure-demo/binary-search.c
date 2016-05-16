/**
 * @file 二分查找
 * @author YDSS
 */

#include <stdio.h>

#define NotFound -1;

int binarySearch1(int target, int arr[], int left, int right);
int binarySearch2(int arr[], int target, int N);

int main() {
    int arr[] = {1, 4, 7, 10, 20, 50, 51, 70, 90};

    printf("%d\n", binarySearch1(100, arr, 0, 8));
    // printf("%d\n", binarySearch2(arr, 100, 9));
}

int binarySearch1(int target, int arr[], int left, int right) {
    int mid = (left + right) / 2;

    if (target == arr[mid]) return mid;
    if (mid < left || mid > right) return NotFound;
    
    if (target > arr[mid]) {
        return binarySearch1(target, arr, mid + 1, right);
    }

    if (target < arr[mid]) {
        return binarySearch1(target, arr, left, mid - 1);
    }

    return 0;
}

int binarySearch2(int arr[], int target, int N) {
    int low, mid, high;

    low = 0;
    high = N - 1;

    while(low <= high) {
        mid = (low + high) / 2;
        printf("%d\n", mid);
        if (arr[mid] < target) {
            low = mid + 1;
        }
        else if (arr[mid] > target) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }

    return NotFound;
}
