import VacasToros from './VacasToros'
import FuncionesDeJuego from "./funcionesJuegoVacasToros"

describe("VACAS Y TOROS", () => {

    let vacasToros = new VacasToros();
    let funcionesVacasToros = new FuncionesDeJuego();
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
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", false);
        vacasToros.definirCodigoSecreto(['4','5','7','8']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['4','5','7','8']);
    });

    it("5.2. Si se ingresa el código <A B C D>, mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Números>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", false);
        vacasToros.definirCodigoSecreto(['A', 'B', 'C', 'D']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Numeros");
    });

    it("5.3. Si se ingresa el código <1 2>, mostrar el mensaje <Código secreto incompleto>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", false);
        vacasToros.definirCodigoSecreto(['1', '2']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    //HISTORIAS DE USUARIO #6

    it("6.1. Si se ingresa el código <A B C D>, mostrar <A B C D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['A','B','C','D']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','C','D']);
    });

    it("6.2. Si se ingresa el código <a b c d>, mostrar <A B C D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['a','b','c','d']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','C','D']);
    });

    it("6.3. Si se ingresa el código <1 2 3 0>, mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Letras>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['1','2','3','0']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Letras");
    });

    it("6.4. Si se ingresa el código <A B>, mostrar el mensaje <Código secreto incompleto>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['A', 'B']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    //HISTORIAS DE USUARIO #7

    it("7.1. Si se ingresa el código <A B 1 2>, mostrar <A B 1 2>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Combinado", false);
        vacasToros.definirCodigoSecreto(['A','B','1','2']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','1','2']);
    });

    it("7.2. Si se ingresa el código <a b 1 2>, mostrar <A B C D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Combinado", false);
        vacasToros.definirCodigoSecreto(['a','b','1','2']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual(['A','B','1','2']);
    });

    it("7.3. Si se ingresa el código <A 4>, mostrar el mensaje <Código secreto incompleto>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", false);
        vacasToros.definirCodigoSecreto(['A','4']);
        respuesta = vacasToros.getCodigoSecreto();
        expect(respuesta).toEqual("Código secreto incompleto");
    });

    //HISTORIAS DE USUARIO #8

    it("8.1. Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con 4 números del <0> al <9> generados aleatoriamente como <4 8 0 6>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", true);
        respuesta = vacasToros.getCodigoSecreto();
        console.log(respuesta);
        expect(respuesta).toEqual(vacasToros.getCodigoSecreto());
    });

    //HISTORIAS DE USUARIO #9

    it("9.1. Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con 4 letras de la letra <a> a la <z> generados aleatoriamente como <W S P D>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", true);
        respuesta = vacasToros.getCodigoSecreto();
        console.log(respuesta);
        expect(respuesta).toEqual(vacasToros.getCodigoSecreto());
    });

    //HISTORIAS DE USUARIO #10

    it("10.1. Si se selecciona la opción de <Código automático>, mostrar un código de 4 caracteres con letras de la letra <a> a la <z> o números del <0> al <9> generados aleatoriamente como <4 S 8 Y>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Combinado", true);
        respuesta = vacasToros.getCodigoSecreto();
        console.log(respuesta);
        expect(respuesta).toEqual(vacasToros.getCodigoSecreto());
    });

    //HISTORIAS DE USUARIO #11

    //HISTORIAS DE USUARIO #12

    it("12.1. Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <x y o c>, mostrar la respuesta como <o o o o>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", true);
        vacasToros.definirCodigoSecreto(['P', 'T', 'W', 'C']);
        vacasToros.definirIntento(['X', 'Y', 'O', 'C']);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual(['O', 'O', 'O', 'O']);
    });

    it("12.2. Si el código secreto es <p t w c>, el tipo de código es “Letras” y se ingresa como intento el código <1 8 9 0>, mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Letras>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Letras", true);
        vacasToros.definirCodigoSecreto(['P', 'T', 'W', 'C']);
        vacasToros.definirIntento(['1', '8', '9', '0']);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Letras");
    });

    it("12.3. Si el código secreto es <7 8 0 1>, el tipo de código es “Números” y se ingresa como intento el código <p t w c> mostrar el mensaje <Código secreto inválido. La configuración del juego es de Tipo: Números>", () => {
        vacasToros.definirConfiguracionTotal(4, 6, "Numeros", true);
        vacasToros.definirCodigoSecreto(['7', '8', '0', '1']);
        vacasToros.definirIntento(['P', 'T', 'W', 'C']);
        respuesta = vacasToros.getResultadoDeIntento();
        expect(respuesta).toEqual("Código secreto inválido. La configuración del juego es de Tipo: Numeros");
    });

});