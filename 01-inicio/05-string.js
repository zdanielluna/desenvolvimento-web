// String é uma cadeia de caracteres utilizada para representar textos
const serie = "The Walking Dead"

// Concatenação de strings com operadores de adição e atribuição
let personagem = "Beth Greene"
const musica = "Be Good - " + personagem

console.log(musica)

let frase =
  '"A palavra de um homem, isso ainda tem que significar alguma coisa, certo?"'
let citacao = (frase += "- Rick Grimes")

console.log(citacao)

/* Template Strings
    a) São strings literais, permitem expressões embutidas
    b) Iniciadas e finalizadas com backtick ``
    c) A expressão fica dentro de ${}
    d) Considera as quebras de linha
*/
const apelido = "Rick the prick"
console.log(`Hey, ${apelido.toLocaleUpperCase()} !!!`)

// Alguns Métodos String
const comunidade = "Alexandria"

// Retorna o caractere contido na posição 4 da string
console.log(comunidade.charAt(4))

// Retorna o unicode do caractere na posição 3 da string
console.log(comunidade.charCodeAt(3))

// Retorna o índice do primeiro caractere encontrado na string com a letra 'A'
console.log(comunidade.indexOf("A"))

// Retorna o índice do caractere 'a' encontrado na string, começando da posição 5
console.log(comunidade.indexOf("a", 5))

// Extrai o conteúdo encontrado a partir posição 0 até a 3, sem incluir a posição 3
console.log(comunidade.substring(0, 3))

// Extrai o conteúdo a partir do índice 2 até o final da string
console.log(comunidade.substring(2))

// Concatena duas ou mais strings e retorna uma nova string com a junção realizada
console.log(comunidade.concat(" não vai cair hoje!"))

// Substitui o primeiro caractere 'i' que encontrar na string pelo caractere '1'
console.log(comunidade.replace("i", "1"))

// Gera um array com as strings utilizando "," como separador
console.log("Negan,Governador,Shane,Merle".split(","))
