// Operador ... rest(juntar)/spread(espalhar)

// Usar rest como parâmetro de função
function soma(...valores) {
    let total = 0
    for (valor of valores) {
        total += valor
    }
    return total
}
console.log(soma(2, 3, 4, 5))

// Usar spread como objeto
const funcionario = { nome: 'Lana', salario: 12590.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array
const grupoA = ['Lana', 'Lara', 'Daniel']
const grupoFinal = ['Aquiles', 'Rafaela', ...grupoA]
console.log(grupoFinal)
