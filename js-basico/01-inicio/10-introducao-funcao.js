/* Em JS, função é um bloco de códigos que executa uma determinada tarefa.
   Executam uma tarefa quando são invocadas com o operador (). */

function soma(a, b) {
  return a + b
}

console.log(soma(20, 20))

// Retorna undefined por padrão se ela não tiver um retorno definido
function subtracao(a, b) {
  a - b
}

console.log(subtracao(5, 10))

// Ignora os parâmetros excedentes
function multiplica(a, b, c) {
  return a * b * c
}

console.log(multiplica(2, 3, 4, 5, 6))
