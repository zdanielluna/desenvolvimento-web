let numeros = [1, 3, 5, 61, 12, 18, 13, 21, 20, 41]
let dentro = 0
let fora = 0

for (let i = 0; i < numeros.length; i++) {
    numeros[i] >= 10 && numeros[i] <= 20 ? dentro++ : fora++
}

console.log(
    `Quantidade de números dentro do intervalo 10-20: ${dentro}\nQuantidade de números fora do intervalo 10-20: ${fora}`
)
