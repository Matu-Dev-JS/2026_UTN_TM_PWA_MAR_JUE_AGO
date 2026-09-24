
import connectMongoDB from "./config/mongo.config.js";
import member_repository from "./repositories/member.repository.js";
import user_repository from "./repositories/user.repository.js";
import workspace_repository from "./repositories/workspace.repository.js";

connectMongoDB()


//Crear un espacio de trabajo
//Agregar a pepe como miembro
//probar
/* workspace_repository.createWorkspace(
    'Club de amigos',
    'Amigos'
) */

//member_repository.create('6aabfd4d5f848b9d98808f0f', '6ab528581000368924e5d41f', 'owner')

member_repository.getAllWorkspaceByUserId('6aabfd4d5f848b9d98808f0f')

