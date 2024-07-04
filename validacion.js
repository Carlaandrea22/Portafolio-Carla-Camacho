//Haz tú validación en javascript acá
document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms['form'];
    const nombre = form['nombre'];
    const email = form['email'];
    const asunto = form['asunto'];
    const mensaje = form['mensaje'];

    form.addEventListener('submit', function(event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });

    function validarFormulario() {
        let valid = true;
        let errorMessage = "";

        if (!validarNombre(nombre.value)) {
            valid = false;
            errorMessage += "El nombre es obligatorio y debe tener al menos 2 caracteres.\n";
        }

        if (!validarEmail(email.value)) {
            valid = false;
            errorMessage += "Debe ingresar un email válido.\n";
        }

        if (!validarAsunto(asunto.value)) {
            valid = false;
            errorMessage += "El asunto es obligatorio y debe tener al menos 3 caracteres.\n";
        }

        if (!validarMensaje(mensaje.value)) {
            valid = false;
            errorMessage += "El mensaje es obligatorio y debe tener al menos 10 caracteres.\n";
        }

        if (!valid) {
            alert(errorMessage);
        }

        return valid;
    }

    function validarNombre(nombre) {
        return nombre.trim().length >= 2;
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarAsunto(asunto) {
        return asunto.trim().length >= 3;
    }

    function validarMensaje(mensaje) {
        return mensaje.trim().length >= 10;
    }
});
