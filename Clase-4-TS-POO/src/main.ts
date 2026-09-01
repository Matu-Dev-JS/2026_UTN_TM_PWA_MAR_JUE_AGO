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

    constructor() {

    }

    agregarPersona(nombre: string, edad: number) {
        const persona = new Persona(nombre, edad)
        this.personas.push(persona)
    }
    eliminarPersonaPorId(persona_id: number) {

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

if (resultado === null) {
    console.log("Alerta de aumento de stock")
}
else {
    console.log("El importe final de tu compra es $" + resultado)
}

console.log(cpu)



/* 
ManejadorProductos
    propiedades:
        productos => una lista interna de productos
    metodos:
        crearProducto(nombre, precio, stock_inicial, id) => Crea y agrega un producto al array
        eliminarProductoPorId(producto_id) => busca y elimina el producto de la lista, si lo encuentra devuelve true, sino lo encuentra devuelve false
        calcularCapitalTotal => devuelve la suma de los precios por stock de todos los productos
        buscarProductoProximoAReponer => devuelve el producto con el stock mas bajo
*/

//La clase encargada de manejar un listado de productos
class ManejadorProductos {
    productos: Producto[] = []

    constructor() {

    }

    crearProducto(titulo: string, precio: number, stock_inicial: number): void {
        //generamos el id del producto que estamos creando
        const nuevo_id: number = Math.max(...this.productos.map(productoId => productoId.id)) + 1;

        const producto = new Producto(titulo, precio, stock_inicial, nuevo_id);
        this.productos.push(producto);
    }

    eliminarProductoPorId(id_a_buscar: number): boolean {
        for (let index = 0; index < this.productos.length; index++) {
            const id_actual = this.productos[index].id;
            if (id_actual == id_a_buscar) {
                this.productos.splice(index, 1);
                return true;
            }
        }
        return false
    }

    calcularCapitalTotal(): number {
        let capitalTotal = 0;
        for (const producto of this.productos) {
            capitalTotal += producto.precio * producto.stock;
        }
        return capitalTotal;
    }

    buscarProductoProximoAReponer(): Producto | null {
        if (this.productos.length === 0) {
            return null
        }
        let productoConMenosStock = this.productos[0]
        for (const producto of this.productos) {
            if (producto.stock < productoConMenosStock.stock) {
                productoConMenosStock = producto
            }
        }
        return productoConMenosStock
    }
    /*  
     //Opcion viable, devuelve el/los producto con stock minimo (contempla productos con mismo stock)
     buscarProductoProximoAReponer(): Producto[] | null {
         if (this.productos.length === 0) {
             return null;
         }
         let productoMinimo: Producto[] = [this.productos[0]];
         for (const producto of this.productos) {
             if (producto.stock < productoMinimo[0].stock) {
                 productoMinimo = [producto];
             }
             else if (producto.stock === productoMinimo[0].stock) {
                 productoMinimo.push(producto);
             }
         }
         return productoMinimo;
     } */

}

class Bicicleta {
    ruedas = 2
    rodado: number
    asiento: string

    constructor(
        rodado: number,
        asiento: string
    ) {
        this.rodado = rodado
        this.asiento = asiento
    }
}

class BicicletaConCambios extends Bicicleta {

    cantidadCambios: number

    constructor(
        rodado: number,
        asiento: string,
        cantidadCambios: number
    ) {
        //Si heradamos de una clase HAY QUE USAR SUPER
        //super hace referencia a la funcion constructora de la clase que heradamos
        //super es la invocacion de la funcion constructora de la clase que heradamos
        super(rodado, asiento)
        this.cantidadCambios = cantidadCambios

    }

}

/* const bicicleta_pro = new BicicletaConCambios(28, 'comodo', 7)

const bicicleta_normal = new Bicicleta(26, 'plastico')

console.log(bicicleta_pro, bicicleta_normal)

console.log(bicicleta_pro instanceof Bicicleta)
console.log(bicicleta_pro instanceof BicicletaConCambios)

console.log(bicicleta_normal instanceof BicicletaConCambios) */

/* 

Crear 3 ejemplos de cada 1

Usuario
    id
    nombre
    edad
    dni

Empleado hereda de Usuario
    sueldo
    puesto
    empresa
    horario_ingreso: string '07:00'
    horario_egreso: string '16:00'
    dias_semana_laboral: string[]

Pasante hereda de Empleado
    fecha_inicio_pasantia: string
    fecha_fin_pasantia: string
*/

type DiaSemana = 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado' | 'domingo'
type Nombre = string
type Roles = "user" | 'admin' | 'staff'
type Estado = 'accepted' | 'pending' | 'rejected' | 'open'

let nombre : Nombre = 'pepe'

class Usuario {
    id: number
    nombre: string
    edad: number
    dni: string
    dinero: number = 0
    constructor(id: number, nombre: string, edad: number, dni: string) {
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
    }
}

class Empleado extends Usuario {
    sueldo: number
    puesto: string
    empresa: string
    horario_ingreso: string
    horario_egreso: string
    dias_semana_laboral: DiaSemana[]
    constructor(
        id: number,
        nombre: string,
        edad: number,
        dni: string,
        sueldo: number,
        puesto: string,
        empresa: string,
        horario_ingreso: string,
        horario_egreso: string,
        dias_semana_laboral: DiaSemana[]
    ) {
        super(id, nombre, edad, dni)
        this.sueldo = sueldo
        this.puesto = puesto
        this.empresa = empresa
        this.horario_ingreso = horario_ingreso
        this.horario_egreso = horario_egreso
        this.dias_semana_laboral = dias_semana_laboral
    }

    cobrarSueldo (): void{
        const PORCENTAJE_APORTE = 10
        let contribucion = this.sueldo * (PORCENTAJE_APORTE / 100)
        let sueldo_neto = this.sueldo - contribucion
        this.dinero = this.dinero + sueldo_neto
    }
}

class Pasante extends Empleado {
    fecha_inicio_pasantia: string;
    fecha_fin_pasantia: string;
    constructor(
        id: number,
        nombre: string,
        edad: number,
        dni: string,
        sueldo: number,
        puesto: string,
        empresa: string,
        horario_ingreso: string,
        horario_egreso: string,
        dias_semana_laboral: DiaSemana[],
        fecha_inicio_pasantia: string,
        fecha_fin_pasantia: string,
    ) {
        super(id, nombre, edad, dni, sueldo, puesto, empresa, horario_ingreso, horario_egreso, dias_semana_laboral);
        this.fecha_inicio_pasantia = fecha_inicio_pasantia;
        this.fecha_fin_pasantia = fecha_fin_pasantia;
    }

    hacerCosasDePasante(){
        console.log('Ups, borre la base de datos!!')
    }

    cobrarSueldo(): void{
        this.dinero = this.dinero + this.sueldo
    }
}



const pasante3 = new Pasante(
    9, 
    "Lucia", 
    21, 
    '24889880', 
    580000, 
    "pasantia", 
    "YPF", 
    "09:00", 
    "14:00", 
    ['lunes', 'martes', 'viernes'], 
    "01/03/2024", 
    "30/08/2024"
);

/* 
Usuario
    presentar => se presenta

Empleado
    presentar => se presenta y cuenta la empresa y puesto que tiene
    recibirAumento(aumento) => aumento bruto de su sueldo


Pasante
    presentar => se presenta y cuenta la empresa, puesto que tiene y desde cuando a cuando es su pasantia
*/