const quaseArray = { 0: 'Daniel', 1: 'Isabella', 2: 'Bia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    },
    enumerable: false,
})

console.log(quaseArray[0])

const array = ['Karpov', 'Kasparov', 'Fischer', 'Capablanca', 'Magnus']
console.log(quaseArray.toString(), array)
