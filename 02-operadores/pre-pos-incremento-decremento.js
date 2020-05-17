// Incremento
let a = 1
let b = 1

console.log('Pré-incremento') // O valor é incrementado em a antes da atribuição em b

b = ++a
console.log('a =', a)
console.log('b =', b)

a = 1
b = 1

console.log('\nPós-incremento') // Primeiro ocorre a atribuição em b, depois o incremento em a

b = a++
console.log('a =', a)
console.log('b =', b)

// Decremento, segue a mesma lógica do exemplo anterior
let y = 1
let x = 1

console.log('\nPré-decremento') 
x = --y
console.log('y =', y)
console.log('x =', x)

y = 1
x = 1

console.log('\nPós-decremento') 

x = y--
console.log('y =', y)
console.log('x =', x)
