const http = require('http')
const { promises } = require('fs')

const getTurma = (turma) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let resultado = ''

            res.on('data', (dados) => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (err) {
                    reject(err)
                }
            })
        })
    })
}

// getTurma('A').then((alunos) => {
//     let nomes = []
//     nomes = nomes.concat(alunos.map((aluno) => `A: ${aluno.nome}`))
//     getTurma('B').then((alunos) => {
//         nomes = nomes.concat(alunos.map((aluno) => `B: ${aluno.nome}`))
//         getTurma('C').then((alunos) => {
//             nomes = nomes.concat(alunos.map((aluno) => `C: ${aluno.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then((turmas) => [].concat(...turmas))
    .then((alunos) => alunos.map((aluno) => console.log(aluno.nome)))
    .catch((e) => console.log(e.message))
