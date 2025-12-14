/*
Requisitos:
Declara un array de números llamado scores.
Crea una función getAverage que:
Reciba el array de números.
Regrese el promedio.
Tipar correctamente:
El parámetro de la función.
El valor de retorno.
📌 Extra: Maneja el caso donde el array esté vacío.
 */

const scores: number[] = [12.3, 5.7, 8];

function promedio(scores: number[]): number {

    let suma = 0;

    scores.forEach( puntos => {
        suma += puntos;
    });

    return suma / scores.length;

}