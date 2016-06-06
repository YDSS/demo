#include <stdio.h>

long int f_pow(long int m, unsigned int n);
unsigned int count = 0;

int main()
{
    long int m = 2;
    unsigned int n = 62;

    printf("%ld", f_pow(m, n));
}

long int f_pow(long int m, unsigned int n)
{
    count ++;
    printf("count: %d\n", count);
    printf("n: %d\n", n);
    if (n == 0) return 1;
    if (n % 2 == 0) return f_pow(m * m, n / 2);
    else return f_pow(m * m, n / 2) * m;
}
