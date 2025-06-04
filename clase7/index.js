import express from "express"

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})

let productos = [
    {id:1, nombre:"Hamburguesa", descripcion:"El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar", precio:6000, categoria:"hamburguesas"},
    {id:2, nombre:"Hamburguesa con Queso", descripcion:"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", precio:8000, categoria:"hamburguesas"},
    {id:3, nombre:"McPollo", descripcion:"El auténtico sabor del pollo lo encontrás en nuestro clásico McPollo. Una hamburguesa que sabe de sensaciones. La textura del pollo hace un gran equipo con la suavidad de la mayonesa y un colchón de lechuga.", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcXQzmQj/200/200/original?country=ar", precio:7000, categoria:"pollo"},
    {id:4, nombre:"McCrispy Chicken Deluxe", descripcion:"El más rico y crujiente pollo crispy, tomate, lechuga y mayonesa acompañado con pan de papa.", imagen:"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$ktXfGUzp/200/200/original?country=ar", precio:9000, categoria:"pollo"}
]

app.get("/api/productos", (req, res) => {
    res.send(productos);
})

app.get("/api/productos/:id", (req, res) => {
    const {id} = req.params;
    const producto = productos.find(item => item.id == id);

    if (producto) {
        res.send(producto);
    } else {
        res.status(404).send({status:"error", message:"No se encontró el producto!"});
    }
})

app.post("/api/productos", (req, res) => {
    const {nombre ,descripcion, imagen, precio, categoria} = req.body;
    const id = productos.length + 1;
    const producto = {id:id, nombre:nombre, descripcion:descripcion, imagen:imagen, precio:precio, categoria:categoria};
    productos.push(producto);
    res.status(201).send(producto);
})

app.put("/api/productos/:id", (req, res) => {
    const {id} = req.params;
    const {nombre ,descripcion, imagen, precio, categoria} = req.body;
    const producto = productos.find(item => item.id == id);

    if (producto) {
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.imagen = imagen;
        producto.precio = precio;
        producto.categoria = categoria;
        res.send(producto);
    } else {
        res.status(404).send({status:"error", message:"No se encontró el producto!"});
    }
})

app.delete("/api/productos/:id", (req, res) => {
    const {id} = req.params;
    const producto = productos.find(item => item.id == id);
    
    if (producto) {
        productos = productos.filter(item => item.id != id);
        res.send(productos);
    } else {
        res.status(404).send({status:"error", message:"No se encontró el producto!"});
    }
})