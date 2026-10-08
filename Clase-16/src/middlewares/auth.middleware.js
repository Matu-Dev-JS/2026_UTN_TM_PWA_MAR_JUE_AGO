import jwt from 'jsonwebtoken'
import ENVIRONMENT from '../config/environment.config.js'
import ServerError from '../utils/error.util'

function authMiddleware (request, response, next){
    try{
        /* 
        Cuando un usuario haga alguna operacion que necesite auth:
            - Crear un espacio de trabajo
            - Crear un mensaje
        
        Vamos a recibir de los headers de la consulta el auth_token, lo solemos esperar en un header llamado authorization pero podes cambiarlo
        */
        const auth_header = request.headers.authorization //'Bearer token_value'
        if(!auth_header){
            throw new ServerError('Auth header is requered', 400)
        }
    
        //auth_header.split(' ') = ['Bearer', 'token_value']
        const auth_token = auth_header.split(' ')[1] //token_value
        if(!auth_token){
            throw new ServerError('Auth header is malformed', 400)
        }

    
        //Verificamos la firma, para ver si coinciden (Si esto falla lanza error)
        //Si todo sale bien podemos leer el contenido que dejamos en ese token
        const {id, name, email} = jwt.verify(auth_token, ENVIRONMENT.JWT_SECRET_KEY)
        

        //Mutamos la request para que ahora guarde dentro de la nueva propiedad user los datos de la credencial
        request.user = {
            id: id,
            name: name,
            email: email
        }

        //Que vaya al sig middleware/controlador
        next()
    }
    catch(error){
        //Si hubo algun fallo al verificar el token
        if(
            error instanceof jwt.JsonWebTokenError //Falla verificacion o esta mal escrito
            || 
            error instanceof jwt.NotBeforeError //Es un token del futuro
            ||
            error instanceof jwt.TokenExpiredError //Es un token expirado
        ){
            return response.status(401).send({
                ok:false,
                status: 401,
                message: 'Auth token is invalid!'
            })
        }
        
        if(error.status){
            return response.status(error.status).send(
                {
                    ok: false,
                    status: error.status,
                    message: error.message
                }
            )
        }

        console.log('[Middleware de Error]:', error)
        //Error generico
        return response.status(500).send(
            {
                ok: false,
                status: 500,
                message: 'Internal server error'
            }
        )
    }
}