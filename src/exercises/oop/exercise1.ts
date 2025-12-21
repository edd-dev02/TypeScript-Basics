/*
🧩 Ejercicio 1: Clase básica + métodos

    Crea una clase Animal que tenga:

        name (string)
        sound (string)

    Implementa:

        Un constructor para inicializar ambas propiedades.

        Un método makeSound() que imprima:
        "El animal [name] hace: [sound]"

    Crea 2 instancias y llama el método.
*/

export class Animal {
    constructor(
        public name: string,
        public sound: string
    ) {}

    makeSound() : void {
        console.log(`El animal ${this.name} hace: ${this.sound}`);
    }
}

const animal1 = new Animal("Perro", "Woof");
const animal2 = new Animal("Pescado", "Glu glu");

animal1.makeSound();
animal2.makeSound();