#include <stdio.h>

unsigned int Gcd(unsigned int M, unsigned int N);

int main() {
    printf("gcd is: %d", Gcd(15, 21));
}

/**
 * 欧几里得算法，求两个正整数的最大公约数
 *
 * 算法思路：通过连续计算余数直到余数为0为止，最后的非零余数就是最大公约数
 */
unsigned int Gcd(unsigned int M, unsigned int N)
{
    unsigned int Rem;

    while(N > 0)
    {
        Rem = M % N;
        M = N;
        N = Rem;
    }
    return M;
}
