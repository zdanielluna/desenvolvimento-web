function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

/* Operador new cria um objeto a partir de uma função construtora, e faz com que o proto do objeto aponte para 
   o prototype da função. */
const aula1 = new Aula('Bem vindo!', '123')
const aula2 = new Aula('Até a próxima!', '456')
console.log(aula1, aula2)

// Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)