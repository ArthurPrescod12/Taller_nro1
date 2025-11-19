function determinarClima(tipo, idContenedor){
    const temp = parseFloat(document.getElementById("temp").value);
    const humedad = parseFloat(document.getElementById("humedad").value);

    if(isNaN(temp) || isNaN(humedad)){
        mostrarMensaje('warning',idContenedor,'Porfavor, completar todos los campos solicitados');
        return;
    }

    let clima;

    if(temp < 10){
        clima = "Clima frio";
        mostrarMensaje('success',idContenedor,`Clima = ${clima}`);
    }else if(temp >= 10 && temp <= 25 && humedad < 60){
        clima = "Clima templado y seco";
        mostrarMensaje('success',idContenedor,`Clima = ${clima}`);
    }else if(temp >= 10 && temp <= 25 && humedad >= 60){
        clima = "Clima templado y humedo";
        mostrarMensaje('success',idContenedor,`Clima = ${clima}`);
    }else if(temp >= 26 && temp <= 35){
        clima = "Clima calido";
        mostrarMensaje('success',idContenedor,`Clima = ${clima}`);
    }else if(temp > 35){
        clima = "Clima caluroso extremo, mantente hidratado";
        mostrarMensaje('success',idContenedor,`Clima = ${clima}`);
    }else{
        clima = "Valores fuera de rango, verifica los datos";
        mostrarMensaje('success',idContenedor,`Clima = ${clima}`);
    }
}
function limpiarFormulario(idContenedor){
    document.getElementById("temp").value="";
    document.getElementById("humedad").value="";
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = '';
    mensaje.textContent = '';
}
function mostrarMensaje(tipo, idContenedor, texto){
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = `alert alert-${tipo}`;
    mensaje.textContent = texto;
}