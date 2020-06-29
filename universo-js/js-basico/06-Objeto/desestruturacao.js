/* Destructuring -> Utilizado para extrair dados de arrays ou objetos em variáveis diferentes. Novo recurso do ES2015 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'RUA ABC',
        numero: 1000,
    },
}

// Retira os atributos "nome" e "idade" do objeto "pessoa"
const { nome, idade } = pessoa
console.log(nome, idade)

// Cria as variáveis "n" e "i" e atribui a elas o valor do atributo nome e idade, respectivamente
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Se o atributo "peso" não existir, é atribuído true pro padrão.
const { teste, peso = true } = pessoa
console.log(teste, peso)

// Não cria uma variável para "endereco", apenas para os dados solicitados que estão dentro dele.
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
