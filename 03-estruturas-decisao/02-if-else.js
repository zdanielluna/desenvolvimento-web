// if, bloco de código é executado se a condição for verdadeira

if (5 < 10) {
  console.log("Cinco é menor que dez!")
}

let idade = 18

if (idade >= 18) {
  console.log("Pode assistir Game of Thrones...")
}

// else, o bloco do else é executado se a condição do if for falsa
if (5 > 10) {
  console.log("Cinco é maior que dez?!")
} else {
  console.log("Cinco não é maior que dez!")
}

let nota = 6

if (nota >= 7) {
  console.log("Você atingiu a média!")
} else {
  console.log("Precisa estudar mais ou irá fazer recuperação.")
}

// else-if, especifica uma nova condição se a primeira condição for falsa
let a = 2
let b = "1"

if (a === b) {
  console.log("a e b são iguais no tipo e valor")
} else if (a == b) {
  console.log("a e b são iguais no valor")
} else {
  console.log("a e b são diferentes")
}
