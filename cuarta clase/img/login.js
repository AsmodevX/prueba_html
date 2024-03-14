function tales() {
    let inputCorreo = document.getElementById("email");
    let inputContraseña = document.getElementById("password");
    console.log("Correo: ",inputCorreo.value, " Contraseña: ", inputContraseña.value)
}

function nop(event) {
    event.preventDefault()
    console.log(event.target.elements.email.value, event.target.elements.password.value)
}

async function obtenerDatos() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://65f30f50105614e6549fb6ab.mockapi.io/usuario', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.error('Error al realizar la petición: ' + xhr.status);
            }
        }
    };
    xhr.send();
}

async function main() {
    try {
        let datos = await obtenerDatos();
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

main();
