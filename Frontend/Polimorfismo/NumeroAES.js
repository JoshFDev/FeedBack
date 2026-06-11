function numeroDeAes(palabra){
    const texto = palabra;
    const arreglo = [...texto];
    let numeroAs=0;
    for(let i = 0;i < arreglo.length;i++)
    {
        if(arreglo[i] === "a" || arreglo[i] === "A"){
            numeroAs++;
        }
    }
    return numeroAs
}


console.log(numeroDeAes("abracadabra"));
console.log(numeroDeAes("etinol"));
console.log(numeroDeAes("AAAAAA"));