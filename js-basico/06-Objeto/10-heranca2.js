/* Prototype Chain -> Quando um atributo do mais baixo da hierarquia é solicitado, a busca inicia. Verifica se o objeto atual
                      possui o atributo solicitado, se não tiver, a busca é passada para o protótipo superior da hierarquia, até
                      o atributo ser encontrado, se não for encontrado é retornado undefined. */

Object.prototype.att0 = 'Z' // Não é recomendado
const avo = { attr1: 'A', attr3: 'O' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'P' }
const filho = { __proto__: pai }

console.log(avo.__proto__)
console.log(filho.att0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)
console.log(pai.attr1)

/* Atributos iguais nos objetos da hierarquia mais baixa e mais alta, ocasicionam o "sombreamento" que é exemplificado nas linhas
   14, 35, 41. O primeiro atributo retornado é a primeira propriedade a ser encontrada, "mascarando" os atributos da hierarquia 
   superior. */

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) this.velAtual += delta
        else this.velAtual = this.velMax
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    },
}

const ferrari = {
    modelo: 'F40',
    velMax: 334, // Sombreamento/Shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo} : ${super.status()}` // Super é utilizado para referenciar o protótipo deste objeto.
    },
}

// Estabelece uma relação de protótipo entre dois objetos. Carro é protótipo de ferrari.
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(120)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
