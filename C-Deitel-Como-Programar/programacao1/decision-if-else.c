/* Decision Structure
    São utilizadas para controlar o fluxo do programa.

   if
    Se a expressão lógica entre () for algo verdadeiro, o bloco de códigos do é executado. Se não for, a próxima instrução é lida.

   else
    Executa o seu código dentro das {} se a expressão lógica do if for falsa.

    else if
     Caso o if anterior não ocorra, é realizado um novo teste.
*/

#include <stdio.h>

int main() {
    if (2 * 5 > 10) {
        printf("2 multiplicado por 5 é maior que 10.\n");
    } else if ( 2 * 5 >= 10) {
        printf("2 multiplicado por 5 é maior ou igual a dez.\n");
    } else {
        printf("Os testes anteriores não eram verdadeiros.");
    }
    return 0;
}