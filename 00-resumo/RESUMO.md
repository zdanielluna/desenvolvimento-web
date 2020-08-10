# JavaScript

## Variáveis

### Escopo

**Escobo Global:** Variáveis declaradas fora de uma função ou bloco.

**Escopo de Bloco:** Variáveis declaradas dentro de um bloco de código.

**Escopo de Função:** Variáveis declaradas dentro de uma função.

### var

Quando declarada no escopo global, fica visível para todo o script:

```javascript
var nome = 'Daniel'

function imprimeMensagem() {
    console.log(nome + ' acessado por um código dentro de uma função')
}

console.log(nome)
{
    console.log(nome + ' acessado por um código dentro de um bloco de códigos')
}
imprimeMensagem()

/* Saída:
    Daniel 
    Daniel acessado por um código dentro de um bloco de códigos
    Daniel acessado por um código dentro de uma função
*/
```

Não respeita o escopo de bloco, dentro dele, ela também fica acessível de qualquer lugar do script

```javascript
{
    var nome = 'Daniel'
}

function acessaNome() {
    console.log(nome)
}

console.log(nome)
acessaNome()
```

Quando declarada dentro de uma função, está visível apenas dentro dela:

```javascript
function meuNome() {
    var nome = 'Daniel'
}

console.log(nome) // ReferenceError: nome is not defined
```


