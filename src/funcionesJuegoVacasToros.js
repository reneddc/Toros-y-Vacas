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

    generarCodigoSecretoAut(numeroCaracteres, tipoCodigo){
        this.codigoSecretoAutomatico = [];
        for(var i = 0; i < numeroCaracteres; i++){
            switch(tipoCodigo){
                case "Numeros":{this.codigoSecretoAutomatico.push(this.generarCaracterNumerico());break;}
                case "Letras": {this.codigoSecretoAutomatico.push(this.generarCaracterLetra());break;}
            }
        }
        return this.codigoSecretoAutomatico;
    }

    generarCaracterNumerico(){
        return Math.floor(Math.random() * 10)
    }

    generarCaracterLetra(){
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

}

export default FuncionesDeJuego;