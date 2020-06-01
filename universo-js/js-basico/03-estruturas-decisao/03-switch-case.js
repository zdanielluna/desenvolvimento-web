/* Switch Case
    Os cases dependem do valor da variável para serem executados, se nenhum case
    for executado, a instrução contida no default é executada.
    
    O uso do break é para impedir que o próximo case seja executado de forma 
    indesejada. Por padrão no js, quando um case termina sua execução, é iniciada
    a execução do próximo case. */

let nota = 9

switch (idade) {
  case 9:
  case 10:
    console.log("Nota excelente!")
    break
  case 7:
  case 8:
    console.log("Nota boa")
    break
  case 5:
  case 6:
    console.log("Nota não fede nem cheira")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Nota horrível")
  default:
    console.log("Nota inválida!")
}
