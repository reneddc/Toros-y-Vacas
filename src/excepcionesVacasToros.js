class ExcepcionesVacasToros{

    constructor(){
        this.limiteInferior = 1;
        this.limiteSuperior = 10;
    }
    
    controlarCantidadDeCaracteres(numeroCaracteres){
        if (numeroCaracteres < this.limiteInferior || numeroCaracteres > this.limiteSuperior){
            numeroCaracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
        }
        return numeroCaracteres;
    }

    controlarCantidadDeIntentos(numeroIntentos){
        if (numeroIntentos < this.limiteInferior){
            numeroIntentos = "Número incorrecto de intentos. Intente otra vez por favor";
        }
        return numeroIntentos;
    }
}

export default ExcepcionesVacasToros;