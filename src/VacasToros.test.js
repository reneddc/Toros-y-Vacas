import {definirNumeroDeCaracteres, getNumeroDeCaracteres} from './VacasToros'

describe("VACAS Y TOROS", () => {

    let respuesta;

    it("1.1. Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () => {
        definirNumeroDeCaracteres(4);
        respuesta = getNumeroDeCaracteres();
        expect(respuesta).toEqual(4);
    });

    it("1.2. Si se ingresa el número 0 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        definirNumeroDeCaracteres(0);
        respuesta = getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("1.3. Si se ingresa el número -1 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        definirNumeroDeCaracteres(-1);
        respuesta = getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

    it("1.4. Si se ingresa el número 11 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        definirNumeroDeCaracteres(11);
        respuesta = getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

});