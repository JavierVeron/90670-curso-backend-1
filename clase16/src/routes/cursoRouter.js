import { Router } from "express";
import { cursoModel } from "../models/cursoModel.js";

const cursoRouter = Router();
cursoRouter.get("/", async (req, res) => {
    const cursos = await cursoModel.find();
    res.send({status:"OK", data:cursos})
})
cursoRouter.post("/", async (req, res) => {
    try {
        console.log(req.body);
        
        const curso = await cursoModel.create(req.body);
        res.send({status:"OK", data:curso, message:"Curso creado!"});
    } catch (error) {
        res.status(400).send({status:"Error", message:"Hubo un Error en la creación del Curso!"});
    }
})
cursoRouter.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const curso = await cursoModel.updateOne({_id:id}, req.body); 
        res.send({status:"OK", data:curso, message:"Curso modificado!"});
    } catch (error) {
        res.status(400).send({status:"Error", message:"Error en la modificación del Curso!"});
    }
})
cursoRouter.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const curso = await cursoModel.deleteOne({_id:id}); 
    res.send({status:"OK", data:curso, message:"Curso eliminado!"});
})

export default cursoRouter