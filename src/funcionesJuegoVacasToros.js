class FuncionesDeJuego{

    constructor(){
        this.codigoSecretoAutomatico = [];
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