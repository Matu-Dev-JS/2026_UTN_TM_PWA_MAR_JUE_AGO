import express from 'express'
import workspace_repository from '../repositories/workspace.repository.js'
import member_repository from '../repositories/member.repository.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const workspace_router = express.Router()


/* 
Route /api/workspaces
    POST / => Crear espacio de trabajo y membresia de creador
    GET / => Obtener lista de espacios de trabajo asociados a un usuario (Buscamos las membresias asociadas a un cierto usuario)
    GET /:workspace_id => Obtener los datos de un cierto espacio de trabajo
*/


workspace_router.post(
    '/',
    authMiddleware,
    async (request, response) => {
        //Quien carancho quiere hacer esta operacion ?????
        console.log('[CREATE WORKSPACE]', request.user)
        const {name, description} = request.body



        const workspace_created = await workspace_repository.createWorkspace(name, description)
        const owner_membership = await member_repository.create(
            request.user.id,
            workspace_created._id,
            'owner'
        )

        return response.status(201).send(
            {
                ok: true, 
                status: 201,
                message: "Por ahora todo bien",
                data: {
                    workspace_created,
                    owner_membership
                }
            }
        )
    }
)

export default workspace_router