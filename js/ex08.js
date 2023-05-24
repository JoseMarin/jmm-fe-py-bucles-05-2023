/* Crea un programa que pida al usuario ingresar tres números y 
determine cuál es el mayor de ellos.*/

let valorA = prompt('Introduce primer valor');
let valorB = prompt('Introduce segundo valor');
let valorC = prompt('Introduce tercer valor');

//Evalua A es mayor
if(valorA > valorB && valorA > valorC){
    if(valorB < valorC){
        alert('A es mayor y B es el menor');
    }else {
        alert('A es mayor y C es el menor');
    }
}
//Evalua B es mayor
 else if(valorB > valorA && valorB > valorC){
    alert('B es mayor');
}
//Evalua C es mayor
else if(valorC > valorA && valorC > valorB){
    alert('C es mayor');
}

