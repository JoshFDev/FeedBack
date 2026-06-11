document.write("<h1>=== 03 - Ejercicio ===</h1>");
alert("Hola, este es el ejercicio 03");

function crearPago(id, concepto, monto) {
    return {
        id: id,
        concepto: concepto,
        monto: monto
    };
}

//console.log(crearPago(1, "Pago de servicios", 100));

const pagos = [
    {}, //Este objeto vacio es para mostrar que se pueden agregar objetos vacios al array, pero no es necesario
    {id: 13, concepto: "Pago de inmuebles", monto: 500},
    crearPago(1, "Pago de servicios", 100),
    crearPago(2, "Pago de servicios", 500) 
];

function agregarPago(pago) {
    pagos.push(pago); //Con push se agrega un nuevo elemento al final del array
}

//Manda a llamar a la función agregarPago y le pasa como argumento el resultado de la función crearPago
agregarPago(crearPago(3, "Pago de servicios", 2000));
agregarPago(crearPago(5, "Pago de servicios", 2000));
agregarPago(crearPago(4, "Pago de servicios", 1500));

//Este forEach esta imprimiendo cada uno de los pagos que se encuentran en el array pagos
pagos.forEach(pago => {console.log(pago)});

//Esta funcion va a calcular el total de los pagos que se encuentran en el array pagos, para esto se declara una variable 
// total con un valor inicial de 0, luego se recorre el array pagos con un forEach y 
//en cada iteracion se suma el monto del pago al total, finalmente se retorna el total
function CalcularTotalPagos() {
    let total = 0;
    pagos.forEach(pago => {
        total += pago.monto; //total = total + pago.monto
    });
    return total;
}

//Aqui imprime el total de los pagos
console.log("Total de pagos: " + CalcularTotalPagos());

//Ahora usaremos el metodo reduce para calcular el total de los pagos, el reduce 
// recibe una funcion que tiene como parametros un acumulador y el elemento actual, 
// en este caso el acumulador va a ser el total y el elemento actual va a ser el pago,
//  en cada iteracion se suma el monto del pago al acumulador, finalmente se retorna el acumulador
const costoTotal = pagos.reduce((acumulador,pro) => acumulador + pro.monto,0); 
//cero es el valor inicial del acumulador, 
// en este caso el total empieza en 0
console.log("Total de pagos con reduce: " + costoTotal);

//Funcion que eliminara el pago por el id
function eliminarPago(id) {
    const index = pagos.findIndex(pago => pago.id === id); //findIndex devuelve el indice del primer elemento que 
    // cumple con la condicion especificada, en este caso se busca el pago que tenga el id igual al id que se le 
    // paso como argumento a la funcion eliminarPago
    if (index !== -1) { //Si el index es diferente de -1 significa que se encontro el pago con el id especificado
        pagos.splice(index, 1); //Elimina el pago del array pagos
        //splice es un metodo que permite eliminar elementos de un array, 
        // recibe como parametros el indice del elemento a eliminar y el numero de 
        // elementos a eliminar, en este caso se elimina un solo elemento
    }
}

//Aqui se llama a la funcion eliminarPago y se le pasa como argumento el id del pago que se desea eliminar
eliminarPago(4);
pagos.forEach(pago => {console.log(pago)});
console.log("Total de pagos despues de eliminar el pago con id 4: " + CalcularTotalPagos());

//Eliminando con el metodo filter 
const pagoEliminadoFiltrado = pagos.filter(pago => pago.id !== 4); //El metodo filter devuelve un nuevo array con todos los elementos que cumplen con la condicion especificada, en este caso se crea un nuevo array con todos los pagos que tengan un id diferente al id que se desea eliminar
console.log("Pagos despues de eliminar el pago con id 4 usando filter: " + pagoEliminadoFiltrado);
