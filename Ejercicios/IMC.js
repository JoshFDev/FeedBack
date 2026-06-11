//peso/altura al cuadrado
function calcularBIM(peso,altura){
    let resultado = 0;
        resultado = peso/Math.pow(altura,2);
        if(resultado < 18.5){
            console.log(`Estas bajo de peso menor al 18.5: ${resultado}` );
        }else if(resultado >= 18.5 && resultado <= 24.9){
            console.log(`Tu peso es normal: ${resultado}`);
        }else if(resultado >= 25 && resultado <= 29.9){
            console.log(`Estas en sobrepeso ${resultado}`);
        }else{
            console.log(`Estas obeso ${resultado}`);
        }
    return resultado;
}
//calcularBIM(65, 1.8);
//calcularBIM(72, 1.6);
//calcularBIM(52, 1.75);
//calcularBIM(135, 1.7);


function bmi(peso,altura){
    const resultado = peso / Math.pow(altura,2);

    const categorias = [
        {max:18.5, texto:'Bajo de peso'},
        {max:24.9,texto:'Normal'},
        {max:29.9,texto:'Sobrepeso'},
        {max:Infinity,texto:'Obeso'}
    ]

    for(let i =0;categorias.length;i++){
        if(resultado <= categorias[i].max){
            return console.log(categorias[i].texto);
        }
    }
}

bmi(65, 1.8);
bmi(72, 1.6);
bmi(52, 1.75);
bmi(135, 1.7);