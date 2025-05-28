const fs = require("fs");
const NOMBRE_ARCHIVO = "archivo.txt";

// Fs Síncrono
/* fs.writeFileSync(NOMBRE_ARCHIVO, "Hola Coders, estamos viendo archivos!\n"); // Crear un archivo
//fs.writeFileSync(NOMBRE_ARCHIVO, JSON.stringify({id:1, nombre:"Coca Cola", precio:3500}));

if (fs.existsSync(NOMBRE_ARCHIVO)) {
    console.log("Existe el archivo!");
    
    let contenido = fs.readFileSync(NOMBRE_ARCHIVO, "utf-8"); // Leer un archivo
    console.log(contenido);
    fs.appendFileSync(NOMBRE_ARCHIVO, "Más contenido de OF!\n"); // Editar un archivo (edito y agrego contenido)
    fs.appendFileSync(NOMBRE_ARCHIVO, "Más contenido de Cafecito, Tecito y Matecito!\n");
    contenido = fs.readFileSync(NOMBRE_ARCHIVO, "utf-8");
    console.log(contenido);
    contenido = contenido.split("\n");
    contenido[1] = "Sigan al OF de @JonanthanIrigoitia";
    console.log(contenido);
    contenido = contenido.join(",").replaceAll(",", "\n");
    console.log(contenido);
    
    fs.writeFileSync(NOMBRE_ARCHIVO, contenido); // Crear un archivo
    
    //fs.unlinkSync(NOMBRE_ARCHIVO); // elimino un archivo
} else {
    console.log("No existe el archivo!");
} */


// Fs Asíncrono con Collbacks
/* fs.writeFile(NOMBRE_ARCHIVO, "Hola Coders, estamos viendo archivos! (callbacks)\n", (error) => {
    if (error) {
        console.log("Error! No se pudo escribir el archivo!");
        return false;
    }

    console.log("Se creó el archivo!");

    fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, contenido) => {
        console.log(contenido);

        fs.appendFile(NOMBRE_ARCHIVO, "Más contenido de OF!\n", (error) => {
            console.log("Se actualizó el archivo!");
            
            fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, contenido) => {
                console.log(contenido);

                fs.unlink(NOMBRE_ARCHIVO, () => {
                    console.log("Se eliminó el archivo!");
                });
            });
        });
    });
}); */


// Fs Asíncrono con Promesas
// Opción #1 utilizando .then() .catch()
/* fs.promises.writeFile(NOMBRE_ARCHIVO, "Hola Coders, estamos viendo archivos! (promesas)\n")
.then(resultado => {
    console.log("Se creó el archivo!");
    
})
.catch(error => {
    console.log("Error! No se pudo escribir el archivo!");
}) */

// Opción #2 utilizando una función async
const proceso = async () => {
    await fs.promises.writeFile(NOMBRE_ARCHIVO, "Hola Coders, estamos viendo archivos! (promesas)\n");
    let contenido = await fs.promises.readFile(NOMBRE_ARCHIVO, "utf-8");
    console.log(contenido);
    await fs.promises.appendFile(NOMBRE_ARCHIVO, "Más contenido de OF!\n");
    contenido = await fs.promises.readFile(NOMBRE_ARCHIVO, "utf-8");
    console.log(contenido);
    await fs.promises.unlink(NOMBRE_ARCHIVO);
}

proceso();