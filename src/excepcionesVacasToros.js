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

    esCodigoSecretoCompleto(codigoSecreto, numeroCaracteres){
        return codigoSecreto.length == numeroCaracteres;
    }

    esCaracterNumerico(caracter){
        let numero = parseInt(caracter);
        return !isNaN(numero);
    }

    esCaracterLetra(caracter){
        let ascii = caracter.toUpperCase().charCodeAt(0);
        return ascii > 64 && ascii < 91;
    }

    esNumeroOLetra(caracter, tipoCod){
        if(tipoCod == "Numeros"){
            return this.esCaracterNumerico(caracter);
        }
        else{
            if(tipoCod == "Letras"){
                return this.esCaracterLetra(caracter);
            }
            return true;
        }
    }

    controlarTipoCaracteresCodigoSecreto(codigoSecreto, numeroCaracteres, tipoCodigo){
        let numeroLetra;
        for(var i = 0; i < numeroCaracteres; i++){
            numeroLetra = this.esNumeroOLetra(codigoSecreto[i], tipoCodigo);
            if(!numeroLetra){
                return `Código secreto inválido. La configuración del juego es de Tipo: ${tipoCodigo}`;
            }
        }
        return codigoSecreto;
    }

    controlarCodigoSecretoNumero(codigoSecreto, numeroCaracteres, tipoCodigo){
        if(!this.esCodigoSecretoCompleto(codigoSecreto, numeroCaracteres)){
            return "Código secreto incompleto";
        }
        return this.controlarTipoCaracteresCodigoSecreto(codigoSecreto, numeroCaracteres, tipoCodigo);
    }
}

export default ExcepcionesVacasToros;