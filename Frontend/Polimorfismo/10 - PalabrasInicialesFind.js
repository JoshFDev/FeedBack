function empiezaConA(arreglo){
    return arreglo.filter(el => el.charAt(0) === 'a' || el.charAt(0) === 'A');
}

console.log(empiezaConA(["beta","alfa","Arbol","gama"]));
console.log(empiezaConA(["beta","delta","gama"]));
console.log(empiezaConA([]));