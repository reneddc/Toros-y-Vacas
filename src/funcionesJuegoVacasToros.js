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

    generarCodigoVacio(numeroCaracteres){
        this.codigoSecretoAutomatico = [];
        for(var i = 0; i < numeroCaracteres; i++){
            this.codigoSecretoAutomatico.push("");
        }
        return this.codigoSecretoAutomatico;
    }

    generarCodigoNumeros(numeroCaracteres){
        this.codigoSecretoAutomatico = [];
        for(var i = 0; i < numeroCaracteres; i++){
            this.codigoSecretoAutomatico.push(this.generarCaracterNumerico());
        }
        return this.codigoSecretoAutomatico;
    }

    generarCaracterNumerico(){
        return Math.floor(Math.random() * 10)
    }
}

export default FuncionesDeJuego;