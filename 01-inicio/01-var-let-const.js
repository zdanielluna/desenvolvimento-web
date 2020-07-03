/* ESCOPO
      Escopo Global:
        Quando a variável é declarada fora da função ou bloco, todos os scripts e
        funções podem acessá-la.
    
      Escopo de Bloco:
        Quando a variável é declarada dentro de um bloco e fica visível
        apenas neste bloco.
      
      Escopo de Função:
        Quando a variável é declarada dentro de uma função e fica visível
        apenas neste escopo.
 */

// 1- Escopo Global (var, let e const)
var filme = "A Voz do Silêncio"
let filme1 = "O Rapaz e a Besta"
const filme2 = "Your Name"

{
  console.log(filme)
  console.log(filme1)
  console.log(filme2)
}

// 2- Escopo de Bloco
{
  const serie = "Peaky Blinders"
  let serie1 = "Black Mirror"
  var serie2 = "You"
}

// console.log(serie)
// console.log(serie1)
console.log(serie2)

// 3- Escopo de Função
function testaEscopoFuncao() {
  const game = "Zelda Breath of the Wild"
  var game1 = "Gang Beasts"
  let game2 = "Crash Bandicoot"
}

// console.log(game)
// console.log(game1)
// console.log(game2)

/* var
      Pode ser redeclarada.
      Pode ter seu valor reatribuído. */
/* let
      Não pode ser redeclarada.
      Pode ter seu valor reatribuído. */

/* const
      Não pode ser redeclarada.
      Não pode ter seu valor reatribuído.
      É obrigatório a atribuição do valor quando ela for declarada. */
