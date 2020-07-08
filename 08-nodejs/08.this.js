console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    // Dentro de uma função o this não aponta para exports, aponta para o objeto global
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()
