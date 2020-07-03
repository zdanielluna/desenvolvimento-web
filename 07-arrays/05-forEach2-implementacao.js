// Implementação do forEach()

const jogos = ['GTAV', 'Dragons Dogma', 'Clash Royale']

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

jogos.forEach2((elemento, indice) => {
    console.log(`${indice + 1}- ${elemento} `)
})
