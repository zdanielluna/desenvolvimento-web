function esperaTempo(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Executando a promise...')
            resolve('O then tem acesso a esta string')
        }, tempo)
    })
}

esperaTempo(1000).then((resultado) => console.log(resultado))
