import express from "express"

const app = express();
const port = 8080;
app.get("/bienvenida", (req, res) => {
    let contenido = "<div style='margin:0px; padding:25px; color:white; background-color:black; font-size:44px; font-style:italic; text-transformation:uppercase; font-weight:bold;'>CODERHOUSE</div>";
    res.send(contenido);
})
app.get("/usuario", (req, res) => {
    const usuario = {id:1, nombre:"Dario Castro", email:"dariocastro@gmail.com", onlyfans:"DarrrioC4str0"}
    res.send(usuario);
})
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})