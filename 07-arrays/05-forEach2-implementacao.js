// Implementação do forEach()

const jogos = ['GTAV', 'Dragons Dogma', 'Clash Royale']

/* 1- Cria o atributo forEach2 para o "pai dos arrays."
   2- O forEach2() é uma função que recebe uma callback, ou seja, uma outra função como parâmetro. 
   3- A callback é chamada toda vez que o for completa uma volta.
   4- Os parâmetros da callback são: o valor do array, a posição e o próprio array.
*/

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

jogos.forEach2((elemento, indice) => {
    console.log(`${indice + 1}- ${elemento} `)
})
