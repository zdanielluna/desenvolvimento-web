/* Exercícios de Revisão

2.1 a) Todos os programas em C começam sua execução com a função main().
    b) {} Determina o início e fim do corpo de uma função.
    c) Todas as instruções terminam com um ;
    d) A função printf da biblioteca padrão exibe informações na tela.
    e) A sequência de escape \n representa o caractere de nova linha que faz com que o cursor
       se posicione no início da próxima linha na tela.
    f) A função scanf da biblioteca padrão é utilizada para obter dados do teclado.
    g) O especificador de conversão %d é usado em uma string de controle de formato scanf para indicar
       que a impressão (saída) de um inteiro pelo programa.
    h) Sempre que um valor novo é colocado em uma posição da memória, ele substitui o valor anterior ali presente.
       Esse processo é conhecido como leitura destrutiva.
    i) Quando um valor é lido de uma posição na memória, ele é preservado, isso é chamado de leitura não destrutiva.
    j) A instrução if é usada na tomada de decisões.

2.2 a) Falso, pois a instrução printf inicia a partir de onde o cursor estar posicionado, por isso utilizar a sequência
       de escape \n é uma boa prática de programação.
    b) Falso. Os comentários não são lidos.
    c) Verdadeiro.
    d) Verdadeiro.
    e) Falso. Elas podem receber uma atribuição em uma outra linha que não seja a da sua declaração.
    f) Falso. o C é uma linguagem case-sensitive, distingue letras maiúsculas de menúsculas.
    g) Falso. As declarações devem estar depois de qualquer instrução executável e aparecer depois da chave esquerda
       corpo de uma função.
    h) Falso. Na função scanf precisa, pois o e-comercial é um operador utilizado para indicar o endereço de memória para qual
       a variável foi alocada.
    i) Verdadeiro.
    j) Falso. Os operadores aritméticos * / e % possuem o mesmo nível de precedência, todos eles prioritários em relação
       ao + e -.
    k) Falso. O indicado são apenas 31 caracteres.
    l) Falso. Um programa pode ter 3 linhas de saídas utilizando apenas um único printf, por tanto que faça uso do
       da sequência de escape \n.
*/

/* 2.3 Escreva uma instrução simples em  para realizar cada um dos pedidos que se seguem: 
      a) Declare do tipo int as variáveis c, estaVariavel, q76354 e numero.
      b) Peça ao usuário para fornecer um inteiro. Termine sua mensagem (prompt) com dois
          pontos (:) seguidos de um espaço e deixe o cursor posicionado após o espaço.
      c) Leia um inteiro digitado no teclado e armazene na variável a o valor fornecido.
      d) Se a variável numero não for igual a 7, imprima "A variável numero nao e igual a 7".
      e) Imprima a mensagem "Este e um programa em C" em uma linha.
      f) Imprima a mensagem "Este e um programa em C" em duas linhas, sendo que a primeira
         linha termina com a palavra um.
      g) Imprima a mensagem "Este e um programa em C" com cada palavra em uma linha
         separada.
      h) Imprima a mensagem "Este e um programa em C" com todas as palavras separadas por
         tabulações.
*/

/* 2.4 Escreva uma instrução (ou comentário) para realizar cada um dos pedidos seguintes:
      a) Crie um comentário declarando que um programa calculará o produto de três números
         inteiros.
      b) Declare as variáveis x, y, z e resultado como sendo do tipo int.
      c) Peça ao usuário para digitar três números inteiros.
      d) Leia os três números inteiros fornecidos através do teclado e armazene-os nas variáveis x,
         y e z.
      e) Calcule o produto dos três números inteiros contidos nas variáveis x, y e z e atribua o
         resultado à variável resultado.
      f) Imprima "O produto e" seguido do valor da variável resultado.
*/

/* 2.5 Usando as instruções escritas para a solução do Exercício 2.4, escreva um programa
       completo que calcule o produto de três inteiros. 
*/

/* 2.6 Identifique e corrija os erros de cada uma das seguintes instruções:
      a) printf("O valor e %d\n", inúmero);
      b) scanf("%â%ã", inumerol, numero2);
      c) if (c < 7);
      printf("C e menor do que 7\n");
      d) if (c => 7)
      printf("C e igual ou menor do que 7\n");
*/

#include <stdio.h>

// 2.3 
int exercicio2_3() {
   int a, estaVariavel, q76354, numero;

   printf("Forneça um número inteiro: ");
   scanf("%d", &numero);

   a = numero;

   if (numero != 7) {
      printf("A variável numero não é igual a 7.\n");
   }

   printf("Este é um programa em C\n");

   printf("Este é um\n");
   printf("programa em C\n");

   printf("Este\n");
   printf("é\n");
   printf("um\n");
   printf("programa\n");
   printf("em\n");
   printf("C\n");

   printf("Este\\é\\um\\programa\\em\\C");

   return 0;
}

// 2.4 e 2.5
int exercicio2_4() {  // Calcula o produto de 3 números inteiros
   int x, y, z, resultado;

   printf("Digite 3 número inteiros e obtenha o produto: \n");
   scanf("%d %d %d", &x, &y, &z);

   resultado = x * y * z;

   printf("Resultado: %d\n", resultado);
}

// 2.6
int exercicio2_5() {
   int numero1 = 5, numero2 = 3, c;

   printf("O valor é %d\n", numero1);
   printf("Insira dois números inteiros: \n");
   scanf("%d %d", &numero1, &numero2);
   
   c = numero2;

   if (c < 7) {
      printf("C(%d) é menor do que 7\n", c);
   }
   if (c >= 7) {
      printf("C é igual ou menor do que 7\n");
   }
   
   return 0;
}

int main() {
    
   exercicio2_3();
   exercicio2_4();
   exercicio2_5();

   return 0;
}