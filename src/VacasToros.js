class VacasToros{

    constructor(){
        this.numeroCaracteres;
        this.numeroIntentos;
        this.limiteInferior = 1;
        this.limiteSuperior = 10;
    }

    definirNumeroDeCaracteres(numeroCar){
        this.numeroCaracteres = numeroCar;
        this.controlarCantidadDeCaracteres();
    }
    
    controlarCantidadDeCaracteres(){
        if (this.numeroCaracteres < this.limiteInferior || this.numeroCaracteres > this.limiteSuperior){
            this.numeroCaracteres = "Número incorrecto de caracteres. Intente otra vez por favor";
        }
    }
    
    definirNumeroDeIntentos(numeroInt){
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