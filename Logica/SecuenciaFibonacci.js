// Función para generar la secuencia de Fibonacci hasta el n-ésimo número
function fibonacci(n) {
    if (n <= 0) {
        return [];
    }

    const fib = [0,1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);    
}

console.log(fibonacci(10)); // Imprime los primeros 10 números de la secuencia de Fibonacci