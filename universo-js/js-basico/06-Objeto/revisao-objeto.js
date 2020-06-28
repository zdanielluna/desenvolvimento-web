// Coleção dinâmica de pares chave/valor

// Função com o new = função construtora
const produto = new Object()

// Adiciona propriedades de forma dinâmica
produto.nome = 'Dark Souls 3'
produto['marca do produto'] = 'Bandai Namco'
produto.preco = 39.9
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Daniel',
        idade: 25,
        endereco: {
            logradouro: 'Rua Solarie',
            numero: 1234,
        },
    },
    condutores: [
        {
            nome: 'Rejane',
            idade: 56,
        },
        {
            nome: 'Ana',
            idade: 18,
        },
    ],
    calcularValorSeguro: function () {},
}

carro.proprietario.endereco.numero = 28
console.log(carro)
delete carro.condutores
console.log(carro.condutores)
// console.log(carro.condutores.length)
