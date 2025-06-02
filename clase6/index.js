/* // server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  //res.end('Hola Mundo, estamos viendo Node JS!\n');
  res.end("<div style='color:white; background-color:black; padding:10px; font-size:22px;'>Hola Mundo, estamos viendo Node JS!</div>\n");
});

// starts a simple http server locally on port 3000
server.listen(3000, () => {
  console.log('Servidor activo:3000');
});

// run with `node server.mjs` */


// Crear un Servidor con Express
/* import express from "express"

const app = express();
const port = 8080;
app.get("/", (req, res) => {
    res.send("Hola, estamos en la página principal!");
})
app.get("/saludo", (req, res) => {
    res.send("Hola, te estamos saludando!");
})
app.listen(port, () => {
    console.log("Servidor activo: " + port);
}) */


// Objeto Request params
/* import express from "express"

const app = express();
const port = 8080;
app.get("/usuario/:nombre", (req, res) => {
    //let usuario = req.params.nombre;
    let {nombre} = req.params;
    res.send("Tu usuario es: <b>" + nombre.toUpperCase() + "</b>");
})
app.get("/usuario/:nombre/:apellido", (req, res) => {
    let {nombre, apellido} = req.params;
    res.send("Tu nombre es: <b>" + nombre.toUpperCase() + ", " + apellido.toLocaleUpperCase() + "</b>");
})
app.listen(port, () => {
    console.log("Servidor activo: " + port);
}) */


// Objeto Request query
import express from "express"

const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));

app.get("/usuario", (req, res) => {
    //let nombre = req.query.nombre;
    //let apellido = req.query.apellido;
    //let email = req.query.email;
    let {nombre, apellido, email} = req.query;

    if (!nombre) {
        res.send("Error! Falta el campo Nombre");
    }

    if (!apellido) {
        res.send("Error! Falta el campo Apellido");
    }

    if (!email) {
        res.send("Error! Falta el campo Email");
    }

    res.send(`Tus datos son: <b>${nombre} ${apellido} (${email})</b>`);
})
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})