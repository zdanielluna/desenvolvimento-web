# Alguns Métodos Importantes de Object

Dado o objeto:

```JavaScript
const carro = {
    marca: 'Mitsubishi',
    modelo: 'L-200',
    cor: 'Preto',
    combustivel: 'Diesel',
}
```

**Object.keys()**
Retorna um array com suas propriedades enumeráveis:

```JavaScript
console.log(Object.keys(carro)) // [ 'marca', 'modelo', 'cor', 'combustivel' ]
```

**Object.values()**
Retorna um array com os valores do objeto:

```JavaScript
console.log(Object.values(carro)) // [ 'Mitsubishi', 'L-200', 'Preto', 'Diesel' ]
```

**Object.entries()**
Retorna um array com subarrays onde estão contidos os pares(chave:valor) do objeto:

```JavaScript
console.log(Object.entries(carro))
/*
[
  [ 'marca', 'Mitsubishi' ],
  [ 'modelo', 'L-200' ],
  [ 'cor', 'Preto' ],
  [ 'combustivel', 'Diesel' ]
]
*/
```

**Object.defineProperty()**
Define de forma mais específica e detalhada uma nova propriedade diretamente em um objeto, ou modifica uma já existente, retorna o objeto.

Cria o atributo preço, configura seu valor e marca enmerable:false para a propriedade não ser exibida em laços de repetições:

```JavaScript
Object.defineProperty(carro, 'preco', {
    value: 85000.0,
    enumerable: false,
})

console.log(Object.keys(carro)) // [ 'marca', 'modelo', 'cor', 'combustivel' ]
```

Para verificar se a propriedade foi mesmo criada, este método lista todas as propriedades, incluindo as que estão configuradas para não serem exibidas:

```JavaScript
console.log(Object.getOwnPropertyNames(carro)) // [ 'marca', 'modelo', 'cor', 'combustivel', 'preco' ]
```

**Object.assign()**
Copia todos os valores das propriedades do objeto origem para o objeto destino, retorna o objeto destino:

```JavaScript
const carro2 = {
    automatico: true,
    cameraTraseira: true,
}

// destino, ...origens
console.log(Object.assign(carro, carro2))
/*
    {
        marca: 'Mitsubishi',
        modelo: 'L-200',
        cor: 'Preto',
        combustivel: 'Diesel',
        automatico: true,
        cameraTraseira: true
    }
*/
```

## Referências:

-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
