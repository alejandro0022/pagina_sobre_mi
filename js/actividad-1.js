// --- 1. LÓGICA PARA ADIVINAR EL NÚMERO EN TIEMPO REAL (SIN BOTÓN) ---
const miNumero = 69;
const inputNumero = document.getElementById("numero");
const resultadoParrafo = document.getElementById("Resultado");

inputNumero.addEventListener("input", function() {
    const valorUsuario = +inputNumero.value;

    // Si deja la casilla vacía
    if (inputNumero.value === "") {
        resultadoParrafo.textContent = "Incorrecto, sigue intentando";
        return;
    }

    // Comparamos el número automáticamente mientras escribe
    if (valorUsuario === miNumero) {
        resultadoParrafo.textContent = "Ya adivinaste el número";
    } else if (valorUsuario > miNumero) {
        resultadoParrafo.textContent = "Mi numero es menor sigue intentando.";
    } else {
        resultadoParrafo.textContent = "Mi numero es mayor, sigue intentando.";
    }
});


// --- 2. ALERTA DEL BOTÓN MENSAJE ---
const botonMensaje = document.getElementById("boton-mensaje");

botonMensaje.addEventListener("click", function() {
    alert("Gracias por explicar más que el otro profesor. Ya merito");
});


// --- 3. LÓGICA PARA MOSTRAR LOS GUSTOS ---
const selectorGusto = document.getElementById("gusto");

const Defecto = document.getElementById("defecto");
const Boxeo = document.getElementById("boxeo");
const Serie = document.getElementById("serie");
const Moto = document.getElementById("moto");

selectorGusto.addEventListener("change", function() {
    const seleccion = selectorGusto.value;

    Defecto.style.display = "none";
    Boxeo.style.display = "none";
    Serie.style.display = "none";
    Moto.style.display = "none";

    if (seleccion === "defecto") {
        Defecto.style.display = "block";
    } else if (seleccion === "boxeo") {
        Boxeo.style.display = "block";
    } else if (seleccion === "serie") {
        Serie.style.display = "block";
    } else if (seleccion === "moto") {
        Moto.style.display = "block";
    }
});