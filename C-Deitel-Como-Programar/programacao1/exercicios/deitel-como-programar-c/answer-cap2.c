// Como Programar em C, Deitel
// Exercícios de Revisão do Cap 2 

/* 2.1 Preencha as lacunas de cada uma das frases seguintes:
      a) Todos os programas em C começam sua execução com a função ________________.
      b) A ________________ começa o corpo de todas as funções e a o termina.
      c) Todas instruções terminam com um ________________.
      d) A função ________________ da biblioteca padrão exibe informações na tela.
      e) A seqüência de escape \n representa o caractere de ________________ que faz com que o
      cursor se posicione no início da próxima linha na tela.
      f) A função ________________ da biblioteca padrão é usada para obter dados do teclado.
      g) O especificador de conversão ________________ é usado em uma string de controle de
      formato de scanf para indicar que um inteiro será fornecido ao programa e em uma string de
      controle de formato de printf para indicar a impressão (saída) de um inteiro pelo programa.
      h) Sempre que um valor novo é colocado em uma posição da memória, ele substitui o valor
      anterior ali presente. Esse processo é conhecido como leitura ________________ .
      i) Quando um valor é lido de uma posição na memória, ele é preservado; isso é chamado
      leitura ________________.
      j) A instrução ________________ é usada na tomada de decisões.
*/

/* 2.2 Diga se cada uma das afirmações seguintes é verdadeira ou falsa. Se for falsa, explique por quê.
      a) Quando a função printf é chamada, ela sempre começa a imprimir no início de uma nova
      linha.
      b) Os comentários fazem com que o computador imprima na tela o texto situado entre e 
      quando o programa é executado.
      c) A seqüência de escape \n, quando usada em uma string de controle de formato de printf,
      faz com que o cursor se posicione no início da próxima linha na tela.
      d) Todas as variáveis devem ser declaradas antes de serem usadas.
      e) Todas as variáveis devem receber a atribuição de um tipo ao serem declaradas.
      f) O C considera idênticas as variáveis numero e NuMeRo.
      g) As declarações podem aparecer em qualquer lugar do corpo de uma função.
      h) Todos os argumentos após a string de controle de formato em uma função printf devem
      ser precedidos por um e-comercial (&).
      i) O operador resto (%) só pode ser usado com operadores inteiros.
      j) Os operadores aritméticos *, /, % e - possuem o mesmo nível de precedência.
      k)Verdadeiro ou falso: Os nomes de variáveis a seguir são idênticos em todos os sistemas
      ANSI C:
      vejaumnomesuperhiperlongol234567
      vejaumnomesuperhiperlongol234568
      l) Verdadeiro ou falso: Um programa em C que imprime três linhas de saída deve conter
      três instruções printf. 
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

/* 2.7 Identifique e corrija os erros em cada uma das instruções a seguir (Nota: pode haver mais de
       um erro por instrução):
      a) scanf("d", valor);
      b) printf("O produto de %d e %â e %d"\n, x, y) ;
      c) primeiroNumero + segundoNumero = somaDosNumeros
      d) if (numero => maior)
      maior == numero;
      f) Scanf ("%á", umlnteiro) ;
      g) printf("0 resto de %d dividido por %â e\n", x, y, x % y);
      h) if (x = y);
      printf(%d e igual a %d\n", x, y);
      i)
      print("A soma e %d\n, " x + y) ;
      j) Printf("O valor fornecido e: %d\n, &valor);
*/

/* 2.8 Preencha as lacunas em cada uma das expressões a seguir:
      a) ________________ são usados para documentar um programa e melhorar sua legibilidade.
      b) A função usada para imprimir informações na tela é ________________.
      c) Uma instrução do C para a tomada de decisões é ________________.
      d) Normalmente, os cálculos são realizados por instruções ________________.
      e) A função ________________ fornece ao programa os valores digitados no teclado.
*/

/* 2.9 Escreva uma única instrução ou linha em C que realize cada um dos pedidos seguintes:
      a) Imprima a mensagem "Entre com dois números".
      b) Atribua o produto das variáveis beca variável a.
      c) Informe que o programa realiza um exemplo de cálculo de folha de pagamento (i.e., use
      um texto que ajude a documentar um programa).
      d) Forneça ao programa três valores inteiros digitados no teclado e coloque esses valores nas
      variáveis inteiras a, b e c.
*/

/* 2.10 Diga se cada uma das expressões a seguir é verdadeira ou falsa. Explique suas respostas, a)
      Os operadores em C são calculados da esquerda para a direita.
      b) Todos os nomes de variáveis a seguir são válidos: _barra_inf erior, m928134, t5, j7,
      suas_vendas, total_sua_conta, a, b, c, z e z2.
      c) A instrução printf (" a = 5;") ; é um exemplo típico de instrução de atribuição.
      d) Uma expressão aritmética válida em C e sem parênteses é calculada da esquerda para a
      direita.
      e) Todos os nomes de variáveis a seguir são válidos: 3g, 87, 67h2, h22 e 2h.
*/

/* 2.11 Preencha as lacunas de cada uma das expressões a seguir:
      a) Que operações aritméticas estão no mesmo nível de precedência que a multiplicação? .
      b) Quando os parênteses são aninhados, que conjunto de parênteses de uma expressão
      aritmética é calculado em primeiro lugar? .
      c) O local da memória do computador que pode conter valores diferentes em várias ocasiões
      ao longo da execução de um programa é chamado.
*/

/* 2.12 O que é impresso quando cada uma das instruções seguintes da linguagem C é executada? Se nada for impresso, responda "nada". Admita x = 2ey = 3.a) printf("%d", x);
      b) printf("%d", x + x);
      c) printf ("x=") ;
      d) printf("x=%d", x) ;
      e) printf("%ã - %â", x + y, y + x);
      f) z = x + y;
      g) scanf("%ã%ã", &x, &y);
      h) printf("x + y = %ã", x + y);
      i) printf("\n");
*/

/* 2.13 Quais das instruções seguintes em C, se houver alguma, contêm variáveis envolvidas com leitura destrutiva?
      a) scanf("%d%d%d%d%d", &b, &c, &d, &e, &f);
      b) p = i + j+ k + 7;
      c) printf("Leitura destrutiva");
      d) printf("a = 5");
*/

/* 2.14 Dada a equação y = ax 3 + 7, qual das instruções em C a seguir, se houver alguma, são
      corretas para ela? a)y = a*x*x*x + 7;
      b)y = a*x*x* (x+7);
      c) y = (a * x) * x * (x + 7) ;
      d) y = (a * x) * x * x + 7;
      e) y = a * (x * x * x) + 7; f)y = a*x* (x * x + 7);
*/

/* 2.15 Diga a ordem de cálculo dos operadores em cada uma das instruções em C a seguir e mostre
      o valor de x depois que cada instrução for executada.
      a)x = 7 + 3*6/2-l
      b)x = 2%2 + 2*2-2/2;
      c) x = (3 * 9 * (3 + (9*3/ (3) ) ) );
*/

/* 2.16 Escreva um programa que peça ao usuário para digitar dois números, obtenha-os do usuário e
   imprima a soma, o produto, a diferença, o quociente e o resto da divisão dos dois números.
*/

/* 2.17 Escreva um programa que imprima do número 1 ao 4 na mesma linha. Escreva o programa
      usando os seguintes métodos:
      a) Usando uma instrução printf sem especificadores de conversão.
      b) Usando uma instrução printf com
      c) Usando quatro instruções printf.
*/

/* 2.18 Escreva um programa em C que peça ao usuário para fornecer dois números inteiros,
      obtenha-os do usuário e imprima o maior deles seguido das palavras "e maior". Se os
      números forem iguais, imprima a mensagem "Estes números sao iguais". Use a instrução if
      somente na forma de seleção simples que você aprendeu neste capítulo.
*/

/* 2.19 Escreva um programa em C que receba três números inteiros diferentes digitados no teclado
   e imprima a soma, a média, o produto, o menor e o maior desses números. Use a instrução if
   somente na forma ensinada neste capítulo. A tela de diálogo deve aparecer como se segue:

   Entre com três inteiros diferentes: 13 27 14
   A soma e 54
   A media e 18
   O produto e 4914
   O menor e 13
   O maior e 27
*/

/* 2.20 Escreva um programa que leia o raio de um círculo e imprima seu diâmetro, o valor de sua
   circunferência e sua área. Use o valor constante de 3,14159 para "pi". Faça cada um destes
   cálculos dentro da instrução (ou instruções) printf e use o especificador de conversão %f
   (Nota: Neste capítulo, analisamos apenas variáveis e constantes inteiras. No Capítulo 3
   analisaremos números de ponto flutuante, i.e., valores que podem possuir pontos decimais.)
*/

#include <stdio.h>

// Resolve o exercício 2.1 
int exercicio2_1() {
   /*
    a) Todos os programas em C começam sua execução com a função main().
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
   */

  return 0;
}

// Resolve o exercício 2.2
int exercicio2_2() {
   /*
    a) Falso, pois a instrução printf inicia a partir de onde o cursor estar posicionado, por isso utilizar a sequência
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

   return 0;
}

// Resolve o exercício 2.3
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

// Resolve os exercícios 2.4 e 2.5
int exercicio2_4() {  
   int x, y, z, resultado;

   printf("Digite 3 número inteiros e obtenha o produto: \n");
   scanf("%d %d %d", &x, &y, &z);

   resultado = x * y * z;

   printf("Resultado: %d\n", resultado);
}

// Resolve o exercício 2.6
int exercicio2_6() {
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

// Corrige a sintaxe das instruções/Resolve o exercício 2.7
int exercicio2_7() { 
   int valor, x = 5, y = 3, result = 0, numero, numero1, numero2, maior, umInteiro = 0;

   scanf("%d", &valor);

   printf("O produto de %d e %d é: %d\n", x, y, result);

   result = numero1 + numero2;

   if (numero >= maior) {
      maior = numero;
   }

   scanf("%d", &umInteiro);

   result = x % y;
   printf("0 resto de %d dividido por %d é\n", x, y);

   if (x = y) {
      printf("%d é igual a %d\n", x, y);
   }

   printf("A soma é %d + %d\n", x, y);

   printf("O valor fornecido é: %d\n", valor);

   return 0;
}

// Resolve o exercício 2.8
int exercicio2_8() {
   /*
   a) Comentários
   b) printf
   c) if
   d) aritmeticas
   e) scanf
   */
   return 0;
}

// Resolve o exercício 2.9
int exercicio2_9() {
   int a, b, c, d;

   // a)
   printf("Entre com dois números: ");
   scanf("%d %d", &b, &c);

   // b)
   a = b * c;

   // c)
   // O programa realiza um exemplo de cálculo de folha de pagamento

   // d)
   scanf("%d %d %d", &a, &b, &c);

   return 0;
}

// Resolve o exercício 2.10
int exercicio2_10() {
   /*a) Verdadeiro.
     b) Falso. Variáveis não podem conter espaçamento.
     c) Falso. Não é um exemplo típico de uma instrução de atribuição, é apenas uma instrução de impressão que mostra na tela
        a representação de uma atribuição simples.
     d) Falso. Ela é calculada e acordo com a ordem de precedência dos operadores.
     e) Falso. A maioria desses nomes são inválidos, os nomes de variáveis não podem começar com números.
   */

   return 0;
}

// Resolve o exercício 2.11
int exercicio2_11() {
   /*
   a) Divisão e modulo.
   b) O mais interno.
   c) Endereço de memória.
   */
}

// Resolve o exercício 2.12
int exercicios2_12() {
   /*
   a) 2
   b) 4
   c) x = 
   d) x = 2
   e) mensagem de erro/alerta/nada
   f) nada
   g) nada
   h) nada
   i) nada
   */
}

// Resolve o exercício 2.13
int exercicio2_13() {
   /* A leitura destrutiva ocorre nas letras a, b e d.*/

   return 0;
}

// Resolve o exercício 2.14
int exercicio2_14() {
   /* Alternativa e)*/

   return 0;
}

// Resolve o exercício 2.15
int exercicio2_15() {
   /* a) 1º Multiplicação, 2º Divisão, 3º Adição, 4º Subtração. x = 15
      b) 1º Modulo/resto, 2º Multiplicação, 3º Divisão, 4º Adição, 5º Subtração. x = 3
      c) 1º (3); 
         2º Multiplicação 9 x 3;
         3º Divisão 27 / 3;
         4º Adição 3 + 9;
         5º Multiplicação 3 * 9;
         6º Multiplicação 27 * 12;
         x = 324
   */ 

   return 0;
}

// Resolve o exercício 2.16
int exercicio2_16() {
   int a, b, soma, produto, quociente, restoDivisao, diferenca;

   printf("Digite dois números:\n");
   scanf("%d %d", &a, &b);

   soma = a + b;
   produto = a * b;
   diferenca = a - b;
   quociente = a / b;
   restoDivisao = a % b;

   printf("soma = %d\nproduto = %d\ndiferença = %d\nquociente = %d\nResto da divisão = %d\n", soma, produto, diferenca, quociente, restoDivisao);

   return 0;
}

// Resolve o exercício 2.17
int exercicio2_17() {
   int a = 1, b = 2, c = 3, d = 4;

   printf("1, 2, 3, 4\n");
   printf("%d, %d, %d, %d,\n", a, b, c, d);
   printf("1\n");
   printf("2\n");
   printf("3\n");
   printf("4\n");

   return 0;
}

// Resolve o exercício 2.18
int exercicio2_18() {
   int a, b;

   printf("Insira dois números inteiros:\n");
   scanf("%d %d", &a, &b);

   if (a > b) {
      printf("%d é maior\n", a);
   } else if (b > a) {
      printf("%d é maior\n", b);
   } else {
      printf("Estes números são iguais\n");
   }
   
   return 0;
}

// Resolve o exercício 2.19 
int exercicio2_19() {
   int x, y, z, soma, produto, media, menor, maior;

   printf("Insira três números inteiros distintos:\n");
   scanf("%d %d %d", &x, &y, &z);

   soma = x + y + z;
   produto = x * y * z;
   media = (x + y + z) / 3;

   printf("Soma = %d\nProduto = %d\nMedia = %d\n", soma, produto, media);

   // Corrigir
   if (z > y && z > x) {
      maior = z;
   } else {
      menor = z;
   } if (y > z && y > x) {
      maior = y;
   } else {
      menor = y;
   } if (x > y && x > z) {
      maior = x;
   } else {
      menor = x;
   }

   printf("Maior número = %d\nMenor número = %d\n", maior, menor);

   return 0;
}

// Resolve o exercício 2.20
int exercicio2_20() {
   float pi = 3.14159 , raio, diametro, circunferencia, area = pi * (raio * raio);

   printf("*** Info-Círculo***\n");
   printf("Digite o valor do raio:\n");
   scanf("%f", &raio);

   diametro =  2 * raio;
   circunferencia = pi * diametro;
   area = pi * (raio * raio);

   printf("Diâmetro = %f\nCircunferência = %f\nÁrea = %f\n", diametro, circunferencia, area);

   return 0;
}

// Resolve o exercício 2.21
int exercicio2_21() {
   // Quadrado
   printf("*******");
   printf("*\n*      *\n*      *\n*      *\n*      *\n*      *\n*");
   printf("*******\n\n");
   
   // Círculo
   printf("   * * * *");
   printf("   ");
   printf("\n *         *\n*           *\n*           *\n*           *\n *         *\n   * * * *\n\n ");

   // Seta
   printf("     *\n");
   printf("     ***\n");
   printf("    *****");
   printf("\n      *\n      *\n      *\n      *\n      *\n      *\n\n\n");

   // Losango
   printf("         *\n");
   printf("       *   *\n");
   printf("     *       *\n");
   printf("   *           *\n");
   printf(" *               *\n");
   printf("   *           *\n");
   printf("     *       *\n");
   printf("       *   *\n");
   printf("         *\n");

   return 0;
}

// Resolve o exercício 2.22
int exercicio2_22() {
   // Um triângulo

   return 0;
}

// Resolve o exercício 2.23
int exercicio2_23() {
   int a, b, c, d, e, maior, menor;

   printf("Digite 5 números inteiros: ");
   scanf("%d %d %d %d %d", &a, &b, &c, &d, &e);

   if (a > b && a > c && a > d && a > e) {
      maior = a;
   } else if (a < b && a < c && a < d && a < e){
      menor = a;
   } if (b > a && b > c && b > d && b > e) {
      maior = b;
   } else if (b < a && b < c && b < d && b < e){
      menor = b;
   } if (c > a && c > b && c > d && c > e) {
      maior = c;
   } else if(c < a && c < b && c < d && c < e) {
      menor = c;
   } if (d > a && d > b && d > c && d > e) {
      maior = d;
   } else if(d < a && d < b && d < c && d < e){
      menor = b;
   } if (e > a && e > b && e > c && e > d) {
      maior = e;
   } else if (e < a && e < b && e < c && e < d){
      menor = e;
   }

   printf("Maior número: %d\n", maior);
   printf("Menor numéro: %d\n", menor);

   return 0;
}

// Resolve o exercício 2.24
int exercicio2_24() {
   int numero = 5;

   printf("Informe um número:\n");
   scanf("%d", &numero);

   if (numero % 2 == 0) {
      printf("O número %d é par\n", numero);
   }
   else {
   printf("O número %d é ímpar\n", numero);
   }

   return 0;
}

// Resolve o exercício 2.25
int exercicio2_25() {
   printf("DDDDDDDD\n");
   printf("D      D\nD      D\nD     D\nD D D\n\n\n");

   printf("     A\n");
   printf("   A   A\n");
   printf("  A     A\n");
   printf(" A A A A A\n");
   printf("A         A\n");

   return 0;
}

// Resolve o exercício 2.26
int exercicio2_26() {
   int numA = 100, numB = 3;

   if (numA % numB == 0) {
      printf("O número %d é múltiplo de %d", numA, numB);
   } else {
      printf("O número %d não é múltiplo de %d", numA, numB);
   }

   return 0;
}

// Resolve o exercício 2.27
int exercicio2_27() {
   printf("* * * * * * * *\n * * * * * * * *\n* * * * * * * *\n * * * * * * * *\n* * * * * * * *\n * * * * * * * *\n* * * * * * * *\n * * * * * * * *");

   return 0;
}

// Resolve o exercício 2.28
int exercicio2_28() {
   /* Erro fatal: O programa é encerrado imediatamente sem ter sucesso na realização da sua tarefa.

      Erro não fatal: O programa é executado até o final, produzindo frequentemente resultados incorretos. 

      Erro fatal é preferível, pois é melhor ter o programa encerrado sem realizar tarefas incorretas.
      No primeiro caso, podemos corrigir o programa antes que ele performe de forma indesejada.
   */

   return 0;
}

// Resolve o exercício 2.29
int exercicio2_29() {
   printf("%d\n", 'A');
   printf("%d\n", 'B');
   printf("%d\n", 'C');
   printf("%d\n", 'a');
   printf("%d\n", 'b');
   printf("%d\n", 'c');
   printf("%d\n", '0');
   printf("%d\n", 12);
   printf("%d\n", '$');
   printf("%d\n", '*');
   printf("%d\n", '+');
   printf("%d\n", ' ');
   
   return 0;
}

// Resolve o exercício 2.30
int exercicio2_30() {
   int numero, a, b, c, d, e;

   printf("Digite um número de cinco dígitos: \n");
   scanf("%d", &numero);

   a = numero / 10000;
   b = (numero / 1000) % 10;
   c = (numero / 100) % 100 % 10;
   d = (numero / 10) % 1000 % 100 % 10;
   e = (numero / 1) % 10000 % 1000 % 100 % 10;

   printf("%d   %d   %d   %d   %d\n", a, b, c, d, e);

   return 0;
}

int exercicio2_31() {
   int zero = 0, um = 1, dois = 2, tres = 3, quatro = 4, cinco = 5, seis = 6, sete = 7, oito = 8, nove = 9, dez = 10;
   int zero2, zero3, um2, um3, dois2, dois3, tres2, tres3, quatro2, quatro3, cinco2, cinco3, seis2, seis3, sete2, sete3, oito2, oito3, nove2, nove3, dez2, dez3;

   zero2 = zero * zero;
   zero3 = zero * zero * zero;

   um2 = um * um;
   um3 = um * um * um;

   dois2 = dois * dois;
   dois3 = dois * dois * dois;

   tres2 = tres * tres;
   tres3 = tres * tres * tres;

   quatro2 = quatro * quatro;
   quatro3 = quatro * quatro * quatro;

   cinco2 = cinco * cinco;
   cinco3 = cinco * cinco * cinco;

   seis2 = seis * seis;
   seis3 = seis * seis * seis;

   sete2 = sete * sete;
   sete3 = sete * sete * sete;

   oito2 = oito * oito;
   oito3 = oito * oito * oito;

   nove2 = nove * nove;
   nove3 = nove * nove * nove;

   dez2 = dez * dez;
   dez3 = dez * dez * dez;

   printf("----------------------------\n");
   printf(" Número  | Quadrado  | Cubo\n");
   printf("----------------------------\n");
   printf("   %d     |     %d     |  %d\n", zero, zero2, zero3);
   printf("----------------------------\n");
   printf("   %d     |     %d     |  %d\n", um, um2, um3);
   printf("----------------------------\n");
   printf("   %d     |     %d     |  %d\n", dois, dois2, dois3);
   printf("----------------------------\n");
   printf("   %d     |     %d     |  %d\n", tres, tres2, tres3);
   printf("----------------------------\n");
   printf("   %d     |     %d    |  %d\n", quatro, quatro2, quatro3);
   printf("----------------------------\n");
   printf("   %d     |     %d    |  %d\n", cinco, cinco2, cinco3);
   printf("----------------------------\n");
   printf("   %d     |     %d    |  %d\n", seis, seis2, seis3);
   printf("----------------------------\n");
   printf("   %d     |     %d    |  %d\n", sete, sete2, sete3);
   printf("----------------------------\n");
   printf("   %d     |     %d    |  %d\n", oito, oito2, oito3);
   printf("----------------------------\n");
   printf("   %d     |     %d    |  %d\n", nove, nove2, nove3);
   printf("----------------------------\n");
   printf("   %d    |     %d   |  %d\n", dez, dez2, dez3);
   
}

int main() {
   exercicio2_31();
   
   return 0;
}