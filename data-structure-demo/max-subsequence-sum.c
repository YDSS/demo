#include <stdio.h>

// 递归求最大子序列和, O(NlogN)
int MaxSubSum3(int arr[], int N);
int MaxSubsequenceSum3(int arr[], int left, int right);

// 非递归求最大子序列和, O(logN)
int MaxSubSum4(int arr[], int N);

int max3(int a, int b, int c);

int main() {
    static int arr[8] = {-3, 2, 4, -4, 1, -5, 7, -10};

    printf("%d\n", MaxSubSum3(arr, 8));
    printf("%d\n", MaxSubSum4(arr, 8));
}

int MaxSubSum3(int arr[], int N) {
    return MaxSubsequenceSum3(arr, 0, N - 1);
}

int MaxSubsequenceSum3(int arr[], int left, int right) {
    if (left == right) {
        if (arr[left] > 0) {
            return arr[left];
        }
        else {
            return 0;
        }
    }

    int center = (left + right) / 2;
    int maxLeftSum = MaxSubsequenceSum3(arr, left, center);
    int maxRightSum = MaxSubsequenceSum3(arr, center + 1, right);

    int borderLeftSum = 0; 
    int maxBorderLeftSum = 0;
    for (int i = center; i < left; i--) {
        borderLeftSum += arr[i];
        if (borderLeftSum > maxBorderLeftSum) 
            maxBorderLeftSum = borderLeftSum;
    }

    int borderRightSum = 0;
    int maxBorderRightSum = 0;
    for (int i = center + 1; i < right; i++) {
        borderRightSum += arr[i];
        if (borderRightSum > maxBorderRightSum) 
            maxBorderRightSum = borderRightSum;
    }

    return max3(maxLeftSum, maxRightSum,
            maxBorderLeftSum + maxBorderRightSum);
}

int MaxSubSum4(int arr[], int N) {
    int maxSum = 0;
    int tmpSum = 0;

    for (int i = 0; i < N; i++) {
        tmpSum += arr[i];

        if (tmpSum >= maxSum) {
            maxSum = tmpSum;
        }
        else if (tmpSum < 0) {
            tmpSum = 0;
        }
    }

    return maxSum;
}

int max3(int a, int b, int c) {
    int tmp = a >= b ? a : b;

    return tmp >= c ? tmp : c;
}
