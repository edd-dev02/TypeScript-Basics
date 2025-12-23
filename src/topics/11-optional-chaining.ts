interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Eduardo"
}

const passenger2: Passenger = {
    name: "Antonio",
    children: ["Clark", ""]
}

const showChildren = (passenger: Passenger) => {

    /*
    Optional chaining: Si existen hijos, retorna el resultado del método .length, si no, retorna la respuesta string
    */

    const howManyChildren = passenger.children?.length || "No tiene hijos"
    console.log(howManyChildren);

    /*
    La siguiente línea nos indica que SIEMPRE se tendrá un valor
    const howManyChildren = passenger.children!.length

    ?: Es opcional, puede o no venir con algún valor
    !: Se asegura un resultado esperado, siempre tendrá un valor asignado
    */
}

showChildren(passenger1);
