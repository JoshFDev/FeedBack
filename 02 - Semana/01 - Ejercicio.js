
document.write("=== EJERCICIO 1 === <br>");
//Crear una funcion que devuelva Bienvenido al sistema de pagos
function bienvenida(frase){
    return frase;
}
document.write(bienvenida("Bienvenido al sistema de pagos <br>"));

document.write(sumar(10, 20));

function sumar(num1, num2){
    return num1 + num2;
}

document.write("<br>=== EJERCICIO 2 ===");
/*
Convertir esto a arrow function
function multiplicar(a, b){
    return a * b;
}
*/

// La funcion arrow function es una forma mas corta de escribir funciones, 
// se pueden escribir en una sola linea si solo tienen una instruccion, 
// y no necesitan la palabra reservada return ni las llaves {}
let multiplicar = (a,b) => a*b; 
document.write("<br>" + multiplicar(5, 10));


document.write("<br>=== EJERCICIO 3 ===");
//Crear una funcion crearPago(id, concepto, monto) y que retorne 
//un objeto con esos datos
/*
{
    id: 1,
    concepto: "Internet",
    monto: 500
}
*/
function crearPago(id,concepto,monto){
    return {
        id: id,
        concepto: concepto,
        monto: monto
    }
}
//Otra forma de escribirlo es:

let crearPago2 = (id,concepto,monto) => ({id, concepto, monto});

document.write("<br>" + JSON.stringify(crearPago(1, "Internet", 500)));
document.write("<br>" + JSON.stringify(crearPago2(2, "Agua", 300)));
