const character = {
    name: 'Ashen One',
    soulLevel: 130,
    convenant: 'Warrior of Sunlight',
    weapon: 'Sunlight Straight Sword',
    armor: 'Sunlight Set',
}

// Object.keys() -> Retorna todas as chaves do objeto passado no parâmetro
console.log(Object.keys(character))

// Object.values() -> Retorna todos os valores do objeto passado no parâmetro
console.log(Object.values(character))

// Object.entries() -> Retorna um array que contém subarrays com o par chave valor do objeto
console.log(Object.entries(character))

// Object.defineProperty() -> Cria e/ou modifica atributos de forma mais específica e detalhada
Object.defineProperty(character, 'soulLevel', {
    enumerable: false,
    writable: false,
    value: 130,
})

character.soulLevel = 999
console.log(character.soulLevel)
console.log(Object.keys(character))

// Object.assign() -> Copia os valores de todas as propriedades próprias enumeráveis de um ou mais objeto origem para um objeto destino
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

// Object.freeze() -> Congela o objeto passado por parâmetro, tornando-o imutável
Object.freeze(character)
character.name = 'Solarie'
console.log(character.name)

// A função é executada para cada elemento do array retornado por Object.entries()
Object.entries(character).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
