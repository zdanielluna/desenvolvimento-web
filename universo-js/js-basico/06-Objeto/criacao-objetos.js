// Usando a notação literal
const funcionario = {
    nome: 'Firekeeper',
    sexo: 'Mulher',
    idade: 28,
    funcao: 'Guardar as chamas',
}

console.log(funcionario)

// Object
const projeto = new Object()
console.log(projeto)
console.log(typeof Object, typeof new Object())

// Funções construtoras
function Produto(id, nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        // Método público para acessar um atributo visível apenas na função(privado)
        return preco * (1 - desc)
    }
}

const p1 = new Produto(20, 'PS4', 2499.9, 0.15)
const p2 = new Produto(1, 'Dark Souls 3', 39.9, 0.1)
console.log(p2.getPrecoComDesconto())
console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return salarioBase - faltas * (salarioBase / 30)
        },
    }
}

const f1 = criarFuncionario('Daniel', 3000, 2)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Lara'
console.log(filha)

// Função que retorna um objeto a partir de um JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
