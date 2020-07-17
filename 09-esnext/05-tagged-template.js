// tagged templates - processa uma template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)

    return 'Outra string'
}

const aluno = 'Lara'
const situacao = 'Aprovada'
console.log(tag `${aluno} está ${situacao}.`)
