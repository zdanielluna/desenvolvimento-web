function geraNumerosEntre(max, min) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve) => {
        let aleatorio = Math.random() * (max - min) + min
        aleatorio = Math.round(aleatorio)
        resolve(aleatorio)
    })
}

geraNumerosEntre(5, 10)
    .then((resultado) => resultado)
    .then((resultado) => console.log(resultado, resultado * 10))
