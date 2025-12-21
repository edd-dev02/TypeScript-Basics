/*
🧩 Ejercicio 4: Composición + uso de clases

    Crea una clase Address:

        street
        city
        country

        Crea una clase User que tenga:

        name
        age
        address: Address (objeto de la clase Address)

    Implementa:

        Un método getFullInfo() que retorne:
        "User: name (age) - Lives in street, city, country"

    📌 Extra: Valida que age no sea negativa.
*/

class Address {
    constructor(
        public street: string,
        public city: string,
        public country: string
    ) {}
}

class User {
    constructor(
        public name: string,
        public age: number,
        public address: Address
    ) {

        if (age <= 0) {
            throw new Error("La edad no puede ser negativa");
        }

        // Destructuring aplicado aquí
        const { street, city, country } = address;

        console.log("Dirección recibida:", street, city, country);
    }

    getFullInfo(): string {
        const { street, city, country } = this.address;

        return `User: ${this.name} (${this.age}) - Lives in ${street}, ${city}, ${country}`;
    }
}