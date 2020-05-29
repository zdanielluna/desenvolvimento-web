let anoBissexto = (ano) => (ano % 4 == 0 || ano % 400 == 0 ? true : false)

console.log(anoBissexto(1004)) // True
console.log(anoBissexto(1012)) // True
console.log(anoBissexto(2025)) // False
console.log(anoBissexto(1973)) // False
console.log(anoBissexto(800)) // True
