//funcion que reciba un string y capitalice la primera letra de cada palabra
function capitalizarPalabra(str){
    let totArr = str.split(' ');
    //console.log(totArr);

    let transform = totArr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    console.log(transform);

    //unir las palabras
    let result = transform.join(' ');
    console.log(result);
}

/*
//str = prompt("Ingrese la palabra");
console.log(capitalizarPalabra("hola mundo"));
console.log(capitalizarPalabra("make it real"));
console.log(capitalizarPalabra(""));
*/

//optimizado
function capitalizadoOpt(str){
    return str.split(' ').map(word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//str = prompt("Ingrese la palabra");
console.log(capitalizarPalabra("hola mundo jaja"));
console.log(capitalizarPalabra("make it real"));
console.log(capitalizarPalabra(""));