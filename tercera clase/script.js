console.log ("adios")

function si() {
    let div = document.getElementById("321");
    div.innerHTML = "cualquier mensajito";
    console.log ("hasta luego")
    div.setAttribute("class", "nuevoestilo")
    div.style.backgroundColor = "blue";
    div.style.color ="white"
}

let boton = document.getElementById("boton")

boton.addEventListener("click", si())

let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo parrafo";
document.body.appendChild(nuevoParrafo)

