function getVista1(){
    let vista1 = `<label for="numero-caracteres">Número de Caracteres:</label>
    <input type="number" id="numero-caracteres" min="1" max="10"/><br><br>
    <label for="numero-intentos">Número de Intentos:</label>
    <input type="number" id="numero-intentos" min="1" /><br><br>
    <label for="tipo-codigo">Tipo de Código:</label>
    <select id="tipo-codigo">
        <option value="Numeros">Números</option>
        <option value="Letras">Letras</option>
        <option value="Combinado">Combinado</option>
    </select><br><br>
    <label for="automatico"> Generar Código Automático</label>
    <input type="checkbox" id="automatico" value="si"><br><br>

    <input type="submit" value="Aceptar" />`;
    return vista1;
}

function getVista2(numeroCar){
    let vista2 = `<br><br><label for="codigo-1">Código secreto: </label>`;
    for(var i=0; i<numeroCar; i++){
      vista2 += `<input type="text" class="caracter" size="1" maxlength="1">`;
    }
    vista2 += `<input type="submit" value="Adivinar"/>   `;
    return vista2;
}

function getVista2Historial(intento, resultado, historial, numeroCar){
    for(var i=0; i<numeroCar; i++){
        if(resultado[i] == "V"){
            historial += `<input style="background-color: gold;" type="text" class="car" size="1" maxlength="1" value="${intento[i]}">`;
        }
        if(resultado[i] == "T"){
            historial += `<input style="background-color: rgb(18, 235, 235);" type="text" class="car" size="1" maxlength="1" value="${intento[i]}">`;
        }
        if(resultado[i] == "O"){
            historial += `<input style="background-color: white;" type="text" class="car" size="1" maxlength="1" value="${intento[i]}">`;
        }
    }
    historial += "<br><br>";
    return historial;
}

export {getVista1, getVista2, getVista2Historial}