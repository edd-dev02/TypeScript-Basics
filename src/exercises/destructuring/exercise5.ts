/*
🟢 Ejercicio 1: Argument destructuring básico

    Crea una interface User con:

        name (string)
        email (string)
        isActive (boolean)

    Crea una función printUser que:

        Reciba un User.
        Desestructure los valores en el parámetro.
        Muestre en consola el nombre y el estado.

    📌 Extra: Renombra isActive a active dentro del parámetro.
*/

interface User {
    name: string;
    email: string;
    isActive: boolean;
}

function printUser ({name, email, isActive: active}: User) {
    console.log(`Nombre de usuario: ${name} - ¿Usuario activo? -> ${active}`);
}

const user: User = {
    name: "edd-dev",
    email: "correo@correo.com",
    isActive: true
}

printUser(user);