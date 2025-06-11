const registrarUsuario = () => {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    fetch("http://localhost:8080/api/users/", {
        method:"POST",
        headers:{'Content-type':'application/json; charset=UTF-8'},
        body:JSON.stringify({nombre, correo, contrasena})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultado").innerHTML = `<div class="alert alert-primary text-center" role="alert">${data.message}</div>`;
    })
}