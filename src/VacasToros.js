let numeroCaracteres;

function getNumeroDeCaracteres(){
    return numeroCaracteres;
}

function definirNumeroDeCaracteres(numeroCar){
    numeroCaracteres = numeroCar;
    if (numeroCaracteres == 0){
        numeroCaracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
    }
}


export {definirNumeroDeCaracteres, getNumeroDeCaracteres};