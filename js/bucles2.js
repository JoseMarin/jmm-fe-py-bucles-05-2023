
let A = 10;
let B = '10';

console.log('Hola mundo');

//Bucles while 
let simbolo = '*';

let inicial = 0; // valor inicial <---

while (inicial < 5) { //condicion a evaluar <---
    simbolo = simbolo + '*';
    console.log(simbolo);
    inicial = inicial + 1; //incremento <---
    // inicial++;
}

// //bucle for
let i = 10;

for (let i = 0; i < 5; i++) {
    simbolo = simbolo + '*';
    console.log(simbolo);
}

//do while
let init = 0;

do {
    console.log(init);   
    init = +prompt('introduce un valor diferente a 0'); 
} while (init > 5);