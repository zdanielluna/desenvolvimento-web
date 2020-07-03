/* Utilizadas como se fossem as classes do java, C#, etc...
   A keyword this é responsável por iniciar o objeto adequadamente.
   O operador new instancia a função construtora.
   As propriedades são acessadas através do operador ".".
   Podem ter mais de uma instância.
*/

function Carro(veloLimite, incremento) {
  let veloMax = veloLimite
  let veloAtual = 0
  let aumento = incremento

  this.acelerar = function () {
    if (veloAtual + aumento < veloMax) {
      veloAnterior = veloAtual
      veloAtual += aumento
    } else {
      veloAtual = veloMax
    }
    return veloAtual
  }

  this.verificaLimite = function () {
    return veloAtual < veloMax ? true : false
  }

  this.status = function () {
    return veloAtual >= 200
      ? `Velocidade máxima atingida: ${veloAtual}`
      : `Velocidade: ${veloAtual}\n + ${aumento}`
  }
}

let corsa = new Carro(160, 20)

console.log("Corsa")
while (corsa.verificaLimite()) {
  corsa.acelerar()
  console.log(corsa.status())
}

let evoke = new Carro(220, 45)

console.log("\n Evoke")
console.log(evoke.status())
evoke.acelerar()
