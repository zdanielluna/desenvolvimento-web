// O this pode variar de acordo com quem chamou a função.

const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao) 
  }
}

// Se refere ao objeto pessoa
pessoa.falar()

// Não aponta mais para pessoa
const falar = pessoa.falar
falar() 

/* Função Bind()
    Altera o contexto do this. Retorna uma nova função onde o this vai se
    referir sempre ao objeto informado no parâmetro da função bind().
*/

const falar2 = pessoa.falar.bind(pessoa)
falar2()

