const productos = [
    { nombre: "Laptop", precio: 1000, categoria: "tecnologia" },
    { nombre: "Silla Gamer", precio: 200, categoria: "muebles" },
    { nombre: "Mouse", precio: 50, categoria: "tecnologia" },
    { nombre: "Escritorio", precio: 150, categoria: "muebles" },
    { nombre: "Monitor", precio: 300, categoria: "tecnologia" }
];

//Crea un arreglo que contenga solo los nombres de los productos en mayúsculas.
const nombreMayusculas = productos.map(p => p.nombre.toUpperCase());
console.log(nombreMayusculas);

//Obtener los productos que sean de cat tecnologia
const productosTecnologia = productos.filter(p => p.categoria === 'tecnologia');
console.log(productosTecnologia);

//Busca el producto especifico que queremos
const productoEspecifico = productos.find(pe => pe.nombre === 'Mouse');
console.log(productoEspecifico);

//Calcula el costo total de todos los productos.
const costoTotal = productos.reduce((acumulador,pro) => acumulador + pro.precio,0)
console.log(costoTotal);

//Foreach mas sensillo, imprime toda la dataset
productos.forEach(producto => {console.log(producto)});

//Foreach con loop
for(let i = 0;i < productos.length ; i++){
    console.log(productos[i]);
}

//El some nos ayuda a verificar si un objeto existe, devulve true si si se encuentra
console.log("\n.SOME");
const usoSome = productos.some(someProducto => someProducto.nombre === 'Mouse');
console.log(usoSome);
