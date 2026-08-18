
//Desestructuracion

//Que tipo de dato es persona? Es un objeto (nombre, edad)
/* function presentarse ({
    nombre: name, 
    edad: age, 
    dni_completo_id_persona: dni,
    ['dinero cuenta']: dinero
}){

    //const {edad, nombre} = persona

    console.log(`Hola, mi nombre es ${name} y tengo ${age} años. Tengo $${dinero} pesos`)
}


const persona_1 = {
    nombre: 'pepe',
    edad: 28,
    dni_completo_id_persona: '11222333',
    'dinero cuenta': 19000
}

presentarse(persona_1) */

/* function getPersona (){
    return ['pepe', 28]
}
 */
/*
const persona = getPersona()
const nombre = persona[0]
const edad = persona[1] 
*/

/* const [ nombre, edad ] = getPersona()
console.log(nombre, edad) */


//Tipos de datos

//Primitivos: Se asigna al dato
//string, number, boolean, null, undefined

//Objeto: Se asigna a la referencia
//array, objetos


/* let nombre_1 = 'pepe'
let nombre_2 = nombre_1

nombre_1 = 'juan'

console.log(nombre_2) */
/* 
const persona_1 = {nombre: 'pepe'}
const persona_2 = persona_1

persona_1.nombre = 'juan'

console.log(persona_2) */

const dato = {x: 120, y: 0}

//Creo un objeto nuevo (para crear una nueva referencia y propago las propiedades del objeto dato)
const dato_original = {...dato, date: new Date()}
//const dato_original = {x: dato.x, y: dato.y}

dato.x = dato.x + 20
dato.y = 40
dato.date = new Date()

const historial = {
    dato_modificado: dato,
    dato_original: dato_original
}

console.log(historial)

