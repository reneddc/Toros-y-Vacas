import VacasToros from './VacasToros'

const form = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const inputNumeroCaracteres = document.querySelector("#numero-caracteres");
let vacasToros = new VacasToros();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numeroCaracteres = inputNumeroCaracteres.value;
  vacasToros.definirNumeroDeCaracteres(numeroCaracteres);

  div.innerHTML = "<p>" + vacasToros.getNumeroDeCaracteres() + "</p>";
});
