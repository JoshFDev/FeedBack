function fibonacciArray(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const sec = [0, 1];
    
    for (let i = 2; i < n; i++) {
        sec[i] = sec[i - 1] + sec[i - 2];
    }
    return sec;
}

console.log(fibonacciArray(10));