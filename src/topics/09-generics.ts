/*
Los genéricos permiten que una función, clase o interfaz
trabaje con diferentes tipos de datos sin perder tipado.

En lugar de utilizar 'any' (que desactiva el sistema de tipos),
los genéricos preservan el tipo real que recibe la función.

De esta forma, si enviamos un string, la función regresará un string.
Si enviamos un number, regresará un number, y así sucesivamente.

Esto proporciona flexibilidad sin sacrificar seguridad de tipos.
*/

export function whatsMyType<T>(argument: T): T {
    return argument;
}

// Indicamos a la función qué tipo de dato estamos enviando.
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
let amIString = whatsMyType<string>("Hello world");

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
