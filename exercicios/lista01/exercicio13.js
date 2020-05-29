let exibeTabelaDias = () =>
  console.log(
    '1- Domingo\n2- Segunda\n3- Terça\n4- Quarta\n5- Quinta\n6- Sexta\n7- Sábado\n'
  )

let geraDiaAleatorio = (_) => Math.round(Math.random() * 15)

let classificaDia = (dia) => {
  switch (dia) {
    case 7:
    case 1:
      return `Fim de semana(${dia})`
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return `Dia útil (${dia})`
      break
    default:
      return `Dia inválido (${dia})`
  }
}

exibeTabelaDias()
console.log(classificaDia(geraDiaAleatorio()))
