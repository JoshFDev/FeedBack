function contarRango(num1,num2){
    let counter = 0;
    for(let i = num1+1; i<num2; i++)
    {
        counter += 1;
    }
    return counter;
}

console.log(contarRango(1,9));
console.log(contarRango(1332,8743));
console.log(contarRango(5,6));


function contarRangoDos(num1,num2){
    let min = num1 < num2 ? num1 : num2;
    let max = num1 > num2 ? num1 : num2;
    return max -min;
}

console.log(contarRangoDos(1,9));
console.log(contarRangoDos(1332,8743));
console.log(contarRangoDos(5,6));