function progressaoAritmetica(n, a1, r) {
    let somatorio = 0
    let termos = []

    for (let i = 0; i < n; i++) {
        termos.push(a1 + r * i)
        somatorio += termos[i]
    }
    termos.push(`Somátorio: ${somatorio}`)

    return termos
}

console.log('PA\n' + progressaoAritmetica(10, 1, 2))

function progressaoGeometrica(n, a1, r) {
    let termos = []
    let somatorio = 0

    for (let i = 0; i < n; i++) {
        termos.push(a1 * r ** i)
        somatorio += termos[i]
    }
    termos.push(`Somatório: ${somatorio}`)

    return termos
}

console.log('\nPG\n' + progressaoGeometrica(7, 2, 2))
