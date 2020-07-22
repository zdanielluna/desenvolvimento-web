const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, '17-citacoes.txt') //'17-citacoooes.txt'

function leituraArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            if (err) reject('Erro ao ler o arquivo')
            else resolve(conteudo)
        })
    })
}

leituraArquivo(caminho)
    .then((conteudo) => conteudo.split('\n'))
    .then((conteudo) => {
        console.log(conteudo)
        return conteudo
    })
    .then((frase5) => console.log(frase5[5]))
    .catch((err) => console.log(`Erro: ${err}`))
