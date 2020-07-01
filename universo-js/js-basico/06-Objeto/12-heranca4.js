function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Geralt'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Muda a referência do __proto__ de Object para o prototype da função MeuObjeto
obj3.nome = 'Obj3'
obj3.falar()

console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

/* Resumo
    1. Os objetos criados a partir de uma função construtora, possuem o seu atributo __proto__ apontando para o prototype da 
       função.
    2. A função construtora possui o seu atributo __proto__ apontando para prototype de Function.
    3. O atributo __proto__ de Function, aponta para o prototype de Object,
    4. O atributo __proto__ de Object.prototype, existe, porém é nulo, pois não existe nenhum objeto superior na hierarquia.
*/
