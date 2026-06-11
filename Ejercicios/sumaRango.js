        console.log(sumaRango(0,20));
        function sumaRango(inicio,fin){
            let suma = 0;
            for(let i = inicio;i<=fin;i++){
                suma += i;
            }
            return suma;
        }
        
        //Funcion anonima 
        const sumaRangoDos = function(inicio,fin){
            let suma = 0;
            for(let i = inicio;i<=fin;i++){
                suma += i;
            }
            return suma;
        }
        console.log(sumaRangoDos(0,20));
