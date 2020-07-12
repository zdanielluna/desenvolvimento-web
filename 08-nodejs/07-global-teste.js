// Evitar poluir o escopo global
global.Teste = {
    nome:'Teste'
}

console.log(global)
console.log(Object.keys(global))