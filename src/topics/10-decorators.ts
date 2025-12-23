/*
Los decoradores permiten añadir o modificar comportamiento
en clases, propiedades o métodos sin alterar directamente su código.

En este ejemplo, `classDecorator` recibe el constructor de una clase
y retorna una nueva clase que extiende a la original, agregando
propiedades adicionales.

Esto hace posible “inyectar” lógica extra, como logging, validaciones,
metadatos o comportamiento dinámico.

📌 Nota: Los decoradores están basados en meta-programación y
normalmente se usan en frameworks como Angular.
*/
function classDecorator<
    T extends { new (...args: any[]): {} }
>(constructor: T) {
    return class extends constructor {
        newProperty = "New Property";
        hello = "override";
    };
}

@classDecorator
export class SuperClass {

    public myProperty: string = "Abc123";

    print() {
        console.log("Hola mundo");
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
