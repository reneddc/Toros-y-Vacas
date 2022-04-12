class FuncionesDeJuego{

    constructor(){
        this.numeroIntentosRealizados;
        this.numeroToros = 0;
        this.codigoSecretoAutomatico = [];
        this.listaRepetidos = [];
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
        this.numeroIntentosRealizados = 0;
        if(generarCodAut){
            return this.generarCodigoSecretoAut(numeroCaracteres, tipoCodigo);
        }
        else{
            this.codigoSecretoAutomatico = this.generarCodigoVacioYLleno(numeroCaracteres, "")
            return this.codigoSecretoAutomatico;
        }
    }

    generarVacas(codigoSecreto, intentoCodigo, resultadoDeIntento){
        for(var  intCod= 0; intCod < intentoCodigo.length; intCod++){
            for(var codSec = 0; codSec < codigoSecreto.length; codSec++){
                if(!this.listaRepetidos[codSec]){
                    if(codigoSecreto[codSec] == intentoCodigo[intCod]){
                        this.listaRepetidos[codSec] = true;
                        resultadoDeIntento[intCod] = "V";
                        break;
                    }
                }
            }
        }
        return resultadoDeIntento;
    }

    generarToros(codigoSecreto, intentoCodigo, resultadoDeIntento){
        this.listaRepetidos = [];
        this.numeroToros = 0;
        this.listaRepetidos = this.generarCodigoVacioYLleno(codigoSecreto.length, false);
        for(var  i= 0; i < intentoCodigo.length; i++){
            if(codigoSecreto[i] == intentoCodigo[i]){
                this.listaRepetidos[i] = true;
                resultadoDeIntento[i] = "T";
                this.numeroToros++;
            }
        }
        return resultadoDeIntento;
    }

    esTernera(codigoSecreto, intentoCodigo, pos){
        return codigoSecreto[pos] == intentoCodigo[pos]-1 || codigoSecreto[pos] == intentoCodigo[pos]+1;
    }

    generarTernera(codigoSecreto, intentoCodigo, resultadoDeIntento){
        this.listaRepetidos = this.generarCodigoVacioYLleno(codigoSecreto.length, false);
        for(var  i= 0; i < intentoCodigo.length; i++){
            if(this.esTernera(codigoSecreto,intentoCodigo,i)){
                resultadoDeIntento[i] = "#";
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
            resultadoIntento = this.generarTernera(codigoSecreto, intentoCodigo, resultadoIntento);
            resultadoIntento = this.generarToros(codigoSecreto, intentoCodigo, resultadoIntento);
            resultadoIntento = this.generarVacas(codigoSecreto, intentoCodigo, resultadoIntento);
            this.numeroIntentosRealizados++;
        }
        return resultadoIntento;
    }

    generarIntentosRealizados(numeroIntentos){
        let intentosRealizados = `${this.numeroIntentosRealizados} / ${numeroIntentos} Intentos`;
        return intentosRealizados;
    }

    sonTodosToros(numeroCaracteres){
        return this.numeroToros == numeroCaracteres;
    }

    seCumplioLosIntentos(numeroIntentos){
        return this.numeroIntentosRealizados == numeroIntentos;
    }

    comprobarGanador(numeroCaracteres, numeroIntentos){
        if(this.sonTodosToros(numeroCaracteres)){
            return "Ganador";
        }
        if(this.seCumplioLosIntentos(numeroIntentos)){
            return "Perdedor";
        }
        return "Continua";
    }
}

export default FuncionesDeJuego;