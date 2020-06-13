let numeros = [0, 2, 1, 90, 24, 57, 23, 76, 44, 19, 41, 1547, 88, 3, 1, 99]
let par = 0, impar = 0

for(n of numeros) {
    n % 2 == 0 ? par++ : impar++
}

console.log(`Par: ${par} | Ímpar: ${impar}`)

