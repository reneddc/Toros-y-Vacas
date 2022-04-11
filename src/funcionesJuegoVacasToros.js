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
        return Math.floor(Math.random() * 10)
    }

    generarCaracterLetra(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
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

    generarCodigoVacio(numeroCaracteres){
        this.codigoSecretoAutomatico = [];
        for(var i = 0; i < numeroCaracteres; i++){
            this.codigoSecretoAutomatico.push("");
        }
        return this.codigoSecretoAutomatico;
    }

    generarCodigoSecretoPorDefault(numeroCaracteres, tipoCodigo, generarCodAut){
        if(generarCodAut){
            return this.generarCodigoSecretoAut(numeroCaracteres, tipoCodigo);
        }
        else{
            return this.generarCodigoVacio(numeroCaracteres);
        }
    }

}

export default FuncionesDeJuego;