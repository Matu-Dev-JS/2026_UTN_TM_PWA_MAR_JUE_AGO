

import mongoose from "mongoose";
import connectMongoDB from "./config/mongo.config.js";
import User from "./models/user.model.js";
import Workspace from "./models/workspace.model.js";

connectMongoDB()




function createUser(nombre, email, password) {
    User.create({ nombre: nombre, email: email, password: password })
}

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


async function getUsers(){
    const result = await User.find()
    console.log(result)
    return result
}

async function getUsersByCreationDate(min_date, max_date){
    const result = await User.find({
        fecha_creacion: {
            $gte: new Date(min_date), //Establece una fecha minima
            $lt: new Date(max_date) //Establece una fecha maxima
        }
    })
    console.log(result)
    return result
}

async function getUsersByName(name){
    const result = await User.find({
        nombre: name, 
        activo: true
    })

    console.log(result)
}

async function getUsersBySearchTerm(term){
    const result = await User.find({
        nombre: {
            $regex: term,
            $options: 'i' //Permite buscar de forma 'no case sensitive' (Sin diferenciar entre mayus y minus)
        }, 
        activo: true
    })
    .limit(5)

    console.log(result)
}


/* 
createUser('juan', 'juan@gmail.com', 'juan123') */
//getUsersByCreationDate('2026-9-12', '2026-9-20')

//getUsersByName('pepe')
/* getUsersBySearchTerm('pepe') */


/* 
Reglas para que tu servidor no se sature:
    - Siempre que podamos, usar filtros del lado de la DB (Son MUUUCHO mas optimos que usar un for of)
*/