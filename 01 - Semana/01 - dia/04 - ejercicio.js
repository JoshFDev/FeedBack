let palabra = prompt("Ingrese la palabra: ").toUpperCase();
let vocales = 0, 
    consonantes =0;

for(const letras of palabra)
    {
        if(letras === "a" || letras === "e"|| letras === "i" || letras === "o" || letras === "u" ){
            vocales++;
        }
        else
        {
            consonantes++;
        }
}

alert(`La palabra ${palabra} tiene ${consonantes} consonantes y ${vocales} vocales.
    Ademas la longitud de palabra es de ${palabra.length}`);


