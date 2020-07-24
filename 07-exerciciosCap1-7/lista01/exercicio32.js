let numeros = [10, 30, 50, 7, 90, 12, 15, 76]
let soma = 0,
    media = 0
let tamanhoVetor = numeros.length

for (let valor of numeros) {
    soma += valor
    media = soma / tamanhoVetor
}

console.log(media.toFixed(2))
