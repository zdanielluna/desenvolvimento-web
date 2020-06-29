const pessoa = {
    nome: 'Leonardo Fibonacci',
    pais: 'Itália',
    profissao: 'Matemático',
}

// O forEach chama a função abaixo para cada elemento do array retornado pela função entries() de Object.
Object.entries(pessoa).forEach((elemento) => {
    console.log(elemento)
})

const array = ['Java', 'Kotlin', 'SQL', 'Python', 'C', 'JavaScript']

// Chama a função abaixo para cada elemento do array "array".
array.forEach((linguagem) => {
    console.log(linguagem)
})
