function calcularPendiente(tipo, idContenedor){
    const y2 = parseFloat(document.getElementById("y2").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const x1 = parseFloat(document.getElementById("x1").value);

    if(isNaN(y2) || isNaN(y1) || isNaN(x2) || isNaN(x1)){
        mostrarMensaje('warning', idContenedor, 'Porfavor, completar todos los campos solicitados');
        return;
    }
    const m = (y2 - y1)/(x2 - x1);
    let resultado;
    resultado = `La pendiente de la recta es: ${m}`;

    mostrarMensaje('success', idContenedor, resultado);
}
function limpiarFormulario(idContenedor){
    document.getElementById("y2").value="";
    document.getElementById("y1").value="";
    document.getElementById("x2").value="";
    document.getElementById("x1").value="";
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = '';
    mensaje.textContent = '';
}

function mostrarMensaje(tipo, idContenedor, texto){
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = `alert alert-${tipo}`;
    mensaje.textContent = texto;
}