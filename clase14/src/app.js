import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import estudianteRouter from "./routes/estudianteRouter.js";
import { estudianteModel } from "./models/estudianteModel.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})
app.use("/api/users", userRouter);
app.use("/api/estudiantes", estudianteRouter);

// Importar los 10 estudiantes
/* estudianteModel.insertMany([
    { nombre: 'Juan', apellido: 'Pérez', edad: 20, dni: '12345678', curso: 'Matemáticas', nota: 8 },
    { nombre: 'María', apellido: 'González', edad: 22, dni: '23456789', curso: 'Física', nota: 9 },
    { nombre: 'Pedro', apellido: 'Martínez', edad: 19, dni: '34567890', curso: 'Química', nota: 7 },
    { nombre: 'Ana', apellido: 'López', edad: 21, dni: '45678901', curso: 'Historia', nota: 10 },
    { nombre: 'Luis', apellido: 'Gómez', edad: 23, dni: '56789012', curso: 'Literatura', nota: 6 },
    { nombre: 'Sofía', apellido: 'Díaz', edad: 20, dni: '67890123', curso: 'Biología', nota: 8 },
    { nombre: 'Carlos', apellido: 'Sánchez', edad: 22, dni: '78901234', curso: 'Filosofía', nota: 9 },
    { nombre: 'Lucía', apellido: 'Romero', edad: 19, dni: '89012345', curso: 'Arte', nota: 7 },
    { nombre: 'Diego', apellido: 'Torres', edad: 21, dni: '90123456', curso: 'Música', nota: 10 },
    { nombre: 'Valentina', apellido: 'Molina', edad: 20, dni: '01234567', curso: 'Programación', nota: 8 }
]) */

mongoose.connect("mongodb+srv://javierveron:Javier123!@cluster0.dlm8a08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")