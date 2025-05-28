const fs = require("fs");

class UsersManager {
    constructor() {
        this.archivo = "Usuarios.json",
        this.usuarios = []
    }

    async crearUsuario(nombre, apellido, edad, curso) {
        const usuario = {nombre, apellido, edad, curso};
        
        if (fs.existsSync(this.archivo)) {
            this.usuarios = JSON.parse(await fs.promises.readFile(this.archivo, "utf-8"));
        }

        this.usuarios.push(usuario);
        await fs.promises.writeFile(this.archivo, JSON.stringify(this.usuarios));
    }

    async consultarUsuarios() {
        let contenido = JSON.parse(await fs.promises.readFile(this.archivo, "utf-8"));
        
        console.log(contenido);
    }
}

const UM = new UsersManager();
UM.crearUsuario("Dario", "Castro", 25, "Backend I");
UM.crearUsuario("Jonanthan", "Irigoitia", 26, "Backend I");
UM.crearUsuario("Augusto", "Noriega", 19, "Backend I");
UM.consultarUsuarios();
