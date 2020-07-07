console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// Referências para o mesmo objeto que module.exports aponta
this.a = 1
exports.b = 2

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste',
}

module.exports.c = 3
console.log(module.exports)

module.exports = { publico: true }
