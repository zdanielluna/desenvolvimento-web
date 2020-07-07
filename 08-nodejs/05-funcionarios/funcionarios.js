const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = (funcionario) => funcionario.genero === 'F'
const chineses = (funcionario) => funcionario.pais === 'China'
const menorSalario = (funcionarioAnterior, funcionarioAtual) => {
    return funcionarioAnterior.salario < funcionarioAtual.salario
        ? funcionarioAnterior
        : funcionarioAtual
}

axios.get(url).then((response) => {
    const funcionarios = response.data

    const funcionario = funcionarios
        .filter(mulheres)
        .filter(chineses)
        .reduce(menorSalario)

    console.log(funcionario)
})
