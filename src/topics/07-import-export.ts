import { Product, taxCalculation, TaxCalculationOptions } from './06-function-destructuring';

// Nota: Hay que procurar no ejecutar código en los archivos exportados

const shoppingCart: Product[] = [
    {
        description: "Samsung",
        price: 100
    },
    {
        description: "iPad",
        price: 150
    }
];

const total: TaxCalculationOptions = {
    tax: 0.15,
    products: shoppingCart
}

const [subtotal, tax] = taxCalculation( total );

console.log(`Subtotal: ${subtotal} - Impuesto de la venta: ${tax}`);