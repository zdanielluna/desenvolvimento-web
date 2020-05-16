/* Objetos também são variáveis, porém podem conter diversos atributos.
   São compreendidos como uma coleção de pares chave:valor. */

const jogo = {
  nome: "The Witcher 3",
  dataLancamento: "19/05/2015",
  preco: 60.97,
  principaisExpansoes: ["Heart of Stone, Blood and Wine"],
  calculaDesconto: function (desconto) {
    return (jogo.preco - (jogo.preco * desconto) / 100).toFixed(2)
  },
};

// Acessa um atributo específico
console.log("Nome: " + jogo.nome)

// Funções como atributo
console.log("Valor com desconto: $" + jogo.calculaDesconto(10))

// Arrays como atributo
console.log("Principais Expansões: " + jogo.principaisExpansoes)

console.log(jogo)
