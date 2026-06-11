function max(arreglo){
    //Este metodo es el mas rapido
    //return Math.max(...arreglo);

    //Con este metodo es el metodo sort
    //return arreglo.sort((a,b) => a -b)[arreglo.length -1];

    //Metodo reduce
    const maximo = [...arreglo].reduce((acumulador, actual) => {
        if(actual > acumulador){
            return actual;
        }
        return acumulador;
    });
    return maximo;
}


console.log(max([3,9,6]));
console.log(max([67,35,54,26]));
console.log(max([5,9,2,4,5,7]));
