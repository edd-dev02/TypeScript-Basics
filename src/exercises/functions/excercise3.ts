/*
Ejercicio 3: Interfaces con funciones

    Crea una interface Car con:
        brand (string)
        speed (number)
        accelerate (función que no retorna nada)

    Crea un objeto que implemente esa interface.

    La función accelerate debe aumentar la velocidad en 10.

    Muestra la velocidad antes y después de acelerar.
*/

interface Car {
    brand: string;
    speed: number;
    accelerate: () => void;
}

const myCar: Car = {
    brand: "Nissan",
    speed: 180,
    accelerate() {
        console.log(`Velocidad actual: ${this.speed}`);
        this.speed += 10;
        console.log(`Se aceleró, nueva velocidad: ${this.speed}`);
    }
}

myCar.accelerate();