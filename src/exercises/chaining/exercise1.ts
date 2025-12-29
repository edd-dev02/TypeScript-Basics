/*
🧩 Ejercicio 1: Optional chaining con objetos anidados

Instrucciones:

    Crea una interface Movie con:

        title (string)
        year (number)
        director? (objeto opcional con name y age)

    Crea dos películas:

        Una con director.
        Una sin director.

    Escribe una función printDirector(movie: Movie) que:

        Use optional chaining para imprimir el nombre del director si existe.
        Si no existe, imprime "Sin director registrado".

    📌 Extra:
    Usa también movie.director?.age ?? "Edad desconocida".
*/

interface Movie {
    title: string;
    year: number;
    director?: { name: string; age: number; };
}

const movie1: Movie = {
    title: "Tron",
    year: 2010,
    director: {
        name: "Eduardo",
        age: 23
    }
}

const movie2: Movie = {
    title: "Ares",
    year: 2025,
}

function printDirector(movie: Movie): void {

    const directorName: string = movie.director?.name ?? "Sin director registrado";

    const directorAge: number | string = movie.director?.age ?? "Edad desconocida";

    console.log({directorName, directorAge});
}

printDirector(movie2)