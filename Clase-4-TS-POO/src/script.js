//Mi programa tiene una entidad llamada persona, un objeto con nombre y edad

const persona_1 = {
    nombre: 'pepe',
    edad: 25,
}

const persona_2 = {
    nombre: 'maria',
    edad: 25,
}

const persona_3 = {
    nombre: 'pedro',
    edad: 25,
}

function crearPersona(nombre, edad){
    return {
        nombre: nombre, 
        edad: edad
    }
}




//class es la estructura de JS para definir clases
//Las clases llevan mayusculas
//constructor es la funcion que se invocara al instanciar la clase

//las clases se instancian, si vemos a clase como un molde, cada elemento producido de ese molde es una instancia
//Cuando una clase es instanciada, se invoca la funcion constructora de dicha clase
//Esa funcion tiene acceso a this, que es una autoreferencia del objeto que se creara (la instancia en si)
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
        this.dinero=0
        this.nivel=1
    }
}


//new es la forma en la que instanciamos una clase

const persona_4 = new Persona('pepe', 60)

console.log(persona_4)

//En programacion orientada a objetos el estado de nuestra aplicacion siempre seran objetos
//Cada uno de estos objetos seran creados mediante clases


