/*
Crea un objeto llamado producto con:
id
nombre
precio
Luego imprime el nombre.
 */

const producto = {
    id: 23,
    nombre: "Escoba",
    precio: 40
}

console.log(producto.nombre);


const alumno = {
    nombre: "Luis",
    promedio: 8
}
alumno.promedio = 10;
console.log(alumno.promedio);

alumno.activo = true;

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

for(let obj in auto){
    console.log(auto[obj]);
}
