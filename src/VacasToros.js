import FuncionesDeJuego from "./funcionesJuegoVacasToros";
import ExcepcionesVacasToros from "./excepcionesVacasToros";

class VacasToros{

    constructor(){
        this.numeroCaracteres;
        this.numeroIntentos;
        this.tipoDeCodigo;
        this.generarCodigoAutomatico;
        this.codigoSecreto = [];
        this.intentoCodigo = [];
        this.resultadoDeIntento = [];
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
        this.codigoSecreto = this.FuncionesJuego.generarCodigoSecretoPorDefault(this.numeroCaracteres, this.tipoDeCodigo, this.generarCodigoAutomatico);
    }

    definirCodigoSecreto(codigoSec){
        codigoSec = this.FuncionesJuego.convertirCodigoSecretoMayusculas(codigoSec);
        codigoSec = this.Excepciones.controlarCodigoSecreto(codigoSec, this.numeroCaracteres, this.tipoDeCodigo); 
        this.codigoSecreto = codigoSec;
    }

    definirConfiguracionTotal(nroCaracteres, numeroInt, tipCodigo, genAutomatico){
        this.definirNumeroDeCaracteres(nroCaracteres);
        this.definirNumeroDeIntentos(numeroInt);
        this.definirTipoDeCodigo(tipCodigo);
        this.definirGeneracionDeCodigoAutomatico(genAutomatico);
        this.definirCodigoSecretoPorDefault();
    }

    definirIntento(intentoCodigo){
        this.intentoCodigo = intentoCodigo;
        this.definirResultadoDeIntento();
    }

    definirResultadoDeIntento(){
        this.resultadoDeIntento = this.Excepciones.controlarCodigoSecreto(this.intentoCodigo, this.numeroCaracteres, this.tipoDeCodigo);
        this.resultadoDeIntento = this.FuncionesJuego.generarResultadoDeIntento(this.numeroCaracteres, this.resultadoDeIntento);
        //this.resultadoDeIntento = this.FuncionesJuego.generarVacas(this.intentoCodigo, this.resultadoDeIntento, this.codigoSecreto);
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

    getResultadoDeIntento(){
        return this.resultadoDeIntento;
    }
}

export default VacasToros;