import user_repository from "../repositories/user.repository.js"
import { compareHash, generateHash } from "../utils/bcrypt.util.js"
import ServerError from "../utils/error.util.js"
import bcrypt from 'bcrypt'


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

    /* 
    Encriptamos la password para que en DB se guarde un dato irreversible 
    Viendo el dato irreversible es IMPROBABLE que se sepa el dato original
    */
    const password_hash = await generateHash(password)

    await user_repository.create(username, email, password_hash)

    return response.status(201).send({
        ok: true,
        status: 201,
        message: "User registered successfully"
    })
}

/* 
Crear la funcion login(request, response)
Esta funcion debe primero verificar que por body llegue un email y una password
Debe verificar que el email tenga formato de email
Debe buscar por email al usuario y verificar que este exista (Sino decir 404 Usuario no encontrado)
Comparar el hash guardado en DB contra la contraseña que nos envio por body el cliente 
    - SI es incorrecto decir (400 Credenciales incorrectas)
    - Si es correcto decir (200 Usuario autentificado exitosamente)

Este controlador debe estar en el endpoint
POST /api/auth/login


PASO A PASO

1. Verificar si hay email y password -> 400 Bad Request
2. Verificar email -> 400 Bad request
3. Verificar si el usuario existe (buscar al usuario en DB por email) -> 404 Not found
4. De ese usuario buscado comparar el hash guardado en DB contra la password que pasa el cliente por body -> 401 Credenciales incorrectas
5. Dar mensaje de exito si todo esta bien hasta ahi
*/


export async function login(request, response) {
    const { email, password } = request.body;
    if (
        !email || !password || typeof email !== "string" || typeof password !== "string"
    ) {
        throw new ServerError(
            "Email and password are required",
            400
        );
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
        throw new ServerError(
            "Email is incorrect",
            400
        );
    }

    const user = await user_repository.getByEmail(email)

    if (!user) {
        throw new ServerError(
            "Invalid email or password",
            401
        );
    }

    //Compara el hash guardado en DB contra la contraseña que nos envió por body el cliente.
    const isPasswordValid = await compareHash(password, user.password); 
    if (!isPasswordValid) {
        throw new ServerError(
            "Invalid email or password",
            401
        );
    }


    return response.status(200).send({
        ok: true,
        message: "You have logged in successfully",
        status: 200
    });
}