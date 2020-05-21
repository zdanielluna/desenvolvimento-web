/* Callback é uma função passada por parâmetro para outra função, que é disparada quando um determinado evento ocorrer. */

const jogos = ['The Witcher 3', 'Outgard', 'Northgard', '', 'Residente Evil 2']

console.log('Jogos')

function imprime(valor, indice) {
  console.log(`Elemento: ${valor}  Índice ${indice}`)
}

// Chama para cada elemento no array a função informada no parâmetro
jogos.forEach(imprime)

const esportes = [
  'Boxe',
  'Karatê',
  'Tiro Esportivo',
  'Futsal',
  'Tiro com Arco',
]

console.log('\nEsportes')

esportes.forEach((elemento, indice, array, arg) => console.log(`índice: ${indice} elemento: ${elemento}`))
