/* 
Implementa una función que reciba un arreglo de números y devuelva un nuevo arreglo con 3 elementos, en este orden:
el número mayor del arreglo.
el número menor del arreglo.
el segundo número mayor del arreglo.
*/

const analyseArray = (arr) => {
    let mayor = arr[0];
    let menor = arr[0];
    let segundoMayor = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        // Encontrar el mayor y el segundo mayor
        if (arr[i] > mayor) {
            segundoMayor = mayor;
            mayor = arr[i];
        } else if (arr[i] > segundoMayor && arr[i] !== mayor) {
            segundoMayor = arr[i];
        }

        // Encontrar el menor
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }

    return [mayor, menor, segundoMayor];
};

const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];

const [max, min, max2] = analyseArray(numbers);

console.log(max);  // 100
console.log(min);  // -80
console.log(max2); // 32