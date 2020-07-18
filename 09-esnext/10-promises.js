function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(
    3,
    `Cada um de nós tem sua própria vida para viver. É uma jornada, não uma separação. `
)
    .then((frase) =>
        frase.concat(
            'É um começo, não um fim. Vai ser um pouco solitária, mas é assim que as coisas são.'
        )
    )
    .then((frase) => {
        console.log(frase)
    })
