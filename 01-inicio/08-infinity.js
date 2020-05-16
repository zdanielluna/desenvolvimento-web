/* Infinity é um valor númerico que representa infinito positivo e -infinity 
   infinito negativo.
 */

// isFinite() verifica se o número passado no parâmetro é finito
console.log(isFinite(1700 / 0.00000000001))
console.log(isFinite(1700 / 0))

console.log(isFinite(Infinity))
console.log(isFinite(-Infinity))

console.log(isFinite(NaN))
console.log(isFinite(0))
