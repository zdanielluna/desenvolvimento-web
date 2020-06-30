function progressaoAritmetica(n, a1, r) {
    let soma = 0
    let termos = []

    termos.push(a1)

    for (let i = 0; i < n - 1; i++) {
        termos.push((a1 += r))
        soma += termos[i]
    }

    soma += termos[termos.length - 1]
    termos.push(`Somátorio: ${soma}`)

    return termos
}

console.log(progressaoAritmetica(10, 1, 2))
