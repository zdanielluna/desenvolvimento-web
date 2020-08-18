# Introdução a Funções JavaScript

## Funções
São subprogramas que possuem uma sequência de instruções que realizam uma tarefa ou calculam um valor.

Estrutura básica de uma função:

```JavaScript
function soma(a, b) {
    return a + b
}
```

No JavaScript, elas podem ter propriedades e métodos como qualquer outro objeto. A diferença entre elas e os objetos é o fato de que as funções podem ser chamadas.

```JavaScript
console.log(soma(2, 5)) // 7
```

No JavaScript, funções são conhecidas como cidadãos de primeira classe, pois elas podem ser:

-   Armazenadas em variáveis e constantes
-   Anônimas
-   Passadas como parâmetro de outra função
-   O retorno de outra função

**Armazenada em Variáveis**

```JavaScript
let resultado

function multiplica(a, b) {
    return a * b
}

resultado = multiplica(2, 5)
console.log(resultado) // 10
```

**Anônimas**


**Parâmetro de outra Função**

Uma função pode receber outra como parâmetro. Por exemplo, a função setTimeout() recebe como parâmetro uma função e um intervalo de tempo, a função é chamada repetidas vezes dentro desse intervalo informado. O código abaixo, a cada dois segundos chama a função "dizOi".

```JavaScript
function dizOi() {
    return console.log('Oi')
}

setInterval(dizOi, 2000)
```

**Retorno de outra Função**

Elas também podem ser o retorno de uma outra função.

```JavaScript
function fala() {
    console.log('Fale rapidamente: ')

    return function travaLingua() {
        console.log('A Iara agarra e amarra a rara arara de Araraquara')
    }
}

```

Quando a função fala() for chamada, ela irá executar o código do seu corpo, mas não a função retornada por ela. Para isso é necessário:

```JavaScript
fala()() // Fale rapidamente: A Iara agarra e amarra a rara arara de Araraquara
```

Outra forma de executar a função retornada:

```JavaScript
let travaLingua = fala()
```

No exemplo acima, o retorno da função fala() é armazenado na variável travaLingua.

**Flexibilidade nos Parâmetros**
No JavaScript, as funções são bastante flexíveis quanto aos parâmetros, por exemplo:

Uma função criada para receber três parâmetros, pode receber menos que o esperado:

```JavaScript
function imprimeParametro(a, b, c) {
    return console.log(a, b, c)
}

imprimeParametro('One Piece', 'Dragon Ball Z') // One Piece Dragon Ball Z undefined
```

Ou receber mais parâmetros que o esperado, neste caso os parâmetros extras são ignorados:

```JavaScript
function multiplicaTresAlgarismos(a, b, c) {
    return a * b * c
}

console.log(multiplicaTresAlgarismos(4, 2, 10, 3, 10)) // 80
```
**Referências**
* [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Funções)
* [W3Schools](https://www.w3schools.com/js/js_functions.asp)
* [Lari Maza](https://medium.com/larimaza-pt/pílulas-de-javascript-função-que-retorna-outra-função-a9c5489f14fd)

