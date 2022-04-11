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

    esCaracterNumerico(caracter){
        let numero = parseInt(caracter);
        if(isNaN(numero)){
            return false;
        }
        return true;
    }

    controlarCodigoSecretoNumero(codigoSecreto, numeroCaracteres){
        let caracterNumerico;
        for(var i = 0; i < numeroCaracteres; i++){
            caracterNumerico = this.esCaracterNumerico(codigoSecreto[i]);
            console.log(caracterNumerico);
            if(!caracterNumerico){
                return "Código secreto inválido. La configuración del juego es de Tipo: Números";
            }
        }
        return codigoSecreto;
    }
}

export default ExcepcionesVacasToros;