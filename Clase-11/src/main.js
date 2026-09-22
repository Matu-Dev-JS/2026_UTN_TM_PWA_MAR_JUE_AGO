

import mongoose from "mongoose";
import connectMongoDB from "./config/mongo.config.js";
import User from "./models/user.model.js";
import Workspace from "./models/workspace.model.js";
import user_repository from "./repositories/user.repository.js";

connectMongoDB()






//createUser()



function createWorkspace(name, description) {
    Workspace.create(
        {
            nombre: name,
            descripcion: description
        }
    )
}


/* createWorkspace('Contabilidad Argentina SA', 'Comunicaciones internas de la empresa') */





/* 
createUser('juan', 'juan@gmail.com', 'juan123') */
//getUsersByCreationDate('2026-9-12', '2026-9-20')

//getUsersByName('pepe')
/* getUsersBySearchTerm('pepe') */


/* 
Reglas para que tu servidor no se sature:
    - Siempre que podamos, usar filtros del lado de la DB (Son MUUUCHO mas optimos que usar un for of)
*/


user_repository.getUserById('6aabfd4d5f848b9d98808f0f')