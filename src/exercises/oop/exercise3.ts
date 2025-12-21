/*
🧩 Ejercicio 3: Herencia

    Crea una clase Vehicle:

        brand
        year

    Métodos:

        getInfo() → retorna "Vehículo: brand - year"

    Crea una clase Car que extienda Vehicle y agregue:

        doors (number)

    Sobrescribe getInfo() para mostrar también las puertas.

    📌 Extra: Usa super.getInfo().
*/

export class Vehicle {
    constructor(
        public brand: string,
        public year: number
    ) {}

    getInfo(): string {
        return `Vehiculo: ${this.brand} - ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(public doors: number, public brand: string, public year: number) {
        super(brand, year);
    }

    getInfo() : string {
        return `Vehiculo: ${this.brand} - ${this.year} - ${this.doors} puertas`;
    }
}

const myCar = new Car(4, "Volkswagen", 2020);
console.log(myCar.getInfo());