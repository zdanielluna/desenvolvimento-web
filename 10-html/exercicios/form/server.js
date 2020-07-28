const express = require('express')
const app = express()
const porta = 3003
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Dados enviados!</h1>')
})

app.listen(porta)
