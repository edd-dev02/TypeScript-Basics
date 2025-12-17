/*
Ejercicio 1: Desestructuración de objetos

    Crea una interface Book con:

        title (string)
        pages (number)
        author (string)
        published (number)

Crea un objeto que implemente la interface.

    Desestructura:
        title
        author

    Renombra published a year.

    Muestra los valores en consola usando template strings.

📌 Extra: Asigna un valor por defecto a pages.
*/

interface Book {
    title: string;
    pages: number;
    author: string;
    published: number;
}

const book1: Book = {
    title: "Libro anónimo",
    pages: 210,
    author: "Anónimo",
    published: 2007
}

const {title, pages = 150 ,author, published: year} = book1;

console.log(`Título: ${title} - Páginas: ${pages} - Autor: ${author} - Año de publicación: ${year}`);

export {};