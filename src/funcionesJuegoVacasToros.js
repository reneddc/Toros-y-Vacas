class FuncionesDeJuego{

    constructor(){
        this.codigoSecretoAutomatico = [];
    }

    convertirCodigoSecretoMayusculas(codigoSec){
        for(var i = 0; i < codigoSec.length; i++){
            codigoSec[i] = codigoSec[i].toString().toUpperCase();
        }
        return codigoSec;
    }
    
    generarCaracterNumerico(){
        return (Math.floor(Math.random() * 10)).toString();
    }

    generarCaracterLetra(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    generarCaracterLetraNumero(){
        let letraNumero = Math.floor(Math.random() * 2);
        if(letraNumero == 0){
            return this.generarCaracterLetra();
        }
        return this.generarCaracterNumerico();
    }

    generarCodigoSecretoAut(numeroCaracteres, tipoCodigo){
        this.codigoSecretoAutomatico = [];
        let caracter;
        for(var i = 0; i < numeroCaracteres; i++){
            switch(tipoCodigo){
                case "Numeros":{caracter = this.generarCaracterNumerico();break;}
                case "Letras": {caracter = this.generarCaracterLetra();break;}
                case "Combinado": {caracter = this.generarCaracterLetraNumero();break;}
            }
            this.codigoSecretoAutomatico.push(caracter);
        }
        return this.codigoSecretoAutomatico;
    }

    generarCodigoVacioYLleno(numeroCaracteres, caracter){
        let codigoAuxiliar = [];
        for(var i = 0; i < numeroCaracteres; i++){
            codigoAuxiliar.push(caracter);
        }
        return codigoAuxiliar;
    }

    generarCodigoSecretoPorDefault(numeroCaracteres, tipoCodigo, generarCodAut){
        if(generarCodAut){
            return this.generarCodigoSecretoAut(numeroCaracteres, tipoCodigo);
        }
        else{
            this.codigoSecretoAutomatico = this.generarCodigoVacioYLleno(numeroCaracteres, "")
            return this.codigoSecretoAutomatico;
        }
    }

    generarVacas(codigoSecreto, intentoCodigo, resultadoDeIntento){
        let listaRepetidos = this.generarCodigoVacioYLleno(codigoSecreto.length, false);
        
        for(var  intCod= 0; intCod < intentoCodigo.length; intCod++){
            for(var codSec = 0; codSec < codigoSecreto.length; codSec++){
                if(!listaRepetidos[codSec]){
                    if(codigoSecreto[codSec] == intentoCodigo[intCod]){
                        listaRepetidos[codSec] = true;
                        resultadoDeIntento[intCod] = "V";
                        break;
                    }
                }
            }
        }
        return resultadoDeIntento;
    }

    generarToros(codigoSecreto, intentoCodigo, resultadoDeIntento){
        for(var  i= 0; i < intentoCodigo.length; i++){
            if(codigoSecreto[i] == intentoCodigo[i]){
                resultadoDeIntento[i] = "T";
            }
        }
        return resultadoDeIntento;
    }

    esError(resultadoIntento){
        return typeof(resultadoIntento) == "string";
    }

    generarResultadoDeIntento(numeroCaracteres, resultadoIntento, codigoSecreto, intentoCodigo){
        if(!this.esError(resultadoIntento)){
            resultadoIntento = this.generarCodigoVacioYLleno(numeroCaracteres, "O");
            /*resultadoIntento = this.generarVacas(codigoSecreto, intentoCodigo, resultadoIntento);
            resultadoIntento = this.generarToros(codigoSecreto, intentoCodigo, resultadoIntento);*/
        }
        return resultadoIntento;
    }
}

export default FuncionesDeJuego;