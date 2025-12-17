/*
Ejercicio 2: Desestructuración de objetos anidados

    Crea una interface UserProfile con:

        username (string)
        email (string)
        address (objeto con city y country)

    Crea un objeto con datos reales.

    Desestructura:

        username
        city desde address

    Renombra country a nation.

    📌 Extra: Usa solo una línea de desestructuración.
*/

interface UserProfile {
    username: string;
    email: string;
    address: Address;
}

interface Address {
    country: string;
    city: string;
    address: string;
}

const datosUsuario: UserProfile = {
    username: "edd-dev",
    email: "correo@correo.com",
    address: {
        country: "México",
        city: "Amatitán",
        address: "Juan José Flores"
    }
}

const {username, email, address: {country: nation, city, address: street}} = datosUsuario;

console.log(`Nombre de usuario: ${username} - Ciudad: ${city}`);