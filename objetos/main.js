"use strict";
/**
 * Objetos
 */
var heroe = {
    nombre: 'Anthony Stark',
    edad: 32,
    poderes: ['inteligencia', 'Riqueza'],
    getNombre: function () {
        return this.nombre;
    }
};
var spaiderman = {
    nombre: 'Peter Parker',
    edad: 17,
    poderes: ['Pegajoso', 'Muy Flexible'],
    getNombre: function () {
        return this.nombre;
    }
};
heroe.getNombre();
