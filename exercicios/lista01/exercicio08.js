let pontos = '10, 20, 20, 8, 25, 3, 0, 30, 1'

let desempenhoJogos = (pontos) => {
  let pontuacoes = pontos.split(', ')
  let maiorPonto = pontuacoes[0]
  let menorPonto = pontuacoes[0]
  let countRecorde = 0
  let piorJogo = 0

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPonto) {
      maiorPonto = pontuacoes[i]
      countRecorde++
    } else if (pontuacoes[i] < menorPonto) {
      menorPonto = pontuacoes[i]
      piorJogo = i + 1
    }
  }

  return [countRecorde, piorJogo]
}

console.log(desempenhoJogos(pontos))
