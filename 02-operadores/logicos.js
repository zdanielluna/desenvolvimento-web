// São utilizados para determinar a lógica entre variáveis ou valores

// Só é verdadeiro se todas as expresões lógicas envolvidas forem verdadeiras
console.log('and &&')

console.log(10 > 8 && 2 < 3 && 2 * 5 > 4)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Basta apenas uma expressão envolvida ser verdade para que o resultado seja verdadeiro
console.log('or ||')

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Inverte o valor lógico
console.log('not !')

console.log(!true)
console.log(!false)
