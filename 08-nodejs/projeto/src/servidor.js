// const porta = 3003

// const express = require('express')
// const app = express()
// const bancoDeDados = require('./banco-de-dados')

// app.get('/produtos', (req, res) => {
//     res.send(bancoDeDados.getProduto())
// })

// app.get('/produtos/:id', (req, res, next) => {
//     res.send(bancoDeDados.getProduto(req.params.id))
// })

// app.post('/produtos', (req, res, next) => {
//     const produtos = bancoDeDados.salvarProduto({
//         nome: req.body.name,
//         preco: req.body.preco,
//     })
//     res.send(produto) // JSON
// })

// app.listen(porta, () => {
//     console.log(`Servidor executando na porta ${porta}`)
// })

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./banco-de-dados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Converte o objeto em JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco 
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})

