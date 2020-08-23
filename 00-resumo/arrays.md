# Arrays JavaScript

São utilizados para armazenar vários valores em uma única variável. Todo array inicia no índice 0, ou seja, é neste índice que está contido o primeiro elemento do referido array.

Uma das maneiras para criar um array:

```JavaScript
const verduras = ['Alface', 'Cebolinha', 'Couve', 'Salsa', 'Hortelã', 'Repolho']
```

Para acessar os elementos, basta colocar os [] após o nome do array e dentro dele a posição/índice do elemento que deseja acessar:

```JavaScript
verduras[0]
console.log(verduras[0]) // Alface

verduras[2]
console.log(verduras[2]) // Couve
```

Substituir o valor de uma posição:

```JavaScript
console.log(verduras[3]) // Salsa
verduras[3] = 'Escarola'
console.log(verduras[3]) // Escarola
```

Deletar um elemento:

```JavaScript
delete verduras[1]
console.log(verduras) // ['Alface', <1 empty item>, 'Couve', 'Salsa', 'Hortelã', 'Repolho']
```

Para obter o tamanho de um array, usa-se a propriedade length:

```JavaScript
let tamanhoVerduras = verduras.length
console.log(tamanhoVerduras) // 6
```

O array verduras possui o tamanho 6, inicia na posição 0 e termina na posição 5, para pegar o índice do último elemento do array, é só subtrair 1 do tamanho do array:

```JavaScript
let ultimaPosicao = verduras[verduras.length - 1]
console.log(ultimaPosicao) // Manga
```

## Alguns Métodos de Array

Array de Frutas

```JavaScript
const frutas = ['Banana', 'Maçã', 'Pinha', 'Uva', 'Laranja', 'Manga']
```

**PUSH** Insere um elemento na última posição do array e retorna o novo tamanho do array:

```JavaScript
let novoTamanho = frutas.push('Abacate')

console.log(frutas) // ['Banana', 'Maçã', 'Pinha', 'Uva', 'Laranja', 'Manga', Abacate]
console.log(novoTamanho) // 7
```

**POP** Remove um elemento na última posição do array e retorna o elemento removido:

```JavaScript
let removido = frutas.pop()

console.log(frutas) // ['Banana', 'Maçã', 'Pinha', 'Uva','Laranja', 'Manga']
console.log(removido) // Abacate
```

**SHIFT** Remove o elemento da primeira posição do array e retorna o elemento removido:

```JavaScript
let elementoRemovido = frutas.shift()

console.log(frutas) // ['Maçã', 'Pinha', 'Uva', 'Laranja', 'Manga']
console.log(elementoRemovido) // Banana
```

**UNSHIFT** Remove o elemento da primeira posição e retorna o tamanho atual do array:

```JavaScript
let tamanhoFinal = frutas.unshift('Abacaxi')

console.log(frutas) // ['Abacaxi', 'Maçã', Pinha', 'Uva', 'Laranja', 'Manga' ]
console.log('Tamnaho Final: ' + tamanhoFinal) // 6
```

**CONCAT** Cria um novo array a partir da junção de dois outros arrays:

```JavaScript
const jogosPS4 = [
    'Uncharted',
    'God of War',
    'Bloodborne',
    'Spider Man',
    'Persona 5',
]

const jogosNintendo = [
    'Kirby',
    'Super Mario',
    'Mario Kart',
    'Donkey Kong',
    'Zelda',
]

const jogos = jogosPS4.concat(jogosNintendo)

console.log(jogos)
/*
    [
        'Uncharted',   'God of War',
        'Bloodborne',  'Spider Man',
        'Persona 5',   'Kirby',
        'Super Mario', 'Mario Kart',
        'Donkey Kong', 'Zelda'
    ]
*/
```

**SPLICE** Útil tanto para adicionar como remover itens no array. Retorna os itens deletados.

Argumentos:

    1º Parâmetro -> Posição do array na qual os itens serão inseridos.

    2º Parâmetro -> Quantidade de itens que serão removidos a partir da posição informada no parâmetro 1.

    3º Parâmetro -> Os novos itens que serão inseridos no array.

Remove 4 itens do array a partir da posição 2, e insere 'Dark Souls' na posição 2 do array e 'Tomb Raider' na posição seguinte:

```JavaScript
let itensRemovidos = jogos.splice(2, 4, 'Dark Souls', 'Tomb Raider')

console.log(jogos)
/*
    [
        'Uncharted',
        'God of War',
        'Dark Souls',
        'Tomb Raider',
        'Super Mario',
        'Mario Kart',
        'Donkey Kong',
        'Zelda'
    ]
*/
console.log(itensRemovidos) // ['Bloodborne', 'Spider Man', 'Persona 5', 'Kirby' ]
```

**SLICE** Retorna um novo array que contém a parte de um outro array. Essa parte é determinada pelo intervalo inserido nos parâmetros da função slice.

Argumentos:

        1º Parâmetro -> Posição inicial (incluso)
        2º Parâmetro -> Posição final (excluso)

```JavaScript
const series = [
    'Vikings',
    'Spartacus',
    'Game of Thrones',
    'The Last Kingdom',
    'One Piece',
    'Naruto',
    'My Hero Academia',
    'Dragon Ball',
]

const animes = series.slice(4, 8)
console.log(animes) // ['One Piece', 'Naruto', 'My Hero Academia', 'Dragon Ball']
```

**SORT** Ordena o array

```JavaScript
const letras = ['D', 'F', 'A', 'L', 'O', 'P', 'C', 'Z', 'B']

console.log(letras.sort())
/*
    [
        'A', 'B', 'C',
        'D', 'F', 'L',
        'O', 'P', 'Z'
    ]
*/
```

Array é um tipo especial de objeto. Em JavaScript, os arrays usam índices numerados e os objetos usam índices nomeados.

```JavaScript
console.log(typeof verduras) // object

const pessoa = {
    nome: 'Daniel',
    idade: 23
}

const array = ['God of War', 'Dark Souls', 'Tlou', 'Zelda'] // índice 0, 1, 2, 3
```

## Referências

-   [W3SCHOOLS](https://www.w3schools.com/js/js_arrays.asp)
-   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
