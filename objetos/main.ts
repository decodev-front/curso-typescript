/**
 * Objetos
 */

type Heroes = {
    nombre:string, 
    edad:number, 
    poderes:Array<string>, 
    getNombre: () => string
};



let heroe: Heroes = {
    nombre: 'Anthony Stark',
    edad: 32,
    poderes: ['inteligencia', 'Riqueza'],
    getNombre(){
        return this.nombre;
    }
} 

let spaiderman: Heroes = {
    nombre: 'Peter Parker',
    edad: 17,
    poderes: ['Pegajoso', 'Muy Flexible'],
    getNombre() {
        return this.nombre;
    }
}
heroe.getNombre();