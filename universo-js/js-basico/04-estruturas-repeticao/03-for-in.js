/* Percorre os índices do array ou as propriedades de um objeto*/

let sistemasOperacionais = ['MacOS', 'Linux', 'Android', 'Windows']

for (let i in sistemasOperacionais) {
  console.log(`Índice: ${i} Valor: ${sistemasOperacionais[i]}`)
}

console.log('\n')

const pessoa = {
  nome : 'Daniel',
  sobrenome : 'Luna',
  idade : 23,
  curso : 'Ciência da Computação'
} 

for (let atributo in pessoa) {
  console.log(`Chave: ${atributo} | Valor: ${pessoa[atributo]}`)
}