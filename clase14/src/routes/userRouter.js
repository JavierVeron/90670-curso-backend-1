import { Router } from "express";
import { userModel } from "../models/userModel.js";

const userRouter = Router();
userRouter.get("/", async (req, res) => {
    const users = await userModel.find();
    res.send({status:"OK", data:users})
})
userRouter.post("/", async (req, res) => {
    try {
        const {nombre, apellido, email} = req.body;

        if (!nombre) {
            res.status(400).send({status:"Error", message:"Complete el campo Nombre!"});    
        }

        if (!apellido) {
            res.status(400).send({status:"Error", message:"Complete el campo Apellido!"});    
        }

        if (!email) {
            res.status(400).send({status:"Error", message:"Complete el campo Email!"});    
        }

        const user = await userModel.create({nombre, apellido, email});
        res.send({status:"OK", data:user, message:"Usuario creado!"});
    } catch (error) {
        res.status(400).send({status:"Error", message:"Ya existe un Usuario con ese email!"});
    }
})
userRouter.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, apellido, email} = req.body;

        if (!nombre) {
            res.status(400).send({status:"Error", message:"Complete el campo Nombre!"});    
        }

        if (!apellido) {
            res.status(400).send({status:"Error", message:"Complete el campo Apellido!"});    
        }

        if (!email) {
            res.status(400).send({status:"Error", message:"Complete el campo Email!"});    
        }

        const user = await userModel.updateOne({_id:id}, req.body); 
        res.send({status:"OK", data:user, message:"Usuario modificado!"});
    } catch (error) {
        res.status(400).send({status:"Error", message:"Ya existe un Usuario con ese email!"});
    }
})
userRouter.delete("/:id", async (req, res) => {
    const {id} = req.params;
     const user = await userModel.deleteOne({_id:id}); 
    res.send({status:"OK", data:user, message:"Usuario eliminado!"});
})

export default userRouter