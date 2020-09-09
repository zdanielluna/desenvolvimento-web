# Exportar

**Módulos**
Em NodeJS, um arquivo representa um módulo, seu conteúdo está visível apenas para si mesmo, sendo necessário exporta-lo para que outros módulos visualizem seu conteúdo.

**exports**
É uma referência para module.exports:

```JavaScript
console.log(module.exports === exports) // true
```

**module.exports**
É um objeto retornado a partir da função require(), é vazio por padrão.

arquivoA.js:

```JavaScript
this.teach = {
    codinome: 'Barba Negra',
    poder: 'Yami Yami no Mi',
}

exports.edwardNewgate = {
    codinome: 'Barba Branca',
    poder: 'Gura Gura no Mi',
}

module.exports.luffy = {
    codinome: 'Mugiwara',
    poder: 'Gomu Gomu no Mi',
}

// Está visível apenas no módulo atual
const boaHancock = {
    codinome: 'Imperatriz Pirata',
    poder: 'Mero Mero no Mi',
}
```

arquivoB.js
Importa o arquivoA e acessa/utiliza o seu conteúdo visível:

```JavaScript
const arquivoA = require('./arquivoA.js')

console.log(arquivoA.edwardNewgate) // { codinome: 'Barba Branca', poder: 'Gura Gura no Mi' }
console.log(arquivoA.luffy) // { codinome: 'Mugiwara', poder: 'Gomu Gomu no Mi' }
console.log(arquivoA.teach) // { codinome: 'Barba Negra', poder: 'Yami Yami no Mi' }
console.log(arquivoA.boaHancock) // undefined
```

_module.exports e exports fazem parte da CommomJS modules_

**export**
Faz parte da ES modules, é outra forma de exportar arquivos no NodeJS.

Arquivo C:

```JavaScript
const frutas = ['Melão', 'Abacaxi', 'Maçã'];

function imprime(param) {
    console.log(param);
}

export { frutas, imprime };
```

Arquivo D:

```JavaScript
import { imprime, frutas } from './arquivoC.js';

const carro = {
    modelo: 'Celta',
    automatico: false,
};

imprime(carro); // { modelo: 'Celta', automatico: false }
console.log(frutas); // [ 'Melão', 'Abacaxi', 'Maçã' ]
```

## Referências

-   https://medium.com/@fannyvieira/nodejs-module-exports-vs-exports-39e1e88ae07
-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export
