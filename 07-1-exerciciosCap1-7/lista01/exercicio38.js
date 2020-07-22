let inicio = 0
let fim = 100

function imprimeImpares(inicio, fim) {
    if (inicio > fim) {
        console.log('Não existem números ímpares neste intervalo')
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

imprimeImpares(11, 31)
