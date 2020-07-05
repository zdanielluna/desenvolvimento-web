const numeros = [1, 3, 6, 9, 12]

let numerosX2 = numeros.map(function (elemento) {
    return elemento * 2
})
console.log(numerosX2)

const soma10 = (elemento) => elemento + 10
const triplica = (elemento) => elemento * 3
const converteReais = (elemento) =>
    `R$${parseFloat(elemento).toFixed(2).replace('.', ',')}`

const arrayDinheiro = numeros.map(soma10).map(triplica).map(converteReais)
console.log(arrayDinheiro)
