/*
Ejercicio 3 – POO + Herencia (10 puntos)

Crea una clase base:
class Device {
    constructor(public brand: string, public year: number) {}
}

Luego una clase hija:
class Smartphone extends Device {
    constructor(brand: string, year: number, public model: string) {}
}

Añade un método:
getInfo(): string

Debe retornar:
"Smartphone: brand model (year)"

*/

class Device {
    constructor(
        public brand: string,
        public year: number,
    ) {}

}

class Smartphone extends Device {
    constructor(
        public model: string,
        public brand: string,
        public year: number
    ) {
        super(brand, year);
    }

    getInfo(): string {
        return `Smartphone: ${this.brand} ${this.model} (${this.year})`
    }
}

const myPhone = new Smartphone("Galaxy A71", "Samsung", 2020);
console.log(myPhone.getInfo());