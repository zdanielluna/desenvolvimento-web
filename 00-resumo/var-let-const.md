
# Var, Let e Const

### Escopo

* **Escobo Global:** Variáveis declaradas fora de uma função ou bloco.
* **Escopo de Bloco:** Variáveis declaradas dentro de um bloco de código.
* **Escopo de Função:** Variáveis declaradas dentro de uma função.

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

Estranhamente, a var pode ser redeclarada:

```javascript
var cor = 'preto'
var cor = 'amarelo'

console.log(cor) // amarelo
```

### let e const

A diferença entre elas, é que a const não pode ser redeclarada ou receber um novo valor, pois a const é uma constante 😄

Declaradas no escopo global, funcionam igual a var:

```javascript
const nome = 'Lana'
let idade = 23

function imprimeDados() {
    console.log(nome, idade)
}

console.log(nome) // Lana
console.log(idade) // 23
imprimeDados() // Lana 23
```

Declaradas no escopo de bloco, estão visíveis apenas nele:

```javascript
{
    const nome = 'Lana'
    let idade = 23
}

/* Será impresso um erro de referência, avisando que a variável não foi definida, pois ambas não estão visíveis fora do bloco onde foram declaradas. */
console.log(nome)
console.log(idade)
```

Quando são declaradas dentro de uma função, seu escopo é respeitado, estando visíveis apenas dentro dele:

```javascript
function meusDados() {
    const nome = 'Lana'
    let idade = 23
}

// O resultado será o mesmo erro do exemplo anterior
console.log(nome)
console.log(idade)
```

Tentando atribuir um novo valor a uma constante:

```javascript
const nome = 'Lara'
nome = 'Lara'

// TypeError: Assignment to constant variable
console.log(nome)
```

Tentando redeclarar uma constante:

```javascript
const nome = 'Lana'
const nome = 'Hana'
// SyntaxError: identifier 'nome' has already been declared
```

Atribuindo um novo valor a let:

```javascript
let  personagem = 'Zoro'
personagem = 'Rorona Zoro'
```

Também não é possível redeclarar uma let:

```javascript
let filme = 'A Voz do Silêncio'
let filme = 'Your Name'
// Identifier 'filme' has already been declared
```

### Resumindo

**var**

* Quando declarada fora de um bloco ou função, pode ser acessada de qualquer lugar. (Escopo global)
* Não respeita o escopo de bloco, quando declarada dentro de um, pode ser acessada de qualquer lugar do script.
* Respeita o escopo de função, quando declarada dentro de uma, a variável fica visível apenas dentro da função.
* Pode ser redeclaradas.

**let e const**

* Respeitam o escopo de bloco.
* Respeitam o escopo de função.
* Quando declaradas fora de um bloco ou função, assumem o escopo global e estão visíveis para qualquer lugar do script.
* Não podem ser redeclaradas.
* Let pode receber um novo valor, const não.

### Referências:

* [W3Schools - let](https://www.w3schools.com/js/js_let.asp)

