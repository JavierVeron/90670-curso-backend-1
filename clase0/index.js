// Distintos tipos de console
/* console.log("Muestra un mensaje!")
console.info("Muestra una información!")
console.warn("Muestra una advertencia!")
console.error("Muestra una error!")
//console.clear() */


// Outputs en la consola
/* let edad = 43;
edad++;
let mensaje = "Hola, yo tengo " + edad
console.log(mensaje) */


// Variables por copia (tipos de datos primitivos: String, Number y Boolean)
/* let nombre = "Augusto";
let nombre2 = nombre; // Copia del valor de la variable nombre en nombre2
nombre = "Ramiro";
console.log(nombre);
console.log(nombre2); */

// Variable por copia por referencia (objeto, arrays)
// Objetos
//let bebida1 = {id:1, nombre:"Coca Cola", precio:2500}; // Objeto original
/* let bebida2 = bebida1; // Copia del valor es por referencia
console.log(bebida1);
console.log(bebida2);
bebida1.precio = 3500;
console.log(bebida1);
console.log(bebida2);
bebida1.nombre = "Coca Cola Zero";
console.log(bebida1);
console.log(bebida2);
bebida2.nombre = "Coca Cola Zero 2.5lts";
console.log(bebida1);
console.log(bebida2); */
// ¿Cómo podría un nuevo objeto teniendo los mismos datos del objeto original?
// Utilizo el operador spread (...) para desparramar los valores del objeto original
/* let bebida3 = {...bebida1}; // Cree un nuevo objeto, desparramando las propiedades del objeto bebida1 en bebida3
console.log(bebida1);
console.log(bebida3);
bebida1.precio = 3500;
console.log(bebida1);
console.log(bebida3);
bebida3.nombre = "Coca Cola Zero 2.5lts";
console.log(bebida1);
console.log(bebida3); */
/* const bebida4 = {nombre:"Sprite Zero", ...bebida1, id:2, precio:4000, categoria:"bebidas", stock:10};
bebida4.stock = 5;
console.log(bebida1);
console.log(bebida4); */

// Arrays
//const bebidas1 = ["Coca Cola", "Sprite", "Pepsi"]; // Array original
/* const bebidas2 = bebidas1; // Copia por referencia
console.log(bebidas1);
console.log(bebidas2);
bebidas1[2] = "Coca Cola Zero";
console.log(bebidas1);
console.log(bebidas2);
bebidas2[1] = "Seven Up";
console.log(bebidas1);
console.log(bebidas2); */
// ¿Cómo podría un nuevo array teniendo los mismos datos del array original?
// Utilizo el operador spread (...) para desparramar los valores del array original
/* const bebidas3 = [...bebidas1];
console.log(bebidas1);
console.log(bebidas3);
bebidas1[2] = "Coca Cola Zero";
console.log(bebidas1);
console.log(bebidas3);
bebidas3[1] = "Seven Up";
console.log(bebidas1);
console.log(bebidas3); */
// Utilizar el método concat
//const bebidas4 = bebidas1.concat(["Manaos"]);
/* const bebidas4 = bebidas1.concat([]);
console.log(bebidas1);
console.log(bebidas4);
bebidas1[2] = "Coca Cola Zero";
console.log(bebidas1);
console.log(bebidas4);
bebidas4[1] = "Seven Up";
console.log(bebidas1);
console.log(bebidas4); */
// Utilizar el método filter
/* const bebidas4 = bebidas1.filter(item => item)
console.log(bebidas1);
console.log(bebidas4);
bebidas1[2] = "Coca Cola Zero";
console.log(bebidas1);
console.log(bebidas4);
bebidas4[1] = "Seven Up";
console.log(bebidas1);
console.log(bebidas4); */
// Utilizar el método map
/* const bebidas4 = bebidas1.map(item => item);
console.log(bebidas1);
console.log(bebidas4);
bebidas1[2] = "Coca Cola Zero";
console.log(bebidas1);
console.log(bebidas4);
bebidas4[1] = "Seven Up";
console.log(bebidas1);
console.log(bebidas4); */

// Método Find => busca el primer elemento del array que coincidan con la función comparadora
/* const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2500},
    {id:2, nombre:"Sprite", precio:2300},
    {id:3, nombre:"Coca Cola Zero", precio:2400},
    {id:2, nombre:"Sprite Zero", precio:2500}
]

const bebidaBuscada = bebidas.find(item => item.id == 2);
console.log(bebidaBuscada);
const bebidaBuscada2 = bebidas.find(item => item.nombre == "Sprite Zero");
console.log(bebidaBuscada2);
const bebidaBuscada3 = bebidas.find(item => item.nombre.toUpperCase() == "sprite zero".toUpperCase());
console.log(bebidaBuscada3); */

// Método Filter => crea un nuevo array a partir de una función comparadora
const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2500, azucar:true},
    {id:2, nombre:"Sprite", precio:2300, azucar:true},
    {id:3, nombre:"Coca Cola Zero", precio:2400, azucar:false},
    {id:2, nombre:"Sprite Zero", precio:2500, azucar:false}
]
/* const bebidas2 = bebidas.filter(item => item.azucar == true);
console.log(bebidas);
console.log(bebidas2); */
/* const bebidas2 = bebidas.filter(item => item.azucar); // esta condición es equivalente a la de arriba
console.log(bebidas);
console.log(bebidas2); */
const bebidas2 = bebidas.filter(item => item.precio > 2300);
console.log(bebidas);
console.log(bebidas2);
