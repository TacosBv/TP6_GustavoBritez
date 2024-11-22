// Inicializar EmailJS con tu User ID
emailjs.init("DpA8eWTD116oMGVmu");  // Reemplaza con tu User ID de EmailJS

// Función para enviar el formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Recoger los valores del formulario
    var from_name = document.getElementById("from_name").value;
    var from_lastname = document.getElementById("from_lastname").value;
    var from_phone = document.getElementById("from_phone").value;
    var from_email = document.getElementById("from_email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Crear un objeto con los datos del formulario
    var formData = {
        from_name: from_name,
        from_lastname: from_lastname,
        from_phone: from_phone,
        from_email: from_email,
        subject: subject,
        message: message
    };

    // Imprimir los datos en la consola para verificar
    console.log("Datos del formulario:", formData);

    // Enviar el formulario con EmailJS
    emailjs.send("service_1g701cr", "template_9wfk3ch", {
        from_name: from_name,
        from_lastname: from_lastname,
        from_phone: from_phone,
        from_email: from_email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        console.log("Formulario enviado", response);
        // Mostrar un mensaje de éxito
        document.getElementById("formMessage").textContent = "¡Formulario enviado correctamente!";
    }, function(error) {
        console.log("Error al enviar el formulario", error);
        // Mostrar un mensaje de error
        document.getElementById("formMessage").textContent = "Hubo un error al enviar el mensaje. Inténtalo nuevamente.";
        console.log("Detalles del error:", error);
    });
});

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("contactForm").reset();
    document.getElementById("formMessage").textContent = ""; // Limpiar mensaje
}
