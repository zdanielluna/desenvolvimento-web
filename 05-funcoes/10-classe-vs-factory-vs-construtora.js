// Objeto a partir de classe
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    return console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa("Daniel")
p1.falar()

// Objeto a partir de função factory
const criaPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  }
}

const p2 = criaPessoa("Daniel")
p2.falar()

// Objeto a partir de função construtora
function Personagem(nome, idade, sexo) {
  const nome = nome
  let idade = idade
  let sexo = sexo

  this.imprimir = () =>
    console.log(
      `\n-- Personagem --\nNome: ${nome}\nIdade:${idade}\nsexo: ${sexo}`
    )
}

const personagem = new Personagem("Beth Greene", 18, "F")
personagem.imprimir()
