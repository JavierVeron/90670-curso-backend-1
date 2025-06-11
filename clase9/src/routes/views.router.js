import express from "express"

const viewsRouter = express.Router();
viewsRouter.get("/", (req, res) => {
    const usuarios = [
        {nombre:"Darío", apellido:"Castro", edad:25, email:"darioc@gmail.com"},
        {nombre:"Walter", apellido:"Meza", edad:24, email:"walterm@gmail.com"},
        {nombre:"Yanina", apellido:"Andregnette", edad:23, email:"yania@gmail.com"},
        {nombre:"Gastón", apellido:"Stremi", edad:25, email:"darioc@gmail.com"},
        {nombre:"Augusto", apellido:"Noriega", edad:17, email:"auguston@gmail.com"}
    ]
    const numeroRandom = Math.floor(Math.random() * 5);
    const usuario = {nombre:usuarios[numeroRandom].nombre, apellido:usuarios[numeroRandom].apellido, role:"user", estilo:"estilo_user.css"};
    const productos = [
        {id:1, nombre:"Hamburguesa", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar", precio:6000},
        {id:1, nombre:"Hamburguesa con Queso", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", precio:7000},
        {id:1, nombre:"McFiesta", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar", precio:8000},
        {id:1, nombre:"Doble Carne Doble Queso", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$krXm2g5T/200/200/original?country=ar", precio:9000},
        {id:1, nombre:"Triple Hamburguesa con Queso", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXsCqnz/200/200/original?country=ar", precio:10000}
    ]

    res.render("index", {usuario:usuario, esAdmin:(usuario.role == "admin") ? true : false, productos:productos, estilo:usuario.estilo});
})

viewsRouter.get("/register", (req, res) => {
    res.render("register")
})

export default viewsRouter