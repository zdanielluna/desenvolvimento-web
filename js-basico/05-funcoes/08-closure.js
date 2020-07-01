/* Closure é o escopo criado quando uma função é declarada, este escopo permite a função acessar e manipular
   as variáveis externas a função. */

   const x = 'Global'

   function out(){
       const x = 'Local'
       function inside() {
          return x 
       }
       return inside
   }

   const myFunction = out()
   console.log(myFunction())