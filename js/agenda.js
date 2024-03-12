const btnSearch = document.querySelector("#btnSearch"),
btnClear = document.querySelector("#btnClear"),
btnSelect = document.querySelector("#btnSelect"),
btnAgenda = document.querySelector("#id"),
inputIngreso = document.querySelector("#ingreso"),
contenedor = document.querySelector("#contenedor");
const inputUser = document.querySelector("#user");




const servicios = [
    { id: 1, nombre: "Herman Villalobos", especialidad: "civil", img: "Abogado1.jpg", link:"https://calendly.com/hjvillalobosl/30-minute-meeting-clone"},
    { id: 2, nombre: "Marcos Linares", especialidad: "laboral", img: src="Abogado3.jpg", link:"https://calendly.com/hjvillalobosl/marcos-linares" },
    { id: 3, nombre: "Marly Urdaneta", especialidad: "civil", img: "istockphoto-1393750072-612x612.jpg", link:"https://calendly.com/hjvillalobosl/marly-urdaneta" },
    { id: 4, nombre: "Tomas Yepez", especialidad: "laboral", img: "istockphoto-1393750072-612x612.jpg", link:"https://calendly.com/hjvillalobosl/tomas-yepez" },
    { id: 5, nombre: "Natalia Cuomo", especialidad: "civil", img: "Abogado2.jpg", link:"https://calendly.com/hjvillalobosl/natalia-cuomo" },
    { id: 6, nombre: "Andrea Urdaneta", especialidad: "penal", img: "Abogado4.jpg", link:"https://calendly.com/hjvillalobosl/andrea-urdaneta" },
    { id: 7, nombre: "Jose Jimenez", especialidad: "migratorio", img: "istockphoto-1393750072-612x612.jpg", link:"https://calendly.com/hjvillalobosl/jose-jimenez" },
];

// Función para crear estructura html de la carta
function crearHtml(arr) {
  contenedor.innerHTML = "";
  let html;
  for (const el of arr) {
  html = `<div class="card">
              <img src="../image/${el.img}" alt="${el.nombre}">
              <hr>
              <h3>${el.nombre}</h3>
              <p>Especialidad: ${el.especialidad} </p>
                  <div class="card-action">
                  <a href="${el.link}" class="btn btn-success" target="_blank">Agendar</a>
                  </div>
          </div>`;
  //Agrega al contenerdor la carta
  contenedor.innerHTML = contenedor.innerHTML + html;
}
}

crearHtml(servicios);

//Funciones de búsqueda

function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
    return el.especialidad.includes(filtro.toLowerCase());
});
    return filtrado;
}


//Eventos Filtrado y clear

btnSearch.addEventListener("click", () => {
  const filtrado = filtrarServicio(servicios, inputIngreso.value);
  crearHtml(filtrado);
});


btnClear.addEventListener("click", () => {
  crearHtml(servicios);
});



