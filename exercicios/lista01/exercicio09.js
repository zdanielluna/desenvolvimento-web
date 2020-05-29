const sistemaNotas = (nota) => {
  let multiplo5 = 0

  if (nota < 38) {
    return `Reprovado com nota ${nota}`
  }
  for (let i = 0; i < 20; i++) {
    multiplo5 += 5
    if (multiplo5 > nota) {
      if (-(nota - multiplo5) < 3) {
        nota = multiplo5
        return `Aprovado com nota ${nota}!`
      }
    }
  }
}

console.log(sistemaNotas(17))
console.log(sistemaNotas(33))
console.log(sistemaNotas(38))
console.log(sistemaNotas(44))
console.log(sistemaNotas(84))
