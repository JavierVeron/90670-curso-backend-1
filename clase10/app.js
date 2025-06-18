import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use("/", viewsRouter);
const httpServer = app.listen(port, () => {
    console.log("Servidor activo: " + port);
})
const socketServer = new Server(httpServer);
socketServer.on("connection", socket => {
    console.log("Nuevo Cliente conectado!")

    /* // Recibir un mensaje del canal "mensaje"
    socket.on("mensaje", mensaje => {
        console.log(mensaje);
        // Emitir un mensaje del canal "mensaje"
        socket.emit("mensaje", `Hola <b>${mensaje.nombre}</b>, recibimos tu mensaje. Muchas gracias!`);
    })

    setTimeout(() => {
        socket.emit("texto", "Querías hacernos alguna consulta?");
    }, 3000)

    setTimeout(() => {
        socket.emit("texto", "Es gratis!");
    }, 5000)

    socket.broadcast.emit("mensaje_para_todos", "Hay un [nuevo] Usuario conectado!"); */


    // Desafio #1
    /* socket.on("socket_server", mensaje => {
        socket.broadcast.emit("mensaje_para_todos", mensaje);
    }); */


    // Desafio #2
    const mensajes = [];
    socket.broadcast.emit("mensaje_para_todos", mensajes);
    socket.on("mensaje", mensaje => {
        if (mensaje) {
            const id = mensajes.length + 1
            mensajes.push({socketId:id, mensaje:mensaje});        
            socket.broadcast.emit("mensaje_para_todos", mensajes);
        }
    });
})