/*
 (parametro1,parametro2,...,parametroN) => 
 { 
     sentenciaUno; 
     sentenciaDos; 
     return "resultado";
 }

 (parametro1,parametro2,...,parametroN) => expresion;

 parametroUnico => expresion;
*/

let otraFuncion = function() { return "Hola" };
console.log(otraFuncion());

let miSaludo = nombre => "Hola " + nombre;
let resultado = miSaludo("Andres");
console.log(resultado);