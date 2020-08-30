## Evitando Modificações

Alguns métodos de Object para ajudar a evitar modificações.

**Object.preventExtensions()**
Impede que novas propriedades sejam adicionadas a um objeto. Impede futuras extensões, mas as propiedades ainda podem ser alteradas ou deletadas.

Dado o objeto:

```JavaScript
const kiara = {
    nome: 'Kiara',
    especie: 'gato',
    idade: 1,
    corPelos: 'branco',
}

console.log(kiara) // { nome: 'Kiara', especie: 'gato', idade: 1, corPelos: 'branco' }
```

Impede a criação de uma nova propriedade, mas não a modificação ou remoção de alguma já existente:

```JavaScript
Object.preventExtensions(kiara)

kiara.genero = 'felino'
kiara.nome = 'Kiara Luna'
delete kiara.corPelos

console.log(kiara) // { nome: 'Kiara Luna', especie: 'gato', idade: 1 }
```

**Object.seal()**
Sela o objeto, evitando que novas propriedades sejam adicionadas ou removidas

```JavaScript
Object.seal(kiara)

kiara.personalidade = 'Arisca'
delete kiara.idade
kiara.idade = 2

console.log(kiara) // { nome: 'Kiara Luna', especie: 'gato', idade: 2 }
```

**Object.freeze()**
Congela o objeto e retorna o objeto congelado.

-   Impede que novas propriedades sejam adicionadas a ele
-   Impede que propriedades existentes sejam removidas
-   Impede que qualquer configuração seja alterada

Exemplo:

```JavaScript
Object.freeze(kiara)

kiara.corOrelhas = 'rosa'
delete kiara.nome

console.log(kiara) // { nome: 'Kiara Luna', especie: 'gato', idade: 2 }
```

Mais uma tentativa de modificar o objeto:

```JavaScript
Object.defineProperty(kiara, 'especie', {
    value: 'aracnideo',
    enumerable: true,
    writable: false,
})

// TypeError: Cannot redifine property: especie
```

## Referências

-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
