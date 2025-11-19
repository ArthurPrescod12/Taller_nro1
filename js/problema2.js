function determinarCategoriaEmpleado(tipo, idContenedor){
    const codigo = (document.getElementById("codigo").value);
    if(isNaN(codigo) || codigo == ""){
        mostrarMensaje('warning', idContenedor, 'Porfavor, completar todos los campos solicitados');
        return;
    }
    let contadorPares = 0 ;
    for(let i=0; i < codigo.length; i++){
        let digito = parseInt(codigo[i]);
        if(digito %2 == 0){
            contadorPares++;
        }
    }
    let categoria = "";
    if(contadorPares == 3){
        categoria = "Director General";
        mostrarMensaje('success', idContenedor,`Categoria = ${categoria}`);
    }else if(contadorPares == 2){
        categoria = "Directivo";
        mostrarMensaje('success', idContenedor,`Categoria = ${categoria}`);
    }else if(contadorPares == 1){
        categoria = "Staff";
        mostrarMensaje('success', idContenedor,`Categoria = ${categoria}`);
    }else {
        categoria = "Seguridad";
        mostrarMensaje('success', idContenedor,`Categoria = ${categoria}`);
    }

    if(codigo.length > 3){
        mostrarMensaje('danger', idContenedor, 'No se permiten ingresar más de 3 codigos');
    }
}
function limpiarFormulario(idContenedor){
    document.getElementById("codigo").value="";
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = '';
    mensaje.textContent = '';
}
function mostrarMensaje(tipo, idContenedor, texto){
    const mensaje = document.getElementById(idContenedor);
    mensaje.className = `alert alert-${tipo}`;
    mensaje.textContent = texto;
}