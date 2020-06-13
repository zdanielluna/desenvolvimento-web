let numeros = [711, 7, 150000, 5, 61, 12, 99, -133, 18, -9999, 13, 1322, 4, 21, 20, 41]
let maior = -Infinity
let menor = Infinity

for (let valor of numeros) {
    if (valor > maior) maior = valor
    if (valor < menor) menor = valor
}

console.log(`Maior valor: ${maior} | Menor valor: ${menor}`)
