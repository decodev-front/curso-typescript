// Funciones Básicas
function sumar( a:number, b:number ):number {
    return a + b; 
}

let contar = (heroes:Array<string>):number => heroes.length;
let superHeroes = ['Ironman', 'Black Widow', 'Thor', 'Antman'];
console.log(contar(superHeroes));


// Parametros por defecto
function llamarBatman( llamar:boolean = false ) {
    if( llamar ) {
        console.log("Batiseñal Activada!!");
    } else {
        console.log("Batiseñal Desactivada!!");
    }
}

llamarBatman() // Batiseñal Desactivada
llamarBatman(true) // Batiseñal Activada

// Rest?
function unirHeroes(...sHeroes:Array<string>):string {
    return sHeroes.join(' ');
}

unirHeroes('Batman', 'SuperMan', 'SpideMan', 'AcuaMan', 'AntMan');


// Tipo funcion
function noHaceNada( numero:number, texto:string, boolean: boolean, arreglo:any[]) {
    /**
     * 
     * 
     */
}

let noHaceNadaTampoco = (x:number, t:string, b:boolean, a:any[]) => {};

noHaceNadaTampoco = noHaceNada;
