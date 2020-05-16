/* JavaScript possui apenas um tipo de número (number). Os números podem ser escritos de forma
   inteira ou decimal. */

const numero1 = 9.2545
const numero2 = 27
const media = (numero1 + numero2) / 2

// Retorna true se o número for um inteiro.
console.log(
  Number.isInteger(numero1),
  Number.isInteger(numero2),
  Number.isInteger(media)
)

// Retorna o número com duas casas decimais e converte para uma string
console.log(numero1.toFixed(2))

// Formata o número para o tamanho especificado
console.log(numero2.toPrecision(2))

// Converte o número para uma string que o representa na base 2
console.log(media.toString(2))

// Imprecisão JS
console.log(0.7 + 0.1)
