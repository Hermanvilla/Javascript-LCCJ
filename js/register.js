const formRegister = document.querySelector("#formReg"),
    email = document.querySelector("#email"),
    nombre = document.querySelector("#nombre"),
    passReg = document.querySelector("#passReg"),
    btnRegistrate = document.querySelector("#registrate");
	p = document.querySelector("#mensaje")

let usuarios = JSON.parse(localStorage.getItem ("usuarios")) || [];

//Construir usuario

class Usuario {
    constructor (nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    adminDefault() {
        return new Usuario("Admin", "admin@mail.com", "admin");
    }

}

//Guardar en LS
function guardarEnLS(arr) {
    return localStorage.setItem("usuarios", JSON.stringify(arr));
}

//Evento

formRegister.addEventListener("submit", (e) => {
    if (usuarios.some(user => user.email === email.value)) {
        e.preventDefault();
        document.querySelector("#mensaje").innerHTML="Email ya registrado"
        return;
    }else{
		document.querySelector("#mensaje").innerHTML="Registro Existoso. Por favor, inicie sesion."
	}
    const newUser= new Usuario(nombre.value, email.value, passReg.value);
    usuarios.push(newUser);
    guardarEnLS(usuarios); 
    formRegister.reset();
    
});

