/* Função que retorna um objeto  */

// const prod1 = {
//     nome: 'Outward',
//     preco: 45,
// }

// const prod2 = {
//     nome: 'Rise of the Tomb Raider',
//     preco: 140
// }

function criarPessoa() {
  return {
    nome: 'Daniel',
    sobrenome: 'Luna',
  }
}

function criarjogos(nome, preco) {
  return {
    nome,
    preco,
  }
}

const jogos = [
  criarjogos('Skyrim', 90),
  criarjogos('Overwatch', 60),
  criarjogos('Rainbow Six Siege', 30),
]

console.log(jogos)
