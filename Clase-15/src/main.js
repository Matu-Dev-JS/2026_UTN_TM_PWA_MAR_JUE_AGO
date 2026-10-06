
import connectMongoDB from "./config/mongo.config.js";
import member_repository from "./repositories/member.repository.js";
import user_repository from "./repositories/user.repository.js";
import workspace_repository from "./repositories/workspace.repository.js";

connectMongoDB()


import express from 'express'
import ServerError from "./utils/error.util.js";
import errorHandlerMiddleware from "./middlewares/error.middleware.js";
import { getUserById, getUsers } from "./controllers/user.controller.js";
import { register } from "./controllers/auth.controller.js";
import channel_repository from "./repositories/channel.repository.js";

const PORT = 8080

const app = express()

//Configuramos nuesta API para que body pueda ser tipo de dato JSON
//Esto es un middleware
//Cada vez que llegue una consulta el middleware revisara si el request.header['Content-Type'] es 'application/json' y transformara el JSON recibido y lo guardara en request.body
app.use(express.json())


app.get(
    '/api/users',
    getUsers
)


app.get(
    '/api/users/:user_id',
    getUserById
)


app.post(
    '/api/auth/register',
    register
)

/* 
Flujo actual:
LLega request => pasa por el middleware de express.json (hace el checkeo de si el body es JSON) => llega al endpoint (Ahi mismo se maneja el error)

Flujo ideal:
LLega request 
=> 
pasa por el middleware de express.json (hace el checkeo de si el body es JSON) 
=> 
llega al endpoint 
=> (si hay error)
Middleware de errores (checkea si el error es controlable o no y responde)
*/

app.get(
    '/api/status',
    (request, response) => {

        response.send(['hola, les traigo paz'])
    }
)


app.use(
    errorHandlerMiddleware
)


app.listen(
    PORT,
    () => {
        console.log(
            `El servidor se esta escuchando correctamente en http://localhost:${PORT}`
        )
    }
)



//channel_repository.createChannel("Comunicados oficiales", '', "6ab2729b3784a8b4ecb9936e")
//channel_repository.updateById('6ac4e7e81db40fa320a4a045', 'General oficial', 'test')
//channel_repository.getAllChannelsByWorkpaceId("6ab2729b3784a8b4ecb9936e")
//channel_repository.deleteById('6ac4e7e81db40fa320a4a045')