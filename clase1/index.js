// Array de Personas
/* const personas = [
    {id:1, nombre:"Jonanthan", apellido:"Irigoitia", edad:25, genero:"M"},
    {id:2, nombre:"Augusto", apellido:"Noriega", edad:24, genero:"M"},
    {id:3, nombre:"Yanina", apellido:"Andregnette", edad:27, genero:"F"},
    {id:4, nombre:"Dario", apellido:"Castro", edad:26, genero:"M"}
]
const personas2 = personas.map(item => (item.nombre));

console.log(personas2);
console.log(personas2.includes("Dario"));
console.log(personas.find(item => item.nombre == "Dario")); */


// Diferencia entre let y const
/* let valor = 10;
valor = 20;
const valor2 = 10;
valor2 = 20;
console.log(valor2); */


// Diferencia entre variable local y global => scopes (alcance)
// Ejemplo #1
/* let valor = 10 // Definir una variable global

let modificarValor = () => {
    valor = 20;
    console.log("1- " + valor);
}

modificarValor();
console.log("2- " + valor); */

// Ejemplo #2
/* //let valor = 10 // Definir una variable global

let modificarValor = () => {
    let valor = 10 // Definir una variable local
    valor = 20;
    console.log("1- " + valor);
}

modificarValor();
console.log("2- " + valor); // Tira error, porque estoy queriendo acceder a una variable por fuera de mi alcance */


// Diferencia entre reasignar y mutar
/* let valor = 10;
const personas = [
    {id:1, nombre:"Jonanthan", apellido:"Irigoitia", edad:25, genero:"M"},
    {id:2, nombre:"Augusto", apellido:"Noriega", edad:24, genero:"M"},
    {id:3, nombre:"Yanina", apellido:"Andregnette", edad:27, genero:"F"},
    {id:4, nombre:"Dario", apellido:"Castro", edad:26, genero:"M"}
]

valor = 20; // reasignar el valor de una variable
personas[1].nombre = "Juan"; // es mutable, es posible modifcar el valor de una propiedad de un objeto que pertenece a un array
console.log(valor);
console.log(personas); */


// 3 formas de declarar funciones
// Opción #1 => utilizando la palabra function
/* function saludar(nombre) {
    console.log("Hola, " + nombre);
} */
// Opción #2 => declaramos una función anónima (una función sin nombre)
/* const saludar = function (nombre) {
    console.log("Hola, " + nombre);
} */
// Opción #3 => declaramos una función flecha o arrow function
/* const saludar = (nombre) => {
    console.log("Hola, " + nombre);
}

saludar("Juan"); */
// Función flecha con return explícito
/* const saludar = (nombre) => console.log("Hola, " + nombre);
saludar("Juan");
//const sumar = (num1, num2) => (num1 + num2) * 10; // con return explicito
const sumar = (num1, num2) => {
    return (num1 + num2) * 10
};
console.log(sumar(20, 30)); */


// Template Strings o Plantilla literal
/* const personas = [
    {id:1, nombre:"Jonanthan", apellido:"Irigoitia", edad:25, genero:"M"},
    {id:2, nombre:"Augusto", apellido:"Noriega", edad:24, genero:"M"},
    {id:3, nombre:"Yanina", apellido:"Andregnette", edad:27, genero:"F"},
    {id:4, nombre:"Dario", apellido:"Castro", edad:26, genero:"M"}
]

let mensaje1 = "Hola, yo soy " + personas[1].nombre.toUpperCase() + " y tengo " + (personas[1].edad + 1) + " años!"; // Concatenación de un string con variables
console.log(mensaje1);
let mensaje2 = `Hola, yo soy ${personas[1].nombre.toUpperCase()} y tengo ${personas[1].edad + 1} años!`; // Utilizamos Template String
console.log(mensaje2); */


// Closures
/* const personas = [
    {id:1, nombre:"Jonanthan", apellido:"Irigoitia", edad:25, genero:"M"},
    {id:2, nombre:"Augusto", apellido:"Noriega", edad:24, genero:"M"},
    {id:3, nombre:"Yanina", apellido:"Andregnette", edad:27, genero:"F"},
    {id:4, nombre:"Dario", apellido:"Castro", edad:26, genero:"M"}
]

const persona = personas.find(item => item.edad > 25);
console.log(persona); */


// Clases
/* class Auto {
    // Propiedades
    constructor(marca, modelo, tipo, puertas=4) {
        this.marca = marca; 
        this.modelo = modelo;
        this.tipo = tipo;
        this.puertas = puertas;
        this.vendido = false;
    }

    // Variable estática
    static autosVendidos = 0;

    // Métodos
    getAuto() {
        return this.marca + " " + this.modelo;
    }

    getCantPuertas() {
        return this.puertas
    }

    venderAuto() {
        this.vendido = true;
        Auto.autosVendidos++; // incrementar mi variable estática (variable común entre todas las instancias)
    }
}

const auto1 = new Auto("Ford", "Fiesta", "nafta");
const auto2 = new Auto("Fiat", "500", "eléctrico", 2, "tiene radio am/fm");
const auto3 = new Auto("Fiat", "Duna");
auto1.venderAuto();
auto3.venderAuto();
console.log(auto1);
console.log(auto2);
console.log(auto3);
console.log(auto1.getAuto());
console.log(auto2.getAuto());
console.log(auto3.getAuto());
console.log("Autos vendidos: " + Auto.autosVendidos); */

/* class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static especie = "humano";

    getNombre() {
        return "Hola, soy " + this.nombre;
    }

    getEspecie() {
        return "Soy un " + Persona.especie;
    }
}

const persona1 = new Persona("Augusto");
const persona2 = new Persona("Ramiro");
console.log(persona1.getNombre());
console.log(persona2.getNombre());
console.log(persona1.getEspecie());
console.log(persona2.getEspecie()); */


// Desafio
class Contador {
    constructor(nombre) {
        this.responsable = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable() {
        return this.responsable;
    }

    contar() {
        this.contador++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual() {
        return this.contador;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

const contador1 = new Contador("Jonanthan");
const contador2 = new Contador("Ramiro");
console.log(contador1.getResponsable());
console.log(contador2.getResponsable());
contador1.contar();
contador1.contar();
contador1.contar();
contador2.contar();
contador2.contar();
console.log("Contador individual #1: " + contador1.getCuentaIndividual());
console.log("Contador individual #2: " + contador2.getCuentaIndividual());
console.log("Contador Global: " + contador2.getCuentaGlobal()); // Acceder al contador global desde su método
console.log("Contador Global: " + Contador.contadorGlobal); // Acceder al contador global directamente desde su variable estática
