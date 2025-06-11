import express from "express"

const usersRouter = express.Router();
const users = [];

usersRouter.get("/", (req, res) => {
    res.send(users)
});

usersRouter.post("/", (req, res) => {
    const {nombre, correo, contrasena} = req.body;
    const user = {nombre, correo, contrasena}
    users.push(user);
    res.send({estado:"ok", message:"El usuario se agregó correctamente!"});
});

export default usersRouter