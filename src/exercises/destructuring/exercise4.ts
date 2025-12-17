/*
Ejercicio 4: Desestructuración en funciones

    Crea una interface Product con:

        name (string)
        price (number)
        category (string)

    Crea una función printProduct que:

        Reciba un Product.
        Desestructure los valores en el parámetro.
        Muestre el nombre y precio.

    📌 Extra: Renombra price a cost dentro de la función.
*/

interface Product {
    name: string;
    price: number;
    category: string;
}

// Destructuring en parámetros de la función
function printProduct ({ name, price: cost, category }: Product): void {

    console.log(`Producto: ${name} - Precio: $${cost}`);
}

const product1: Product = {
    name: "Zucaritas",
    price: 15.50,
    category: "Cereales"
}

printProduct(product1);