// Toda função tem um atributo chamado .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Daniel'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log(['D', 'A', 'N', 'I', 'E', 'L'].first())

// Não deve alterar/sobreescrever as propriedades padrão
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Daniel'.reverse())
