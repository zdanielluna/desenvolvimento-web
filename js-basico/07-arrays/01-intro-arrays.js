/* Cresce e diminuem de tamanho dinamicamente. JavaScript não possui uma estrutura própria de Array, portanto
   eles são objetos. */

console.log(typeof Array, typeof new Array(), typeof [])

const jogosSouls = [
    'Sekiro',
    'Bloodborne',
    'Candy Crush',
    'Dark Souls III',
    'Dark Souls II',
    'Dark Souls',
    'Minecraft',
]

console.log(jogosSouls)
console.log(jogosSouls[1])
console.log(jogosSouls[4])
console.log(jogosSouls[0])
console.log(jogosSouls[6])

jogosSouls[2] = 'Demons Souls'
jogosSouls.push('Elder Ring')
console.log(jogosSouls)

jogosSouls[10] = 'Nioh'
console.log(jogosSouls, jogosSouls.length)
console.log(jogosSouls[8] === undefined, jogosSouls[8] === null)

console.log(jogosSouls)
console.log(jogosSouls.sort()) // Altera o array original, ordena na ordem alfabética.
console.log(jogosSouls)

delete jogosSouls[1]
console.log(jogosSouls[1])

const jogosRTS = [
    'Dragons Dogma',
    'Fortnite',
    'Rainbow Six Siege',
    'PUBG',
    'Northgard',
    'Ancerstors Legacy',
    'Age of Empires',
    'Total War: TROY',
]

console.log(jogosRTS)
jogosRTS.splice(1, 1) // Exclui um elemento a partir do índice 1
console.log(jogosRTS)
jogosRTS.splice(0, 3, 'Spell Force 3', 'Bad North') // A partir do índice 0, exclui três elementos e adiciona mais dois novos
jogosRTS.splice(3, 0, 'Gruntz') // A partir do índice 3, exclui zero elementos e adiciona mais um novo
console.log(jogosRTS)
