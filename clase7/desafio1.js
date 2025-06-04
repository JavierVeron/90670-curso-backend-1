import express from "express"

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})

let texto = {frase:"Curso de Backend"};

app.get("/api/frase", (req, res) => {
    res.send(texto);
})

app.get("/api/palabras/:pos", (req, res) => {
    const {pos} = req.params;
    const palabras = texto.frase.split(" ");

    res.send({buscada:palabras[pos-1]});
})

app.post("/api/palabras", (req, res) => {
    const {palabra} = req.body;
    const palabras = texto.frase.split(" ");
    texto.frase = texto.frase + " " + palabra;

    res.send({agregada:palabra, pos:(palabras.length+1)});
})

app.put("/api/palabras/:pos", (req, res) => {
    const {pos} = req.params;
    const {palabra} = req.body;
    const palabras = texto.frase.split(" ");
    const palabraAnterior = palabras[pos-1];
    palabras[pos-1] = palabra;
    texto.frase = palabras.join(" ");

    res.send({actualizada:palabra, anterior:palabraAnterior});
})

app.delete("/api/palabras/:pos", (req, res) => {
    const {pos} = req.params;
    const palabras = texto.frase.split(" ");
    const palabraAnterior = palabras[pos-1];
    const palabrasActualizada = palabras.filter(item => item != palabraAnterior)
    texto.frase = palabrasActualizada.join(" ");

    res.send({texto});
})