console.log('hola mundo')


/* Paradigma de programacion */

/* Programacion orientada a objetos (POO) */


class Persona {
    //Tipados de propiedad del objeto resultante persona
    nombre: string
    edad: number
    dinero: number = 0
    sueldo: number = 1200
    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    }

    presentarse(): void {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    cobrarSueldo(): void {
        this.dinero = this.dinero + this.sueldo
    }

    cumplirAnio(): void {
        this.edad = this.edad + 1
    }

    cambiarNombre(nuevo_nombre: string): void {
        this.nombre = nuevo_nombre
    }

    aumentarSueldo(porcentaje_aumento: number): void {
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

class ManejadorPersonas {
    personas: Persona[] = []

    constructor (){

    }

    agregarPersona(nombre: string, edad: number){
        const persona = new Persona(nombre, edad)
        this.personas.push(persona)
    }
    eliminarPersonaPorId(persona_id: number){

    }
}

/* 
En nuestro programa vamos a tener productos
Cada producto tendra:
    titulo
    precio
    stock
    id
Declarar la clase Producto para poder tener productos en el programa
Crear almenos 3 productos


- aumentarStock(nuevo_stock) => acumula sobre el stock existente
- aumentarPrecio(porcentaje_aumento) => subir el precio por el porcentaje de aumento
- determinarPrecio(precio) => asignar ese precio al producto
- vender(cantidad_vendida) => Evaluar si el stock es valido para esa cantidad y caso de serlo decrementar el stock y devolver el precio final. Sino por consola decir 'No hay stock suficiente'
*/



class Producto {
    titulo: string
    precio: number
    stock: number
    id: number
    constructor(titulo: string, precio: number, stock: number, id: number) {
        this.titulo = titulo
        this.precio = precio
        this.stock = stock
        this.id = id
    }

    aumentarStock(nuevo_stock: number): void {
        this.stock = this.stock + nuevo_stock;
    }

    aumentarPrecio(porcentaje_aumento: number): void {
        let precio_aumento = this.precio * (porcentaje_aumento / 100)
        this.precio = this.precio + precio_aumento;
    }

    determinarPrecio(precio: number): void { //un nombre valido para este metodo es setPrice
        this.precio = precio
    }

    /* 
    Si la venta se puede realizar devuelve el importe final
    Sino devuelve null 
    */
    vender(cantidad_vendida: number): number | null {
        if (cantidad_vendida <= this.stock) {
            this.stock -= cantidad_vendida
            let importe_final = this.precio * cantidad_vendida
            return importe_final
        } else {
            console.log('No hay stock suficiente')
            return null
        }
    }


}


const cpu = new Producto("cpu", 50000, 30, 3)
const gabinete = new Producto("gabinete", 5000, 100, 4)
console.log(new Producto("ram", 200000000, 1, 5))

cpu.aumentarStock(10)
cpu.aumentarPrecio(5)

cpu.vender(400)
let resultado = cpu.vender(2)

if(resultado === null){
    console.log("Alerta de aumento de stock")
}
else{
    console.log("El importe final de tu compra es $" + resultado)
}

console.log(cpu)



/* 
ManejadorProductos
    propiedades:
        productos => una lista interna de productos
    metodos:
        crearProducto(nombre, precio, stock_inicial, id) => Crea y agrega un producto al array
        eliminarProductoPorId(producto_id) => busca y elmina el producto de la lista, si lo encuentra devuelve true, sino lo encuentra devuelve false
        calcularCapitalTotal => devuelve la suma de los precios por stock de todos los productos
        buscarProductoProximoAReponer => devuelve el producto con el stock mas bajo
*/