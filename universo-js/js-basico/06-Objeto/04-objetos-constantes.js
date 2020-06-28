// pessoa aponta para um endereço de memória, neste endereço está contido o objeto.
const pessoa = { nome: 'Solarie' }
pessoa.nome = 'Ashen One' // O objeteto nesse endereço de memória pode ser alterado, o que não pode é a constante pessoa.

/* pessoa recebe um novo objeto?! Por ser uma constante, ela não pode apontar para outro endereço além do que foi apontado 
   primeiramente. */
// pessoa = { nome: 'Ana' }

// Congela o objeto pessoa, não é mais possível altera-lo (o objeto passa a ser uma constante).
Object.freeze(pessoa)

pessoa.nome = 'Siris'
console.log(pessoa.nome)

const objetoConstante = Object.freeze({ nome: 'Abyss Watcher' })
objetoConstante.nome = 'Nameless King'
console.log(objetoConstante.nome)
