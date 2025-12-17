/*
🟡 Ejercicio 2: Argument destructuring + arrays

    Crea una interface OrderItem con:

        product (string)
        price (number)
        quantity (number)

    Crea una interface OrderOptions con:

        items (OrderItem[])
        discount (number)

    Crea una función calculateOrder que:

        Reciba un objeto OrderOptions.
        Desestructure items y discount en el parámetro.
        Calcule el subtotal.
        Regrese una tupla [subtotal, totalConDescuento].

    📌 Extra: Usa destructuración dentro del forEach.
*/

interface OrderItem {
    product: string;
    price: number;
    quantity: number;
}

interface OrderOptions {
    items: OrderItem[];
    discount: number;
}

function calculateOrder ( {items, discount}: OrderOptions ): [number, number] {

    let sumaSubtotal: number = 0;

    items.forEach( ( { price, quantity } ) => {
        sumaSubtotal += ( quantity * price);
    });

    return [sumaSubtotal, sumaSubtotal * discount];
}

const order1: OrderItem = {
    product: "Mouse",
    price: 20,
    quantity: 3
}

const order2: OrderItem = {
    product: "keyboard",
    price: 30,
    quantity: 2
}

const cart: OrderOptions = {
    items: [order1, order2],
    discount: 0.10
}

const result = calculateOrder(cart);
console.log(result);