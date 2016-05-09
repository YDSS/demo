/**
 * @file 二分查找
 * @author YDSS
 */

#include <stdio.h>

int binarySearch(int target, int arr[], int left, int right);

int main() {
    int arr[] = {1, 4, 7, 10, 20, 50, 51, 70, 90};

    printf("%d", binarySearch(10, arr, 0, 8));
}

int binarySearch(int target, int arr[], int left, int right) {
    int mid = (left + right) / 2;

    if (target == arr[mid]) return mid;
    
    if (target > arr[mid]) {
        return binarySearch(target, arr, mid + 1, right);
    }

    if (target < arr[mid]) {
        return binarySearch(target, arr, left, mid - 1);
    }
}
