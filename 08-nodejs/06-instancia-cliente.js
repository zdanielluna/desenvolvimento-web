// contadorA e B apontam para a mesma instância
const contadorA = require('./06-instancia-unica')
const contadorB = require('./06-instancia-unica')

// contadorC e D apontam para instâncias diferentes
const contadorC = require('./06-instancia-nova')()
const contadorD = require('./06-instancia-nova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // O resultado do contadorB é alterado, pois ele e o contadorA apontam para mesma instância

contadorC.inc()
contadorC.inc()
/* O resultado do contadorD não é alterado após o incremento de C, pois o módulo que eles apontam retornam uma função
   factory que retorna uma nova instância toda vez que é chamada. */
console.log(contadorC.valor, contadorD.valor)
