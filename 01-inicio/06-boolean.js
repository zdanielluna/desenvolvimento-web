 /* Boolean é um tipo de dado que pode assumir dois valores: verdadeiro ou falso.
    A função Boolean() testa se uma expressão ou variável é verdadeira. */

// True
console.log(Boolean(3))
console.log(Boolean(' '))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(Boolean))
console.log(Boolean(Infinity))
console.log(Boolean(numero = 10))

// False
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(numero = false))

// And
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Negation
console.log(!true)
console.log(!false)