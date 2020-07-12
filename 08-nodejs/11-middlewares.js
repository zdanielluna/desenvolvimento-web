// middleware pattern (chain of responsability)
const passo1 = (objeto, next) => {
    objeto.valor1 = 'mid1'
    next()
}

const passo2 = (objeto, next) => {
    objeto.valor2 = 'mid2'
    next()
}

const passo3 = (objeto) => (objeto.valor3 = 'mid3')

const exec = (objeto, ...middlewares) => {
    const execPasso = (indice) => {
        middlewares &&
            indice < middlewares.length &&
            middlewares[indice](objeto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const objeto = {}
exec(objeto, passo2, passo1, passo3)
console.log(objeto)
