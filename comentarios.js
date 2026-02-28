// Seleccionamos el formulario y el contenedor de comentarios
const form = document.getElementById("formComentario");
const comentariosDiv = document.getElementById("comentarios");

// Escuchamos el evento "submit" del formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se recargue

  // Obtenemos el texto del comentario
  const texto = document.getElementById("textoComentario").value;

  // Validamos que no esté vacío
  if (texto.trim() === "") {
    alert("Por favor escribe un comentario.");
    return;
  }

  // Creamos un nuevo div para el comentario
  const nuevoComentario = document.createElement("div");
  nuevoComentario.classList.add("comentario");

  // Fecha y hora actual
  const fecha = new Date().toLocaleString();

  // Contenido del comentario
  nuevoComentario.innerHTML = `
    <p>${texto}</p>
    <p class="fecha">Publicado el: ${fecha}</p>
    <span class="eliminar">Eliminar</span>
  `;

  // Agregamos el comentario al contenedor
  comentariosDiv.appendChild(nuevoComentario);

  // Limpiamos el campo de texto
  document.getElementById("textoComentario").value = "";

  // Evento para eliminar comentario
  nuevoComentario.querySelector(".eliminar").addEventListener("click", function() {
    comentariosDiv.removeChild(nuevoComentario);
  });
});