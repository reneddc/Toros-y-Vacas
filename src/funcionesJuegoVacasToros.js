class FuncionesDeJuego{

    constructor(){
        this.codigoSecretoAutomatico = [];
        this.resultadoIntento = [];
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

    generarResultadoDeIntento(numeroCaracteres){
        this.resultadoIntento = this.generarCodigoVacioYLleno(numeroCaracteres, "O");
        return this.resultadoIntento;
    }
}

export default FuncionesDeJuego;