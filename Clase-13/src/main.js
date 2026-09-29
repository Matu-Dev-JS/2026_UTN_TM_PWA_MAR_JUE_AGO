
import connectMongoDB from "./config/mongo.config.js";
import member_repository from "./repositories/member.repository.js";
import user_repository from "./repositories/user.repository.js";
import workspace_repository from "./repositories/workspace.repository.js";

connectMongoDB()

/* 
Hacer un servidor http con NODE.js
Para esto vamos a usar una libreria llamada express.js (Otra opcion con TS podria ser nest.js o fastify con JS)
*/
import express from 'express'

const PORT = 8080

//Se crea una app de express (Server HTTP)
const app = express()


//Programacion orientada a eventos


//Devolver el listado de usuarios
//GET /api/users
//Devolver un JSON / HTML con el listadito de usuarios
app.get(
    '/api/users', 
    async (request, response) => {

        try{
            //traemos de DB la lista completa de usuarios
            const user_list = await user_repository.get()
            console.log(homero)
            response.send({
                message: "Get users list", //Mensaje descriptivo de la operacion
                ok: true, //Flag que indica si se resolvio correctamente o no la operacion a grandes rasgos
                status: 200, //status de respuesta, generalmente indica como fue la consulta
                data: {
                    users: user_list
                }
            })

        }
        catch(error){
            response.send(
                {
                    message: 'Internal server error',
                    ok: false,
                    status: 500
                }
            )
        }
    }
)



/* 
Si me hacen un GET a la direccion '/api/status' activar tal funcion
*/
app.get(
    '/api/status',
    (request, response) => {
        response.send(['hola, les traigo pAZ'])
    }
)

/* 
En el protocolo HTTP hay metodos de consulta:

GET: Obtener recursos del servidor
POST: Enviar recursos al servidor
PUT: Actualizar un recurso del servidor
DELETE: Eliminar un recurso del servidor

Los metodos/verbos http son teoricos, es decir teoricamente el GET debe traer recursos pero REALMENTE quien define que hace el GET...DELETE es en ultima instancia el programador
*/


/* 
En el protocolo HTTP tenemos status de respuesta HTTP
Los estatus basicamente sirven para saber rapidamente como fue una consulta
EN ULTIMA INSTANCIA QUIEN ELIGE CUMPLIR CON LOS SIGNIFICADOS ES EL PROGRAMADOR

2.x.x: Suele significar que salio correctamente
    200: OK, todo salio como esperabamos
    201: Creado, el recurso se creo correctamente

4.x.x: Suele significar un error del lado de quien consulta (Client-side)
    400: BAD REQUEST, Algo de tu lado salio mal, nos mandaste algo mal, nose fijate!
    401: Unauthorized, No podes acceder sin autorizacion
    403: Forbidden, NO tenes permiso para esta operacion
    404: Not found, ese recurso que pedis no existe

5.x.x: Suele significar un error del lado del servidor (Server-side)
    500: Error interno del servidor
    502: Bad Gateway, el servidor esta mal enlazado
    503: Service unaviable, ese servicio no esta diponible
    504: Gateway timeout, el tiempo de espera de respuesta se agoto
*/


//Destinamos un puerto de nuestra PC para que esta app se escuche
app.listen(
    PORT,
    //Si funciono el listen del server entonces se ejecutara esta funcion
    () => {
        console.log(
            `El servidor se esta escuchando correctamente en http://localhost:${PORT}`
        )
    }
)