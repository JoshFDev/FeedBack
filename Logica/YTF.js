//0 1 1 2 3 5 8 13 21 34

function fibonacci(limit) {
    const arrFib = [0, 1];

    for (let i = 2; i <= limit; i++) {
        //El siguiente número es la suma de los dos anteriores
        //arrFib[i - 1] es el número anterior, es la posición i - 1
        //arrFib[i - 2] es el número anterior al anterior, es la posición i - 2
        arrFib.push(arrFib[i - 1] + arrFib[i - 2]);
    }
    
    return arrFib;
}


const limite = prompt("Ingresa el limite de la secuencia de Fibonacci que deseas generar:");
const numero = parseInt(limite);
const testFib = fibonacci(numero);



/*
const limite = prompt("Ingresa el limite de la secuencia de Fibonacci que deseas generar:");
const numero = parseInt(limite);
const testFib = fibonacci(numero);


*/

//const testFib = fibonacci(20);
console.log(testFib);

//Join convierte un array en una cadena de texto, separando los elementos por el carácter 
// que se le indique (en este caso, una coma seguida de un espacio).
document.getElementById("recursiva").textContent = testFib.join(", ");
