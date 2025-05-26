import crypto from 'node:crypto';

class UsersManager {
    static usuarios = [];

    encriptarContrasena(contrasena) {
        return crypto.createHash('sha256').update(contrasena).digest('hex');
    }

    crearUsuario(nombre, apellido, usuario, contrasena) {
        const contrasenaEncriptada = this.encriptarContrasena(contrasena);
        const nuevoUsuario = {nombre, apellido, usuario, contrasena:contrasenaEncriptada};
        UsersManager.usuarios.push(nuevoUsuario);
    }

    mostrarUsuarios() {
        console.log(UsersManager.usuarios);
    }

    validarUsuario(usuario, contrasena) {
        const usuarioExistente = UsersManager.usuarios.find(item => item.usuario == usuario);

        if (usuarioExistente) {
            const contrasenaEncriptada = this.encriptarContrasena(contrasena);

            if (usuarioExistente.contrasena == contrasenaEncriptada) {
                console.log("Usuario logueado!");
            } else {
                console.log("No coincide la contraseña ingresada!");
            }
        } else {
            console.log("No existe el usurio ingresado!");
        }        
    }
}

const UM = new UsersManager();
UM.crearUsuario("Augusto", "Noriega", "august", "crack111");
UM.crearUsuario("Carolina", "Bargas", "carob", "crack222");
UM.crearUsuario("Dario", "Castro", "daroc", "crack333");
UM.mostrarUsuarios();
UM.validarUsuario("august", "crack111"); 
UM.validarUsuario("augus", "crack123");
UM.validarUsuario("august", "crack124");