document.addEventListener("DOMContentLoaded", function () {
  //Funcionalidad de accesibilidad
  //Pillamos los diferentes elementos de la página para modificar diferentes propiedades
  const accesibilidadIcon = document.querySelector(".accesibilidad");
  const body = document.querySelector("body");
  const form = document.querySelector(".zonaFormulario");
  const select = document.querySelector(".select__tipoSolicitud");
  const inputs = document.querySelectorAll(
    ".input__nombre, .input__email, .input__asunto, .input__detalles"
  );

  //Creamos el evento en caso de que se le haga clic al icono
  accesibilidadIcon.addEventListener("click", function () {
    //Cambiamos la fuente del body
    body.style.fontFamily = "'OpenDyslexic3-Regular', Arial, sans-serif";
    //Cambiamos la fuennte del formulario y su longitud, ya que se alargan los elementos
    form.style.fontFamily = "'OpenDyslexic3-Regular', Arial, sans-serif";
    form.style.height = "61.8em";
    //Cambiamos la fuente y el tamaño de los input
    inputs.forEach((input) => {
      input.style.fontFamily = "'OpenDyslexic3-Regular', Arial, sans-serif";
      input.style.fontSize = "17px";
    });
    //Cambiamos la fuente y el tamaño de los select
    select.style.fontFamily = "'OpenDyslexic3-Regular', Arial, sans-serif";
    select.style.fontSize = "13px";
  });

  //Cambiamos el fondo según la hora del día
  const fecha = new Date();
  const hora = fecha.getHours();
  console.log("hora");

  if (hora >= 6 && hora < 18) {
    //Si la hora es mayor o igual que las 6 de la mañana pero menor que las 6 de la tarde se muestra el fondo de día
    body.classList.add("fondoDia");  } 
    else {
    //De  lo contrario, se muestra el fondo de noche
    body.classList.add("fondoNoche");  
  }
});
