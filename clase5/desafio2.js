const fs = require("fs");

const proceso = async () => {
    try {
        let contenido = await fs.promises.readFile("package.json", "utf-8");
        //console.log(contenido);
        let informacionArchivo = await fs.promises.stat("package.json");
        //console.log(informacion.size);
        const info = {
            contenidoStr:contenido,
            contenidoObj:JSON.parse(contenido),
            size:informacionArchivo.size
        }
        console.log(info);
        await fs.promises.writeFile("info.json", JSON.stringify(info));
        console.log("Archivo guardado!");
    } catch (error) {
        console.log("Error: " + error);
    }
}

proceso();