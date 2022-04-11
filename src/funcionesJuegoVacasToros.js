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