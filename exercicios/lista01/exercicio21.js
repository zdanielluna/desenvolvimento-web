function calculaValorPlanoSaude(idade) {
  let valorTotal = 0
  let idadeCoveniado = idade

  if (idade < 10) return `Valor a pagar: R$${(valorTotal = 100 + 80)}`
  else if (idade >= 10 && idade <= 30)
    return `Valor a pagar: R$${(valorTotal = 100 + 50)}`
  else if (idade > 30 && idade <= 60)
    return `Valor a pagar: R$${(valorTotal = 100 + 95)}`

  return `Valor a pagar: R$${(valorTotal = 100 + 130)}`
}

console.log(calculaValorPlanoSaude(5)) // 180
console.log(calculaValorPlanoSaude(30)) // 150
console.log(calculaValorPlanoSaude(60)) // 195
console.log(calculaValorPlanoSaude(61)) // 230
