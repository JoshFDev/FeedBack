let valor1 = 1, valor2 = 1, pos = 1;

num = prompt("Ingrese el número de términos de la secuencia de Fibonacci que desea generar: ");
num = parseInt(num);

while (num > valor1 && num > valor2) {
    if (valor1 < valor2) {
        valor1 += valor2;
    }
    else {
        valor2 += valor1;
    }
    pos++;
}

if (num == valor1 || num == valor2) {
    alert("El numero " + num + " se encuentra en la posición " + (pos + 1) + " de la secuencia de Fibonacci.");
} else {
    alert("El numero " + num + " no se encuentra en la secuencia de Fibonacci.");

}
