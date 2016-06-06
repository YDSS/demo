#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void Swap(long la, long lb);
unsigned int RandInt(int range);

int main() 
{
    unsigned int N = 10;
    unsigned int A[N];

    srand(time(0));
    for (int i = 0; i < N; i++) 
        A[i] = i + 1;

    for (int i = 1; i < N; i++)
        Swap(&A[i], &A[RandInt(0, i)]);
}

void Swap(long la, long lb)
{
    unsigned int tmp;
    tmp = *la;
    *la = *lb;
    *lb = tmp;
}

unsigned int RandInt(int range) 
{
    return rand() % range;
}
