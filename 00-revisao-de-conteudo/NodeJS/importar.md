# Importar

**import**
O import é do ES modules, uma maneira de importar arquivos em uma aplicação. É mais flexível e poderoso que o require, pode importar apenas algumas partes do que foi exportado e é possível utiliza-lo com o module.exports.

ArquivoA:

```JavaScript
const teach = {
    codinome: 'Barba Negra',
    poder: 'Yami Yami no Mi',
};

const edwardNewgate = {
    codinome: 'Barba Branca',
    poder: 'Gura Gura no Mi',
};

const luffy = {
    codinome: 'Mugiwara',
    poder: 'Gomu Gomu no Mi',
};

const boaHancock = {
    codinome: 'Imperatriz Pirata',
    poder: 'Mero Mero no Mi',
};

const personagens = [teach, luffy, edwardNewgate, boaHancock];

export default personagens;
```

ArquivoB:

```JavaScript
import personagens from './arquivoA.js';

console.log(personagens[0]); // { codinome: 'Barba Negra', poder: 'Yami Yami no Mi' }
console.log(personagens[3]); // { codinome: 'Imperatriz Pirata', poder: 'Mero Mero no Mi' }
console.log(personagens);
/*
  { codinome: 'Barba Negra', poder: 'Yami Yami no Mi' },
  { codinome: 'Mugiwara', poder: 'Gomu Gomu no Mi' },
  { codinome: 'Barba Branca', poder: 'Gura Gura no Mi' },
  { codinome: 'Imperatriz Pirata', poder: 'Mero Mero no Mi' }
*/

```

**require**
Só existe em CommomJS, é como o NodeJS faz para importar seus arquivos dentro de uma aplicação.

ArquivoB:

```JavaScript
const arquivoA = require('./arquivoA.js');

console.log(arquivoA.personagens[0]); // { codinome: 'Barba Negra', poder: 'Yami Yami no Mi' }
console.log(arquivoA.personagens[3]); // { codinome: 'Imperatriz Pirata', poder: 'Mero Mero no Mi' }
console.log(arquivoA.personagens);
/*
  { codinome: 'Barba Negra', poder: 'Yami Yami no Mi' },
  { codinome: 'Mugiwara', poder: 'Gomu Gomu no Mi' },
  { codinome: 'Barba Branca', poder: 'Gura Gura no Mi' },
  { codinome: 'Imperatriz Pirata', poder: 'Mero Mero no Mi' }
*/
```

## Referências:

-   https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules
