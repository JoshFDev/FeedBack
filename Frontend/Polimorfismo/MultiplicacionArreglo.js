function multiplicarArreglo(arreglo){    
    const resultado = (arreglo) => arreglo.reduce((ac,act) => ac * act, 1);    
    return resultado(arreglo);
}

console.log(multiplicarArreglo([4,1,2,3])); //24
console.log(multiplicarArreglo([1,2,3,4,5,6,7,8])); //40320
console.log(multiplicarArreglo([])); //1
