var miVariable = "texto";
console.log(miVariable);
let miVariableLet = "otroTexto";
console.log(miVariableLet);

function varTest(){
    var a = 100;
    if(true) {
        var a = 99;
        console.log(a);
    }
    console.log(a);
}

function letTest(){
    let a = 100;
    if(true) {
        let a = 99;
        console.log(a);
    }
    console.log(a);
}

varTest();
letTest();

var unaVariableRepetidaVar = "es var";
var unaVariableRepetidaVar = "es otra var";
console.log(unaVariableRepetidaVar);

let unaVariableRepetida = 10;
//No puedo crear dos variables let porque el motor me devuelve un error
//let unaVariableRepetida = 100;

function hacerAlgo(){
    console.log(variableUno);
    console.log(variableDos);
    var variableUno;
    //let variableDos;
}

hacerAlgo();