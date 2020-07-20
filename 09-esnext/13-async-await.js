const http = require('http')

const getTurma = (turma) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let resultado = ''
            response.on('data', (dados) => {
                resultado += dados
            })

            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (err) {
                    reject(err)
                }
            })
        })
    })
}

// Recurso ES8
// Objetivo de simplificar o uso de promises

const obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos().then((alunos) => alunos.map((aluno) => console.log(aluno.nome)))
