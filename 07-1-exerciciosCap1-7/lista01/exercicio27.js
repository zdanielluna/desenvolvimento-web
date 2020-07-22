function comparaCrescimentoCriancas(
    alturaC1,
    alturaC2,
    crescimentoAnualC1,
    crescimentoAnualC2
) {
    let diferencaAnual
    let diferencaAltura
    let qtdAnos
    let menorCrianca

    diferencaAnual = comparaTaxaCrescimentoAnual(
        crescimentoAnualC1,
        crescimentoAnualC2
    )

    if (alturaC1 > alturaC2) {
        diferencaAltura = alturaC1 - alturaC2
        menorCrianca = alturaC2
    } else {
        diferencaAltura = alturaC2 - alturaC1
        menorCrianca = alturaC1
    }

    qtdAnos = diferencaAltura / diferencaAnual + 1

    return imprimeResultado(
        qtdAnos,
        alturaC1,
        alturaC2,
        crescimentoAnualC1,
        crescimentoAnualC2,
        menorCrianca
    )
}

function comparaTaxaCrescimentoAnual(crescimentoAnualC1, crescimentoAnualC2) {
    if (crescimentoAnualC1 > crescimentoAnualC2)
        diferencaAnual = crescimentoAnualC1 - crescimentoAnualC2
    else if (crescimentoAnualC1 == crescimentoAnualC2)
        return `As crianças manterão a mesma diferença de altura nos próximos anos`
    else diferencaAnual = crescimentoAnualC2 - crescimentoAnualC1

    return diferencaAnual
}

function imprimeResultado(
    qtdAnos,
    alturaC1,
    alturaC2,
    crescimentoAnualC1,
    crescimentoAnualC2,
    menorCrianca
) {
    return `            Criança A
            Altura: ${alturaC1}cm
            Crescimento anual: ${crescimentoAnualC1}cm
                
            Criança B
            Altura: ${alturaC2}cm
            Crescimento anual: ${crescimentoAnualC2}cm
                
            Menor criança: ${menorCrianca}cm
            Tempo para igualar a maior criança: ${qtdAnos - 1}
            Tempo para ultrapassar a maior criança: ${qtdAnos}`
}

console.log(comparaCrescimentoCriancas(122, 130, 7, 5))
