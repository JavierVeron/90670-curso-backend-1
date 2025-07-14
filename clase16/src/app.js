import express from "express"
import mongoose from "mongoose";
import cursoRouter from "./routes/cursoRouter.js";
import estudianteRouter from "./routes/estudianteRouter.js";
import { estudianteModel } from "./models/estudianteModel.js";
import { cursoModel } from "./models/cursoModel.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})

app.use("/api/cursos", cursoRouter);
app.use("/api/estudiantes", estudianteRouter);

const enviroment = async () => {
    await mongoose.connect("mongodb+srv://javierveron:Javier123!@cluster0.dlm8a08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    // Buscamos al estudiante
    /* const estudiante = await estudianteModel.findOne({_id:"6874fafbe657383514c0d572"});
    console.log(estudiante);
    const curso = await cursoModel.findOne({_id:"6874f59f652b4f2333845e40"});
    console.log(curso);
    estudiante.cursos.push({curso:"6874f59f652b4f2333845e40"});
    estudiante.cursos.push({curso:"6874f5ca652b4f2333845e42"});
    const resultado = await estudianteModel.updateOne({_id:"6874fafbe657383514c0d572"}, estudiante);

    if (resultado) {
        console.log("Estudiante actualizado!");
    } */

    /* const estudiante = await estudianteModel.findOne({_id:"6874fb0be657383514c0d574"});
    console.log(estudiante);
    const curso = await cursoModel.findOne({_id:"6874f59f652b4f2333845e40"});
    console.log(curso);
    estudiante.cursos.push({curso:"6874f5fb652b4f2333845e44"});
    const resultado = await estudianteModel.updateOne({_id:"6874fb0be657383514c0d574"}, estudiante);

    if (resultado) {
        console.log("Estudiante actualizado!");
    } */

    // Realizamos la populación
    /* const estudiante = await estudianteModel.find().populate("cursos.curso");
    console.log(JSON.stringify(estudiante, null, "\t")); */

    // Realizamos la consulta de documentos sin la populación (agregada al Modelo)
    const estudiante = await estudianteModel.find();
    console.log(JSON.stringify(estudiante, null, "\t"));
}

enviroment();