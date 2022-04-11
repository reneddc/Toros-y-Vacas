import definirNumeroDeCaracteres from './VacasToros'

describe("VACAS Y TOROS", () => {

    it("1.1. Si se ingresa el número 4 como número de caracteres, mostrar el número 4.", () => {
        let respuesta = definirNumeroDeCaracteres(4);
        expect(respuesta).toEqual(4);
    });

});