// Simulación de usuario válido
const validUsername = 'admin';
const validPassword = '1234';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        alert('Inicio de sesión exitoso');
        // Redirección a la página principal
        window.location.href = 'pagina2.html';
    } else {
        document.getElementById('message').textContent = 'Usuario o contraseña incorrectos';
    }
});
