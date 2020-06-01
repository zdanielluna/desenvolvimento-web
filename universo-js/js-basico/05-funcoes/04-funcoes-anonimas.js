/* Não possuem nome, são atribuídas a constantes, variáveis, atributos de objeto, outras funções, etc... 
   Arrow Function são anônimas.
*/

const poderBase = 3000000
let ativaKaioken = (poderBase, aumentoPoder) => poderBase * aumentoPoder

const sayajin1 = 150000000
let aumentaPoder = (sayajin1, ativaKaioken) => sayajin1 + ativaKaioken

console.log(
  `Poder atual(ssj1 com Kaioken 10x): ${aumentaPoder(
    sayajin1,
    ativaKaioken(poderBase, 10)
  )}`
)
