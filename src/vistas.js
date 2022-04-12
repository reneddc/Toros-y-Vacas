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
    let vista2 = `<label for="codigo-1">Código secreto: </label>`;
    for(var i=0; i<numeroCar; i++){
      vista2 += `<input type="text" class="caracter" size="1" maxlength="1">`;
    }
    vista2 += `<input type="submit" value="Adivinar"/>   `;
    return vista2;
}

export {getVista1, getVista2}