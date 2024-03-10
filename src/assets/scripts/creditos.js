//Función para activar y desactivar elementos al hacer clic en ellos

function onIniciar() {
  const accesibilidadIcon = document.querySelector(".accesibilidad");

  //Creamos el evento en caso de que se le haga clic al icono
  accesibilidadIcon.addEventListener("click", function () {
    //Cambiamos la fuente del body
    body.style.fontFamily = "'OpenDyslexic3-Regular', Arial, sans-serif";
    body.style.fontSize = "0.8em";
  });

  const hora = new Date().getHours();
  const body = document.querySelector("body");

  if (hora >= 6 && hora < 18) {
    //Si la hora es mayor o igual que las 6 de la mañana pero menor que las 6 de la tarde se muestra el fondo de día
    body.classList.add("fondoDia");
  } else {
    //De  lo contrario, se muestra el fondo de noche
    body.classList.add("fondoNoche");
    body.style.color = "#FECA04";

    // Selecciona todos los enlaces y cambia su color a blanco
    const enlaces = document.querySelectorAll("a");
    enlaces.forEach((enlace) => {
      enlace.style.color = "white";
    });
  }

  //Código del Acordeón
  //1º Seleccionamos todos los elementos sobre los que queremos trabajar
  //h2Titulo es sobre el que haremos clic
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo");
  //pContenido es el que modificaremos
  const pContenido = document.querySelectorAll(".divContenedor__contenido");

  h2Titulo.forEach((nodo, i) => {
    nodo.addEventListener("click", () => {
      if (
        pContenido[i].classList.contains("divContenedor__contenido--activo")
      ) {
        pContenido[i].classList.remove("divContenedor__contenido--activo");
        pContenido[i].querySelector(".imagenContenido").style.display = "none"; // Oculta la imagen
      } else {
        pContenido[i].classList.add("divContenedor__contenido--activo");
        pContenido[i].querySelector(".imagenContenido").style.display = "block"; // Muestra la imagen
      }
    });
  });
}

window.onload = onIniciar();
