let productos = [];

const getData = async (url) => {
    const respuesta = await fetch (url);
    const datos = await respuesta.json()
    productos = datos;
    cargarProductos(productos);
}

getData("../js/abogados.json")

const contenedorProductos = document.querySelector("#contenedor-productos");
const btnTodos =document.querySelector("#btnTodos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-titulo text-center p-2">${producto.nombre.toUpperCase()}</h3>
                <p class="producto-precio text-center mb-2">DERECHO ${producto.especialidad.toUpperCase()}</p>
                <button class="producto-agregar" id="${producto.id}">Agendar</button>
            </div>

            
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}



// Botonos para filtrado de especialidades


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const productosBoton = productos.filter(producto => producto.especialidad == e.currentTarget.id)
        cargarProductos(productosBoton)
    })
});


// Boton de todos

btnTodos.addEventListener("click",() => {
    cargarProductos(productos)
})


//Funcion para botones de agregado

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


const productosEnCarrito = [];

function agregarAlCarrito(e) {

// Popup de mensaje de agregado 

Toastify({
    text: "Servicio agregado a tu agenda",
    duration: 3000,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
    },
    offset: {
        x: '1.5rem', 
        y: '1.5rem' 
    },

    onClick: function(){} // Callback after click

}).showToast();

//  FIN DEL POPUP

//Funcion de agregar al carrito


    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    productoAgregado.cantidad=1;
    productosEnCarrito.push(productoAgregado);  
    
    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    }

    function actualizarNumero() {
        let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numero.innerText = nuevoNumero;
    }