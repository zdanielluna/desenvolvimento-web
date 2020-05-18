/* A estrutura do for é composta por três campos não obrigatórios:

    1º Normalmente utilizado para iniciar a varável a ser usada no loop.

    2º Condição de parada da repetição, uma expressão que se retornar falsa o loop
       é interrompido.

    3º Onde geralmente ocorre o incremento inicial da varável a ser utilizada. */

    for (let i = 0; i < 10; i++) {
      console.log("Volta nº " + i)
    }
    
    console.log("\nTabuada de 7")
    for (let i = 0; i <= 10; i++) {
      let resultado = 7 * i
      console.log(`7 x ${i} = ${resultado}`)
    }
    
    const frameworks = [
      "ReactJs, ExpressJs, AdonisJs, Hibernate, SpringMVC, Rails, Django",
    ]
    
    for (let i = 0; i < frameworks.length; i++) {
      console.log("\n" + frameworks[i])
    }
    