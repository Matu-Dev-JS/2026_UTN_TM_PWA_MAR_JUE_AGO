console.log('hola mundo')


/* Paradigma de programacion */

/* Programacion orientada a objetos (POO) */


class Persona {
    //Tipados de propiedad del objeto resultante persona
    nombre: string
    edad: number
    dinero: number
    sueldo: number
    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
        this.dinero = 0
        this.sueldo = 1200
    }

    presentarse (): void{
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    cobrarSueldo(): void{
        this.dinero = this.dinero + this.sueldo
    }

    cumplirAnio (): void{
        this.edad = this.edad + 1
    }

    cambiarNombre(nuevo_nombre: string): void{
        this.nombre = nuevo_nombre
    }

    aumentarSueldo (porcentaje_aumento: number): void{
        this.sueldo = this.sueldo * ((porcentaje_aumento / 100) + 1)
    }
}

const persona_1 = new Persona('maria', 50)
persona_1.aumentarSueldo(10)
persona_1.cambiarNombre('mario')
persona_1.cumplirAnio()
persona_1.cobrarSueldo()
persona_1.presentarse()
console.log(persona_1)

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



class Producto{
    titulo: string
    precio: number
    stock: number
    id: number
    constructor(titulo: string, precio: number, stock: number, id: number){
        this.titulo = titulo
        this.precio = precio
        this.stock = stock
        this.id = id
    }


}


const cpu = new Producto("cpu", 50000, 30, 3)
const gabinete = new Producto("gabinete", 5000, 100, 4)
console.log(new Producto("ram", 200000000, 1, 5))