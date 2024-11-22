// Inicializar EmailJS con tu User ID
emailjs.init("DpA8eWTD116oMGVmu");  // Reemplaza con tu User ID de EmailJS

// Función para enviar el formulario
document.getElementById("personalDataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Recoger los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var direccion = document.getElementById("direccion").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
    var ciudad = document.getElementById("ciudad").value;
    var pais = document.getElementById("pais").value;

    // Crear un objeto con los datos del formulario
    var formData = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        direccion: direccion,
        celular: celular,
        email: email,
        ciudad: ciudad,
        pais: pais
    };

    // Imprimir los datos en la consola para verificar
    console.log("Datos del formulario:", formData);

    // Enviar el formulario con EmailJS
    emailjs.send("service_1g701cr", "template_gpqlgmk", {
        from_name: nombre + " " + apellido,
        to_name: "Administrador", // Puedes cambiar esto según sea necesario
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        direccion: direccion,
        celular: celular,
        email: email,
        ciudad: ciudad,
        pais: pais
    })
    .then(function(response) {
        console.log("Formulario enviado", response);
        // Mostrar un mensaje de éxito
        document.getElementById("formMessage").textContent = "¡Formulario enviado correctamente!";
    }, function(error) {
        console.log("Error al enviar el formulario", error);
        // Mostrar un mensaje de error
        document.getElementById("formMessage").textContent = "Hubo un error al enviar los datos. Inténtalo nuevamente.";
        console.log("Detalles del error:", error);
    });
});

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("personalDataForm").reset();
    document.getElementById("formMessage").textContent = ""; // Limpiar mensaje
}

// Botones de navegación agregados al HTML
function navegarA(index) {
    switch (index) {
        case 1:
            window.location.href = "index.html";  // Página de Inicio
            break;
        case 2:
            window.location.href = "pagina2.html";  // Página Principal
            break;
        case 3:
            window.location.href = "pagina4.html";  // Formulario de Mensaje
            break;
        default:
            console.error("Página no definida");
    }
}
