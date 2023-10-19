document.addEventListener("DOMContentLoaded", function () {
    const edadInput = document.getElementById("edadInput");
    const calcularButton = document.getElementById("calcularButton");
    const resultadoFechaNacimiento = document.getElementById("resultadoFechaNacimiento");
    const edadOtraPersona = document.getElementById("edadOtraPersona");
    const calcularDiferenciaButton = document.getElementById("calcularDiferenciaButton");
    const tuEdad = document.getElementById("tuEdad");
    const tuAnioNacimiento = document.getElementById("tuAnioNacimiento");
    const otraEdad = document.getElementById("otraEdad");
    const otroAnioNacimiento = document.getElementById("otroAnioNacimiento");
    const diferenciaEdades = document.getElementById("diferenciaEdades");

    calcularButton.addEventListener("click", function () {
        const edad = parseInt(edadInput.value);
        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();
        const añoNacimiento = añoActual - edad;
        resultadoFechaNacimiento.textContent = añoNacimiento;
    });

    calcularDiferenciaButton.addEventListener("click", function () {
        const edad = parseInt(edadInput.value);
        const edadOtro = parseInt(edadOtraPersona.value);

        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();

        const añoNacimiento = añoActual - edad;
        const añoNacimientoOtro = añoActual - edadOtro;

        tuEdad.textContent = edad;
        tuAnioNacimiento.textContent = añoNacimiento;
        otraEdad.textContent = edadOtro;
        otroAnioNacimiento.textContent = añoNacimientoOtro;
        diferenciaEdades.textContent = Math.abs(edad - edadOtro);
    });
});