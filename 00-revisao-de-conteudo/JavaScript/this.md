# This

É uma palavra chave que se refere ao objeto ao qual pertence. Na maioria dos casos, o this é determinado pela forma como a função é chamada.

## Contexto Global

Ocorre quando o objeto invocador é o window(browser) ou global(nodejs).

Dentro de uma função, o this se refere ao contexto global da aplicação:

```JavaScript
global.nome = 'Franky'

const falaNome = function () {
    console.log(this.nome)
}

falaNome() // Franky
```

## Método de um Objeto

Dentro do método de um objeto, o this se refere a quem invocou a função:

```JavaScript
const personagem = {
    nome: 'Kuzan',
    falaNome() {
        console.log(this.nome)
    },
}

personagem.falaNome() // Kuzan
```

## Função com o new

Quando a função é invocada com o operador new, por exemplo, as funções construtoras, o this se refere ao novo objeto criado:

```JavaScript
function Personagem(nome, genero, habilidade) {
    this.nome = nome
    this.genero = genero
    this.habilidade = habilidade
}

const luffy = new Personagem('Monkey D. Luffy', 'm', 'homem borracha')
console.log(luffy.nome + ' o ' + luffy.habilidade) // Monkey D. Luffy o homem borracha
```

## Bind()

Cria uma nova função em que o this vai se referir ao objeto passado no seu parâmetro.

Utilizando normalmente a função do objeto criado:

```JavaScript
const personagem = {
    nome: 'Luffy',
    saudar() {
        console.log('Oi, meu nome é ' + this.nome)
    },
}

personagem.saudar() // Oi, meu nome é Luffy
```

Mas, se por algum motivo for preciso armazenar o método saudar dentro de uma variável, o contexto inicial do this será perdido e retornado undefined:

```JavaScript
const saudacao = personagem.saudar
saudacao() // Oi, meu nome é undefined
```

Ai que entra um dos usos da bind(), o objeto personagem é "amarrado" ao this, ou seja, como dito anteriormente, o this vai sempre se referir ao objeto passado no parâmetro da função bind:

```JavaScript
const saudacao2 = personagem.saudar.bind(personagem)
saudacao2() // Oi, meu nome é Luffy
```

## Call()

O propósito é o mesmo da bind, a diferença é que a call não cria uma nova função, mas ela chama a função, passando por parâmetro o contexto do this e os argumentos da função chamada.

Aqui há uma função com o this no contexto global, e dois objetos diferentes:

```JavaScript
function alteraInfo(nome, idade, habilidade) {
    this.nome = nome
    this.idade = idade
    this.habilidade = habilidade

    return `Nome: ${this.nome} \nIdade: ${this.idade} \nHabilidade: ${this.habilidade}`
}

const personagem = {
    nome: 'Luffy',
    idade: 16,
    habilidade: 'Homem Borracha',
    alteraInfo,
}

const personagem2 = {
    nome: 'Goku',
    idade: 55,
    habilidade: 'Kamehameha',
}

```

Chamando a função utilizando o call, o this passa a se referir ao objeto informado no parâmetro:

```JavaScript
console.log(alteraInfo.call(personagem, 'Nami', 16, 'Roubo'))

/*
    Nome: Nami
    Idade: 16
    Habilidade: Roubo
*/
```

## Apply()

Similar a função call, a diferença está na passagem dos parâmetros, o apply recebe um array de argumentos.

Passando como contexto um segundo objeto que não possui o método alteraInfo, o resultado é este objeto utilizando o método de outro, pois agora, o this se refere ao personagem2:

```JavaScript
console.log(alteraInfo.apply(personagem2, ['Vegeta', 65, 'Galick Gun']))

/*
    Nome: Vegeta
    Idade: 65
    Habilidade: Galick Gun
*/
```

## Arrow Functions

Na Arrow Function, o this se refere ao contexto onde ela foi criada, por exemplo:

A arrow function está sendo chamada pela função setInterval, porém o this da arrow function referencia o contexto da OnePiece(), pois ela foi criada lá:

```JavaScript
function OnePiece() {
    this.episodios = 530

    setInterval(() => {
        this.episodios++
        console.log(this.episodios)
    }, 1000)

    console.log(this === global) // False
}

```

Acima, o contexto da função OnePiece é testado, e ele difere do global!

Quando a função construtora é invocada:

```JavaScript
new OnePiece()  /* false
                   531, 532, 533, 534...*/
```

E se no lugar da arrow function fosse uma função comum ?

```JavaScript
function DragonBall() {
    this.episodios = 0

    setInterval(function incrementaEp() {
        this.episodios++
        console.log(this.episodios)
    }, 500)

    console.log(this === global)
}
```

O resultado seria diversos NaN, pois como o this.episodios ficaria undefined, aconteceria algo como: undefined ++ , e a soma de um undefined com algum number, resulta em Not a Number.

```JavaScript
new DragonBall() /* false
                    NaN, NaN, NaN, NaN...*/
```

Para finalizar, teste do contexto do this dentro de uma função comum e dentro de uma arrow function:
```JavaScript
function testaThis(param) {
    console.log(param === this)
}

let testaThis2 = (param) => {
    console.log(param === this)
}

testaThis(global) // true
testaThis2(global) // false
```
## Referências

-   [W3Schools](https://www.w3schools.com/js/js_this.asp)
-   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
-   [WebDevDrops](https://www.webdevdrops.com/javascript-this-71dd763aad52)
