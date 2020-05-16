/* Not a Number (NaN)
    Ele é retornado quando uma operação matemática falha ou quando uma
    função tenta transformar uma string em um inteiro. */

console.log(0 / 0);
console.log(parseInt("Escanor"))

// isNaN() determina se o valor é NaN ou não
console.log(isNaN(NaN));
console.log(isNaN(15 * -5))

// Operadores de igualdade não podem ser usados para comparar um valor NaN
console.log(NaN === NaN)
