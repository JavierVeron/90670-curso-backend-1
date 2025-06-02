import express from "express"

const app = express();
const port = 8080;
const usuarios = [
    {id:1, nombre:"Dario", apellido:"Castro", email:"dariocastro@gmail.com"},
    {id:2, nombre:"Augusto", apellido:"Noriega", email:"auguston@gmail.com"},
    {id:3, nombre:"Jonanthan", apellido:"Irigoitia", email:"jonai@gmail.com"},
    {id:4, nombre:"Yanina", apellido:"Andregnette", email:"yania@gmail.com"}
]

app.get("/usuarios", (req, res) => {
    res.send(usuarios);
})
app.get("/usuarios/:userId", (req, res) => {
    const {userId} = req.params;
    const usuario = usuarios.find(item => item.id == userId);

    if (usuario) {
        res.send(usuario);
    } else {
        res.send({estado:"ERROR", mensaje:"No se encontró el Usuario!"});
    }
})
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})