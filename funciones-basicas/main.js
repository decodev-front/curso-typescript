"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) { return heroes.length; };
var superHeroes = ['Ironman', 'Black Widow', 'Thor', 'Antman'];
console.log(contar(superHeroes));
// Parametros por defecto
function llamarBatman(llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar) {
        console.log("Batiseñal Activada!!");
    }
    else {
        console.log("Batiseñal Desactivada!!");
    }
}
llamarBatman(); // Batiseñal Desactivada
llamarBatman(true); // Batiseñal Activada
// Rest?
function unirHeroes() {
    var sHeroes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sHeroes[_i] = arguments[_i];
    }
    return sHeroes.join(' ');
}
unirHeroes('Batman', 'SuperMan', 'SpideMan', 'AcuaMan', 'AntMan');
// Tipo funcion
function noHaceNada(numero, texto, boolean, arreglo) {
    /**
     *
     *
     */
}
var noHaceNadaTampoco = function (x, t, b, a) { };
noHaceNadaTampoco = noHaceNada;
