class Persona{
    hablar(){
        console.log('El humano habla');
    }
}

class Profesor extends Persona{
    hablar(){
        console.log('Hola buen dia');
    }
}

const profe = new Profesor();
profe.hablar();