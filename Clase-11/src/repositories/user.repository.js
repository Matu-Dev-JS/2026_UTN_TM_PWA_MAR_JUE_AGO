/* 
Un repository es donde manejamos la comunicacion con nuestros datos (Generalmente la DB)
*/

import User from "../models/user.model.js"

class UserRepository {

    async createUser(nombre, email, password) {
        await User.create({ nombre: nombre, email: email, password: password })
    }

    async getUsers(){
        const result = await User.find()
        console.log(result)
        return result
    }

    async getUsersByCreationDate(min_date, max_date){
        const result = await User.find({
            fecha_creacion: {
                $gte: new Date(min_date), //Establece una fecha minima
                $lt: new Date(max_date) //Establece una fecha maxima
            }
        })
        console.log(result)
        return result
    }

    async getUsersByName(name){
        const result = await User.find({
            nombre: name, 
            activo: true
        })

        console.log(result)
    }

    async getUsersBySearchTerm(term){
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

    async getUserById (user_id){
        const result = await User.findById(user_id)
    
        console.log(result)
    }

    async softDeleteUserById(user_id){
        const result = await User.findByIdAndUpdate(user_id, {activo: false})
        console.log(result)
    }

    async deleteUserById (user_id){
        const result = await User.findByIdAndDelete(user_id)
        console.log(result)
    }
    
    async  getUserByEmail (email){
    
        //Te devuelve null (si no encuentra) o un objeto con el resultado
        const result = await User.findOne({email: email})
        console.log(result)
    } 
    
}

//El UserRepostory es un sigleton, solo tiene una instancia
const user_repository = new UserRepository()

export default user_repository