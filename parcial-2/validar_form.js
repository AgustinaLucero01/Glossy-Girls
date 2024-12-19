const nombre = document.getElementById("nombre");
const emailUsuario = document.getElementById("email");
const telefonousurio = document.getElementById("telefono");
const checkboxusuario = document.getElementById("terminos");
const paisusurio = document.getElementById("pais");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const errornombre = document.getElementById("nombreError");
const email = document.getElementById("emailError");
const errortelefono = document.getElementById("telefonoError");
const errorfecha = document.getElementById("fechaError");
const errorpais = document.getElementById("paisError");
const checkboxerror = document.getElementById("terminosError");
const form = document.getElementById("form"); 
const parrafo = document.getElementById("mensajeError"); // aca definimos todos lo que vamos a usar del html en el js

form.addEventListener("submit", e => {
    e.preventDefault();
    
    let nombreError = "";
    let emailError = "";
    let telefonoError = "";
    let fechaError = "";
    let paisError = "";
    let terminosError = "";
    let entrada = false;
    let validaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w{2,3})+$/;//caracteres especiales para el email

    if (nombre.value.length > 5 || !/^[a-zA-Z0-9_\-]{4,16}$/.test(nombre.value)) {//validamos el nombre que tenga no mas de 5 caractere
        nombreError += "El nombre no es válido, debe tener 5 caracteres";
        entrada = true;
    }

    if (!validaremail.test(emailUsuario.value)) {
        emailError += "El email no es correcto.";
        entrada = true;
    }

    if (!/^\d{7,14}$/.test(telefonousurio.value)) {
        telefonoError += "Teléfono inválido, debe tener entre 7 y 14 dígitos.";
        entrada = true;
    }

    if (fechaNacimiento.value == "") {
        fechaError += "Tienes que completar este campo.";
        entrada = true;
    }

    if (paisusurio.value == "") {
        paisError += "Tienes que elegir una opción de la lista.";
        entrada = true;
    }

    if (!checkboxusuario.checked) {
        terminosError += "Debes aceptar los términos y condiciones.";
        entrada = true;
    }
    

    errornombre.innerText = nombreError;
    email.innerText = emailError;
    errortelefono.innerText = telefonoError;
    errorfecha.innerText = fechaError;
    errorpais.innerText = paisError;
    checkboxerror.innerText = terminosError;

    if (entrada) {
        parrafo.innerHTML = "Hay errores en el formulario.";
    } else {
        parrafo.innerHTML = "Formulario enviado correctamente.";
    }
});
