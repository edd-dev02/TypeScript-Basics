
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation ( options: TaxCalculationOptions ): [number, number] {
export function taxCalculation ( {tax, products}: TaxCalculationOptions ): [number, number] {

    // const { tax, products } = options // Usar esta desestructuración en caso de que el objeto tenga muchas llaves
    
    let total = 0;
    
    products.forEach( ( { price } ) => {
        total += price;
    });

    return [total, total * tax];

}

// const shoppingCart: Product[] = [phone, tablet];
/// const tax = 0.15;

/*
const options: TaxCalculationOptions = {
    tax,
    products: shoppingCart
};
*/

// const [total, impuestos] = taxCalculation( options );

// console.log(`Total de la venta: ${total} - Impuesto sobre las ventas: ${impuestos}`);