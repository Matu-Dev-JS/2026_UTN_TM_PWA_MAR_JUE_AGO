import connectMongoDB from "./config/mongo.config.js";

connectMongoDB()

import express from 'express'
import errorHandlerMiddleware from "./middlewares/error.middleware.js";
import auth_router from "./routes/auth.router.js";
import user_router from "./routes/user.router.js";

const PORT = 8080

const app = express()


app.use(express.json())


/* 
Todas las consultas que lleguen a /api/auth las manejara el auth_router
*/
app.use('/api/auth', auth_router)
app.use('/api/users', user_router)


app.post(
    '/api/workspaces', 
    async (request, response) => {
        //Quien carancho quiere hacer esta operacion ?????
    }
)

app.use(
    errorHandlerMiddleware
)


app.listen(
    PORT,
    () => {
        console.log(
            `El servidor se esta escuchando correctamente en http://localhost:${PORT}`
        )
    }
)


