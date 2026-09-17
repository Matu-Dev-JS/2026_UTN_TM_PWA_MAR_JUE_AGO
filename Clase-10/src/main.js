
/* 
try catch nos sirve para manejar errores en un bloque de codigo
*/
/* 
try{
    console.log('hola, me llamo ' + nombre)
}
catch(error){
    console.log(error)
    console.log("Hubo un error al ejecutar el console.log")

}   
    
console.log("operacion importante") 
*/

import connectMongoDB from "./config/mongo.config.js";

connectMongoDB()