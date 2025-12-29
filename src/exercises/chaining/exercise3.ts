/**
🧩 Ejercicio 3: Non-null assertion (!)

Instrucciones:

    Crea una interface Profile con:

        username (string)
        tags? (string[] opcional)

    Crea una función firstTag(profile: Profile) que:

        Use non-null assertion para obtener SIEMPRE profile.tags![0]
        Imprime el primer tag.

    📌 Advertencia:
    Este ejercicio es para practicar, pero recuerda:
    ! se usa solo cuando estás SEGURO de que existe el valor.
*/

interface Profile {
    username: string;
    tags?: string[];
}

const profile: Profile = {
    username: "edd-dev",
    tags: ["Frontend developer", "Angular", "Typescript"]
}

function firstTag (profile: Profile): void {
    console.log(profile.tags![0]);
}

firstTag(profile);