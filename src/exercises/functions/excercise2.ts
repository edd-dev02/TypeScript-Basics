/*
Ejercicio 2: Arrow function + valores por defecto

Crea una arrow function llamada calculateTotal que:

    Reciba:
        price (number)
        tax (number, valor por defecto 0.16)

    Regrese el total con impuestos incluidos.
    Tipar explícitamente el retorno.

📌 Extra: Usa template strings para mostrar el resultado en consola.
*/

const calculateTotal = (price: number, tax: number = 0.16): number => price + (price * tax);

console.log(`El calculo del impuesto es: ${calculateTotal(100)}`);