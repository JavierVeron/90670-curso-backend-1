import { Router } from "express";
import { estudianteModel } from "../models/estudianteModel.js";

const estudianteRouter = Router();
estudianteRouter.get("/", async (req, res) => {
    const estudiantes = await estudianteModel.find();
    res.send({status:"OK", data:estudiantes})
})
estudianteRouter.post("/", async (req, res) => {
    try {
        const estudiante = await estudianteModel.create(req.body);
        res.send({status:"OK", data:estudiante, message:"Estudiante creado!"});
    } catch (error) {
        res.status(400).send({status:"Error", message:"Algunos campos pueden ser faltantes o repetidos!"});
    }
})
estudianteRouter.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const estudiante = await estudianteModel.updateOne({_id:id}, req.body); 
        res.send({status:"OK", data:estudiante, message:"Estudiante modificado!"});
    } catch (error) {
        res.status(400).send({status:"Error", message:"Ya existe un Usuario con ese email!"});
    }
})
estudianteRouter.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const estudiante = await estudianteModel.deleteOne({_id:id}); 
    res.send({status:"OK", data:estudiante, message:"Estudiante eliminado!"});
})

export default estudianteRouter