// footer.js
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento donde deseas insertar el contenido del footer
    var footerContainer = document.getElementById("footer-container");

    // Crea una instancia de XMLHttpRequest para cargar el contenido del footer.html
    var xhttp = new XMLHttpRequest();

    // Define la función que manejará la respuesta del servidor
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Inserta el contenido del footer.html dentro del contenedor
            footerContainer.innerHTML = this.responseText;
        }
    };

    // Especifica la ruta de tu archivo footer.html
    xhttp.open("GET", "footer.html", true);

    // Envía la solicitud al servidor
    xhttp.send();
});