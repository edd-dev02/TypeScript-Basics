/*
Ejercicio 2 – Genéricos (10 puntos)

Crea una función genérica:
function wrapInArray<T>(value: T): T[]

Ejemplo:
wrapInArray(5) // [5]
wrapInArray("hola") // ["hola"]
*/


function wrapInArray<T>(value: T): T[] {

    let myArray: T[] = [];

    myArray.push(value);

    return myArray;
}