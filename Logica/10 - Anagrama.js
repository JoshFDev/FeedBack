function Anagramas(texto1, texto2) {
    //Primero aqui se estara aplicando la condicion que deben de ser cadenas
    if (typeof texto1 !== "string" || typeof texto2 !== "string") {
        throw new TypeError("Los dos parámetros deben ser strings");
    }

    //Se crean variables donde hace que el texto este ignorando lo demas que no sean letras
    let text1 = texto1.replace(/[^a-z]/gi, "").toLowerCase();
    let text2 = texto2.replace(/[^a-z]/gi, "").toLowerCase();

    //se transforma en arreglo y se guardan en un arreglo nuevo
    let arr1 = [...text1];
    let arr2 = [...text2];

    //se ordena todo
    arr1.sort();
    arr2.sort();

    //Si habian espacios estos se van a eliminar juntando todo
    let palabra1 = arr1.join("");
    let palabra2 = arr2.join("");

    //se compara y retornara si es un true o false la palabra si es anagrama o no
    return palabra1 === palabra2
}

console.log(Anagramas('rail safety', 'fairy tales'));
console.log(Anagramas('RAIL! SAFETY!', 'fairy tales'));
console.log(Anagramas('Hi there', 'Bye there'));