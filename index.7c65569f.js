var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequirec771;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequirec771=r),r.register("itOue",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var o=i(r("bweiO")),n=i(r("aDjZ6"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.numeroCaracteres,this.numeroIntentos,this.tipoDeCodigo,this.generarCodigoAutomatico,this.intentosRealizados,this.codigoSecreto=[],this.intentoCodigo=[],this.resultadoDeIntento=[],this.Excepciones=new n.default,this.FuncionesJuego=new o.default}var t,r,i;return t=e,(r=[{key:"definirNumeroDeCaracteres",value:function(e){e=this.Excepciones.controlarCantidadDeCaracteres(e),this.numeroCaracteres=e}},{key:"definirNumeroDeIntentos",value:function(e){e=this.Excepciones.controlarCantidadDeIntentos(e),this.numeroIntentos=e}},{key:"definirTipoDeCodigo",value:function(e){this.tipoDeCodigo=e}},{key:"definirGeneracionDeCodigoAutomatico",value:function(e){this.generarCodigoAutomatico=e}},{key:"definirCodigoSecretoPorDefault",value:function(){this.codigoSecreto=this.FuncionesJuego.generarCodigoSecretoPorDefault(this.numeroCaracteres,this.tipoDeCodigo,this.generarCodigoAutomatico)}},{key:"definirCodigoSecreto",value:function(e){e=this.FuncionesJuego.convertirCodigoSecretoMayusculas(e),e=this.Excepciones.controlarCodigoSecreto(e,this.numeroCaracteres,this.tipoDeCodigo),this.codigoSecreto=e}},{key:"definirIntentosRealizados",value:function(){this.intentosRealizados=this.FuncionesJuego.generarIntentosRealizados(this.numeroIntentos)}},{key:"definirConfiguracionTotal",value:function(e,t,o,r){this.definirNumeroDeCaracteres(e),this.definirNumeroDeIntentos(t),this.definirTipoDeCodigo(o),this.definirGeneracionDeCodigoAutomatico(r),this.definirCodigoSecretoPorDefault(),this.definirIntentosRealizados()}},{key:"definirIntento",value:function(e){e=this.FuncionesJuego.convertirCodigoSecretoMayusculas(e),this.intentoCodigo=e,this.definirResultadoDeIntento(),this.definirIntentosRealizados()}},{key:"definirResultadoDeIntento",value:function(){this.resultadoDeIntento=this.Excepciones.controlarCodigoSecreto(this.intentoCodigo,this.numeroCaracteres,this.tipoDeCodigo),this.resultadoDeIntento=this.FuncionesJuego.generarResultadoDeIntento(this.numeroCaracteres,this.resultadoDeIntento,this.codigoSecreto,this.intentoCodigo)}},{key:"getNumeroDeCaracteres",value:function(){return this.numeroCaracteres}},{key:"getNumeroDeIntentos",value:function(){return this.numeroIntentos}},{key:"getTipoDeCodigo",value:function(){return this.tipoDeCodigo}},{key:"getCodigoSecreto",value:function(){return this.codigoSecreto}},{key:"getResultadoDeIntento",value:function(){return this.resultadoDeIntento}},{key:"getIntentosRealizados",value:function(){return this.intentosRealizados}},{key:"comprobarJuego",value:function(){return this.FuncionesJuego.comprobarGanador(this.numeroCaracteres,this.numeroIntentos)}}])&&a(t.prototype,r),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports.default=u})),r.register("bweiO",(function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.numeroIntentosRealizados,this.numeroToros=0,this.codigoSecretoAutomatico=[],this.listaRepetidos=[]}var t,r,n;return t=e,(r=[{key:"convertirCodigoSecretoMayusculas",value:function(e){for(var t=0;t<e.length;t++)e[t]=e[t].toString().toUpperCase();return e}},{key:"generarCaracterNumerico",value:function(){return Math.floor(10*Math.random()).toString()}},{key:"generarCaracterLetra",value:function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return e[Math.floor(Math.random()*e.length)]}},{key:"generarCaracterLetraNumero",value:function(){return 0==Math.floor(2*Math.random())?this.generarCaracterLetra():this.generarCaracterNumerico()}},{key:"generarCodigoSecretoAut",value:function(e,t){var o;this.codigoSecretoAutomatico=[];for(var r=0;r<e;r++){switch(t){case"Numeros":o=this.generarCaracterNumerico();break;case"Letras":o=this.generarCaracterLetra();break;case"Combinado":o=this.generarCaracterLetraNumero()}this.codigoSecretoAutomatico.push(o)}return this.codigoSecretoAutomatico}},{key:"generarCodigoVacioYLleno",value:function(e,t){for(var o=[],r=0;r<e;r++)o.push(t);return o}},{key:"generarCodigoSecretoPorDefault",value:function(e,t,o){return this.numeroIntentosRealizados=0,o?this.generarCodigoSecretoAut(e,t):(this.codigoSecretoAutomatico=this.generarCodigoVacioYLleno(e,""),this.codigoSecretoAutomatico)}},{key:"generarVacas",value:function(e,t,o){for(var r=0;r<t.length;r++)for(var n=0;n<e.length;n++)if(!this.listaRepetidos[n]&&e[n]==t[r]){this.listaRepetidos[n]=!0,o[r]="V";break}return o}},{key:"generarToros",value:function(e,t,o){this.listaRepetidos=[],this.numeroToros=0,this.listaRepetidos=this.generarCodigoVacioYLleno(e.length,!1);for(var r=0;r<t.length;r++)e[r]==t[r]&&(this.listaRepetidos[r]=!0,o[r]="T",this.numeroToros++);return o}},{key:"esTernera",value:function(e,t,o){return e[o]==t[o]-1||e[o]==t[o]+1}},{key:"generarTernera",value:function(e,t,o){this.listaRepetidos=this.generarCodigoVacioYLleno(e.length,!1);for(var r=0;r<t.length;r++)this.esTernera(e,t,r)&&(o[r]="#");return o}},{key:"esError",value:function(e){return"string"==typeof e}},{key:"generarResultadoDeIntento",value:function(e,t,o,r){return this.esError(t)||(t=this.generarCodigoVacioYLleno(e,"O"),t=this.generarTernera(o,r,t),t=this.generarToros(o,r,t),t=this.generarVacas(o,r,t),this.numeroIntentosRealizados++),t}},{key:"generarIntentosRealizados",value:function(e){return"".concat(this.numeroIntentosRealizados," / ").concat(e," Intentos")}},{key:"sonTodosToros",value:function(e){return this.numeroToros==e}},{key:"seCumplioLosIntentos",value:function(e){return this.numeroIntentosRealizados==e}},{key:"comprobarGanador",value:function(e,t){return this.sonTodosToros(e)?"Ganador":this.seCumplioLosIntentos(t)?"Perdedor":"Continua"}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports.default=r})),r.register("aDjZ6",(function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.limiteInferior=1,this.limiteSuperior=10}var t,r,n;return t=e,(r=[{key:"controlarCantidadDeCaracteres",value:function(e){return(e<this.limiteInferior||e>this.limiteSuperior)&&(e="Número incorrecto de caracteres. Intente otra vez por favor"),e}},{key:"controlarCantidadDeIntentos",value:function(e){return e<this.limiteInferior&&(e="Número incorrecto de intentos. Intente otra vez por favor"),e}},{key:"esCodigoSecretoCompleto",value:function(e,t){for(var o=0;o<t;o++)if(this.esCaracterVacio(e[o]))return!1;return!0}},{key:"esCaracterVacio",value:function(e){return""==e||null==e}},{key:"esCaracterNumerico",value:function(e){var t=parseInt(e);return!isNaN(t)}},{key:"esCaracterLetra",value:function(e){var t=e.toUpperCase().charCodeAt(0);return t>64&&t<91}},{key:"esCaracterCombinado",value:function(e){return this.esCaracterLetra(e)||this.esCaracterNumerico(e)}},{key:"esNumeroOLetra",value:function(e,t){return"Numeros"==t?this.esCaracterNumerico(e):"Letras"==t?this.esCaracterLetra(e):this.esCaracterCombinado(e)}},{key:"controlarTipoCaracteresCodigoSecreto",value:function(e,t,o){for(var r=0;r<t;r++)if(!this.esNumeroOLetra(e[r],o))return"Código secreto inválido. La configuración del juego es de Tipo: ".concat(o);return e}},{key:"controlarCodigoSecreto",value:function(e,t,o){return this.esCodigoSecretoCompleto(e,t)?this.controlarTipoCaracteresCodigoSecreto(e,t,o):"Código secreto incompleto"}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports.default=r}));var n,i=(n=r("itOue"))&&n.__esModule?n:{default:n},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.getVista1=function(){return'<label for="numero-caracteres">Número de Caracteres:</label>\n    <input type="number" id="numero-caracteres" min="1" max="10"/><br><br>\n    <label for="numero-intentos">Número de Intentos:</label>\n    <input type="number" id="numero-intentos" min="1" /><br><br>\n    <label for="tipo-codigo">Tipo de Código:</label>\n    <select id="tipo-codigo">\n        <option value="Numeros">Números</option>\n        <option value="Letras">Letras</option>\n        <option value="Combinado">Combinado</option>\n    </select><br><br>\n    <label for="automatico"> Generar Código Automático</label>\n    <input type="checkbox" id="automatico" value="si"><br><br>\n\n    <input type="submit" value="Aceptar" />'},a.getVista2=function(e,t){for(var o='<br><br><label for="codigo-1">Código secreto: </label>',r=0;r<e;r++)o+='<input type="text" class="caracter" size="1" maxlength="1">';return o+='<input type="submit" value="Adivinar"/><br><br>',o+="<p>".concat(t,"</p><br><br>")},a.getVista2Historial=function(e,t,o,r){for(var n=0;n<r;n++)"V"==t[n]&&(o+='<input style="background-color: gold;" type="text" class="car" size="1" maxlength="1" value="'.concat(e[n],'">')),"T"==t[n]&&(o+='<input style="background-color: rgb(18, 235, 235);" type="text" class="car" size="1" maxlength="1" value="'.concat(e[n],'">')),"O"==t[n]&&(o+='<input style="background-color: white;" type="text" class="car" size="1" maxlength="1" value="'.concat(e[n],'">'));return o+="<br><br>"},a.getVista3=function(e,t,o){for(var r='<br><br><h1>GANADOR!</h1><br><br><label for="codigo-1">Código secreto: </label>',n=0;n<e;n++)r+='<input style="background-color: rgb(18, 235, 235); type="text" class="caracter" size="1" maxlength="1" value="'.concat(o[n],'">');return r+="<p>".concat(t,"</p><br><br>")},a.getVista4=function(e,t,o){for(var r='<br><br><h1>PERDEDOR!</h1><br><br><label for="codigo-1">Código secreto: </label>',n=0;n<e;n++)r+='<input style="background-color: rgb(235, 18, 123); type="text" class="caracter" size="1" maxlength="1" value="'.concat(o[n],'">');return r+="<p>".concat(t,"</p><br><br>")},a.volverAJugar=function(){return'<input type="submit" value="Volver a Jugar"/>'};var u,s,c=document.querySelector("#vista-1-form"),l=document.querySelector("#codigo-secreto-form"),d=document.querySelector("#intentos-codigo-secreto-form"),f=document.querySelector("#reiniciar-form"),g=document.querySelector("#visualizaciones"),h=document.querySelector("#historial-intentos"),p=document.querySelector("#numero-caracteres"),v=document.querySelector("#numero-intentos"),m=document.querySelector("#tipo-codigo"),C=document.querySelector("#automatico"),b=new i.default,y=[],k=[],T=[],L="";function D(e){switch(e){case 1:l.innerHTML="",c.innerHTML="",g.innerHTML="";break;case 2:case 3:case 4:d.innerHTML="",h.innerHTML="",g.innerHTML=""}}function S(e){switch(e){case 1:l.innerHTML=(0,a.getVista1)();break;case 2:d.innerHTML=(0,a.getVista2)(s,u),h.innerHTML=L,g.innerHTML="";break;case 3:d.innerHTML=(0,a.getVista3)(s,u,y),h.innerHTML=L,g.innerHTML="",f.innerHTML=(0,a.volverAJugar)();break;case 4:d.innerHTML=(0,a.getVista4)(s,u,y),h.innerHTML=L,g.innerHTML="",f.innerHTML=(0,a.volverAJugar)()}}c.addEventListener("submit",(function(e){e.preventDefault(),s=p.value;var t=v.value,o=m.value,r=C.checked;b.definirConfiguracionTotal(s,t,o,r),function(e){for(var t=b.getCodigoSecreto(),o='<label for="codigo-1">Código secreto: </label>',r=0;r<e;r++)o+='<input type="text" class="caracter" size="1" maxlength="1" value="'.concat(t[r],'">');o+='<input type="submit" value="Jugar"/>   ',l.innerHTML=o}(s),g.innerHTML=""})),l.addEventListener("submit",(function(e){e.preventDefault(),y=[];for(var t=document.querySelectorAll(".caracter"),o=0;o<t.length;o++)y.push(t[o].value);b.definirCodigoSecreto(y);var r=b.getCodigoSecreto();"string"==typeof r?g.innerHTML="<p> CÓDIGO:  ".concat(r,"</p>"):(u=b.getIntentosRealizados(),D(1),S(2))})),d.addEventListener("submit",(function(e){e.preventDefault(),k=[],T=[];for(var t=document.querySelectorAll(".caracter"),o=0;o<t.length;o++)k.push(t[o].value);b.definirIntento(k),u=b.getIntentosRealizados(),T=b.getResultadoDeIntento();var r,n=b.comprobarJuego();"string"==typeof T?g.innerHTML="<p> RESULTADO INTENTO:  ".concat(T," </p>"):(L=(0,a.getVista2Historial)(k,T,L,s),S(2)),"Ganador"==(r=n)&&(D(2),S(3)),"Perdedor"==r&&(D(2),S(4))})),f.addEventListener("submit",(function(e){e.preventDefault(),location.reload()}));
//# sourceMappingURL=index.7c65569f.js.map
