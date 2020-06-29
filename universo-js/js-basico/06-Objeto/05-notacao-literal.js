const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // Esta notação permite a mudança no nome do atributo
const obj2 = { a, b, c } // Assume que o nome da constante será o nome do atributo criado dentro deste objeto.
console.log(obj1, obj2)

const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = { [nomeAtributo]: valorAtributo }
console.log(obj4)

const obj5 = {
    funcao1: function () {}, // Forma tradicional
    funcao2(params) {}, // Forma reduzida
}
