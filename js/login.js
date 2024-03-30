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
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Agregamos el usuario admin por defecto si no hay usuarios en el almacenamiento local
    if (usuarios.length === 0) {
        usuarios.push({
            email: "admin@mail.com",
            password: "admin"
        });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    return usuarios;
}

const usuariosLS = recuperarLS();

formIngresar.addEventListener("submit", (e) => {
    inicioSesion(usuariosLS);
    e.preventDefault();
    console.log(e);
})