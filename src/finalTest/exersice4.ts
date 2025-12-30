/*
Ejercicio 4 – Destructuring + Funciones (10 puntos)

Dado:
interface Product {
    description: string;
    price: number;
}

Crea una función:
function printProduct({description, price}: Product)

Que imprima:
Producto: X - Precio: Y
*/

interface Product {
    description: string,
    price: number
}

function printProduct ({description, price}: Product): void {
    // body
    console.log(`Producto: ${description} - Precio ${price}`);
}

const product: Product = {
    description: "Lap-top",
    price: 500
}

printProduct(product);