#include <stdio.h>

void PrintOut(unsigned int N);

int main() {
    PrintOut(76234); 
}

void PrintOut(unsigned int N) {
    if (N >= 10) PrintOut(N / 10);
    printf("%d", N % 10);
}
