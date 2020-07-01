/* Um objeto em JavaScript, tem uma referência para o seu protótipo. Essa é forma como JavaScript trabalha com heranças. 
   A hierarquia é realizada através de uma "cadeia" de protótipos. Um objeto filho pode utilizar os atributos do seu objeto 
   pai(protótipo). */

const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)

/* Um objeto literal não possui o atributo prototype, apenas tem a propriedade __proto__ 
   O atributo prototype pertence a uma função, no caso, a função Object.
*/
console.log(ferrari.prototype)
console.log(MeuObjeto.prototype)
