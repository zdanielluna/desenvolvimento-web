function criaFuncionario(nome, idade, funcao, anosXp, salario, planoTrabalho) {
  return {
    nome,
    idade,
    funcao,
    anosXp,
    salario,
    planoTrabalho,
  }
}

const Lara = criaFuncionario('Lara', 26, 'Desenvolvedor Frontend', 5, 6000.0, 'b')

function calculaNovoSalario(funcionario) {
  const colaborador = funcionario
  let plano = colaborador.planoTrabalho
  let salarioAtual = colaborador.salario
  let novoSalario = 1

  switch (plano) {
    case 'a':
      return (novoSalario = salarioAtual * 0.1 + salarioAtual)
      break
    case 'b':
      return (novoSalario = salarioAtual * 0.15 + salarioAtual)
      break
    case 'c':
      return (novoSalario = salarioAtual * 0.2 + salarioAtual)
      break
    default:
      return 'Plano inválido'
  }
}

console.log(calculaNovoSalario(Lara))
