/* fib: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
   indice: 0 1 2 3 4 5 6 7... n 
*/

#include <stdio.h>

// Recebe a quantidade de termos e calcula e exibe a sequência de Fibonacci
int fibonacci(int n) {
    int prox = 1;
    int ant = 0;
    int fib = 0;

    for (int i = 0; i < n; i++) {
        printf("%d, ", fib);

        fib = prox + ant;
        prox = ant;
        ant = fib;
    } 

    return 0; 
}

// Aplica a recursividade
int fibonacciRecursivo(int n) {
    if (n < 2) 
        return n;
    else 
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

int main() {
    fibonacci(5);
    printf("\n");
    
    int termos = 5;

    for (int i = 0; i < termos; i++) {
        printf("%d, ", fibonacciRecursivo(i));
    }
    
    return 0;
}