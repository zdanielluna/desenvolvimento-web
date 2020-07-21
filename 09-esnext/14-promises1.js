let umValor = new Promise((cumprirPromessa) => {
    cumprirPromessa(3, 4)
})

umValor.then((valor, valor2) => console.log(valor, valor2)) // Apenas um valor (o primeiro) é lido

let doisValores = new Promise((cumprirPromessa2) => {
    cumprirPromessa2({
        valor1: 3,
        valor2: 4,
    })
})

doisValores.then((valores) => console.log(valores))

const listaAlunos = new Promise((alunos) => {
    alunos(['Daniel', 'Lara', 'Lana', 'Kiara', 'Nyla'])
})

const primeiroAluno = (array) => array[0]

const primeiraLetra = (string) => string[0]

listaAlunos
    .then((alunos) => alunos)
    .then(primeiroAluno)
    .then(primeiraLetra) // (primeiraLetra) => primeiraLetra[0]
    .then(console.log)
