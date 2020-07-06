const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Lara', nota: 8.7, bolsista: false },
]

const todosSaoBolsistas = alunos
    .map((e) => e.bolsista)
    .reduce(function (acumulador, atual) {
        console.log(acumulador, atual)
        return atual && acumulador == true ? true : false
    })

console.log(`Todos os alunos são bolsistas? ${todosSaoBolsistas}`)

const algumBolsista = alunos
    .map((e) => e.bolsista)
    .reduce(function (acumulador, atual) {
        return acumulador || atual ? true : false
    })

console.log(`Algum aluno é bolsista? ${algumBolsista}`)
