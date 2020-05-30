let calculadora = (num1, operador, num2) => {
  switch (operador) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    case '%':
      return num1 % num2
    default:
      return 'Operação inválida'
  }
}

console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '%', 3))
console.log(calculadora(2, '+', 3))
