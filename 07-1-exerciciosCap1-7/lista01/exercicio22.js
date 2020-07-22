let = jurosComposto = (c, i, t) => (juros = c * (1 + i / 100) ** t)

function calculaValorAssociacao(mes, valorAnual) {
  let i = 5
  let t = mes - 1
  let c = valorAnual

  return (valorAnualAtualizado = jurosComposto(c, i, t)).toFixed(2)
}

console.log(calculaValorAssociacao(3, 1000))
