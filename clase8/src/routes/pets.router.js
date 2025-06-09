import {Router} from "express"

export const petsRouter = Router();

let pets = [];

petsRouter.get("/", (req, res) => {
    res.send(pets);
})

petsRouter.get("/:id", (req, res) => {
    const {id} = req.params;
    const pet = pets.find(item => item.id == id);

    if (pet) {
        res.send(pet);
    } else {
        res.status(404).send({status:"error", message:"No existe la Mascota ingresada!"});
    }
})

petsRouter.post("/", (req, res) => {
    if (req.body) {
        const id = pets.length + 1;    
        let {nombre, tipo} = req.body;
        nombre = nombre.trim();

        if (nombre == "") {
            res.status(404).send({status:"error", message:"Complete el Campo Nombre!"});
        }

        const newPet = {id:id, nombre:nombre, tipo:tipo};
        pets.push(newPet);
        res.send(newPet);
    } else {
        res.status(404).send({status:"error", message:"No se enviaron datos en el Body!"});
    }
})

petsRouter.put("/:id", (req, res) => {
    const {id} = req.params;
    const pet = pets.find(item => item.id == id);

    if (pet) {
        if (req.body) {
            const {nombre, tipo} = req.body;
            pet.nombre = nombre;
            pet.tipo = tipo;
            res.send(pet);
        } else {
            res.status(404).send({status:"error", message:"No se enviaron datos en el Body!"});
        }
    } else {
        res.status(404).send({status:"error", message:"No existe la Mascota ingresada!"});
    }
})

petsRouter.delete("/:id", (req, res) => {
    const {id} = req.params;
    const pet = pets.find(item => item.id == id);

    if (pet) {
        pets = pets.filter(item => item.id != id);
        res.send({status:"ok", message:"Se eliminó la Mascota #" + id + "!"});
    } else {
        res.status(404).send({status:"error", message:"No existe la Mascota ingresada!"});
    }
})