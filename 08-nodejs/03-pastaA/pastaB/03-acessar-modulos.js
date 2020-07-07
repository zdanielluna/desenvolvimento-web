const moduloA = require('../../01-moduloA') // Caminho relativo
console.log(moduloA.ola)
console.log(moduloA.ateLogo)

// Modulo core do node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)

