function calcularCostoEntrada(tipo, idContenedor){
    const edad = parseInt(document.getElementById("edad").value);
    let costo;
    if(isNaN(edad)){
        mostrarMensaje('warning', idContenedor, 'Porfavor, completar todos campos solicitados');
        return;
    }
    if(edad <= 0){
        mostrarMensaje('danger', idContenedor, 'No se permiten ingresar valores menores que 0');
        return;
    }
    if(edad > 120){
        mostrarMensaje('danger', idContenedor, 'Edad fuera de rango válido');
        return;
    }
    if(edad >= 1 && edad < 4){
        costo = "Entra gratis";
        mostrarMensaje('success', idContenedor,`Costo = ${costo}`);
    }else if(edad >= 4 && edad <= 8){
        costo = "$2";
        mostrarMensaje('success', idContenedor,`Costo = ${costo}`);
    }else if(edad >= 9 && edad <= 16){
        costo = "$5";
        mostrarMensaje('success', idContenedor,`Costo = ${costo}`);
    }else if(edad >= 17 && edad <= 35){
        costo = "$7";
        mostrarMensaje('success', idContenedor,`Costo = ${costo}`);
    }else if(edad > 35){
        costo = "$10";
        mostrarMensaje('success', idContenedor,`Costo = ${costo}`);
    }
}
function limpiarFormulario(idContenedor){
    document.getElementById("edad").value="";
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = '';
    mensaje.textContent = '';
}
function mostrarMensaje(tipo, idContenedor, texto){
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = `alert alert-${tipo}`;
    mensaje.textContent = texto;
}