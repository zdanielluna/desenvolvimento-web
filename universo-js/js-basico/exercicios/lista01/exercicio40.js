let notas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayConceitos = []

function adicionaConceitoNota(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 0 && notas[i] < 5) arrayConceitos.push('D')
        else if (notas[i] >= 5 && notas[i] <= 6.9) arrayConceitos.push('C')
        else if (notas[i] >= 7 && notas[i] <= 8.9) arrayConceitos.push('B')
        else if (notas[i] >= 9 && notas[i] <= 10) arrayConceitos.push('A')
    }

    return arrayConceitos
}

let conceitos = adicionaConceitoNota(notas)

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]} - Conceito: ${conceitos[i]}`)
}
