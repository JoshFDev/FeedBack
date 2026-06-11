//Funcion Basica - HOISTING SI FUNCIONA
//Hositing es cuando puedes llamar una funcion antes de declararla, 
// esto es posible por que el motor de JavaScript mueve las declaraciones de funciones al inicio del código.

console.log(saludar('Joshua'));

function saludar(nombre){
    return 'Hola ' + nombre;
}

//Funciones anonimas que no tienen un nombre - NO HOISTING
//Las funciones anonimas se asignan a una variable, 
// por lo que no se pueden llamar antes de ser declaradas,
//  ya que no existe la variable.
let saludarAnonimo = function(nombre){
    return 'Hola ' + nombre;
}

console.log(saludarAnonimo('Sebastian'));


//Funciones flecha () => {} - NO HOISTING
let saludoDos = (nombre) => 'Saludos ' + nombre;
let suma = (x,y) => x + y;

let obj = () => ({nombre: 'Joshua', edad: 30});

console.log(saludoDos('Joshua'));
console.log(suma(5, 10));
console.log(obj());

const pagos = [];
