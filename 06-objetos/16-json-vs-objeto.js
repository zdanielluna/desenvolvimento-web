const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    },
}

// Converte um objeto para um JSON. Formato textual de dados, não executa funções.
console.log(JSON.stringify(obj))
// Converte um JSON em objeto.
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 10, "b": 20, "c": "Trinta", "d": {}, "e": [] }'))
