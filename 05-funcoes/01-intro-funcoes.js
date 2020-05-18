/* Funções são subrotinas utilizadas em um programa, em JavaScript elas são
   tratadas como dados, isso permite que elas sejam utilizadas de diversas formas.

    Funções JavaScript, podem:

      1- Ser armazenadas dentro de um array.

      2- Ser armazenadas dentro de atributos de objetos.

      3- Ser passadas como parâmetro.

      4- Retornar e conter outra função.   
*/

// Parâmetros e retornos são opcionais em JS.
function soma(a, b) {
  a + b
}

// Se nada for retornado de forma intensional, a função retorna undefined por padrão
console.log(soma())

// Quando invocada, só irá considerar os três primeiros parâmetros
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
let funcao = function () {
  console.log("Função anônima")
}
funcao()

// Armazenar função em um array
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

// Armazenar uma função no atributo do objeto
const pessoa = {
  nome: function () {
    return "Thomas Shelby"
  },
}

console.log(pessoa.nome())

// Passar uma função como parâmetro de outra função
function teste(funcao) {
  funcao()
}

teste(function () {
  console.log("Executando...")
})

// Uma função pode retornar outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(10, 15)(4)

let cinco = soma(2, 3)
cinco(4)
