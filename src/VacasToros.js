let numeroCaracteres;


function getNumeroDeCaracteres(){
    return numeroCaracteres;
}

function definirNumeroDeCaracteres(numeroCar){
    numeroCaracteres = numeroCar;
    controlarCantidadDeCaracteres();
}

function controlarCantidadDeCaracteres(){
    if (numeroCaracteres <= 1 || numeroCaracteres == 11){
        numeroCaracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
    }
}


export {definirNumeroDeCaracteres, getNumeroDeCaracteres};