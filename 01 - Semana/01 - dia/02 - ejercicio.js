const productos = [
    { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 5 },
    { id: 2, nombre: "Mouse", categoria: "Electrónica", precio: 25, stock: 50 },
    { id: 3, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 10 },
    { id: 4, nombre: "Escritorio", categoria: "Muebles", precio: 150, stock: 2 },
    { id: 5, nombre: "Silla", categoria: "Muebles", precio: 100, stock: 0 },
    { id: 6, nombre: "Teclado", categoria: "Electrónica", precio: 50, stock: 20 }
];

//Obtén un nuevo array con los nombres de todos los productos en mayúsculas.
const mayusculasP = productos.map(m => m.nombre.toUpperCase());
console.log(mayusculasP);

//Crear un nuevo array con el precio aplicado un 10% de IVA
const iva = productos.map(i => ({
    ...i, //Copia todas las propiedades actuales (nombre, id, etc.)
    precio: i.precio //Sobrescribe el precio con el valor calculado
}));
//console.log(iva);

//Filtra los productos de la categoría "Electrónica" que tengan un precio mayor a $100.
console.log("=== Filtrador ===");
const filtrador = productos.filter(f => f.categoria === "Electrónica" && f.precio >= 100);
console.log(filtrador);


//Calcula el valor total del inventario (Precio total = Precio * Stock de cada producto).
console.log("Reduccion a un unico valor");
const reduccion = productos.reduce((total, r) => {
    // 'total' es el ACUMULADOR: guarda lo que vamos sumando en cada vuelta.
    // 'r' es el OBJETO ACTUAL: el producto que se está procesando en ese momento.
    // En cada iteración, sumamos el valor acumulado + (precio * stock del producto actual)
    return total + (r.precio * r.stock);

},0);//Este 0 es el VALOR INICIAL del 'total'. Es vital para cálculos numéricos.
console.log(reduccion);

// Encuentra el primer objeto producto cuyo nombre sea "Silla".
console.log("=== FIND ===");
const productoSilla = productos.find(enc => enc.nombre === 'Silla');
console.log(productoSilla);


// Comprueba si existe al menos un producto con stock cero.
console.log("=== SOME ===");
const algun = productos.some(s => s.stock === 0);
console.log(algun);

//Obtén la suma de los precios de todos los productos de "Muebles".
const totalMuebles = productos
    .filter(p => p.categoria === 'Muebles')
    .reduce((sum, p) => sum + p.precio, 0)
console.log(totalMuebles);




