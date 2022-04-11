let numeroCaracteres;
let numeroIntentos;
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

function definirNumeroDeIntentos(numeroInt){
    numeroIntentos = numeroInt;
}

function getNumeroDeIntentos(){
    return numeroIntentos;
}


export {definirNumeroDeCaracteres, getNumeroDeCaracteres, definirNumeroDeIntentos, getNumeroDeIntentos};