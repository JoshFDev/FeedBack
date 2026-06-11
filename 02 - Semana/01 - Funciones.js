function saludoInicial(name="David"){
    document.write(`Hola, mi nombre es ${name}!<br>`);
}

saludoInicial("Joshua");
saludoInicial();

let c =10;


function suma(a, b){
    let suma = a + b + c;
    document.write(`La suma de ${a} y ${b} es: ${suma}<br>`);
    return suma;
}

let resultado = suma(5, 5);
document.write(resultado);