const socket = io();
/* // Emitir un mensaje de texto
//socket.emit("mensaje", "Hola, estoy en el Curso de Backend de Coderhouse!");

// Emitir un objeto
socket.emit("mensaje", {id:1, nombre:"Carolina", apellido:"Bargas"});

// Recibir para el canal "mensaje"
socket.on("mensaje", mensaje => {
    document.getElementById("bienvenida").innerHTML = mensaje;
});

socket.on("texto", mensaje => {
    document.getElementById("texto").innerHTML = mensaje;
});

socket.on("mensaje_para_todos", texto => {
    console.log(texto);   
}); */


// Desafio #1
/* const textoEnviado = document.getElementById("textoEnviado")
textoEnviado.oninput = () => {    
    socket.emit("socket_server", textoEnviado.value);
}

socket.on("mensaje_para_todos", texto => {
    document.getElementById("textoRecibido").innerHTML = texto
}) */


// Desafio #2
const textoEnviado = document.getElementById("textoEnviado");
const enviarMensaje = () => {
    socket.emit("mensaje", textoEnviado.value);
    textoEnviado.value = "";
}

socket.on("mensaje_para_todos", mensajes => {    
    const lista = document.getElementById("mensajes");
    lista.innerHTML = "";

    for (const item of mensajes) {
        const elemento = document.createElement("li");
        elemento.className = "list-group-item";
        elemento.innerHTML = `${item.socketId}- ${item.mensaje}`;
        lista.appendChild(elemento);
    }
})