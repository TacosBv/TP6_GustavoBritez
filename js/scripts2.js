// Preguntar por el nombre antes de cargar la página
window.onload = function() {
    // Preguntar por el nombre del usuario
    var userName = prompt("Por favor, ingresa tu nombre:");

    // Verificar que se haya ingresado un nombre
    if (userName) {
        // Mostrar el mensaje de bienvenida con el nombre
        document.getElementById("welcomeMessage").textContent = "¡Bienvenido, " + userName + "!";
    } else {
        // Si no se ingresa un nombre, mostrar un mensaje predeterminado
        document.getElementById("welcomeMessage").textContent = "¡Bienvenido, invitado!";
    }
};
