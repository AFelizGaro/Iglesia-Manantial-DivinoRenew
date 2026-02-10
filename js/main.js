// Funcionalidad para el menú de navegación móvil

// Selecciona el botón del menú por su ID
const menuButton = document.getElementById('mobile-menu-btn');

// Agrega un evento de 'click' al botón
menuButton.addEventListener('click', function() {
    // Obtiene el elemento del menú móvil
    var menu = document.getElementById('mobile-menu');
    
    // Verifica si el menú tiene la clase 'hidden' (oculto)
    if (menu.classList.contains('hidden')) {
        // Si está oculto, quita la clase para mostrarlo
        menu.classList.remove('hidden');
    } else {
        // Si está visible, agrega la clase para ocultarlo
        menu.classList.add('hidden');
    }
});