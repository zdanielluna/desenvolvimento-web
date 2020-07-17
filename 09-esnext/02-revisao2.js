// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 5))

// Arrow Function (this) - Não é possível mudaro contexto do this em uma função arrow
const produto = {
    nome: 'Dark Souls 3',
    preco: 59.9,
}

const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind(produto)

lexico1()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Alou')
log(null)

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach((n) => (total += n))
    return total
}

console.log(total(2, 3, 4, 5))