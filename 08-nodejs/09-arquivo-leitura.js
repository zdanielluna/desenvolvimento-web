const fs = require('fs')

const caminho = __dirname + '/09-arquivo.json'

// Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Leitura simples de JSON
const config = require('./09-arquivo.json')
console.log(config.db)

// Leitura de diretório
fs.readdir(__dirname, (err, arquivo) => {
    console.log('Conteúdo da pasta')
    console.log(arquivo)
})
