/*
Ejercicio 1 – Interfaces + optional chaining (10 puntos)

Crea una función getCity(user) que reciba:

interface User {
    name: string;
    address?: {
        city?: string;
    }
}

Debe:
    ✔️ Retornar user.address?.city ?? "Ciudad no disponible"
    ✔️ No generar errores al faltar propiedades
*/

interface User {
    name: string;
    address?: {
        city?: string;
    }
}

function getCity (user: User): string {
    
    return user.address?.city ?? "Ciudad no disponible";

}

const user: User = {
    name: "Edd-Dev02"
}

console.log(getCity(user));

const user2: User = {
    name: "Edd-Dev08",
    address: {
        city: "Amatitán"
    }
}

console.log(getCity(user2));