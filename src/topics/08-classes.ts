export class Person {

    // Manera tradicional de declarar propiedades

    /*
    public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
    */

    // Manera moderna de declarar propiedades

    constructor(
        public name: string,
        private address: string = "No direction"
    ) {}

    showName(): string {
        return `Mi nombre es ${this.name}`;
    }

    showAddress(): string {
        return this.address;
    }
}

const person: Person = new Person("Eduardo", "Juan José Flores");
console.log(person.showName());

/*
export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, "New York");
    }
}
*/

// Uso de la composición
export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        //this.person = new Person(realName);
    }
}

const tony = new Person("Tony Stark");
const ironman = new Hero("Ironman", 40, "Tony", tony);
console.log(ironman);