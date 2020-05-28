let recordeEstatistica = (pontos) => {
  let maiorPonto = 0
  let resultado = []

  pontuacoes = pontos.split(' ')

  for (let i = 0; i < pontuacoes.legth; i ++) {
    if (pontuacoes[i] > maiorPonto) {
        maiorPonto = pontuacoes[i]
    
    }
  }
  
}

console.log(recordeEstatistica('10 20 20 8 25 3 0 30 1'))
