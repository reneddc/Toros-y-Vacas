import VacasToros from './VacasToros'

describe("VACAS Y TOROS", () => {

    let vacasToros = new VacasToros();
    let respuesta;

    //HISTORIAL DE USUARIO #1

    it("1.1. Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () => {
        vacasToros.definirNumeroDeCaracteres(4);
        respuesta = vacasToros.getNumeroDeCaracteres();
        expect(respuesta).toEqual(4);
    });

    it("1.2. Si se ingresa el número 0 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        vacasToros.definirNumeroDeCaracteres(0);
        respuesta = vacasToros.getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("1.3. Si se ingresa el número -1 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        vacasToros.definirNumeroDeCaracteres(-1);
        respuesta = vacasToros.getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("1.4. Si se ingresa el número 11 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        vacasToros.definirNumeroDeCaracteres(11);
        respuesta = vacasToros.getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    //HISTORIAL DE USUARIO #2

    it("2.1. Si se ingresa el número 4 como número máximo de intentos, mostrar el número 4.", () => {
        vacasToros.definirNumeroDeIntentos(5);
        respuesta = vacasToros.getNumeroDeIntentos();
        expect(respuesta).toEqual(5);
    });

    it("2.2. Si se ingresa el número 0 como número máximo de intentos, mostrar el mensaje de <Número incorrecto de intentos. Intente otra vez por favor>", () => {
        vacasToros.definirNumeroDeIntentos(0);
        respuesta = vacasToros.getNumeroDeIntentos();
        expect(respuesta).toEqual("Número incorrecto de intentos. Intente otra vez por favor");
    });

    it("2.3. Si se ingresa el número -1 como número máximo de intentos, mostrar el mensaje de <Número incorrecto de intentos. Intente otra vez por favor>", () => {
        vacasToros.definirNumeroDeIntentos(-1);
        respuesta = vacasToros.getNumeroDeIntentos();
        expect(respuesta).toEqual("Número incorrecto de intentos. Intente otra vez por favor");
    });

});