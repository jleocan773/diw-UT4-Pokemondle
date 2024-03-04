document.addEventListener("DOMContentLoaded", function () {
  //Funcionalidad de accesibilidad
  //Pillamos los diferentes elementos de la página para modificar diferentes propiedades
  const accesibilidadIcon = document.querySelector(".accesibilidad");
  const encabezadoModos = document.querySelector(".encabezadoModos");
  const body = document.querySelector("body");

  //Creamos el evento en caso de que se le haga clic al icono
  accesibilidadIcon.addEventListener("click", function () {
    //Cambiamos la fuente del body
    encabezadoModos.style.fontFamily =
      "'OpenDyslexic3-Regular', Arial, sans-serif";
    encabezadoModos.style.fontSize = "2.5em";
  });

  //Cambiamos el fondo según la hora del día
  const fecha = new Date();
  const hora = fecha.getHours();
  console.log("hora");

  if (hora >= 6 && hora < 18) {
    //Si la hora es mayor o igual que las 6 de la mañana pero menor que las 6 de la tarde se muestra el fondo de día
    body.classList.add("fondoDia");
  } else {
    //De  lo contrario, se muestra el fondo de noche
    body.classList.add("fondoNoche");
    encabezadoModos.style.color = "white";
  }
});
