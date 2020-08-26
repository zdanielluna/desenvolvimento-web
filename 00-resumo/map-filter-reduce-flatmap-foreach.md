# Métodos de Iteração Arrays

Operam em cima de cada item do array. A maioria possui argumentos similares, porém, internamente operam de maneira diferente.

## foreach()

Chama uma callback para cada elemento do array.
Parâmetros:

    1º -> Elemento da posição atual do array (obrigatório)

    2º -> O index do elemento atual (opcional)

    3º -> O próprio array no qual o elemento atual pertence (opcional)

Percorre o array e mostra seus elementos:

```JavaScript
const alunos = ['Lana', 'Daniel', 'Hana', 'Nami', 'Lara', 'Leo']

function imprimeAlunos(elemento) {
    console.log(elemento)
}

alunos.forEach(imprimeAlunos)
/*
    Lana
    Daniel
    Hana
    Nami
    Lara
    Leo
*/
```

## map()

Recebe uma callback que é executada para cada posição do array e
um novo array é criado com o resultado da alteração feita pela função callback.

-   Não modifica o array original
-   A função não é executada nos elementos vazios

Parâmetros:

    1º -> Elemento da posição atual do array (obrigatório)

    2º -> O index do elemento atual (opcional)

    3º -> O próprio array no qual o elemento atual pertence (opcional)

Duplica os valores do array numeros:

```JavaScript
const numeros = [2, 5, , 7, 3, 9]

let dobro = numeros.map(function (elemento) {
    return elemento * 2
})

console.log(dobro) // [4, 10, <1 empty item>, 14, 6, 18]
```

## filter()

Cria um novo array preenchido com os elementos que passaram no teste colocado na função callback recebida como parâmetro do filter.

Não modifica o array original e não executa a função em posições sem valores.

Parâmetros:

    1º -> Elemento da posição atual do array (obrigatório)

    2º -> O index do elemento atual (opcional)

    3º -> O próprio array no qual o elemento atual pertence (opcional)

Retorna um array apenas com os esportes que iniciam com a letra B:

```JavaScript
const esportes = [
    'Boxe',
    'Futebol',
    'Boliche',
    'Atletismo',
    'Natação',
    'Basquete',
    'Tiro Esportivo',
    'Balé',
    'MMA',
    'Canoagem',
    'Krav Maga',
    'Beisebol',
]

let inicialB = esportes.filter(function (elemento) {
    return elemento[0] === 'B'
})

console.log(esportesB) // ['Boxe', 'Boliche', 'Basquete', 'Balé', 'Beisebol']
```

## reduce()

Reduz o array a um único valor. Retorna o valor acumulado da última chamada da função callback. Assim como os outros, executa uma função callback para cada valor do array, da esquerda para direita. O valor de retorno dessa função é guardado em um acumulador: valor total e valor atual.

Não executa a função para posições vazias e não altera o array original.

Parâmetros:

    1º -> Valor inicial, ou o valor anterior retornado pela função. (obrigatório)

    2º -> Valor do elemento atual. (obrigatório)

    3º -> Index do elemento atual. (opcional)

    4º -> O array no qual o elemento atual pertence. (opcional)

Arrow function que recebe um array e retorna a sua média. O somatório dos elementos é feito com o reduce e depois é dividido pelo tamanho do array:

```JavaScript
let media = (array) =>
    array.reduce(function (acumulado, valorAtual) {
        return acumulado + valorAtual
    }) / array.length
```

Obtendo a média da turma:

```JavaScript
const notas = [8.5, 7.2, 9, 3, 2, 10, 9.7, 0, 6.5]

console.log(media(notas)) // 6.2
```

## flatmap()

Concatena os arrays mais internos, formando um único array. É o trabalho em equipe do map() com o concat(). Não faz parte da api padrão do JavaScript.

Na implementação, o flatMap é uma função que recebe uma callback como argumento, e retorna um novo array que contém a concatenação de um array vazio com o array retornado pelo map:

```JavaScript
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
```

Pegando as notas das duas turmas e transformando em um único array:

```JavaScript
const escola = [
    {
        nome: 'Turma 1',
        alunos: [
            {
                nome: 'Lana',
                nota: 9.3,
            },
            {
                nome: 'Hana',
                nota: 10,
            },
        ],
    },
    {
        nome: 'Turma 2',
        alunos: [
            {
                nome: 'Daniel',
                nota: 10,
            },
            {
                nome: 'Leo',
                nota: 7.5,
            },
        ],
    },
]

const getNotasAluno = (aluno) => aluno.nota
const getNotasTurma = (turma) => turma.alunos.map(getNotasAluno)
const notas1 = escola.map(getNotasTurma)
const notasTurma = escola.flatMap(getNotasTurma)

console.log(notasTurma) // [ 9.3, 10, 10, 7.5 ]
```

## Referências:

-   https://www.w3schools.com/jsref/jsref_map.asp
-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
