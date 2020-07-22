let vetorInteiro = [10, 2, 5, 1, 20, 7]

function multiplicaElementos(vetorInteiro, numero) {
    let resultado = 1
    let resultados = []

    for (let valor of vetorInteiro) {
        resultado = valor * numero
        resultados.push(resultado)
    }

    return resultados
}

function multiplicaElementosMaioresQue5(vetorInteiro, numero) {
    let resultado = 1
    let resultados = []

    for (let i = 0; i < vetorInteiro.length; i++) {
        if (vetorInteiro[i] > 5) {
            resultado = vetorInteiro[i] * numero
            resultados.push(resultado)
        }
    }
    return resultados
}

console.log(multiplicaElementos(vetorInteiro, 3))
console.log(multiplicaElementosMaioresQue5(vetorInteiro, 2))
