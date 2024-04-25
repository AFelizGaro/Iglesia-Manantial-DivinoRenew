
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel.carousel-slider');
    var options = {
      dist: 0,
      numVisible:5,
      indicators: true,
      fullWidth: true,
      duration: 200
    }
    var instances = M.Carousel.init(elems, options);
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  options = {
    edge: 'right'
  }
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
  function generarEnlaceWhatsApp() {
    // Obtener valores de los campos del formulario
    var nombre = document.getElementById('txtNombre').value;
    var whatsapp = document.getElementById('txtWhatsApp').value;
    var email = document.getElementById('txtCorreo').value;
    var direccion = document.getElementById('txtDireccion').value;

    // Crear el mensaje
    var mensaje = `Hola, mi nombre es ${nombre}. Mi correo electrónico es ${email} y vivo en ${direccion}. ¿Podemos hablar?`;

    // Codificar el mensaje para URL
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Generar el enlace de WhatsApp
    var enlaceWhatsApp = `https://wa.me/${whatsapp}?text=${mensajeCodificado}`;

    // Opcional: Redireccionar al usuario al enlace de WhatsApp
    window.open(enlaceWhatsApp, '_blank');
}

