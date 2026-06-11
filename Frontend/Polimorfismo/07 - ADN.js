//G > C
//C > G
//T > A
//A > U
function transcribir(cadena){
    //escribir Array.from(cadena). es lo mismo que escribir [...cadena].
    return Array.from(cadena).map(el => {
        switch(el){
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            case 'T' :
                return 'A';
            case 'A':
                return 'U';
            default:
                return console.log(`Este elemento no es un valor valido: ${el}`);
        }
    }).join();
    //usaremos map para devolver el array nuevo
}
console.log(transcribir("ACGT"));
console.log(transcribir("ACGTGGTCTTAA"));
