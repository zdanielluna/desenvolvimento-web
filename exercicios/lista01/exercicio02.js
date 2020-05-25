retornaTipoTriangulo = (a, b, c) => {
  if (a == b && b == c) return 'Equilátero'
  else if (a == b || b == c || c == a) return 'Isóceles'

  return 'Escaleno'
}

console.log(retornaTipoTriangulo(5, 2, 1)) // Escanleno
