// Función que recibe un arreglo de nombres
const getPrintableNames = (arr) => {
    // map() recorre cada elemento del arreglo y devuelve un nuevo arreglo
    return arr.map(persona => {

        // Convierte todo el nombre a minúsculas
        // Luego lo separa en un arreglo usando el espacio
        // Ejemplo:
        // "SALLY RIDE"
        // ↓
        // ["sally", "ride"]
        const [nombre, apellido] = persona.toLowerCase().split(" ");
        // Regresa una cadena con el formato:
        // Inicial del nombre + ". " + apellido con la primera letra en mayúscula
        return `${nombre[0].toUpperCase()}. ${apellido[0].toUpperCase()}${apellido.slice(1)}`;
    });
};

// Arreglo original
const people = [
    "marie curie",
    "Mary Anning",
    "ada lovelace",
    "SALLY RIDE"
];

// Imprime el nuevo arreglo
console.log(getPrintableNames(people));

/*
Resultado:

[
    'M. Curie',
    'M. Anning',
    'A. Lovelace',
    'S. Ride'
]
*/