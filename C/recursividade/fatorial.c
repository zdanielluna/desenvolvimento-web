#include <stdio.h>

int fatorial(int n) {
    int fat = 1;

    for (int i = n; i > 0; i--) 
        fat *= i;   
    
    return fat;
}

int fatorialRecursivo(int n) {
    if (n == 0) {
        return 1;
    }

    return n * fatorialRecursivo(n - 1);
}

int main() {
    printf("%d", fatorial(5));
    printf("%d", fatorialRecursivo(5));

    return 0;
}