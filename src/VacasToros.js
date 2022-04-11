import ExcepcionesVacasToros from "./excepcionesVacasToros";

class VacasToros{

    constructor(){
        this.numeroCaracteres;
        this.numeroIntentos;
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

    getNumeroDeCaracteres(){
        return this.numeroCaracteres;
    }
    
    getNumeroDeIntentos(){
        return this.numeroIntentos;
    }
}

export default VacasToros;