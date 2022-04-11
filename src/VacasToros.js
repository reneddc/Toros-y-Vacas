import FuncionesDeJuego from "./funcionesJuegoVacasToros";
import ExcepcionesVacasToros from "./excepcionesVacasToros";

class VacasToros{

    constructor(){
        this.numeroCaracteres;
        this.numeroIntentos;
        this.tipoDeCodigo;
        this.generarCodigoAutomatico;
        this.codigoSecreto = [];
        this.Excepciones = new ExcepcionesVacasToros();
        this.FuncionesJuego = new FuncionesDeJuego();
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

    definirGeneracionDeCodigoAutomatico(genAutomatico){
        this.generarCodigoAutomatico = genAutomatico;
    }

    definirCodigoSecretoPorDefault(){
        if(this.generarCodigoAutomatico){
            this.codigoSecreto = this.FuncionesJuego.generarCodigoNumeros(this.numeroCaracteres);
        }
        else{
            this.codigoSecreto = this.FuncionesJuego.generarCodigoVacio(this.numeroCaracteres);
        }
        console.log(this.codigoSecreto);
    }

    definirCodigoSecreto(codigoSec){
        codigoSec = this.convertirCodigoSecretoMayusculas(codigoSec);
        codigoSec = this.Excepciones.controlarCodigoSecretoNumero(codigoSec, this.numeroCaracteres, this.tipoDeCodigo); 
        this.codigoSecreto = codigoSec;
    }

    definirConfiguracionTotal(nroCaracteres, numeroInt, tipCodigo, genAutomatico){
        this.definirNumeroDeCaracteres(nroCaracteres);
        this.definirNumeroDeIntentos(numeroInt);
        this.definirTipoDeCodigo(tipCodigo);
        this.definirGeneracionDeCodigoAutomatico(genAutomatico);
        this.definirCodigoSecretoPorDefault();
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