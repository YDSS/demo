#include <stdio.h>

int subsequence_sum(int arr[], int N);
int getSubsequenceSum(int arr[], int left, int right);
int max(int a, int b, int c);

int main() {
    int arr = [-3, 2, 4, -4, 1, -5, 7, -10];

    subsequence_sum(arr, 8);
}

int subsequence_sum(int arr[], int N) {
    return getSubsequenceSum(arr, 0, N - 1);
}

int getSubsequenceSum(int arr[], int left, int right) {
    if (left == right) {
        if (arr[left] > 0) {
            return arr[left];
        }
        else {
            return 0;
        }
    }

    int center = (left + right) / 2;
    int maxLeftSum = getSubsequenceSum(arr, left, center);
    int maxRightSum = getSubsequenceSum(arr, center + 1, right);

    int borderLeftSum, maxBorderLeftSum = 0;
    for (int i = center; i < left; i--) {
        borderLeftSum += arr[i];
        if (borderLeftSum > maxBorderLeftSum) 
            maxBorderLeftSum = borderLeftSum;
    }

    int borderRightSum, maxBorderRightSum = 0;
    for (int i = center + 1; i < right; i++) {
        borderRightSum += arr[i];
        if (borderRightSum > maxBorderRightSum) 
            maxBorderRightSum = borderRightSum;
    }

    return max(maxLeftSum, maxRightSum,
            maxBorderLeftSum + maxBorderRightSum);
}

int max(int a, int b, int c) {
    int tmp = a >= b ? a : b;

    return tmp >= c ? tmp : c;
}
