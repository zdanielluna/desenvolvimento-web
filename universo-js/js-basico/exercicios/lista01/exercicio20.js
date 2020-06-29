// Lembrete: estudar e melhorar o código.

// R$100,00 | R$50,00 | R$10,00 | R$5,00 | R$1,00
function cedulasRecebidas(valor) {
    let resto = 0
    let count100, count50, count10, count5, count1

    if (valor >= 100) {
        count100 = Math.floor(valor / 100)
        resto = valor % 100
    }
    if (resto >= 50) {
        valor = resto
        count50 = Math.floor(valor / 50)
        resto = valor % 50
    }
    if (resto >= 10) {
        valor = resto
        count10 = Math.floor(valor / 10)
        resto = valor % 10
    }
    if (resto >= 5) {
        valor = resto
        count5 = Math.floor(valor / 5)
        resto = valor % 5
    }
    if (resto >= 1) {
        valor = resto
        count1 = Math.floor(valor / 1)
        resto = valor % 1
    }

    let resposta
    if (count100 > 0) {
        resposta += `\n${count100} Cédulas de R$100,00 `
    }

    if (count50 > 0) {
        resposta += `${count50} Cédulas de R$50,00 `
    }

    if (count10 > 0) {
        resposta += `${count10} Cédulas de R$10,00 `
    }

    if (count5 > 0) {
        resposta += `${count5} Cédulas de R$5,00 `
    }

    if (count1 > 0) {
        resposta += `${count1} Cédulas de R$1,00 `
    }

    return resposta
}

console.log(cedulasRecebidas(243))
