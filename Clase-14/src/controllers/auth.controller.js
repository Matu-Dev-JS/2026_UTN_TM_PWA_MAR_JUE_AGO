import user_repository from "../repositories/user.repository.js"
import ServerError from "../utils/error.util.js"



/* 
Para enviar en una request HTTP info a una API usamos el body

Las consultas (request) tipo GET NO TIENEN body
El body puede ser de distintos tipos de dato:
    Hoy vamos a usar JSON, para poder usar JSON nuestra API debe estar preparada para recibir ese tipo de informacion
*/

export async function register(request, response) {

    console.log("[REGISTER]", request.body)
    const { username, email, password } = request.body

    if (!username || !email || !password) {
        throw new ServerError(
            "Email, password and username is required",
            400
        )
    }

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
        throw new ServerError(
            "Email is incorrect",
            400
        )
    }

    //Validar si el mail ya esta registrado
    const user_already_exist = await user_repository.getByEmail(email)
    if (user_already_exist) {
        throw new ServerError(
            'Email is already used',
            400
        )
    }

    await user_repository.create(username, email, password)

    return response.send({
        ok: true,
        status: 201,
        message: "User registered successfully"
    })
}