import dotenv from 'dotenv'

/* 
Carga en process.env las variables de entorno definidas en el archivo .env
*/
dotenv.config()

const ENVIRONMENT = {
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME
}

export default ENVIRONMENT