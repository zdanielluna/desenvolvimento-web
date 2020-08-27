/* Closure é o escopo criado quando uma função é declarada, este escopo permite a função acessar e manipular
   as variáveis externas a função. */

const x = 'Global'

function out() {
    const x = 'Local'
    function inside() {
        return x
    }
    return inside
}

const myFunction = out()
console.log(myFunction())

// Exemplo 2
let gols = 1

const time1 = function () {
    console.log(gols)
    gols = 2
}

gols = 3

const time2 = function () {
    console.log(gols)
}

time1() // 3
time2() // 2
