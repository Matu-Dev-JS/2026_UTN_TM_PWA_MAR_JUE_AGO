//Tipos de datos:
//primitivos: number, string, null, boolean, undefined

let edad: number = 23
let tengoHambre: boolean = true
let nombre: string = 'pepe'

//any hace referencia a que cierto dato puede ser de cualquier tipo, basicamente como en JS
//any es una mala practica, hay que evitarlo lo mas posible
let datoRandom: any = true
let dinero: number | undefined | null


//type es una estructura de TS que nos permite guardar una "variable" de como debe ser cierto tipo, es muy util cuando cierto tipo de dato se repite en el programa
type Precio = number | null
type TipoActividad = 'desempleado' | 'monotributista' | 'relacion_dependencia'

let precio_leche: Precio = 2000
let precio_alfajor: Precio = 1400
let miTipoActividad: TipoActividad = 'relacion_dependencia'


//TS detecta los errores en tiempo de compilacion, por ende vos detectas errores antes de que ocurran

//Tiempo de compilacion: Mientras nuestro TS se transforma a JS
//Tiempo de ejecucion: Mientras nuestro programa se ejecuta


//Para que la funcion sumar funcione la funcion espera recibir 2 parametros:
// a debe ser un numero 
// b debe ser un numero
function sumar( a: number, b: number ): number {
	return a + b
}

function calcularIva ( precio: number ): number | undefined {
	if(precio >= 0){
		return undefined
	}
	return precio * 0.21
}


let result = calcularIva(600)
if(result === undefined){
	console.log("No se pudo calcular el iva")
}

//El type void indica que una funcion no tiene retorno (no confundir con el undefined)
//void es la forma en la que indicamos a quien usa la funcion que el retorno de la misma NO es relevante (ya que no tiene)
//Si la palabra return no esta en tu funcion (o esta pero vacia) usa void
function saludar (nombre: string): void{
	console.log('Hola ' + nombre + '!')
	return 
}

//arrays
let nombres : string[] = ['pepe', 'juan', 'maria']

let tipos_actividad_laboral : TipoActividad[] = ['desempleado', 'monotributista', 'relacion_dependencia']

let persona : [string, number] = ['pepe',  30]


//objetos

//tipar al objeto literal
/* const argentina : {
	nombre: string,
	id: number,
	cant_hab: number
} = {
	nombre: 'Argentina',
	id: 1,
	cant_hab: 46000000
} */

interface Pais {
	nombre: string,
	id: number,
	cant_hab: number
}

const argentina : Pais = {
	nombre: 'Argentina',
	id: 1,
	cant_hab: 46000000
} 

const brazil : Pais = {
	nombre: 'Brazil',
	id: 2,
	cant_hab: 213000000
}

const paises : Pais[] = [argentina, brazil]

console.log('Cantidad habitantes brazil ' + paises[1].cant_hab)


//tupla:
//Es un array con un tamaño determinado donde cada elemento del array representa cierto valor en particular
//posicion/coordenada
let posicion_del_usuario : [number, number] = [55, -55]



//enum
//te permite guardar un conjunto de valores posibles para un x campo
//Los roles de un usuario 
enum Roles {
	Admin, //0
	User, //1
	Writter //2
}

//Los valores disponibles como color en el sistema
enum Color {
	ROJO = 'Rojo',
	VERDE = 'Verde',
	AZUL = 'Azul'
}

console.log('El usuario le gusta el color ' + Color.ROJO)


enum Operations {
	SUMA = '+',
	RESTA = '-'
}

function calcular (a: number, b: number, operation: Operations): number{
	if(operation === Operations.SUMA){
		return a + b
	}
	else if (operation === Operations.RESTA){
		return a - b
	}
	return NaN
}