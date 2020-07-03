/* Motivações:
    - Reduzir a sintaxe
    - Impedir a variação do this */

let soma = function (a, b) {
    return a + b
}

// Sintaxe básica da arrow function
soma = (a, b) => {
    return a + b
}

// Sintaxe com um parâmetro e retorno implícito
soma = (a) => a + 0

function helloWorld() {
    return 'helloWorld'
}

// Sintaxe "sem parâmetros"
helloWorld = (_) => 'Hello World'

helloWorld = () => 'Hello World'

function Pessoa() {
    this.idade = 0
    // O this é "amarrado" ao contexto da arrow function e não varia
    setInterval(() => {
        // A arrow function é invocada por um temporizador
        this.idade++
        console.log(this.idade)
    }, 1000)

    console.log(this === global)
}

new Pessoa()

// Arrow Function vs Bind Function
testaContextoThisArrow = (parametro) => console.log(this === parametro)

testaContextoThisArrow(global)
testaContextoThisArrow(module.exports)

const objetoQualquer = {}
testaContextoThisArrow(objetoQualquer)

testaContextoThisArrow = testaContextoThisArrow.bind(objetoQualquer)
testaContextoThisArrow(objetoQualquer) // Arrow Function wins!
