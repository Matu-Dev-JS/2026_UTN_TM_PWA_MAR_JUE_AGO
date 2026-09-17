import mongoose from "mongoose";



const MONGO_URI = 'mongodb://localhost:27017'
const MONGO_DB_NAME = '2026_UTN_PWA_SEP_MAR_JUE_SLACK'

async function connectMongoDB () {
    try{
        await mongoose.connect(
            `${MONGO_URI}/${MONGO_DB_NAME}`
        )
        console.log('Conexion a MongoDB exitosa!')
    }
    catch(error){
        console.error('Error critico al conectar al MongoDB', error.message)

        /* Crasheo controlado */
        process.exit(1) 
    }
}

export default connectMongoDB