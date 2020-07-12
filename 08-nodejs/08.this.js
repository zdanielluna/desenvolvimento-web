console.log('Fora de uma função: ')
console.log(this === module.exports)
console.log(this === exports)
console.log(this === global)
console.log(this === module)

function dentroDeUmaFuncao() {
    console.log('Dentro de uma função: ')
    console.log(this === module.exports)
    console.log(this === global)
}

dentroDeUmaFuncao()

// ------------------------------------------------------ // ----------------------------------------------------------------

// Método de um objeto
const pessoa = {
    nome: 'Daniel',
    falarNome() {
        console.log(this.nome)
    },
}

pessoa.falarNome()

// Bind-> O valor de this na função é explicitamente setado
nome = 'Solarie'

const jogador1 = {
    nome: 'Shengz',
}

const inimigo = {
    nome: 'Sister Freid',
}

const falarNome = function () {
    console.log(this.nome)
}

const falarNomeInimigo = falarNome.bind(inimigo)
falarNomeInimigo()

const falarNomeJogador1 = falarNome.bind(jogador1)
falarNomeJogador1()

falarNome()

/* Call e Apply 
    -> Diferem na passagem de argumentos.
    -> Seta o contexto do this, assim como o bind(). */

const jogador2 = {
    nome: 'Lana',
    ataque: 600,
    defesa: 500,
    status() {
        console.log(
            `\nNome: ${this.nome} \nAtaque: ${this.ataque} / Defesa: ${this.defesa}`
        )
    },
}

function addAtaqueDef(ataque, defesa) {
    this.ataque += ataque
    this.defesa += defesa
}

jogador2.status()
addAtaqueDef.call(jogador2, 100, 50)
jogador2.status()
addAtaqueDef.apply(jogador2, [50, 25])
jogador2.status()
