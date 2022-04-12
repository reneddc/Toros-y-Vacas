import VacasToros from './VacasToros'
import { getVista1, getVista2, getVista2Historial , getVista3, getVista4} from './vistas';

const formConfiguracion = document.querySelector("#vista-1-form");
const formCodigoSecreto = document.querySelector("#codigo-secreto-form");
const formIntentosCodigoSecreto = document.querySelector("#intentos-codigo-secreto-form");
const formReiniciar = document.querySelector("#reiniciar-form");
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
let numeroIntentosRealizados;
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
    case 2:{formIntentosCodigoSecreto.innerHTML = ""; divHistorialIntentos.innerHTML = ""; div.innerHTML = ""; break;}
    case 3:{formIntentosCodigoSecreto.innerHTML = ""; divHistorialIntentos.innerHTML = ""; div.innerHTML = ""; break;}
    case 4:{formIntentosCodigoSecreto.innerHTML = ""; divHistorialIntentos.innerHTML = ""; div.innerHTML = ""; break;}
  }
}

function mostrarVista(vista){
  switch(vista){
    case 1:{formCodigoSecreto.innerHTML = getVista1(); break;}
    case 2:{formIntentosCodigoSecreto.innerHTML = getVista2(numeroCaracteres, numeroIntentosRealizados); divHistorialIntentos.innerHTML = historialIntentos; div.innerHTML = ""; break;}
    case 3:{formIntentosCodigoSecreto.innerHTML = getVista3(numeroCaracteres, numeroIntentosRealizados, codigoSecreto); divHistorialIntentos.innerHTML = historialIntentos; div.innerHTML = ""; break;}
    case 4:{formIntentosCodigoSecreto.innerHTML = getVista4(numeroCaracteres, numeroIntentosRealizados, codigoSecreto); divHistorialIntentos.innerHTML = historialIntentos; div.innerHTML = ""; break;}
  }
}

function comprobarJuego(jugador){
  if (jugador == "Ganador"){
    limpiarVista(2);
    mostrarVista(3);
  }
  if(jugador == "Perdedor"){
    limpiarVista(2);
    mostrarVista(4);
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
    numeroIntentosRealizados = vacasToros.getIntentosRealizados();
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
  numeroIntentosRealizados = vacasToros.getIntentosRealizados();
  resultadoDeIntento = vacasToros.getResultadoDeIntento();
  let comprobarGanador = vacasToros.comprobarJuego();

  if(typeof(resultadoDeIntento) == "string"){
    div.innerHTML = `<p> RESULTADO INTENTO:  ${resultadoDeIntento} </p>`;
  }
  else{
    historialIntentos = getVista2Historial(intento, resultadoDeIntento, historialIntentos, numeroCaracteres);
    mostrarVista(2);
  }
  comprobarJuego(comprobarGanador);
});

formReiniciar.addEventListener("submit", (event) => {
  event.preventDefault();
  location.reload();
});