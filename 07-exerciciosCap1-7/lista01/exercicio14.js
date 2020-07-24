function sorteiaFrutas() {
  let frutas = [
    'Maçã',
    'Kiwi',
    'Melancia',
    //'Mamão',
    //'Morango',
    //'Abacaxi',
    //'Pinha',
    //'Banana',
  ]

  return frutas[Math.round(Math.random() * frutas.length)]
}

let frutas = sorteiaFrutas()

function respondeCliente(frutas) {
  switch (frutas) {
    case 'Maçã':
      return 'Não vendemos esta fruta aqui'
      break
    case 'Kiwi':
      return 'Estamos com escassez de kiwis'
      break
    case 'Melancia':
      return 'Aqui está, são 3 reais o quilo'
    default:
      return 'Erro?!'
  }
}

console.log(`-${frutas}`)
console.log(respondeCliente(frutas))
