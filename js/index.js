//Kata I - notas

let nota = +prompt('introduce tu nota');

// switch (+nota) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:    
//         console.log('Has suspendido');
//         break;
//     case 5:
//     case 6:
//         console.log('Has aprobado');
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log('Notable');
//         break;
//     case 10:
//         console.log('Sobresaliente');
//         break;
//     default:
//         console.log('Introduce una nota valida');
// }

if (nota>=0 && nota < 5) {
    console.log('Suspenso');
} 

if (nota >=5 && nota <=6) {
    console.log('Suficiente');
} else if(nota >=7 && nota <=9){
    console.log('Notable');
} else if(nota == 10){
    console.log('Sobresaliente');
} else {
    console.log('Introduce una nota valida');
}
