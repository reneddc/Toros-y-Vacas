import VacasToros from './VacasToros'

describe("VACAS Y TOROS", () => {

    let vacasToros = new VacasToros();
    let respuesta;

    //HISTORIAS DE USUARIO #1

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

    //HISTORIAS DE USUARIO #2

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

    //HISTORIAS DE USUARIO #3

    it("3.1. Si se selecciona el tipo de código <Números>, mostrar la elección <Números>", () => {
        vacasToros.definirTipoDeCodigo("Numeros");
        respuesta = vacasToros.getTipoDeCodigo();
        expect(respuesta).toEqual("Numeros");
    });

    //HISTORIAS DE USUARIO #4

    //HISTORIAS DE USUARIO #5

    it("5.1. Si se ingresa el código <4 5 7 8>, mostrar <4 5 7 8>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros");
        vacasToros.definirCodigoSecreto(['4','5','7','8']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['4','5','7','8']);
    });

    it("5.2. Si se ingresa el código <A B C D>, mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Números>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros");
        vacasToros.definirCodigoSecreto(['A', 'B', 'C', 'D']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Numeros");
    });

    it("5.3. Si se ingresa el código <1 2>, mostrar el mensaje <Código secreto incompleto>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros");
        vacasToros.definirCodigoSecreto(['1', '2']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    //HISTORIAS DE USUARIO #6

    it("6.1. Si se ingresa el código <A B C D>, mostrar <A B C D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras");
        vacasToros.definirCodigoSecreto(['A','B','C','D']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','C','D']);
    });

    it("6.2. Si se ingresa el código <a b c d>, mostrar <A B C D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras");
        vacasToros.definirCodigoSecreto(['a','b','c','d']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','C','D']);
    });


});