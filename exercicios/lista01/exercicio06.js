let jurosSimples = (c, i, t) => {
  let juros = c * (i / 100) * t

  return `Juros Simples: ${juros} \nMontante: ${juros + c}`
}

console.log(jurosSimples(1000, 3, 6))

let jurosComposto = (c, i, t) => `\nMontante: ${c * (1 + i / 100) ** t}`

console.log(jurosComposto(300, 2, 3))
