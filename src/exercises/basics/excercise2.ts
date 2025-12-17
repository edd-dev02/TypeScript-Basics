/* 
Requisitos:

Define una interface User con:

id (number)
name (string)
email (string)
isActive (boolean)

Crea 3 objetos que cumplan con la interface User.

Guarda esos objetos en un array tipado.

Crea una función getActiveUsers que:

Reciba el array de usuarios.

Regrese solo los usuarios activos.

📌 Extra: Tipar correctamente la función y el array de retorno.
*/

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

let users: User[] = [];

const user1: User = {
    id: 1,
    name: "Eduardo",
    email: "correo1@correo.com",
    isActive: false
}

users = [...users, user1];

const user2: User = {
    id: 2,
    name: "Alejandro",
    email: "correo2@correo.com",
    isActive: true
}

users = [...users, user2];

const user3: User = {
    id: 3,
    name: "Oscar",
    email: "correo3@correo.com",
    isActive: true
}

users.push(user3);

console.log(getActiveUsers(users));

function getActiveUsers (users: User[]): User[] {
    
    return users.filter(user => user.isActive === true);

}
