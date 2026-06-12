//Implementa una función que acepte un String, ponga la primera letra de cada palabra en mayúscula y que retorne un nuevo String con el resultado.
function Capitalizar(oracion) {
    /*
    let texto = oracion.split(" ");

    for (let i = 0; i < texto.length; i++) {
        texto[i] = texto[i].charAt(0).toUpperCase() + texto[i].substring(1).toLowerCase();
    }
    */
    
    return oracion.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase()).join(" ");    
    
}

console.log(Capitalizar("a short sentence"));
console.log(Capitalizar("a lazy fox"));
console.log(Capitalizar("look, it is working!"));