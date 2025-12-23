
function classDecorator<T extends { new (...args:any[]): {} }> (
//function classDecorator (
    //constructor : any
    constructor : T,
) {
    return class extends constructor {
        newProperty = "New Property";
        hello = "override";
    }
}

/*
- Los decoradores se pueden agregar a Clases, propiedades y métodos
- Los decoradores añaden cierto comportamiento
*/

@classDecorator
export class SuperClass {


    public myProperty: string = "Abc123"


    print() {
        console.log("Hola mundo");
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
