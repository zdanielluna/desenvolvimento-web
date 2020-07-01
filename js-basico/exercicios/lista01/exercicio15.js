function sorteiaCarro() {
  let carro = ['Sedans', 'Hatch', 'Caminhonete', 'Motocicletas']

  return carro[Math.round(Math.random() * carro.length)]
}

let carro = sorteiaCarro()

function respondeCliente(carro) {
  switch (carro) {
    case 'Hatch':
      return 'Compra efetuada com sucesso!'
      break
    case 'Sedans':
    case 'Caminhonete':
    case 'Motocicletas':
      return 'Tem certeza que não prefere este modelo(Hatch) ?'
      break
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui'
  }
}

console.log(`-${carro}`)
console.log(respondeCliente(carro))
