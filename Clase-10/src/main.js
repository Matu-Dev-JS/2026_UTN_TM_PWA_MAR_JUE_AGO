

import mongoose from "mongoose";
import connectMongoDB from "./config/mongo.config.js";
import User from "./models/user.model.js";

connectMongoDB()




function createUser (){
    User.create({nombre: 'maria', email:'maria@mail.com', password: 'pepe123'})
}

//createUser()


/* 
Crear un schema de mongoose para el Workspace (espacio_de_trabajo)
    - Seguir el mismo formato que en SQL (fecha_creacion, nombre, descripcion)
    - Crear el schema y modelo dentro de /models/workspace.model.js
Crear una funcion llamada createWorkspace(name, description) que inserte en la DB un espacio de trabajo
*/