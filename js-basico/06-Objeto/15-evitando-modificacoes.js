// Object.preventExtensions -> Impede de adicionar novos atributos no objeto.
const produto = {
    nome: 'Luffy Action Figure',
    preco: 450.0,
    tag: 'Promoção',
}
Object.preventExtensions(produto)
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Nami Action Figure'
produto.descricao = '13cm altura material pvc'
delete produto.tag
console.log(produto)

// Object.seal -> Não permite adicionar e nem excluir atributos, porém, permite modificar.
const personagem = {
    nome: 'Zoro',
    afiliacao: 'Piratas do Chapeu de Palha',
}
Object.seal(personagem)
console.log('Selado: ', Object.isSealed(personagem))

personagem.nome = 'Rorona Zoro'
personagem.estilo = 'Espadachim'
delete personagem.afiliacao
console.log(personagem)

// Object.freeze -> Objeto selado com valores constantes
