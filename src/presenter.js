import VacasToros from './VacasToros'

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");

const inputNumeroCaracteres = document.querySelector("#numero-caracteres");
const inputNumeroIntentos = document.querySelector("#numero-intentos");
const inputTipoCodigo = document.querySelector("#tipo-codigo");

let vacasToros = new VacasToros();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numeroCaracteres = inputNumeroCaracteres.value;
  let numeroIntentos = inputNumeroIntentos.value;
  let tipoCodigo = inputTipoCodigo.value;

  vacasToros.definirNumeroDeCaracteres(numeroCaracteres);
  vacasToros.definirNumeroDeIntentos(numeroIntentos);
  vacasToros.definirTipoDeCodigo(tipoCodigo);

  div.innerHTML =  `<p> ${vacasToros.getNumeroDeCaracteres()} </p>
                    <p> ${vacasToros.getNumeroDeIntentos()} </p>
                    <p> ${vacasToros.getTipoDeCodigo()} </p>`;
});
