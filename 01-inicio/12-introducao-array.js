/* Em JavaScript, arrays são um tipo especial de objeto, utilizados para
   armazenar vários valores em uma única variável
 */

// Cada elemento é identificado através de um índice que começa na posição 0
const linguagensP = ["C", "Java", "JavaScript", "Python", "VBA"]

// Adiciona dois novos elementos no array
linguagensP.push("PHP")
linguagensP.push("O Clube das Winx")

// Remove o último elemento do array e retorna este elemento
linguagensP.pop()

// Troca o valor do elemento armazenado na posição 0
linguagensP[0] = "C++"

// Retorna a quantidade de elementos do array
console.log(linguagensP.length)

console.log('Linguagens de Programação:\n', linguagensP)

/* Em JS, um array pode armazenar diversos tipos de dados: numeros, strings, booleans
  funções, objetos, outros arrays... */
let dados = [
  "idade",
  18,
  undefined,
  true,
  calculaDesconto = function(desconto, preco) {
    return preco - (desconto * preco) / 100
  },
]

 console.log('Dados variados:\n', dados)

 // Acessa a função armazenada na posição 5
 console.log(dados[4](10, 50.7))
