const handleSubmit = () => {
    const nombre = document.getElementById("nombre");
    const nombreError = document.getElementById("nombreError");
    const tipo = document.getElementById("tipo");

    if (nombre.value == "") {
        nombreError.innerHTML = "Error! Complete el campo Nombre!";
        nombreError.className = "text-danger";
        return false;
    } else {
        nombreError.innerHTML = "";
    }

    fetch("http://localhost:8080/api/pets", {
        method:"post",
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({nombre:nombre.value, tipo:tipo.value})
    })
    .then(response => response.json())
    .then(data => {
        let mensaje = data.id ? `<div class="alert alert-success" role="alert">La mascota se agregó correctamente!</div>` : `<div class="alert alert-danger" role="alert">Error! No se pudo agregar la mascota!</div>`;
        document.getElementById("respuesta").innerHTML = mensaje;
        cargarMascotas();    
    })
}

const cargarMascotas = () => {
    fetch("http://localhost:8080/api/pets")
    .then(response => response.json())
    .then(data => {
        let contenidoHTML;

        if (data.length == 0) {
            contenidoHTML = `<div class="alert alert-danger" role="alert">No hay Mascotas!</div>`;
        } else {
            contenidoHTML = `<ul class="list-group">`;
    
            data.forEach(item => {
                contenidoHTML += `<li class="list-group-item">${item.nombre} <i>${item.tipo}</i></li>` 
            });
    
            contenidoHTML += `</ul>`;
        }
        
        document.getElementById("contenido").innerHTML = contenidoHTML;
    })
}

cargarMascotas();