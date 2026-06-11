function removerCeros(arreglito){
    return arreglito.reduce((acc, valor) => {        
        if(valor !== 0) acc.push(valor);
        return acc;
    }, [])
}

console.log(removerCeros([0,1,0,2,0,3]));
console.log(removerCeros([9,3,6,4]));
console.log(removerCeros([0,0,0]));