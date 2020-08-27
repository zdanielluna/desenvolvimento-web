# Closure
É o escopo criado quando uma função é declarada, ou o escopo que envolve a declaração da função. Ele permite acessar e manipular as variáveis externas a função, está totalmente ligado com o contexto léxico.

O escopo onde a função dentro() foi criada é a função mais externa a ela, por isso o valor de x que ela acessa e retorna é "Local":
```JavaScript
const x = 'Global'

function dentro() {
    const x = 'Local'
    function fora() {
        return x
    }
    return fora
}

const minhaFuncao = dentro()
console.log(minhaFuncao()) // Local
```

## Referências
-https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures
