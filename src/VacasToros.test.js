import {definirNumeroDeCaracteres, getNumeroDeCaracteres} from './VacasToros'

describe("VACAS Y TOROS", () => {

    it("1.1. Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () => {
        definirNumeroDeCaracteres(4);
        let respuesta = getNumeroDeCaracteres();
        expect(respuesta).toEqual(4);
    });

    it("1.2. Si se ingresa el número 0 como número de caracteres, mostrar el mensaje de <Número incorrecto de caracteres. Intente otra vez por favor>.", () => {
        definirNumeroDeCaracteres(0);
        let respuesta = getNumeroDeCaracteres();
        expect(respuesta).toEqual("Número incorrecto de caracteres. Intente otra vez por favor");
    });

});