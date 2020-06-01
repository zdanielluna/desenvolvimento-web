/* Funções são subrotinas utilizadas em um programa, em JavaScript elas são
   tratadas como dados, isso permite que elas sejam utilizadas de diversas formas. */

// Parâmetros e retornos são opcionais em JS.
function somaTudo() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(somaTudo(5, 4, 3, 10, 25, -12, 'Batata', 'Música', '25', '30'))

// Se nada for retornado de forma intensional, a função retorna undefined por padrão
function soma(a, b) {
  a + b
}

console.log(soma())

// Quando invocada, só irá considerar apenas os três primeiros parâmetros
function multiplica(a, b, c) {
  return a * b * c
}

console.log(multiplica(5, 6, 10, Infinity))

// Considera undefined os valores esperados e não passados por parâmetro
function subtrai(a, b) {
  return a - b
}

console.log(subtrai(5))

// Funções anonimas não dependem de nome, são declaradas e armazenadas em variáveis
let calculaArea = function (base, altura) {
  return `base x altura = ${base * altura}`
}

console.log(calculaArea(5, 10))

// Armazena em um array
let retornaOMaisForte = function () {
  return "Goku"
}

const personagens = [
  "Naruto",
  retornaOMaisForte,
  "Midoriya",
  "Saitama",
  "Luffy",
  "Escanor",
]

console.log(personagens)

// Armazena no atributo do objeto
const pessoa = {
  nome: function () {
    return "Thomas Shelby"
  },
}

console.log(pessoa.nome())

// Recebe uma função como parâmetro
function teste(funcao) {
  funcao()
}

teste(function () {
  console.log("Executando...")
})

// Retorna outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(10, 15)(4)

let cinco = soma(2, 3)
cinco(4)
