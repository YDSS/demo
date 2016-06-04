#include <stdio.h>
#include <stdbool.h>

bool isPrime(unsigned int n);

int main()
{
    unsigned int n = 13;
    printf("%d is %s prime\n", n, isPrime(n) ? "" : "not");
}

/**
 * 判断一个数是否为素数
 * 
 * 算法思路：判断一个数是否为素数，需用它去除从2 到 该数平方根之间的所有数，
 * 如果都不能整除则该数为素数
 */
bool isPrime(unsigned int n)
{
    // 2是最小的素数
    if (n <= 3) return n > 1;
    // 偶数都是合数
    // 3是除1以外最小的奇数，能被3整除的奇数也是合数
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    // 4是合数，排除，从5开始
    
    // 如果一个数是合数，就一定可以由两个自然数想乘得到，
    // 其中一个数<=该数的平方根，另一个>=它的平方根，且成对出现
    // 所以只需除以它的平方根之前的一边的数就可以了
    for (unsigned int i = 5; i * i <= n; i += 6) 
    {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}
