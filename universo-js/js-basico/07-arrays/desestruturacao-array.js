/* Destructuring -> Utilizado para extrair dados de arrays ou objetos em variáveis diferentes. Novo recurso do ES2015 */

const [a] = [10]
console.log(a)

const [n1, n2, n3, , n5, n6] = [3, 6, 9, 12, 15, 18]
console.log(n1, n2, n3, n5, n6)

const [[aluno, aluno2], [nota, nota2]] = [['Daniel', 'Jao'], [8, 9]]
console.log(aluno, nota, aluno2, nota2)
