const fs = require("fs");
const NOMBRE_ARCHIVO = "desafio1.txt";
const fecha = new Date();
const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

fs.writeFile(NOMBRE_ARCHIVO, fechaActual, (error) => {
    fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, resultado) => {
        console.log(resultado);
    })
})
