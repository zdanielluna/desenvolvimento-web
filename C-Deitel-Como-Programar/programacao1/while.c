/*  While é uma estrutura de repetição, ou seja, repete as instruções dentro de seu bloco de código
    enquanto a expressão lógica dentro do seu () for verdadeira.

   Testa primeiro a veracidade da expressão lógica, e se ela
   for inicialmente falsa o bloco de códigos não será executado nenhuma vez.
*/

#include <stdio.h>

int main() {
    /* int count = 0, total = 0, nota = 0, media = 0;

    while (count < 10) {
        printf("Entre com a nota: \n");
        scanf("%d", &nota);
        total += nota;
        count ++;
    }
    
    media = total/10;
    printf("A média da turma é: %d\n", media);

    return 0; */

   // Utilização de flag
   int count = 0, total = 0, nota;
   float media = 0;

   printf("Entre com a nota: | Digite -1 para sair: \n" );
   scanf("%d", &nota);

   while (nota != -1) {
       total += nota;
       count ++;

       printf("Entre com a nota: | Digite -1 para sair: \n" );
       scanf("%d", &nota);
   }

   if (count != 0) {
       media = (float) total/count;
       printf("A média da turma é: %.2f\n", media);
   } else printf("Nenhuma nota foi inserida!");

   return 0;
}