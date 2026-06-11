class Calculator {
    add(a, b) {
        if (b === undefined) {
            return a + a; 
        }
        return a + b; 
    }
}

const calc = new Calculator();

console.log(calc.add(2)); 
console.log(calc.add(2, 3));