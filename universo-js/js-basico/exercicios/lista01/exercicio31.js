let numeros = [711, 7, 150000, -5, 61, 12, 99, -133, 18, -9999, 13, -1322, 4, 21, 20, -41]
let qtdNegativo = 0

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] < 0) qtdNegativo ++
}

console.log(`Total de negativos no array numeros: ${qtdNegativo}`)