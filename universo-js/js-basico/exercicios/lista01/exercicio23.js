/* -------------------------------------- Criação --------------------------------------  */
function criaAluno(codigo, nome, notas = []) {
    return {
        codigo,
        nome,
        notas,
    }
}

const daniel = criaAluno(1, 'Daniel', [6, 9, 7])
const joao = criaAluno(2, 'João', [8, 5, 6])
const lara = criaAluno(3, 'Lara', [10, 10, 10])
const nezuko = criaAluno(4, 'Nezuko', [9, 9, 10])
const einstein = criaAluno(5, 'Albert', [4, 3, 6])

const arrayAlunos = []
arrayAlunos.push(daniel, joao, lara, nezuko, einstein)

/* ----------------------------------- Funcionalidades -----------------------------------  */
function encontraPosicaoMaiorNota(aluno) {
    let indiceMaiorNota = 0,
        maiorNota = 0,
        i = 0

    for (i in aluno.notas) {
        if (aluno.notas[i] > maiorNota) {
            maiorNota = aluno.notas[i]
            indiceMaiorNota = i
        }
    }
    return indiceMaiorNota
}

function calculaMediaPonderada(aluno, indiceMaiorNota) {
    let i = 0,
        peso = 10,
        soma = aluno.notas[indiceMaiorNota] * 4

    for (i in aluno.notas) {
        if (i != indiceMaiorNota) {
            soma += aluno.notas[i] * 3
        }
    }
    return soma / peso
}

function imprimirResultadoConsole(aluno) {
    return console.log(`${aluno.notas[3] >= 5 ? 'APROVADO' : 'REPROVADO'}
                        Nome: ${aluno.nome} 
                        Código: ${aluno.codigo}
                        Ap1: ${aluno.notas[0]}
                        Ap2: ${aluno.notas[1]}
                        Ap3: ${aluno.notas[2]}
                        Média: ${aluno.notas[3]}`)
}

function buscaAluno(codigo) {
    let aluno

    for (let indice in arrayAlunos) {
        if (arrayAlunos[indice].codigo == codigo) {
            aluno = arrayAlunos[indice]
        }
    }
    let indiceMaiorNota = encontraPosicaoMaiorNota(aluno)

    let media = calculaMediaPonderada(aluno, indiceMaiorNota)
    aluno.notas.push(media)

    return imprimirResultadoConsole(aluno)
}

buscaAluno(5)
