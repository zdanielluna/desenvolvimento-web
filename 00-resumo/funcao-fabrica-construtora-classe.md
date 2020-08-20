# Função Fábrica vs Classe vs Função Construtora

## Função Fábrica

É utilizada para fabricar objetos, o retorno de funções deste tipo é um objeto:

```JavaScript
function criaPersonagem(nome, idade, genero, raca) {
    return {
        nome,
        idade,
        genero,
        raca,
    }
}
```

Fabricando os objetos:

```JavaScript
const goku = criaPersonagem('Goku', 43, 'masculino', 'sayajin')
const vegeta = criaPersonagem('Vegeta', 55, 'masculino', 'sayajin')
const bulma = criaPersonagem('Bulma', 50, 'feminino', 'terraqueo')
const videl = criaPersonagem('Videl', 25, 'feminino', 'terraqueo')
```

Criando um array e adicionando os objetos criados:

```JavaScript
const personagensDBZ = []

personagensDBZ.push(goku)
personagensDBZ.push(vegeta)
personagensDBZ.push(bulma)
```

Na saída do console, temos um array de objetos criados com a função fábrica:

```JavaScript
console.log(personagensDBZ)
/*[
    { nome: 'Goku', idade: 43, genero: 'masculino', raca: 'sayajin' },
    { nome: 'Vegeta', idade: 55, genero: 'masculino', raca: 'sayajin' },
    { nome: 'Bulma', idade: 50, genero: 'feminino', raca: 'terraqueo' }
  ]
*/
```

## Função Construtora

Utilizada para instanciar objetos.

Possui seus atributos e métodos, o this se refere ao objeto criado com o _new_

```JavaScript
function Personagem(nome, idade, genero, raca) {
    this.nome = nome
    this.idade = idade
    this.genero = genero
    this.raca = raca

    this.imprimeInfo = () =>
        console.log(`nome: ${nome} \nidade: ${idade} \ngenero: ${genero} \nraca: ${raca}\n`)
}
```

Os objetos são instânciados com o operador new

```JavaScript
const geralt = new Personagem('Geralt of Rivia', 150, 'masculino', 'bruxo')
const yennefer = new Personagem('Yennefer of Vengerberg', 98, 'feminino', 'feiticeira')
const ciri = new Personagem('Ciri of Cintra', 20, 'feminino', 'humana')
```

Conferindo as informações dos objetos criados:

```JavaScript
geralt.imprimeInfo()
yennefer.imprimeInfo()
ciri.imprimeInfo()

/*  nome: Geralt of Rivia
    idade: 150
    genero: masculino
    raca: bruxo

    nome: Yennefer of Vengerberg
    idade: 98
    genero: feminino
    raca: feiticeira

    nome: Ciri of Cintra
    idade: 20
    genero: feminino
    raca: humana
*/
```

## Classe

Na verdade, não existe classes em JavaScript, no final das contas, ela é uma função construtora com uma estrutura similar a de classes de outras linguagens orientadas a objeto, como Php, Java, C#...

```JavaScript
class Personagem {
    constructor(nome, idade, genero, raca) {
        this.nome = nome
        this.idade = idade
        this.genero = genero
        this.raca = raca
    }

    imprimirInfo() {
        return console.log(
            `nome: ${this.nome} \nidade: ${this.idade} \ngenero: ${this.genero} \nraca: ${this.raca}\n`
        )
    }
}
```
Os objetos também são criados com o operador *new*:

```JavaScript
const nami = new Personagem('Nami', 18, 'f', 'humana')
const chopper = new Personagem('Tony Tony Chopper', 15, 'm', 'Zoan')
const arlong = new Personagem('Arlong', 38, 'm', 'homem-peixe')

```

Conferindo os objetos criados:

```JavaScript
nami.imprimirInfo()
chopper.imprimirInfo()
arlong.imprimirInfo()

/*
    nome: Nami
    idade: 18
    genero: f
    raca: humana

    nome: Tony Tony Chopper
    idade: 15
    genero: m
    raca: Zoan

    nome: Arlong
    idade: 38
    genero: m
    raca: homem-peixe
*/
```
