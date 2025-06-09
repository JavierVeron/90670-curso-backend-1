import {Router} from "express"
import { uploader } from "../utils.js";

export const userRouter = Router();

userRouter.use(function (req, res, next) {
    console.log("Estoy dentro del Router!");
    next();
})

const users = [
    {id:1, nombre:"Gaston Stremi"},
    {id:2, nombre:"Augusto Noriega"},
    {id:3, nombre:"Darío Castro"}
];

userRouter.get("/", md1, (req, res) => {
    res.send(users)
})

userRouter.get("/:id", md1, md2, (req, res) => {
    const {id} = req.params;
    const user = users.find(item => item.id == id);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send({status:"error", message:"No existe el Usuario ingresado!"});
    }
})

userRouter.post("/", uploader.single("file"), (req, res) => {
    console.log(req.file);
    /* if (!req.file) {
        res.status(400).send({status:"error", message:"No existe el archivo!"});
    } else {
        
    } */

    const id = users.length + 1;
    const {nombre} = req.body;
    const newUser = {id:id, nombre:nombre};
    users.push(newUser);

    if (newUser) {
        res.send(newUser);
    } else {
        res.status(400).send({status:"error", message:"Error! No se pudo crear el Usuario!"});
    }
})

function md1 (req, res, next) {
    console.log("Middleware #1");
    next();
}

function md2 (req, res, next) {
    console.log("Middleware #2");
    next();
}

userRouter.post("/images")