// Potencia de un número equivalente a la función Math.pow()
/* const valoresBase = [1, 2, 3, 4, 5];
const nuevoValoresBase = valoresBase.map((numero, indice) => numero**indice)
console.log(nuevoValoresBase); */

// Includes => verificar si existe un elemento un array (verificación simple)
/* const nombres = ["jonathan", "ramiro", "walter", "carolina", "augusto"];
const nombreBuscado = nombres.includes("Augusto");

if (nombreBuscado) {
    console.log("Existe el nombre buscado!");   
} else {
    console.log("No existe el nombre buscado!");
} */

// Object => entries, keys y values
/* const bebida = {id:1, nombre:"Coca Cola", precio:3500};
let entries = Object.entries(bebida);
let keys = Object.keys(bebida);
let values = Object.values(bebida);
console.log(entries);
console.log(keys);
console.log(values);
console.log(entries[1][1]);
console.log(keys[1]);
console.log(values[1]); */

// Reduce => calcular operaciones donde devuelve un único valor
const bebidas = [
    {id:1, nombre:"Coca Cola", precio:3500, stock:10},
    {id:2, nombre:"Pepsi", precio:3400, stock:5},
    {id:3, nombre:"Sprite", precio:3200, stock:4}
]

/* const totalPrecio = bebidas.reduce((acum, item) => acum += item.precio, 0);
const totalStock = bebidas.reduce((acum, item) => acum += item.stock, 0);
const total = bebidas.reduce((acum, item) => acum += item.precio * item.stock, 0);
console.log(totalPrecio);
console.log(totalStock);
console.log(total); */

/* const total2 = bebidas.reduce((acum, item) => {
    if (item.precio == 3500) {
        acum += item.precio * item.stock;
    }

    return acum;
}, 0);
console.log(total2); */


// Operador spread con objetos
/* const objeto1 = {
    id:1,
    nombre:"Coca Cola",
    precio:3500
}

const objeto2 = {
    categoria:"bebidas",
    stock:10,
    nombre:"Pepsi"
}

const objeto3 = {...objeto1, ...objeto2};
console.log(objeto3); */


// Operador Spread con Arrays
/* const alumnos = ["jonathan", "ramiro", "carolina", "yanina", "augusto", "yanina"];
const profes = ["javier", "walter", "yanina"];
//const todos = [...alumnos, ...profes];
//const todos = alumnos.concat(profes); // Otra forma de concatenar arrays
const todos = new Set(alumnos);
console.log(todos); */


// Rest operator
/* const objeto1 = {
    a:1,
    b:"Coca Cola",
    c:3500
}

let {nombre} = objeto1;
let {a, ...pepe} = objeto1;
console.log(pepe); */


// Ejercicio
/* const productos = [
    {manzanas:3, peras:2, carne:1, jugos:5, dulces:2},
    {manzanas:1, sandias:1, huevos:6, jugos:1, panes:4},
]

let tipoProductos = [];
let totalProductos = 0;

productos.forEach(item => {
    let keys = Object.keys(item);

    for (const elemento of keys) {
        if (!tipoProductos.includes(elemento)) {
            tipoProductos.push(elemento);
        }
    }
})

productos.forEach(item => {
    let values = Object.values(item);
    
    for (const elemento of values) {
        totalProductos += elemento
    }
})

console.log(tipoProductos);
console.log(totalProductos); */


// Dynamic Import
/* const ejemploDinamico = async () => {
    const {default:calculadora} = await import ("./calculadora.js");
    let calculadora2 = new calculadora();
    let resultado = calculadora2.suma(10, 20);
    console.log(resultado);
}

ejemploDinamico() */


// Trim => quitar los espacios de adelante y atras de un string
/* let texto = "  hola  ";
let texto2 = "  hola             mundo  ";
console.log(texto);
console.log(texto.trim());
console.log(texto.trim().length);
//let textoLimpio = texto2.replaceAll(" ", "");
let textoLimpio = texto2.trim().replaceAll("    ", " ").replaceAll("   ", " ").replaceAll("  ", " ");
let textoLimpio2 = texto2.split(" ");

console.log(textoLimpio2); */


// Flat
/* let arrayNumeros = [1, 2, [3, 4], [[5, 6, 7]]];
console.log(arrayNumeros);
console.log(arrayNumeros.flat(1));
console.log(arrayNumeros.flat(2)); */


// Operador Nullish
/* let variable = ""
//let variableAsignable = variable || "Sin valor";
let variableAsignable = variable??"Sin valor";
console.log(variableAsignable); */


// Propiedades
/* class Persona {
    #nombreCompleto; // propiedad o variable privada
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombreCompleto() {
        this.#nombreCompleto = this.nombre + " " + this.apellido;
        return this.#nombreCompleto;
    }
}

const persona1 = new Persona("Dario", "Castro")
console.log(persona1.nombreCompleto);
console.log(persona1.getNombreCompleto()); */


// Desafio
class TicketManager {
    #precioBaseDeGanancia = 50000;
    constructor() {
        this.eventos = [];
    }
    calcularFecha() {
        let fecha = new Date();

        return `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`
    }
    calcularId() {
        return this.eventos.length + 1;
    }
    getEventos() {
        return this.eventos;
    }
    agregarEvento(nombre, lugar, precio, capacidad=50, fecha=this.calcularFecha()) {
        const evento = {id:this.calcularId(), nombre:nombre, lugar:lugar, precio:precio*1.15, capacidad:capacidad, fecha:fecha, participantes:[]};        
        this.eventos.push(evento);
    }
    agregarUsuario(idEvento, idUsuario) {        
        let evento = this.eventos.find(item => item.id == idEvento);

        if (evento) {
            evento.participantes.push(idUsuario);
        }
    }
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        let evento = this.eventos.find(item => item.id == idEvento);

        if (evento) {
            let nuevoEvento = {...evento, id:this.calcularId(), lugar:nuevaLocalidad, fecha:nuevaFecha, participantes:[]};
            this.eventos.push(nuevoEvento);
        }
    }
}

const TM = new TicketManager();
TM.agregarEvento("Duki World Tour", "Movistar Arena", 25000, 15000, "29-05-2025");
TM.agregarUsuario(1, 1);
TM.agregarUsuario(1, 2);
TM.ponerEventoEnGira(1, "Direct TV Arena", "30-05-2025");
TM.agregarUsuario(3, 1);
TM.agregarUsuario(2, 4);
console.log(TM.getEventos());