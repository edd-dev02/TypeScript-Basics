/*
Crea una función llamada createUser que:

    Reciba:
        name (string)
        age (number, opcional)

    Regrese un objeto con las propiedades:

        name
        age (solo si se envía)

    Tipar correctamente la función y el objeto de retorno.

📌 Extra: Si no se envía age, que el valor sea undefined.
*/

interface User {
    name: string;
    age?: number;
}

const createUser = (name: string, age?: number): User => {
    return age !== undefined ? {name, age} : {name}; 
}

console.log(createUser("Eduardo"));