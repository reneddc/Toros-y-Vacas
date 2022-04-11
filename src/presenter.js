import {definirNumeroDeCaracteres, getNumeroDeCaracteres} from './VacasToros'

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const inputNumeroCaracteres = document.querySelector("#numero-caracteres");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numeroCaracteres = inputNumeroCaracteres.value;
  definirNumeroDeCaracteres(numeroCaracteres);

  div.innerHTML = "<p>" + getNumeroDeCaracteres() + "</p>";
});
