/* As regras de precedência de uma expressão algébrica no C são as mesmas utilizadas na álgebra. */

#include <stdio.h>

int main() {
    float a = 10, b = 23, c = 79;
    float result = 0;

    result = a + b;
    printf("a + b = %f\n", result);

    result = b - c;
    printf("b - c = %f\n", result);

    result = a * c;
    printf("a x c = %f\n", result);

    result = c / a;
    printf("c / a = %f\n", result);

    result = 23 % 10; // % (mod) é um operador inteiro, só realiza operações entre inteiros
    printf("b mod a = %f\n", result); 

    result = 2 * 5 % 5 + 10 / 15 - 10;
    printf("Testando a precedência das operações: %f", result);

    return 0;
}