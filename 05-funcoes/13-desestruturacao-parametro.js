// Recebe um objeto e desestrutura-o, extraindo seus atributos "min" e "max".
function rand({ min = 0, max = 1000 }) {
    if (min > max) 
        return Math.floor(Math.random() * (min - max) + max)
    return Math.floor(Math.random() * (max - min) + min)
}

const objeto = { max: 1, min: 6 }
console.log(rand(objeto))
console.log(rand({}))

// Recebe um array e desestrutura-o, extraindo os seus atributos "min" e "max".
function rand2([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([40, 50]))
console.log(rand2([, 10]))
