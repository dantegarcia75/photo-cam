// Get the button:
let mybutton = document.getElementById("myBtn");

// Aparece el boton cuando se baja scrolleando a 20px (o +) desde el principio de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando se hace click en el boton, se scrollea hacia el principio de la página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari (Apple)
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// colocar el siguiente código en el html (antes de cerrar el body) de cada pág web:
//---------------------------------------------------------------------------------

  // <button onclick="topFunction()" id="myBtn" title="Toca para ir al principio de la página">
  //       <img src="imagenes/flecha-corel.png" title= "Toca para ir al principio de la página" width="25" height="25"/>    
  // </button>
  //   <script src="scroll-top.js"></script>

  // no olvidar el css de este botón: scroll-top.css (en cada página también)
