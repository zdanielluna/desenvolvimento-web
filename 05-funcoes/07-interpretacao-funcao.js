/* JavaScript carrega previamente todas as funções, estando prontas para serem chamadas desde a primeira linha */

console.log(chorar())
console.log(sorrir()) // not defined

function chorar() {
    return 'Chorando...'
}

let sorriso = function sorrir(){
    return 'Sorrindo...'
}


