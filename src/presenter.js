import VacasToros from './VacasToros'
import { getVista1, getVista2, getVista2Historial } from './vistas';

const formConfiguracion = document.querySelector("#vista-1-form");
const formCodigoSecreto = document.querySelector("#codigo-secreto-form");
const formIntentosCodigoSecreto = document.querySelector("#intentos-codigo-secreto-form");
const div = document.querySelector("#visualizaciones");
const divHistorialIntentos = document.querySelector("#historial-intentos");

const inputNumeroCaracteres = document.querySelector("#numero-caracteres");
const inputNumeroIntentos = document.querySelector("#numero-intentos");
const inputTipoCodigo = document.querySelector("#tipo-codigo");
const inputCodigoAutomatico = document.querySelector("#automatico");

let vacasToros = new VacasToros();
let codigoSecreto = [];
let intento = [];
let resultadoDeIntento = [];
let historialIntentos = "";
let numeroCaracteres;


function mostrarFormCodigoSecreto(numeroCar){
  let codigoSecretoDefault = vacasToros.getCodigoSecreto();

  let formText = `<label for="codigo-1">Código secreto: </label>`;
  for(var i=0; i<numeroCar; i++){
    formText += `<input type="text" class="caracter" size="1" maxlength="1" value="${codigoSecretoDefault[i]}">`;
  }
  formText += `<input type="submit" value="Jugar"/>   `;
  formCodigoSecreto.innerHTML = formText;
}

function limpiarVista(vista){
  switch(vista){
    case 1:{formCodigoSecreto.innerHTML = ""; formConfiguracion.innerHTML = ""; div.innerHTML = ""; break;}
    case 2:{}
    case 3:{}
    case 4:{}
  }
}

function mostrarVista(vista){
  switch(vista){
    case 1:{formCodigoSecreto.innerHTML = getVista1(); break;}
    case 2:{formIntentosCodigoSecreto.innerHTML = getVista2(numeroCaracteres); divHistorialIntentos.innerHTML = historialIntentos; div.innerHTML = ""; break;}
    case 3:{}
    case 4:{}
  }
}


formConfiguracion.addEventListener("submit", (event) => {
  event.preventDefault();

  numeroCaracteres = inputNumeroCaracteres.value;
  let numeroIntentos = inputNumeroIntentos.value;
  let tipoCodigo = inputTipoCodigo.value;
  let codigoAutomatico = inputCodigoAutomatico.checked;

  vacasToros.definirConfiguracionTotal(numeroCaracteres, numeroIntentos, tipoCodigo, codigoAutomatico);
  mostrarFormCodigoSecreto(numeroCaracteres);
  div.innerHTML = "";
});


formCodigoSecreto.addEventListener("submit", (event) => {
  event.preventDefault();
  codigoSecreto = [];
  let listaCaracteres = document.querySelectorAll(".caracter");

  for(var i = 0; i < listaCaracteres.length; i++){
    codigoSecreto.push(listaCaracteres[i].value);
  }

  vacasToros.definirCodigoSecreto(codigoSecreto);
  let codigoSecretoFinal = vacasToros.getCodigoSecreto();


  if(typeof(codigoSecretoFinal) == "string"){
    div.innerHTML = `<p> CÓDIGO:  ${codigoSecretoFinal}</p>`;
  }
  else{
    limpiarVista(1);
    mostrarVista(2);
  }
});



formIntentosCodigoSecreto.addEventListener("submit", (event) => {
  event.preventDefault();
  intento = [];
  resultadoDeIntento = [];
  let listaCaracteres = document.querySelectorAll(".caracter");

  for(var i = 0; i < listaCaracteres.length; i++){
    intento.push(listaCaracteres[i].value);
  }

  vacasToros.definirIntento(intento);
  resultadoDeIntento = vacasToros.getResultadoDeIntento();

  if(typeof(resultadoDeIntento) == "string"){
    div.innerHTML = `<p> RESULTADO INTENTO:  ${resultadoDeIntento} </p>`;
  }
  else{
    historialIntentos = getVista2Historial(intento, resultadoDeIntento, historialIntentos, numeroCaracteres);
    mostrarVista(2);
  }
});