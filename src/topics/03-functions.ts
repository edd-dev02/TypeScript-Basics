// Function declaration
function addNumbers(a: number, b: number): number {
    return a + b;
}

const result: number = addNumbers(1,2);

console.log( {result} );

// Lambda function
const addNumbersArrow = (a: number, b: number): number => a + b;

const result2 = addNumbersArrow(5, 10);

console.log({result2});

/**
 * 
 * @param firstNumber Valor obligatorio
 * @param secondNumber Valor opcional
 * @param base Si no se envía un valor en la llamada de la función, se le asigna un valor por defecto
 */
function multiply (firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

const result3 = multiply(3);

// console.log({result3});

interface Character {
    name: string;
    hp: number;
    showHp: () => void; // De esta manera declaramos una función en una interfaz y lo que debe retornar
}

const healCharacter = (character:Character, amount: number): void => {

    character.hp += amount;

}

const strider: Character = {
    name: "Strider",
    hp: 100,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

strider.showHp();
healCharacter(strider, 20);
strider.showHp();

export {};