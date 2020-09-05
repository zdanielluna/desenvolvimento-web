## Callback

É uma função que é passada como parâmetro de outra função, posteriormente invocada na função externa para realizar algum procedimento.

Dado o array:

```JavaScript
const sports = [
    'Boxe',
    'Futebol',
    'Esgrima',
    'Basquete',
    'Skate',
    'Vôlei',
    'Hipismo',
    'Kendo',
    'Squash',
    'Skyaking ',
    'Balé',
    'Corrida de Sapo',
    'Boliche',
    'Handbol',
    'Snowboard',
]
```

A função _filter_ recebe a função _searchB_ como parâmetro e retorna um array com os esportes que iniciam com a letra 'B':

```JavaScript
const searchB = (sport) => sport[0] == 'B'
const sportsB = sports.filter(searchB)

console.log(sportsB) // ['Boxe', 'Basquete', 'Balé', 'Boliche']
```

## Referências

-   https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function
