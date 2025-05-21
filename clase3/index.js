// Funciones
// Opción #1 => Utilizando la palabra reservada function
/* function saludar() {
    console.log("Hola Mundo!");
} */

// Opción #2 => Utilizando una función anónima
/* const saludar = function() {
    console.log("Hola Mundo!");
} */

// Opción #3 => Utilizando una función flecha o arrow function
/* const saludar = () => {
    console.log("Hola Mundo!");
}

saludar(); */


// Método Map (Arrays)
const numerosOriginales = [1, 2, 3, 4, 5];
const numeroDoble = (valor) => {
    return valor * 2;
}

//const numerosOriginalesPor2 = numerosOriginales.map(numeroDoble);
// Opción #1
/* const numerosOriginalesPor2 = numerosOriginales.map((valor) => {
    return valor * 2;
}); */
// Opción #2
/* const numerosOriginalesPor2 = numerosOriginales.map(valor => valor * 2);
console.log(numerosOriginales);
console.log(numerosOriginalesPor2); */

// Creamos una función que calcule números pares
/* const numeroPar = (numero) => {
    if ((numero % 2) == 0) {
        return numero;
    }
}

//const numerosOriginalesPares = numerosOriginales.map(numeroPar);
const numerosOriginalesPares = numerosOriginales.filter(numeroPar);
console.log(numerosOriginales);
console.log(numerosOriginalesPares); */

/* const productos = [
    {id:1, nombre:"Coca Cola", precio:3500, categoria:"bebidas"},
    {id:2, nombre:"Pepsi", precio:3400, categoria:"bebidas"},
    {id:3, nombre:"7up", precio:3200, categoria:"bebidas"}
]

//const nombreProductos = productos.map(item => item.precio * 1.2);
const nombreProductos = productos.map(item => ({idProducto:item.id, nombreProducto:item.nombre, precioProducto:item.precio, categoriaProducto:"BEBIDAS"}));
console.log(nombreProductos); */


// Declarar las 4 funciones aritméticas básicas
/* const sumar = (valor1, valor2) => valor1 + valor2;
const restar = (valor1, valor2) => valor1 - valor2;
const multiplicar = (valor1, valor2) => valor1 * valor2;
const dividir = (valor1, valor2) => valor1 / valor2;
// Declarar una función que recibe 3 parámetros (los 2 primeros son los valores y el último la operación)
const realizarOperacion = (valor1, valor2, operacion) => {
    return operacion(valor1, valor2);
}

console.log("Sumar:", realizarOperacion(10, 20, sumar));
console.log("Restar:", realizarOperacion(20, 10, restar));
console.log("Multiplicar:", realizarOperacion(10, 20, multiplicar));
console.log("Dividir:", realizarOperacion(20, 10, dividir)); */


// Promesas
/* const irAlCine = (pregunta) => {
    return new Promise((res, rej) => {
        if (pregunta.includes("cenar")) {
            res("Sí, vamos!")
        } else {
            rej("No, no puedo ir porque voy al cumple de mi Abuela");
        }
    })
}

irAlCine("Vamos a ir a cenar?")
.then(resultado => {
    console.log(resultado);
})
.catch(resultado => {
    console.error(resultado);
}) */

// Declaramos una promesa "dividir" 
/* const dividir = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor2 == 0) {
            reject("No se puede divivir por cero")
        } else {
            resolve(valor1 / valor2)
        }
    });
}

dividir(15, 0)
.then(resultado => {
    console.log("Resultado:", resultado);
})
.catch(error => {
    console.log("Error:", error);
}); */

/* const promesa = () => {
    return new Promise(res => {
        setTimeout(() => {
            res(1);
        }, 1000)
    })
}

promesa()
.then(resultado => {
    console.log(resultado);
    return resultado * 2
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2
})
.then(resultado => {
    console.log("Final:", resultado);
}) */


// Proceso síncrono
/* function funcionA() {
    console.log(1);
    funcionB();
    console.log(2);    
}

function funcionB() {
    console.log(3);
    funcionC();
    console.log(4);
}

function funcionC() {
    console.log(5);
}

funcionA(); */

// Proceso asíncronos
/* console.log("Inicio de programa"); // se ejecutó de forma síncrona

setTimeout(() => {
    console.log("Proceso de mi programa #1"); // se ejecutó de forma asíncrona
}, 3000);

setTimeout(() => {
    console.log("Proceso de mi programa #2"); // se ejecutó de forma asíncrona
}, 2000);

console.log("Fin de programa"); // se ejecutó de forma síncrona */


// Async / Await
const dividir = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor2 == 0) {
            reject("No se puede divivir por cero")
        } else {
            setTimeout(() => {
                resolve(valor1 / valor2)
            }, 2000);
        }
    });
}

const procesoAsincrono = async (valor1, valor2) => {
    try {
        let resultado = await dividir(valor1, valor2);
        console.log(resultado);
    } catch(error) {
        console.log("Error:", error);
    }
}

procesoAsincrono(10, 0);