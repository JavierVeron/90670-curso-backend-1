// Operaciones síncronas
/* console.log("Comienzo el proceso");
console.log("Ejecutando el proceso");
console.log("Fin del proceso"); */

//setTimeout => ejecutar un bloque de código en un tiempo determinado por única vez (en milisegundos)
/* const operacion1 = () => {
    console.log("Ejecutando el proceso #1");
}

const operacion2 = () => {
    console.log("Ejecutando el proceso #2");
}

const procesoAsync1 = (fn) => {
    setTimeout(() => {
        fn()
    }, 5000)
}

const procesoAsync2 = (fn) => {
    setTimeout(() => {
        fn()
    }, 3000)
}

// Operaciones asíncronas
console.log("Comienzo el proceso");
procesoAsync1(operacion1);
procesoAsync2(operacion2);
console.log("Fin del proceso"); */


//setInterval => ejecutar un bloque de código en un tiempo determinado en forma periódica (en milisegundos), es necesario definir una condición de corte
/* console.log("Comienzo el proceso");

for (i=1; i<=5; i++) {
    console.log("Proceso #" + i);
}

console.log("Fin del proceso"); */


/* const contador = () => {
    let counter = 0;
    const timer = setInterval(() => {
        counter++;
        console.log("Proceso #" + counter);

        if (counter == 5) {
            console.log("Detengo el proceso!");
            clearInterval(timer);
        }
    }, 2000);
}

console.log("Comienzo el proceso");
contador();
console.log("Fin del proceso"); */