console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)
console.log(this === exports)

// This e exports apontam para module.exports
this.a = 1
exports.b = 2
module.exports.c = 3
exports = null
console.log(module.exports)

// Muda a referência de exports para outro objeto, mas na verdade exports nunca é retornado
exports = {
    nome: 'Teste',
}

module.exports = { publico: true }
