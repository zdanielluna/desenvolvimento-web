# REST e SPREAD

O operador é o mesmo, mas dependendo do contexto, pode ser usado para espalhar ou agrupar os elementos.

## spread

Permite distribuir o conteúdo de qualquer objeto iterável. Por exemplo, dado três arrays:

```JavaScript
const series = ['Sons of Anarchy', 'Spartacus', 'Game of Thrones', 'Vikings']
const animes = ['Dragon Ball', 'One Piece', 'Naruto', 'Cavaleiros do Zodiáco']
const games = ['Dark Souls 3', 'Crash Bandicoot', 'The Witcher 3', 'Northgard']
```

É possível espalhar o conteúdo deles em outro array, utilizando o operador spread antes da variável:

```JavaScript
const entretenimento = [...series, ...animes, ...games]
```

Pra finalizar, confere o conteúdo do novo array criado com o espalhamento dos arrays anteriores:

```JavaScript
console.log(entretenimento)
/*
    'Sons of Anarchy',
    'Spartacus',
    'Game of Thrones',
    'Vikings',
    'Dragon Ball',
    'One Piece',
    'Naruto',
    'Cavaleiros do Zodiáco',
    'Dark Souls 3',
    'Crash Bandicoot',
    'The Witcher 3',
    'Northgard'
*/
```

## rest

É utilizado como parâmetro, quando utilizado, a função espera receber um array de elementos de quantidade indeterminada.

No código abaixo, a função vai receber vários elementos a partir do segundo parâmetro, e estes serão agrupados/inseridos em um novo array, fazendo com que a função receba um array de elementos:

```JavaScript
function multiplica(multiplicador, ...n) {
    return n.map((e) => multiplicador * e)
}
```

O map() percorre n e retorna um novo array com os elementos multiplicados pela variável multiplicadora:

```JavaScript
console.log(multiplica(2, 3, 5, 2, 9, 7, 3)) // [ 6, 10, 4, 18, 14, 6 ]
```

## Referências :

-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
-   https://medium.com/larimaza-pt/p%C3%ADlulas-de-javascript-operador-spread-e-par%C3%A2metro-rest-afd1f0266036
