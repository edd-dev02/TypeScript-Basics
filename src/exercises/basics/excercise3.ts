/*
Requisitos:

Define una interface Product con:

id (number)
name (string)
price (number)

Define una interface CartItem con:

product (Product)
quantity (number)

Crea un array cart con al menos 2 productos distintos.

Crea una función getTotal que:

Reciba el carrito.

Regrese el total a pagar (price * quantity).

📌 Extra: Usa reduce para calcular el total.
*/

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    product: Product;
    quantity: number;
}

const product1: Product = {
    id: 1,
    name: "Teclado",
    price: 25
}

const product2: Product = {
    id: 2,
    name: "Mouse",
    price: 45
}

const cartItem1: CartItem = {
    product: product1,
    quantity: 2
}

const cartItem2: CartItem = {
    product: product2,
    quantity: 2
}

let cart: CartItem[] = [cartItem1, cartItem2];

function getTotal (cart: CartItem[]): number {
    
    return cart.reduce((total, producto) => total += (producto.product.price * producto.quantity), 0);

}

console.log(`El total a pagar es: $${getTotal(cart)}`);
