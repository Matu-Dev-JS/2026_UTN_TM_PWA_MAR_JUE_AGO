console.log('hola mundo')


/* Paradigma de programacion */

/* Programacion orientada a objetos (POO) */


class Persona {
    //Tipados de propiedad del objeto resultante persona
    nombre: string
    edad: number
    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
    }
}

const persona_1 = new Persona('maria', 50)


/* 
En nuestro programa vamos a tener productos
Cada producto tendra:
    titulo
    precio
    stock
    id
Declarar la clase Producto para poder tener productos en el programa
Crear almenos 3 productos
*/