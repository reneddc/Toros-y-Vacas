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
        codigoSec = this.Excepciones.controlarCodigoSecretoNumero(codigoSec, this.numeroCaracteres);
        this.codigoSecreto = codigoSec; 
    }

    definirConfiguracionTotal(numeroCar, numeroInt, tipoCod){
        this.definirNumeroDeCaracteres(numeroCar);
        this.definirNumeroDeIntentos(numeroInt);
        this.definirTipoDeCodigo(tipoCod);
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