// Raíz
function potencia(base, expoente) {
  let i = 1
  let resultado = 1

  while (i <= expoente) {
    resultado = resultado * base
    i++
  }

  return resultado
}

console.log(potencia(5, 3)) // 125

// Nutella
potencia2 = (base, expoente) => base ** expoente
