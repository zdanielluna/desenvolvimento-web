# Atribuição por Desestruturação

É uma forma que possibilita extrair dados de arrays ou objetos e atribuir em diferentes variáveis.

**Desestruração de Array**

Os elementos do array são atribuídos às variáveis dentro do colchete ao lado esquerdo da expressão:

```JavaScript
const fruits = ['Melão', 'Abacaxi', 'Banana', 'Morango', 'Pinha']
const [fruit1, fruit2, fruit3, fruit4, fruit5] = fruits

console.log(fruit1, fruit2, fruit3) // Melão Abacaxi Banana
```

Exemplo 2:

```JavaScript
const [a, b, c] = [10, 15, 20]
console.log(a, b, c) // 10 15 20
```

Troca as variáveis se o valor de max < min

```JavaScript
function random(max, min) {
    let result = Math.random() * (max - min) + min
    if (min > max) [min, max] = [max, min]

    return Math.round(result)
}

console.log(random(5, 10))
```

Atribuindo o resto de um array em uma variável, utilizando o operador rest:

```JavaScript
let [a, ...b] = [1, 2, 3]

console.log(a) // 1
console.log(b) // [2, 3]
```

**Desestruturação de Objeto**

Similar a desestruturação de arrays, porém utiliza-se {}:

```JavaScript
let { nome, idade } = pessoa
console.log(nome, idade) // Lestai 25
```

Utilizando o operador rest:

```JavaScript
let { ...atributos } = pessoa
console.log(atributos) // { nome: 'Lestai', idade: 25 }
```

Valores padrão:

```JavaScript
let { nome = 'Lana', idade = 19 } = { nome: 'Lestai'}
console.log(nome, idade) // Lestai 19
```

## Referências

-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao
