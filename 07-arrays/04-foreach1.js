/* Recebe uma callback que é chamada a cada elemento percorrido no array. O primeiro parâmetro é o valor, o segundo
   é o índice e o terceiro o próprio array. */

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}- ${nome}`)
})

aprovados.forEach((nome) => console.log(nome))

const exibirAprovados = (aprovados) => console.log(aprovados)
aprovados.forEach(exibirAprovados)
