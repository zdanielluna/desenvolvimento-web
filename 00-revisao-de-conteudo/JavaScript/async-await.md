## Async / Await

Seu objetivo é simplificar o uso de promises de forma síncrona e executar alguns procedimentos em um grupo de promises. Quando uma função assíncrona é chamada, ela retorna uma promise, essa promise será resolvida ou rejeitada de acordo com o valor retornado da função assíncrona.

Requisição assíncrona:

```JavaScript
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let resultado = ''

            response.on('data', (dados) => {
                resultado += dados
            })

            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}
```

Quando a promise getTurma() for resolvida ou rejeitada, o seu valor é atribuído a variável turma, passando a "sensação" de uma operação síncrona:

```JavaScript
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
}
```

O retorno de uma função com a marcação _async_, é um objeto AsyncFunction

```JavaScript
obterAlunos()
    .then((a) => a.map((alunos) => alunos.nome))
    .then((nomes) => console.log(nomes))
```

O retorno de uma async function é equivalente ao resolve() e quando uma função assíncrona lança uma exceção ou algum valor, a promise é rejeitada com o valor lançado:

```JavaScript
function falarDepoisDe(tempo, frase) {
    return new Promise((resolve, reject) => {
        if (frase.length > 40) {
            reject()
        }
        setTimeout(function () {
            resolve(frase)
        }, tempo)
    })
}

let obterFrase = async () => {
    let saudacao
    let xingamento
    let travaLingua

    try {
        saudacao = await falarDepoisDe(3000, 'Olá, bom dia!')
        xingamento = await falarDepoisDe(1000, 'bobinho!')
        travaLingua = await falarDepoisDe(
            1000,
            'Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os sete mafagafinhos'
        )
    } catch (e) {
        throw 'ERRO: uma das promises possui uma frase com mais de 40 caracteres'
    }

    return [saudacao, xingamento]
}

obterFrase()
    .then((frase) => console.log(frase))
    .catch((e) => console.log(e))
    // ERRO: uma das promises possui uma frase com mais de 40 caracteres

```

## Referências:

-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas
