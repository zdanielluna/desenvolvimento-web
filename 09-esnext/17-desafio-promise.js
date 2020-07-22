const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, '17-citacoes.txt')

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            resolve(conteudo)
        })
    })
}

lerArquivo(caminho)
    .then((conteudo) => conteudo.split('\n'))
    .then((conteudo) => {
        console.log(conteudo)
        return conteudo
    })
    .then((ultimaFrase) => console.log(ultimaFrase[ultimaFrase.length - 1]))
