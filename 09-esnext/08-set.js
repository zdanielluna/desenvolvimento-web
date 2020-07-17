// Estrutura não indexada que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('Sport')
times.add('São Paulo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Lara', 'Lana', 'Daniel', 'Lucas', 'Lara']
const nomesSet = new Set(nomes)
console.log(nomesSet)
