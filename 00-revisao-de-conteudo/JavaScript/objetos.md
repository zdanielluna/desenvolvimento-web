# Objetos JavaScript

São coleções de pares chave:valor, podendo ter atributos e/ou métodos. Tentam representar entidades/objetos do mundo real, exemplo: carro, pessoas, animais, etc.

**Podem ser criados de diversas formas**

Objeto Literal:

```JavaScript
const pessoa = {
    nome: 'Lara',
    idade: 21
}

console.log(pessoa) // { nome: 'Lara', idade: 21 }
```

-   [Função Fábrica](funcao-fabrica-construtora-classe.md)
-   [Construtora](funcao-fabrica-construtora-classe.md)
-   [Classe](funcao-fabrica-construtora-classe.md)

**Possuem propriedades dinâmicas**
Suas propriedades podem ser inseridas após a criação do objeto:

```JavaScript
pessoa.altura = 1.76
pessoa.peso = 80.5

console.log(pessoa)
/*
{
  nome: 'Lara',
  idade: 21,
  altura: 1.76,
  peso: 80.5
}
*/
```

Para acessar propriedades, utiliza-se a notação ponto ou colchetes:

```JavaScript
console.log(pessoa.nome) // Lara
console.log(pessoa['idade']) // 21
```

Deletando uma propriedade:

```JavaScript
delete pessoa.altura
console.log(pessoa) // { nome: 'Lara', idade: 21, peso: 80.5 }
```

**Métodos**
São ações que o objeto pode realizar.

```JavaScript
const pessoa = {
    nome: 'Lara',
    idade: 21,
    saudar() {
        return `Olá, meu nome é ${this.nome}`
    },
}

console.log(pessoa.saudar()) // Olá, meu nome é Lara
```

**Referência**
Os objetos não são armazenados por valor, ou seja, se o objeto pessoa for atribuído a variável pessoa2, seu valor não será copiado para a variável receptora, mas ela recebera a referência de pessoa! Isso significa que o que for modificado em pessoa2, também será modificado no objeto pessoa:

```JavaScript
const pessoa2 = pessoa
pessoa2.nome = 'Lana Luna'

console.log(pessoa) // Lana Luna
```

## Referências

-   https://www.w3schools.com/js/js_objects.asp
