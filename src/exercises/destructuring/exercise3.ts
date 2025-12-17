/*
Ejercicio 3: Desestructuración de arreglos

Dado el siguiente arreglo:
const colors: string[] = ["Red", "Green", "Blue"];

    Desestructura el primer y tercer color.

    Asigna un valor por defecto al cuarto elemento.

    Muestra los resultados en consola.

    📌 Extra: Omite el segundo elemento sin crear una variable.

*/

const colors: string[] = ["Red", "Green", "Blue"];

const [color1, , color3, color4 = "Purple"] = colors;

console.log("Mi color favorito es: ", color1);
console.log("El color con valor por defecto es: ", color4);