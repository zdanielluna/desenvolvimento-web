#include <stdio.h>

int main() {
    int numberA, numberB, numberC, sum;

    printf("Entre com o primeiro número inteiro:\n");
    scanf("%d", &numberA);

    printf("Entre com o segundo número inteiro:\n");
    scanf("%d", &numberB);

    printf("Entre com o terceiro número inteiro:\n");
    scanf("%d", &numberC);

    sum = numberA + numberB + numberC;
    printf("Resultado = %d\n", sum);
    return 0;
}