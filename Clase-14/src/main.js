
import connectMongoDB from "./config/mongo.config.js";
import member_repository from "./repositories/member.repository.js";
import user_repository from "./repositories/user.repository.js";
import workspace_repository from "./repositories/workspace.repository.js";

connectMongoDB()


import express from 'express'
import ServerError from "./utils/error.util.js";

const PORT = 8080

const app = express()

//Configuramos nuesta API para que body pueda ser tipo de dato JSON
//Esto es un middleware
//Cada vez que llegue una consulta el middleware revisara si el request.header['Content-Type'] es 'application/json' y transformara el JSON recibido y lo guardara en request.body
app.use(express.json())




app.get(
    '/api/users',
    async (request, response) => {

        try {
            const user_list = await user_repository.get()
            response.send({
                message: "Get users list", 
                ok: true,
                status: 200,
                data: {
                    users: user_list
                }
            })

        }
        catch (error) {
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


app.get(
    '/api/users/:user_id',
    async (request, response) => {
        try {

            console.log(request.params)

            const user_id = request.params.user_id
            const user = await user_repository.getById(user_id)

            if(!user){
                return response.send(
                    {
                        message: "User not found",
                        status: 404,
                        ok: false
                    }
                )
            }
            return response.send(
                {
                    message: "Get user details successfully",
                    status: 200,
                    ok: true,
                    data: {
                        user: user
                    }
                }
            )
        }
        catch (error) {
            return response.send(
                {
                    message: 'Internal server error',
                    ok: false,
                    status: 500
                }
            )
        }
    }
)




app.get(
    '/api/status',
    (request, response) => {
        response.send(['hola, les traigo pAZ'])
    }
)


/* 
Para enviar en una request HTTP info a una API usamos el body

Las consultas (request) tipo GET NO TIENEN body
El body puede ser de distintos tipos de dato:
    Hoy vamos a usar JSON, para poder usar JSON nuestra API debe estar preparada para recibir ese tipo de informacion
*/

app.post(
    '/api/auth/register',
    async (request, response) => {
        try{
            console.log("[REGISTER]", request.body)
    
            const {username, email, password} = request.body
    
            if(!username || !email || !password){
                throw new ServerError(
                    "Email, password and username is required", 
                    400
                )
            }
    
            if( !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ){
                throw new ServerError(
                    "Email is incorrect",
                    400
                )
            }
    
            //Validar si el mail ya esta registrado
            const user_already_exist = await user_repository.getByEmail(email)
            if(user_already_exist){
                throw new ServerError(
                    'Email is already used',
                    400
                )
            }

            await user_repository.create(username, email, password)
    
            return response.send({
                ok: true,
                status: 201,
                message: "User registered successfully"
            })

        }
        catch(error){
            //Si hay estatus es un error manejable, porque yo defini ese error
            if(error.status){
                return response.send(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            //Es un error inesperado
            else{
                console.error('[Server Error]:', error.message)
                //Error generico
                return response.send(
                    {
                        ok: false,
                        status: 500,
                        message: 'Internal server error'
                    }
                )
            }
        }
    }
)



app.listen(
    PORT,
    () => {
        console.log(
            `El servidor se esta escuchando correctamente en http://localhost:${PORT}`
        )
    }
)
