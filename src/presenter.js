import VacasToros from './VacasToros'

const formConfiguracion = document.querySelector("#vista-1-form");
const div = document.querySelector("#visualizaciones");
const formCodigoSecreto = document.querySelector("#codigo-secreto-form");

const inputNumeroCaracteres = document.querySelector("#numero-caracteres");
const inputNumeroIntentos = document.querySelector("#numero-intentos");
const inputTipoCodigo = document.querySelector("#tipo-codigo");
const inputCodigoAutomatico = document.querySelector("#automatico");

let vacasToros = new VacasToros();
let codigoSecreto = [];


function mostrarFormCodigoSecreto(numeroCar){
  let codigoSecretoDefault = vacasToros.getCodigoSecreto();

  let formText = `<label for="codigo-1">Código secreto: </label>`;
  for(var i=0; i<numeroCar; i++){
    formText += `<input type="text" class="caracter" size="1" maxlength="1" value="${codigoSecretoDefault[i]}">`;
  }
  formText += `<input type="submit" value="Jugar"/>   `;
  formCodigoSecreto.innerHTML = formText;
}


formConfiguracion.addEventListener("submit", (event) => {
  event.preventDefault();

  let numeroCaracteres = inputNumeroCaracteres.value;
  let numeroIntentos = inputNumeroIntentos.value;
  let tipoCodigo = inputTipoCodigo.value;
  let codigoAutomatico = inputCodigoAutomatico.checked;

  vacasToros.definirConfiguracionTotal(numeroCaracteres, numeroIntentos, tipoCodigo, codigoAutomatico);
  mostrarFormCodigoSecreto(numeroCaracteres);
  div.innerHTML = ``;
});


formCodigoSecreto.addEventListener("submit", (event) => {
  event.preventDefault();
  codigoSecreto = [];
  let listaCaracteres = document.querySelectorAll(".caracter");
  for(var i = 0; i < listaCaracteres.length; i++){
    codigoSecreto.push(listaCaracteres[i].value);
  }
  vacasToros.definirCodigoSecreto(codigoSecreto);
  div.innerHTML = `<p> CÓDIGO:  ${vacasToros.getCodigoSecreto()}</p>`;
});