function calculaValorLanche(codigo, quantidade) {
  let valorLanche
  switch (codigo) {
    case 100:
      valorLanche = `R$${quantidade * 3.0}`
      break
    case 200:
      valorLanche = `R$${quantidade * 4.0}`
      break
    case 300:
      valorLanche = `R$${quantidade * 5.5}`
      break
    case 400:
      valorLanche = `R$${quantidade * 5.5}`
      break
    case 500:
      valorLanche = `R$${quantidade * 3.5}`
      break
    case 600:
      valorLanche = `R${quantidade * 2.8}`
      break
    default:
      return 'Produto não existe!'
  }
  
  return valorLanche
}

console.log(calculaValorLanche(400, 3))
