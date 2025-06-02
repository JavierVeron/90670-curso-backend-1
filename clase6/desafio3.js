import express from "express"

const app = express();
const port = 8080;
const usuarios = [
    {id:1, nombre:"Dario", apellido:"Castro", email:"dariocastro@gmail.com", genero:"M"},
    {id:2, nombre:"Augusto", apellido:"Noriega", email:"auguston@gmail.com", genero:"M"},
    {id:3, nombre:"Jonanthan", apellido:"Irigoitia", email:"jonai@hotmail.com", genero:"M"},
    {id:4, nombre:"Yanina", apellido:"Andregnette", email:"yania@gmail.com", genero:"F"},
    {id:5, nombre:"Virginia", apellido:"Gatti", email:"virginiag@gmail.com", genero:"F"}
]

app.get("/usuarios", (req, res) => {
    let {nombre, apellido, email, genero} = req.query;
    nombre = nombre ? nombre.toUpperCase() : "";
    apellido = apellido ? apellido.toUpperCase() : "";
    email = email ? email.toUpperCase() : ""
    genero = genero ? genero.toUpperCase() : "";

    if (genero) {
        if (genero == "M" || genero == "F") {
            const usuariosFiltro = usuarios.filter(item => item.genero == genero);

            if (nombre) {
                const usuariosFiltro2 = usuariosFiltro.filter(item => item.nombre.toUpperCase().includes(nombre));
                res.send(usuariosFiltro2);
            } else if (apellido) {
                const usuariosFiltro2 = usuariosFiltro.filter(item => item.apellido.toUpperCase().includes(apellido));
                res.send(usuariosFiltro2);
            } else if (email) {
                const usuariosFiltro2 = usuariosFiltro.filter(item => item.email.toUpperCase().includes(email));
                res.send(usuariosFiltro2);
            }

            res.send(usuariosFiltro);
        } else {
            res.send({estado:"ERROR", mensaje:"No se encontraron Usuarios!"});
        }
    } else if (nombre) {
        const usuariosFiltro = usuarios.filter(item => item.nombre.toUpperCase().includes(nombre));
        res.send(usuariosFiltro);
    } else if (apellido) {
        const usuariosFiltro = usuarios.filter(item => item.apellido.toUpperCase().includes(apellido));
        res.send(usuariosFiltro);
    } else if (email) {
        const usuariosFiltro = usuarios.filter(item => item.email.toUpperCase().includes(email));
        res.send(usuariosFiltro); 
    } else {
        res.send(usuarios);
    }
})
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})