const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./banco-de-dados')

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProduto())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produtos = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco,
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
