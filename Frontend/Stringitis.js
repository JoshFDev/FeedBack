//Escribe una función que tome un texto y un subtexto y devuelva true si el texto contiene el subtexto y false en caso contrario.


hasText('Laboratoria', 'oratoria');
// true

hasText('Equipo', 'yo');
// false
function hasText(texto, subtexto){

    for(let i = 0 ;i < texto.length;i++)
    {
        let coincide = true;
        for(let j = 0 ; j<subtexto.length ; j++)
        {
            if(texto[i+j] !== subtexto[j])
            {
                coincide = false;
                break;
            }
        }
        
        if(coincide)
        {
            return true;
        }
    }

    return false;
}

console.log(hasText('Laboratoria', 'oratoria'));
console.log(hasText('Equipo', 'yo'));