import ExcepcionesVacasToros from "./excepcionesVacasToros";

class VacasToros{

    constructor(){
        this.numeroCaracteres;
        this.numeroIntentos;
        this.tipoDeCodigo;
        this.codigoSecreto = [];
        this.Excepciones = new ExcepcionesVacasToros();
    }

    definirNumeroDeCaracteres(numeroCar){
        numeroCar = this.Excepciones.controlarCantidadDeCaracteres(numeroCar);
        this.numeroCaracteres = numeroCar;
    }
    
    definirNumeroDeIntentos(numeroInt){
        numeroInt = this.Excepciones.controlarCantidadDeIntentos(numeroInt);
        this.numeroIntentos = numeroInt;
    }

    definirTipoDeCodigo(tipoCod){
        this.tipoDeCodigo = tipoCod;
    }

    definirCodigoSecreto(codigoSec){
        codigoSec = this.convertirCodigoSecretoMayusculas(codigoSec);
        codigoSec = this.Excepciones.controlarCodigoSecretoNumero(codigoSec, this.numeroCaracteres, this.tipoDeCodigo);
        this.codigoSecreto = codigoSec; 
    }

    definirConfiguracionTotal(nroCaracteres, numeroInt, tipCodigo){
        this.definirNumeroDeCaracteres(nroCaracteres);
        this.definirNumeroDeIntentos(numeroInt);
        this.definirTipoDeCodigo(tipCodigo);
    }

    convertirCodigoSecretoMayusculas(codigoSec){
        for(var i = 0; i < codigoSec.length; i++){
            codigoSec[i] = codigoSec[i].toString().toUpperCase();
        }
        return codigoSec;
    }

    getNumeroDeCaracteres(){
        return this.numeroCaracteres;
    }
    
    getNumeroDeIntentos(){
        return this.numeroIntentos;
    }

    getTipoDeCodigo(){
        return this.tipoDeCodigo;
    }

    getCodigoSecreto(){
        return this.codigoSecreto;
    }
}

export default VacasToros;