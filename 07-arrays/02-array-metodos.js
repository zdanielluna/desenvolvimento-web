const lutadoresMMA = [
    'Gennady Golovisky',
    'Royce Gracie',
    'Wanderlei Silva',
    'Daniel Cormier',
    'Conor McGrecor',
    'Rocky Marciano',
    'Jon Jones',
    'Canelo Álvarez',
]

// Remove o último elemento do array
lutadoresMMA.pop()
console.log(lutadoresMMA)

// Remove o primeiro elemento do array
lutadoresMMA.shift()
console.log(lutadoresMMA)

// Adiciona um elemento na primeira posição do array
lutadoresMMA.unshift('Ryan Gracie')
console.log(lutadoresMMA)

// A partir da posição 2, remove zero elementos e adiciona mais um novo
lutadoresMMA.splice(2, 0, 'Kira Gracie')
console.log(lutadoresMMA)

// A partir da posição 6, remove um elemento
lutadoresMMA.splice(6, 1)
console.log(lutadoresMMA)

// Gera um novo array com 4 elementos de outro array, partindo da posição 0
const lutadoresBR = lutadoresMMA.slice(0, 4)
console.log(lutadoresBR)