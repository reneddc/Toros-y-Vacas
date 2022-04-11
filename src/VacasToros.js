let numeroCaracteres;
const limiteInferior = 1;
const limiteSuperior = 10;


function getNumeroDeCaracteres(){
    return numeroCaracteres;
}

function definirNumeroDeCaracteres(numeroCar){
    numeroCaracteres = numeroCar;
    controlarCantidadDeCaracteres();
}

function controlarCantidadDeCaracteres(){
    if (numeroCaracteres < limiteInferior || numeroCaracteres > limiteSuperior){
        numeroCaracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
    }
}


export {definirNumeroDeCaracteres, getNumeroDeCaracteres};