import mongoose from "mongoose"

/* 
mongoose trabaja con schemas, basicamente nos permite definir que tipo de dato/estructura guardara un documento en una coleccion
*/
const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        fecha_creacion: {
            type: Date,
            default: Date.now
        },
        activo: {
            type: Boolean,
            default: true
        }
    }
)

const User = mongoose.model('Usuario', userSchema)

export default User 