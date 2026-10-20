import member_repository from "../repositories/member.repository.js"
import workspace_repository from "../repositories/workspace.repository.js"
import ServerError from "../utils/error.util.js"


/* 
Validar que el espacio de trabajo exista
Validar que quien consulta sea parte de este espacio de trabajo
    Revisar que sea miembro de este workspace (que tenga membresia)
Validar el rol de quien consulta
*/
async function workspaceMiddleware ( request, response, next ){

    const {workspace_id} = request.params
    const workspace_selected = await workspace_repository.getById(workspace_id)

    const membership = await member_repository.getMembershipByUserAndWorkspace(request.user.id, workspace_id)
    console.log('[WorkspaceMiddleware]:', membership, workspace_id, request.user)

    if(!workspace_selected){
        throw new ServerError(
            'Workspace no encontrado',
            404
        )
    }

    request.workspace = workspace_selected
    next()
}

export default workspaceMiddleware