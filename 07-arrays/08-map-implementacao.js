Array.prototype.map2 = function (callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

numeros = [2, 3, 4]
const dobro = numeros.map2((e) => e * 2)
console.log(dobro)

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const precos = carrinho.map2((e) => JSON.parse(e).preco)
console.log(precos)
