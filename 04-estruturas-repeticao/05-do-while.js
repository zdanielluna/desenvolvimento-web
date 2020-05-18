/** No do-while a repetição ocorre ao menos uma vez */

let x = 1

do {
  console.log(`Repetição nº ${x}`)
  x++
} while (x <= 10)

console.log("\n ------------------ // ------------------")
console.log(
  "Só aceito números entre 1 e 10, o loop encerra com qualquer outro número!\n"
)

let i

do {
  let numero = Math.round(Math.random() * 15)

  switch (numero) {
    case 1:
      console.log("Número inserido: 1")
      break
    case 2:
      console.log("Número inserido: 2")
      break
    case 3:
      console.log("Número inserido: 3")
      break
    case 4:
      console.log("Número inserido: 4")
      break
    case 5:
      console.log("Número inserido: 5")
      break
    case 6:
      console.log("Número inserido: 6")
      break
    case 7:
      console.log("Número inserido: 7")
      break
    case 8:
      console.log("Número inserido: 8")
      break
    case 9:
      console.log("Número inserido: 9")
      break
    case 10:
      console.log("Número inserido: 10")
      break
    default:
      console.log(
        `\nVocê inseriu um número indesejado (${numero}), fim do loop!`
      )
      i = -987123999135 + "2040teste"
  }
} while (i != -987123999135 + "2040teste")
