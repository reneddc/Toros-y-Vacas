import VacasToros from './VacasToros'
import ExcepcionesVacasToros from './excepcionesVacasToros';

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");

const inputNumeroCaracteres = document.querySelector("#numero-caracteres");
const inputNumeroIntentos = document.querySelector("#numero-intentos");

let vacasToros = new VacasToros();
let excepcionesVacasToros = new ExcepcionesVacasToros();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numeroCaracteres = inputNumeroCaracteres.value;
  let numeroIntentos = inputNumeroIntentos.value;

  vacasToros.definirNumeroDeCaracteres(numeroCaracteres);
  vacasToros.definirNumeroDeIntentos(numeroIntentos);

  div.innerHTML =  `<p> ${vacasToros.getNumeroDeCaracteres()} </p>
                    <p> ${vacasToros.getNumeroDeIntentos()} </p>`;
});
