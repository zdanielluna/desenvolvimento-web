## Herança

A herança em JavaScript é baseada em protótipos, todo objeto em JavaScript, possui uma propriedade `__proto__` que aponta para o protótipo do seu objeto pai. O objeto filho pode herdar atributos e comportamentos do seu protótipo.

```JavaScript
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
```

Acessa o protótipo do objeto, a busca se extende por toda a cadeia de protótipo até encontrar o objeto pai ou retornar undefined:

```JavaScript
console.log(ferrari.__proto__) // {}
```

Por padrão, um objeto criado aponta para Object.prototype:

```JavaScript
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
```

Object.prototype está no topo da hierarquia, portanto não possui um protótipo:

```JavaScript
console.log(Object.prototype.__proto__) // null
```

**Criando uma cadeia de protótipo**
Para definir o seu protótipo, utiliza-se o atributo `__proto__`:

```JavaScript
const avo = { corPele: 'Marrom' }
const pai = { __proto__: avo, barba: false, altura: 1.77 }
const filho = { __proto__: pai, barba: true }
```

O filho herda os atributos do pai que herda do avô:

```JavaScript
console.log(filho.corPele) // Marrom
console.log(filho.altura) // 1.77
console.log(filho.barba) // true
```

**Object.create()**
Cria um novo objeto, utilizando como protótipo o objeto passado como parâmetro:

```JavaScript
const mae = {
    nome: 'Carla',
    corCabelo: 'castanho',
}

const filha = Object.create(mae, {
    nome: { value: 'Gabriela', writable: false, enumerable: true },
})

console.log(`Nome: ${filha.nome} | Cor do cabelo: ${filha.corCabelo}`) // Nome: Gabriela | Cor do cabelo: castanho
```

## Referências

-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create
