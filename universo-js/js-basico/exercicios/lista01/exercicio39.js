function trocaVetores(vetorA, vetorB) {
    for (let i = 0; i < vetorB.length; i++) {
        vetorA.push(vetorB[i])
    }
    for (let j = 0; j < vetorA.length / 2; j++) {
        vetorB[j] = vetorA[j]
    }
    for (let k = 0; k < vetorA.length; k++) {
        vetorA.shift()
    }

    console.log(vetorA)
    console.log(vetorB)
}

trocaVetores([2, 4, 6, 8], [1, 3, 5, 7])
