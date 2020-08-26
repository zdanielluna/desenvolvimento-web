# Introdução a Funções JavaScript

## Funções

São subprogramas que possuem uma sequência de instruções que realizam uma tarefa ou calculam um valor.

**Estrutura básica de uma função**

-   As instruções ficam dentro do seu corpo {}
-   A palavra chave _function_ antecede o nome escolhido para a função
-   Os parâmetros (opcionais) vem dentro do ()
-   Elas podem retornar ou não um valor

```JavaScript
function soma(a, b) {
    return a + b
}
```

No JavaScript, elas podem ter atributos e métodos como qualquer outro [objeto](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico). A diferença entre as funções e os objetos, é o fato de que as funções podem ser chamadas.

```JavaScript
console.log(soma(2, 5)) // 7
```

Também são conhecidas como cidadãos de primeira classe, pois elas são tratadas como valores, dados.

As funções podem ser:

-   Armazenadas em variáveis e constantes
-   Anônimas
-   Passadas como parâmetro de outra função
-   Armazenadas em estruturas de dados
-   O retorno de outra função

## Armazenada em Variáveis

```JavaScript
let resultado

function multiplica(a, b) {
    return a * b
}

resultado = multiplica(2, 5)
console.log(resultado) // 10
```

##Anônimas
São funções que não possuem nome e são atribuídas a variáveis.

```JavaScript
let divide = function (a, b) {
    return a / b
}

console.log(divide(20, 2)) // 10
```

## Parâmetro de outra Função

Uma função pode receber outra como parâmetro. Por exemplo, a função setTimeout() recebe como parâmetro uma função e um intervalo de tempo, a função é chamada repetidas vezes dentro desse intervalo informado. O código abaixo, a cada dois segundos chama a função "dizOi".

```JavaScript
function dizOi() {
    return console.log('Oi')
}

setInterval(dizOi, 2000)
```

## Armazenadas em Estrutura de Dados

Armazenando no [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

```JavaScript
const operacoesMatematicas = []

let subtrai = function (a, b) {
    return a - b
}

let soma = function (a, b) {
    return a + b
}

let multiplica = function (a, b) {
    return a * b
}

let divide = function (a, b) {
    if (b != 0) return a / b
}

operacoesMatematicas.push(subtrai, soma, multiplica, divide)
```

Para verificar os itens inseridos

```JavaScript
console.log(operacoesMatematicas)
/*
[
    [Function: subtrai],
    [Function: soma],
    [Function: multiplica],
    [Function: divide]
]
*/
```

Acessando e executando a função escolhida:

```JavaScript
let resultado = array[2](10, 2)
console.log(resultado) // 20
```

Também é possível armazenar funções como atributo de um objeto:

```JavaScript
const pessoa = {
    nome: 'Daniel',
    saudacao() {
        return `Olá, meu nome é ${this.nome}. Qual o seu?`
    },
}

console.log(pessoa.saudacao()) // Olá, meu nome é Daniel. Qual o seu?
```

## Retorno de outra Função

Uma função pode retornar outra.

```JavaScript
function fala() {
    console.log('Fale rapidamente: ')

    return function travaLingua() {
        console.log('A Iara agarra e amarra a rara arara de Araraquara')
    }
}

```

Quando a função fala() for chamada, ela irá executar o código dentro do seu corpo e não a função retornada por ela. Para isso é necessário:

```JavaScript
fala()() // Fale rapidamente: A Iara agarra e amarra a rara arara de Araraquara
```

Outra forma de executar a função retornada:

```JavaScript
let travaLingua = fala()
```

No exemplo acima, o retorno da função fala() é armazenado na variável travaLingua.

## Flexibilidade nos Parâmetros

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
function multiplica(a, b, c) {
    return a * b * c
}

console.log(multiplica(4, 2, 10, 3, 10)) // 80
```

**Referências**

-   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Funções)
-   [W3Schools](https://www.w3schools.com/js/js_functions.asp)
-   [Lari Maza](https://medium.com/larimaza-pt/pílulas-de-javascript-função-que-retorna-outra-função-a9c5489f14fd)
