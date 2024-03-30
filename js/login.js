const formIngresar = document.querySelector("#login"),
    userInput = document.querySelector("#user"),
    passInput = document.querySelector("#password"),
    p = document.querySelector("#mensajeLog")

function inicioSesion(usuarios) {
    let userFound =usuarios.find((usuario) => {
        return usuario.email == userInput.value && usuario.password == passInput.value;
    });

    if (userFound) {
        if (userFound.password === passInput.value) {
            // Contraseña correcta, redirigir al usuario a la página de la agenda
            location.href = '../pages/agenda.html';
        } else {
            // Contraseña incorrecta
            document.querySelector("#mensajeLog").innerHTML = "Contraseña incorrecta";
        }
    } else {  
        // Usuario no encontrado
        document.querySelector("#mensajeLog").innerHTML = "Usuario no encontrado";
    }
}

function recuperarLS() {
    return JSON.parse(localStorage.getItem("usuarios"));
}

const usuariosLS = recuperarLS();

formIngresar.addEventListener("submit", (e) => {
    inicioSesion(usuariosLS);
    e.preventDefault();
    console.log(e);
})